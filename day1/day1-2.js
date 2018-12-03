var fs = require('fs');

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    var total = 0;
    var dubFound = false;
    var totalsArray = [];
    var dataArray = data.toString().split('\n');

    while (dubFound == false) {
        for (i = 0; i < dataArray.length; i++) {
            total = total + parseInt(dataArray[i]);

            if (totalsArray.includes(total)) {
                console.log(total);
                dubFound = true;
                return;
            } else {
                totalsArray.push(total);
            }
        }
    }

})