var fs = require('fs');

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    var total = 0;
    var dataArray = data.toString().split('\n');


    for (i = 0; i < dataArray.length; i++) {
        total = total + parseInt(dataArray[i]);
    }

    console.log(total);

})