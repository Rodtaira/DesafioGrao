const conversaoTaxaAtualParaTaxaEquivalente = require('../src/utils/conversaoTaxaAtualParaTaxaEquivalente')

describe('Teste no calculo da Taxa Equivalente que é utilizado para a conversao de uma taxa de diferentes periodos. exemplo: Converter uma taxa mensal para diaria', () => {
    it('O calculo deve retornar o valor previsto da conversao para taxa anual de um investimento que oferece rentabilidade de 2% ao mes', () => {

        let taxaAtual = 0.02, periodoTaxaEquivalente = 12, periodoTaxaAtual =1 

        let resultado = conversaoTaxaAtualParaTaxaEquivalente(taxaAtual, periodoTaxaEquivalente, periodoTaxaAtual)
        expect(resultado).toBeCloseTo(0.2682)
    })
})