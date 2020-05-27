$(document).ready(function() {
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });
    $('.modal').modal();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
});
function mostrar_r(){
  var parrafo = document.getElementById("ragnar").innerHTML;
  document.getElementById("contenedor").innerHTML=parrafo;
  console.log(parrafo);
}
function mostrar_l(){
  var parrafo = document.getElementById("lagertha").innerHTML;
  document.getElementById("contenedor").innerHTML=parrafo;
  console.log(parrafo);
}
function mostrar_b(){
  var parrafo = document.getElementById("bjorn").innerHTML;
  document.getElementById("contenedor").innerHTML=parrafo;
  console.log(parrafo);
}
function mostrar_a(){
  var parrafo = document.getElementById("aslaug").innerHTML;
  document.getElementById("contenedor").innerHTML=parrafo;
  console.log(parrafo);
}
function mostrar_ro(){
  var parrafo = document.getElementById("rollo").innerHTML;
  document.getElementById("contenedor").innerHTML=parrafo;
  console.log(parrafo);
}
function mostrar_f(){
  var parrafo = document.getElementById("floki").innerHTML;
  document.getElementById("contenedor").innerHTML=parrafo;
  console.log(parrafo);
}
function mostrar_at(){
  var parrafo = document.getElementById("athelstan").innerHTML;
  document.getElementById("contenedor").innerHTML=parrafo;
  console.log(parrafo);
}
function limpiar_contenedor(){
  document.getElementById("contenedor").innerHTML=null;
}