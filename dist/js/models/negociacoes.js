export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // Negociacao[] = []; poderia ser assim 
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //readonly Negociacao[]  poderia ser assim
    lista() {
        return this.negociacoes;
    }
}
