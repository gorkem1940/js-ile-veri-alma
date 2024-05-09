const fs = require('fs');

function veriCekVeYaz() {
    var url = 'http://88.250.204.138:4545/status.xml'; //bu siteden veriyi al 
    fetch(url)
        .then(response => response.text())
        .then(data => {
            
            fs.appendFile('status.xml', data + '\n', function (err) { // status.xml yazan yere verinin yazılacağı dosya ismini yazalım
                if (err) throw err;
                console.log('Veri başarıyla yazıldı.');
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}

setInterval(veriCekVeYaz, 1000); 
