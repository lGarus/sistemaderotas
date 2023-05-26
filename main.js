function isRotaValida(rota) {
  const matrizFronteiras = [
    [
      "",
      "SC",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // RS
    [
      "RS",
      "",
      "PR",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // SC
    [
      "",
      "SC",
      "",
      "SP",
      "",
      "",
      "MS",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // PR
    [
      "",
      "",
      "PR",
      "",
      "MG",
      "RJ",
      "MS",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // SP
    [
      "",
      "",
      "PR",
      "SP",
      "MG",
      "",
      "",
      "",
      "GO",
      "MT",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // MS
    [
      "",
      "",
      "",
      "SP",
      "MG",
      "",
      "",
      "ES",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // RJ
    [
      "",
      "",
      "",
      "SP",
      "",
      "RJ",
      "MS",
      "ES",
      "GO",
      "",
      "BH",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // MG
    [
      "",
      "",
      "",
      "",
      "MG",
      "RJ",
      "",
      "",
      "",
      "",
      "BH",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // ES
    [
      "",
      "",
      "",
      "",
      "MG",
      "",
      "MS",
      "",
      "",
      "MT",
      "BH",
      "TO",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // GO
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "MS",
      "",
      "GO",
      "",
      "",
      "TO",
      "RO",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PA",
      "",
      "",
      "",
      "AM",
    ], //MT
    [
      "",
      "",
      "",
      "",
      "MG",
      "",
      "ES",
      "",
      "GO",
      "",
      "",
      "TO",
      "",
      "SE",
      "AL",
      "PE",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // BH
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "GO",
      "MT",
      "BH",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PI",
      "MA",
      "PA",
      "",
      "",
      "",
      "",
    ], // TO
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "MT",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "AM",
      "",
    ], // RO
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "BH",
      "",
      "",
      "",
      "AL",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // SE
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "BH",
      "",
      "",
      "SE",
      "",
      "PE",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // AL
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "BH",
      "",
      "",
      "",
      "AL",
      "",
      "PB",
      "",
      "CE",
      "PI",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // PE
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PE",
      "",
      "RN",
      "CE",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // PB
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PB",
      "",
      "CE",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // RN
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PE",
      "PB",
      "RN",
      "",
      "PI",
      "",
      "",
      "",
      "",
      "",
      "",
    ], // CE
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "BH",
      "TO",
      "",
      "",
      "",
      "PE",
      "",
      "",
      "CE",
      "",
      "MA",
      "",
      "",
      "",
      "",
      "",
    ], // PI
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "TO",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PI",
      "",
      "PA",
      "",
      "",
      "",
      "",
    ], // MA
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "MT",
      "",
      "TO",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "MA",
      "",
      "AP",
      "RR",
      "AM",
      "",
    ], // PA
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PA",
      "",
      "",
      "",
      "",
    ], // AP
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PA",
      "",
      "",
      "AM",
      "",
    ], // RR
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "MT",
      "",
      "",
      "RO",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PA",
      "",
      "RR",
      "",
      "AC",
    ], // AM
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "AM",
      "",
    ], // AC
  ];

  const estados = rota.split(",");

  for (let i = 0; i < estados.length - 1; i++) {
    const estadoAtual = estados[i].toUpperCase();
    const estadoProximo = estados[i + 1].toUpperCase();

    if (!existeFronteira(estadoAtual, estadoProximo, matrizFronteiras)) {
      return false;
    }
  }

  return true;
}

function existeFronteira(estadoA, estadoB, matrizFronteiras) {
  const indiceEstadoA = getIndiceEstado(estadoA);
  const indiceEstadoB = getIndiceEstado(estadoB);

  if (indiceEstadoA === -1 || indiceEstadoB === -1) {
    return false;
  }

  return matrizFronteiras[indiceEstadoA][indiceEstadoB] !== "";
}

function getIndiceEstado(estado) {
  switch (estado.toUpperCase()) {
    case "RS":
      return 0;
    case "SC":
      return 1;
    case "PR":
      return 2;
    case "SP":
      return 3;
    case "MG":
      return 4;
    case "RJ":
      return 5;
    case "MS":
      return 6;
    case "ES":
      return 7;
    case "GO":
      return 8;
    case "MT":
      return 9;
    case "BH":
      return 10;
    case "TO":
      return 11;
    case "RO":
      return 12;
    case "SE":
      return 13;
    case "AL":
      return 14;
    case "PE":
      return 15;
    case "PB":
      return 16;
    case "RN":
      return 17;
    case "CE":
      return 18;
    case "PI":
      return 19;
    case "MA":
      return 20;
    case "PA":
      return 21;
    case "AP":
      return 22;
    case "RR":
      return 23;
    case "AM":
      return 24;
    case "AC":
      return 25;
    default:
      return -1;
  }
}

module.exports = { isRotaValida };
