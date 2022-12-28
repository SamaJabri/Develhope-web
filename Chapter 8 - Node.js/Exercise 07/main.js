let figlet = require('figlet');

figlet("Party", 'Dancing Font', (err, data) => {
    if (err) {
        console.log('Something went wrong!');
        return;
    }
    console.log(data);
})