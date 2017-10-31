# boardingbarcode
Generate an SVG boarding pass barcode using Nodejs. 

## Example

```js
const barcode = require('boardingbarcode');

//Generate barcode
/**
 * boardingType: 0 AZTEC or 1 PDF417
 * boardingPassSize: 0-100
 * text: Boarding pass text config
 */
//barcode(boardingType, text, errorCorrection, boardingPassSize)
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
```
