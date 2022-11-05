const {cupomdesconto} = require ('../descontos')

describe('cupomdesconto', () => {
  it('Aplicar cupom de desconto para compras no valor de 400', () => {
    const valor = 400;

    const result = cupomdesconto(valor);

    expect(result).toBe(true);
  });

  it('Não aplicar cupom de desconto para compras no valor de 300', () => {
    const valor = 300;

    const result = cupomdesconto(valor);

    expect(result).toBe(false);
  });
});