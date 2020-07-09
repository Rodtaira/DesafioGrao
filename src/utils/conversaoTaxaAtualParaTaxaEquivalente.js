/**
 * Função que faz a conversão de taxas que possuem diferentes medidas de tempos. Exemplo: converter um taxa anual para mensal. Referência: clubedospoupadores.com/simulador-taxas-equivalentes. 
 * Taxa Equivalente = (1 + i )^(Período Taxa Equivalente/ Período Taxa Atual) - 1
 * @param {number} taxaAtual valor da taxa do período dado. Exemplo: 2% ao Ano.
 * @param {number} periodoTaxaEquivalente período do tempo desejado saber a taxa equivalente. Exemplo: quero saber a taxa mensal. 
 * @param {number} periodoTaxaAtual período da taxa dada.
 * @returns {number} Taxa devidamente convertida para a medida certa.
 */
function conversaoTaxaAtualParaTaxaEquivalente(taxaAtual, periodoTaxaEquivalente, periodoTaxaAtual){
    let taxaEquivalente = Math.pow(1 + taxaAtual, periodoTaxaEquivalente/periodoTaxaAtual ) - 1
    return taxaEquivalente
}

module.exports = conversaoTaxaAtualParaTaxaEquivalente