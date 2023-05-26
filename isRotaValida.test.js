const { isRotaValida } = require("./main");

test("Verificar se a rota é válida", () => {
  expect(isRotaValida("RS,SC,PR")).toBe(true);
});

test("Verificar se a rota é inválida", () => {
  expect(isRotaValida("RS,SP,MG")).toBe(false);
});
