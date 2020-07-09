/**
 * Função responsável pelo cálculo do Juros Composto sobre uma taxa diária
 * M = P . (1 + i)^t 
 * @param {number} aporte Aporte Inicial Investido
 * @param {number} taxa Taxa de juros em decimal 
 * @param {number} periodoEmDias Período total que a aplicação irá acontecer
 * @returns {number} Montante total obtido pela aplicação 
 */

function calculoJurosCompostoDiario(aporte, taxa, periodoEmDias){
    let montante = aporte * Math.pow((1 + taxa), periodoEmDias)
    return montante
}

module.exports = calculoJurosCompostoDiario