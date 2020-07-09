const calculoRendimento = require('../src/utils/calculoRendimento')

describe('Teste do calculo do Rendimento com ascrescimos de aportes periodicos', () => {
    it('O calculo deve retornar um valor esperado', () => {
        let aportePeriodico = 50, taxa = 0.1, intervaloParaAportePeriodico = 3, maximoDeDiasASeremInvestidos = 7

        let resultado = calculoRendimento(aportePeriodico, taxa, intervaloParaAportePeriodico, maximoDeDiasASeremInvestidos)
        expect(resultado.totalPoupado).toBe(150)
        expect(resultado.montante).toBeCloseTo(151.08)

    })
})