baris_produk.innerHTML = ""

var data_mentah = null

console.log("data mentah:", data_mentah)

function updateSelect() {
    select_kopi.innerHTML = '<option selected disabled>-</option>'
    Object.keys(data_mentah).forEach(function (opsi) {
        select_kopi.innerHTML += '<option value="' + opsi + '">' + opsi + '</option>'
    })
    console.log("Melakukan Update Select")
}

var data_kopi = []
select_kopi.onchange = function () {
    var pilihan = select_kopi.value
    console.log("Customer Memilih " + pilihan)
    data_kopi = data_mentah[pilihan]
    console.log("isi data_kopi = ", data_kopi)
    updateTampilan()
}

function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<div class="col mb-4">
                <div class="card">
                    <img src="${kopi.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${kopi.nama}</h5>
                        <div class="row hargasize my-4">
                            <div class="col">
                                ${kopi.size}
                            </div>
                            <div class="col text-primary fw-bold">
                                ${kopi.harga}
                            </div>
                        </div>
                        <a href="${kopi.link}" class="btn btn-primary w-100"><i class="bi bi-cart4"></i> Beli</a>
                    </div>
                </div>
            </div>`
    })
}

var sumber = "https://rikikurnia.com/prakerja/api/kopi"
var sumber2 = "data.json"

$.getJSON(sumber2).then(data => {
    console.log("Data dari getJSON ", data)
    data_mentah = data
    updateSelect()
})