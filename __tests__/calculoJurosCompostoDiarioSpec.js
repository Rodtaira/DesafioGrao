const calculoJurosCompostoDiario = require('../src/utils/calculoJurosCompostoDiario')

describe('Teste do calculo de Juros Composto Diario', () => {
    it('Deve retonar um valor proximo do previsto', () => {
        let aporte = 2000, taxa = 0.002, periodo = 5

        let resultado = calculoJurosCompostoDiario(aporte, taxa, periodo )
        expect(resultado).toBeCloseTo(2020.08)

    })
})