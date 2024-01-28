export const multiplicar = async (base) => {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `${base} x ${i} = ${base * i}\n`;
  }
  return resultado;
};
