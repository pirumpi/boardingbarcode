var barcode = require('../');

barcode(1, 6, {
    firstName: 'Carlos',
    lastName: 'Martin',
    PNR: 'XYZ123',
    from: 'HNL',
    to: 'LAX',
    flightOperator: 'HA',
    flightNumber: '123',
    date: '10/30/2017',
    class: 'F0', //FirstClass
    seat: '35A',
    boardingIndex: '0001'  
}).then(svg => {
    console.log(svg);
});