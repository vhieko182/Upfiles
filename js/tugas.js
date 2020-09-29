function myFunction() {
    let tugas = prompt("Masukkan nilai tugas",0);
    let uts = prompt("Masukkan nilai uts",0);
    let uas = prompt("Masukkan nilai uas",0);
    let nilai;
    tugas = parseFloat(tugas);
    uts = parseFloat(uts);
    uas = parseFloat(uas);
    let total = (0.3*tugas)+(0.3*uts)+(0.4*uas);
    if ((total > 100) || (total < 0)) {
         nilai = "Nilai anda tidak terdefinisi";
    } else if (total >= 80) {
         nilai = "Nilai anda 'A'";
    } else if (total >= 65) {
         nilai = "Nilai anda 'B'";
    } else if (total >= 50) {
         nilai = "Nilai anda 'C'";
    } else if (total >= 30) {
         nilai = "Nilai anda 'D'";
    } else {
         nilai = "Nilai anda 'E'";
    }
    document.getElementById("hasil").innerHTML = "total = "+total+"</br>"+nilai;
}