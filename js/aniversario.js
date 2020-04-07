function aniversario() {
  var niver = prompt("Digite sua data de aniversário. EX: dd/mm/aaaa");

  if (niver.length < 10 || niver.length > 10) {
    alert("Você não digitou sua data completa");
  } else {
    var dia = niver.substring(0, 2);
    var mes = niver.substring(3, 5);
    var ano = niver.substring(6, 10);
    console.log(mes);

    switch (mes) {
      case "01":
        mes = "Janeiro";
        break;

      case "02":
        mes = "Fevereiro";
        break;

      case "03":
        mes = "Março";
        break;

      case "04":
        mes = "Abril";
        break;

      case "05":
        mes = "Maio";
        break;

      case "06":
        mes = "Junho";
        break;

      case "07":
        mes = "Julho";
        break;

      case "08":
        mes = "Agosto";
        break;

      case "09":
        mes = "Setembro";
        break;

      case "10":
        mes = "Outubro";
        break;

      case "11":
        mes = "Novembro";
        break;

      case "12":
        mes = "Dezembro";
        break;

      default:
        mes = "Inexistente";
        break;
    }
    alert("Você nasceu em " + dia + " de " + mes + " de " + ano);
  }
}
