# boardingbarcode
Generate an SVG boarding pass barcode using Javascript from Nodejs or the browser. 

## Example

```js
let imageRef = {};
const barcode = require('boardingbarcode').cwrap(imageRef, 'run', null, ['number', 'string', 'number', 'number']);

let dayInYear = (dateString) => {
    let now = new Date(dateString);
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

//Flight Example
let flight = {
    FirstName: 'Carlos',
    LastName: 'Martin',
    PNR: 'XYZ123',
    From: 'HNL',
    To: 'LAX',
    FlightOperator: 'HA',
    FlightNumber: '123',
    Date: '10/30/2017',
    Class: 'F0', //FirstClass
    Seat: '35A',
    BoardingIndex: '0001'
};
let text = `M1${flight.LastName}/${flight.FirstName}    ${flight.PNR} ${flight.From}${flight.To}${flight.FlightOperator} ${flight.FlightNumber}  ${dayInYear(flight.Date)}${flight.Class}${flight.BoardingIndex} 100`;

//Generate barcode
/**
 * boardingType: 0 AZTEC or 1 PDF417
 * text: Boarding pass text config
 * errorCorrection: (-1,0,1,2,3)
 * boardingPassSize: 0-100
 */
//barcode(boardingType, text, errorCorrection, boardingPassSize)
barcode(1, text, 0, 6);

console.log(imageRef.textOut);
```
