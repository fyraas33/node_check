
var filterls = require("./make-it-modular");

filterls(process.argv[2], process.argv[3], function (err, data) {
    data.forEach(function (file) {
        console.log(file);
    });
});