function controlaConcursos(tipoFiltro,btn) {

  instituicao_filtro = $("#instituicao_filtro");
  nivel_filtro = $("#nivel_filtro");

  instituicao_civil = $("#civis");

  instituicao_civil_fundamental = $("#civil-fundamental");
  instituicao_civil_medio = $("#civil-medio");
  instituicao_civil_superior = $("#civil-superior");

  instituicao_militar = $("#militar");

  instituicao_militar_fundamental = $("#militar-fundamental");
  instituicao_militar_medio = $("#militar-medio");
  instituicao_militar_superior = $("#militar-superior");

  opcao_civil = $("#opcao-civil");
  opcao_militar = $("#opcao-militar");
  opcao_fundamental = $("#opcao-fundamental");
  opcao_medio = $("#opcao-medio");
  opcao_superior = $("#opcao-superior");



  if (tipoFiltro == "instituicao") {
    modeloInstituicao(btn);
  }
  else if(tipoFiltro == "nivel"){
    modeloNivel(btn);
  }

}

function modeloInstituicao(btn){

  if (btn == "civil") {
    instituicao_militar.css("display","none");
    instituicao_civil.css("display","flex");
    opcao_civil.removeClass("disable").addClass("enable");
    opcao_militar.removeClass("enable").addClass("disable");
  }
  else{
    instituicao_civil.css("display","none");
    instituicao_militar.css("display","flex");
    opcao_militar.removeClass("disable").addClass("enable");
    opcao_civil.removeClass("enable").addClass("disable");
  }

}

function modeloNivel(btn) {
  if (btn == "fundamental") {
    opcao_fundamental.removeClass("disable").addClass("enable");
    opcao_medio.removeClass("enable").addClass("disable");
    opcao_superior.removeClass("enable").addClass("disable");

    escondeConcursos();

    instituicao_civil_fundamental.css("display","block");
    instituicao_militar_fundamental.css("display","block");

  }
  else if (btn == "medio") {
    opcao_medio.removeClass("disable").addClass("enable");
    opcao_fundamental.removeClass("enable").addClass("disable");
    opcao_superior.removeClass("enable").addClass("disable");

    escondeConcursos();

    instituicao_civil_medio.css("display","block");
    instituicao_militar_medio.css("display","block");

  }
  else{
    opcao_superior.removeClass("disable").addClass("enable");
    opcao_medio.removeClass("enable").addClass("disable");
    opcao_fundamental.removeClass("enable").addClass("disable");

    escondeConcursos();

    instituicao_civil_superior.css("display","block");
    instituicao_militar_superior.css("display","block");
  }
}

function escondeConcursos() {
  instituicao_civil_fundamental.css("display","none");
  instituicao_civil_medio.css("display","none");
  instituicao_civil_superior.css("display","none");
  instituicao_militar_fundamental.css("display","none");
  instituicao_militar_medio.css("display","none");
  instituicao_militar_superior.css("display","none");
}
