function controlaConcursos(tipo){

  var opcao_civil = $("#opcao-civil");
  var opcao_militar = $("#opcao-militar");
  var instituicao_civil = $("#civis");
  var instituicao_militar = $("#militar");

  if (tipo == "civil") {
    opcao_civil.removeClass("disable").addClass("enable");
    opcao_militar.removeClass("enable").addClass("disable");
    instituicao_civil.css("display","flex");
    instituicao_militar.css("display","none");
  }
  else{
    opcao_militar.removeClass("disable").addClass("enable");
    opcao_civil.removeClass("enable").addClass("disable");
    instituicao_civil.css("display","none");
    instituicao_militar.css("display","flex");
  }
}
