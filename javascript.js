const Uno=document.querySelector("h1");
let boleano1=true;
function botonCambioTitulo(){
    if (boleano1==true){
        Uno.textContent="Titulo nuevo con javascript";
        boleano1=false;
    }else if (boleano1==false){
        Uno.textContent="Titulo principal";
        boleano1=true;
    }
}
