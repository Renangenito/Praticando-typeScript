import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];
                            // Negociacao[] = []; poderia ser assim 

    adicionar(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
             
           //readonly Negociacao[]  poderia ser assim
    lista(): ReadonlyArray<Negociacao>{
       return this.negociacoes; 
    }
}