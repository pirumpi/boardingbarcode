let mod = require('./mod');
let imageRef = {};
let barcode = mod.cwrap(imageRef, 'run', null, ['number', 'string', 'number', 'number']);
let requiredProps = ['firstName', 'lastName', 'PNR', 'from', 'to', 'flightOperator', 'flightNumber', 'date', 'class', 'seat', 'boardingIndex'];

//Transforming date string
function dayInYear(dateString){
    let now = new Date(dateString);
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function propCheck(obj, prop){
    if(!obj[prop]){
        return { failed: true, message: `Missing ${prop}` };
    }

    return { failed: false };
}

function findFails(p){ return p.failed; }

function getText(flight){
    return `M1${flight.lastName}/${flight.firstName}            ${flight.PNR} ${flight.from}${flight.to}${flight.flightOperator} ${flight.flightNumber} ${dayInYear(flight.date)}${flight.class}${flight.seat}${flight.boardingIndex} 100`;
}

module.exports = (boardingType = 0, boardingSize = 6, flightInfo) => {
    return new Promise((resolve, reject) => {
        let missinProps = requiredProps.reduce((p,c) => {
            p.push(propCheck(flightInfo, c));
            return p;
        }, []);
        let errorFound = missinProps.find(findFails)
        if(errorFound){
            reject(errorFound.message);
        }else{
            barcode(boardingType, getText(flightInfo), 0, boardingSize);
            resolve(imageRef.textOut);
        }
    });
}