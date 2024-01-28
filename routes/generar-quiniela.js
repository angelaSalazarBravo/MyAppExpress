function generarQuiniela() {
  const quiniela = [];
  for (let i = 0; i < 15; i++) {
    const resultado =
      Math.random() < 0.33 ? "1" : Math.random() < 0.66 ? "X" : "2";
    quiniela.push(resultado);
  }
  return quiniela;
}

export { generarQuiniela };
