const conversaoTaxaEquivalente  =   require('./src/utils/conversaoTaxaEquivalente')
const calculoRendimento         =   require('./src/utils/calculoRendimento')

/**
 * Função principal. 
 * Converte a taxa anual para taxa diaria.
 * E faz o cálculo do rendimento total levando em consideracao os aportes periodicos de 100 reais que ocorrem semanalmente durante 36 semanas que sao 252 dias e a taxa agora convertida. 
 */

function main(){

    let taxaSelicAnual = 0.0425, periodoTaxaDiaria = 1, periodoTaxaAnual = 252, aporteSemanal = 100, intervaloParaAportePeriodico = 7
    
    let taxaEquivalente = conversaoTaxaEquivalente(taxaSelicAnual, periodoTaxaDiaria, periodoTaxaAnual)
    let resultado = calculoRendimento(aporteSemanal, taxaEquivalente, intervaloParaAportePeriodico)

    console.log('Total Poupado: ' + resultado.totalPoupado)
    console.log('Rendimento em cima dos aportes: ' + resultado.montante)   
}

main()
