Para verificar se a rota é válida digite no final do arquivo  "main.js" o seguinte comando:

console.log(isRotaValida(rota));

por exemplo:

console.log(isRotaValida("RS,SC,PR")

e veja no console do seu navegador, nesse caso retorna true, pois todos os estados mencionados fazem fronteira um com os outros.

Ou abra o localhost e chame a função isRotaValida. No seu console digite a seguinte instrução:

isRotaValida("SC,SP,PR")

Nesse caso a função retornará false, pois SC não faz fronteira com SP.