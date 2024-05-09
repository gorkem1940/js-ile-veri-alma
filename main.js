function veriCekVeYaz(){
    var url = 'http://88.250.204.138:4545/status.xml';
    fetch(url)
    .then(response => response.text())
    .then(data => {
        console.log(data);

    })

    .catch(error => {
        console.error('Hata:', error);
    });
}

setInterval(veriCekVeYaz, 15000); //15 saniyede bir verileri güncelle ve yazdır 
