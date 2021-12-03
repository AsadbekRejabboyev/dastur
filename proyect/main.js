
function Hisoblash(){
    let daromad = document.getElementById("daromad").value;
    let xarajat = document.getElementById("xarajat").value;
    let soni = document.getElementById("soni").value;
    
    let summa = daromad - xarajat;

    let birKishiga = summa/soni;

    let zakot = birKishiga/100*7;

    let BerilishiKerak = zakot * soni;

    let ekran = document.querySelector("#ekran");
    ekran.value = BerilishiKerak;
}

function Refresh(){
   location.reload();
}
