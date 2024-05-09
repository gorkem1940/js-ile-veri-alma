const fs = require('fs');

function veriCekVeYaz() {
    var url = 'http://88.250.204.138:4545/status.xml'; 
    fetch(url)
        .then(response => response.text())
        .then(data => {
            
            fs.appendFile('status.xml', data + '\n', function (err) {
                if (err) throw err;
                console.log('Veri başarıyla yazıldı.');
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}

setInterval(veriCekVeYaz, 1000); 