const calculoJurosCompostoDiario = require('./calculoJurosCompostoDiario')

/**
 * Função responsável pelo cálculo do rendimento e valor poupado dadas as especificações.  
 * @param {number} aportePeriodico valor total a ser adicionado para ser investido de forma periódica
 * @param {number} taxa taxa calculada anteriormente de acordo com as medidas de tempo corretas.  
 * @param {number} intervaloParaAportePeriodico intervalo temporal que ocorrerá adição do aporte periódico. No caso foi específicado que seja feita de forma semanal.
 * @param {number} maximoDeDiasInvestido período que o aporte ficará rendendo. No caso foi especificado 36 semanas. 
 * @returns {Object} valor do montante rendido final e valor poupado 
 */

function calculoRendimento(aportePeriodico, taxa, intervaloParaAportePeriodico, maximoDeDiasInvestido = 252){

    let montante, montanteAuxiliar, totalPoupado

    montanteAuxiliar    =   aportePeriodico 
    totalPoupado        =   aportePeriodico

    for (var periodoEmDias = 1; periodoEmDias <= maximoDeDiasInvestido; periodoEmDias++)
    {
        if(periodoEmDias != 1 & periodoEmDias % intervaloParaAportePeriodico == 1){
            montante = calculoJurosCompostoDiario(montanteAuxiliar + aportePeriodico, taxa, periodoEmDias/252)
            totalPoupado = aportePeriodico + totalPoupado
            montanteAuxiliar = montante
        }else{
            montante = calculoJurosCompostoDiario(montanteAuxiliar , taxa, periodoEmDias/252)
            montanteAuxiliar = montante
        }
    }

    return {montante, totalPoupado} 
}

module.exports = calculoRendimento