$(document).ready(function() {
  localStorage.rojas = 12;
  localStorage.azules = 12;


  $( ".rojas" ).draggable({revert: 'invalid'});
  $( ".azules" ).draggable({revert: 'invalid'});

  for (var filaNumero = 0; filaNumero < 9; filaNumero++) {
    for (var columnaNumero = 0;  columnaNumero < 9 ; columnaNumero++) {
      var pos_actual = "#"+columnaNumero+"-"+filaNumero;
      $( pos_actual ).droppable({
        drop: function (event, ui) {
          var columnaActual = $(this).attr("id").split("-")[0];
          var claseActual = $(this).attr("id");
          var columnaAnterior = ui.draggable.attr("id").split("-")[0];
          var claseAnterior = ui.draggable.parent().attr("id");
          var filaActual = $(this).attr("id").split("-")[1];
          var filaAnterior = ui.draggable.attr("id").split("-")[1];
          if (ui.draggable.hasClass("azules")) {
            if (filaActual == (parseInt(filaAnterior)-2) ) {
              var saltoDoble = parseInt(columnaActual) - parseInt(columnaAnterior);
              if (saltoDoble>0) {
                var celdaSaltada = "#" + (parseInt(columnaActual)-1) + "-" + (parseInt(filaActual)+1);
                if ($(celdaSaltada).children().length == 0) {
                  ui.draggable.draggable({revert: true});
                } else if ($(celdaSaltada).children().hasClass("rojas")) {
                  var hijoClass = ui.draggable.attr("class");
                  ui.draggable.removeAttr('id');
                  $(this).append(ui.draggable.attr('id',claseActual));
                  $(this).append(ui.draggable);
                    ui.draggable.draggable({revert: 'invalid'});
                  $(celdaSaltada).children().effect( "explode", 500 );
                  $(celdaSaltada).empty();
                  ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $(this)
                  });
                  localStorage.rojas = Number(localStorage.rojas)-1;
                  marcador();
                  activarRojas();
                }
              } else if (saltoDoble<0) {
                var celdaSaltada = "#" + (parseInt(columnaActual)+1) + "-" + (parseInt(filaActual)+1)
                if ($(celdaSaltada).children().length == 0) {
                  ui.draggable.draggable({revert: true});
                } else if ($(celdaSaltada).children().hasClass("rojas")) {
                  var hijoClass = ui.draggable.attr("class");
                  ui.draggable.removeAttr('id');
                  $(this).append(ui.draggable.attr('id',claseActual));
                  $(this).append(ui.draggable);
                    ui.draggable.draggable({revert: 'invalid'});
                  $(celdaSaltada).children().effect( "explode", 500 );
                  $(celdaSaltada).empty();
                  ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $(this)
                  });
                  localStorage.rojas = Number(localStorage.rojas)-1;
                  marcador();
                  activarRojas();
                }
              }
            } else if (filaActual == (parseInt(filaAnterior)-1) ) {
              var actualTieneHijo = $(this).children().attr("id");
              if(actualTieneHijo==undefined){
                var hijoClass = ui.draggable.attr("class");
                ui.draggable.removeAttr('id');
                $(this).append(ui.draggable.attr('id',claseActual));
                $(this).append(ui.draggable);
                ui.draggable.position({
                  my: "center",
                  at: "center",
                  of: $(this)
                });
                marcador();
                activarRojas();
                ui.draggable.draggable({revert: 'invalid'});
              } else {
                ui.draggable.draggable({revert: true});
              }
            } else {
              ui.draggable.draggable({revert: true});
            }
          } else if (ui.draggable.hasClass("rojas") ) {
            if (filaActual == (parseInt(filaAnterior)+2) ) {
              var saltoDoble = parseInt(columnaActual) - parseInt(columnaAnterior);
              if (saltoDoble>0) {
                var celdaSaltada = "#" + (parseInt(columnaActual)-1) + "-" + (parseInt(filaActual)-1);
                if ($(celdaSaltada).children().length == 0) {
                  ui.draggable.draggable({revert: true});
                } else if ($(celdaSaltada).children().hasClass("azules")) {
                  var hijoClass = ui.draggable.attr("class");
                  ui.draggable.removeAttr('id');
                  $(this).append(ui.draggable.attr('id',claseActual));
                  $(this).append(ui.draggable);
                    ui.draggable.draggable({revert: 'invalid'});
                  $(celdaSaltada).children().effect( "explode", 500 );
                  $(celdaSaltada).empty();
                  ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $(this)
                  });
                  localStorage.azules = Number(localStorage.azules)-1;
                  marcador();
                  activarAzules();
                }
              } else if (saltoDoble<0) {
                var celdaSaltada = "#" + (parseInt(columnaActual)+1) + "-" + (parseInt(filaActual)-1);
                if ($(celdaSaltada).children().length == 0) {
                  ui.draggable.draggable({revert: true});
                } else if ($(celdaSaltada).children().hasClass("azules")) {
                  var hijoClass = ui.draggable.attr("class");
                  ui.draggable.removeAttr('id');
                  $(this).append(ui.draggable.attr('id',claseActual));
                  $(this).append(ui.draggable);
                  ui.draggable.draggable({revert: 'invalid'});
                  $(celdaSaltada).children().effect( "explode", 500 );
                  $(celdaSaltada).empty();
                  ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $(this)
                  });
                  localStorage.azules = Number(localStorage.azules)-1;
                  marcador();
                  activarAzules();
                }
              }
            } else if (filaActual == (parseInt(filaAnterior)+1) ) {
              var actualTieneHijo = $(this).children().attr("id");
              if(actualTieneHijo==undefined){
                var hijoClass = ui.draggable.attr("class");
                ui.draggable.removeAttr('id');
                $(this).append(ui.draggable.attr('id',claseActual));
                $(this).append(ui.draggable);
                ui.draggable.position({
                  my: "center",
                  at: "center",
                  of: $(this)
                });
                marcador();
                activarAzules();
                ui.draggable.draggable({revert: 'invalid'});
              } else {
                ui.draggable.draggable({revert: true});
              }
            } else {
              ui.draggable.draggable({revert: true});
            }
          }
        }
      });
    }
  }

$( ".negras" ).droppable({
  accept: ".none",
  greedy: true
});
  $( ".blancas" ).disableSelection();
  $( ".negras" ).disableSelection();
});
function explotar(celdaSaltada){
  $(celdaSaltada).children().effect( "explode", 500 );
}

function activarRojas() {
console.log("Desactivar azules");
$( ".azules" ).draggable("option", "disabled", true);
$( ".rojas" ).draggable("option", "disabled", false);
}
function activarAzules() {
$( ".rojas" ).draggable("option", "disabled", true);
$( ".azules" ).draggable("option", "disabled", false);
}
function marcador(){
  console.log(localStorage.azules);
  if (localStorage.rojas == 0) {
    alert("Las rojas han ganado")
  } else if (localStorage.rojas > 0) {
    $("#totalRojo").html(localStorage.rojas);
  }
  if (localStorage.azules == 0) {
    alert("Las azules han ganado")
  } else if (localStorage.azules > 0) {
    $("#totalAzul").html(localStorage.azules);
  }
}
