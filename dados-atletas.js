class Atleta {
    constructor(nome, idade, peso, altura, notas){

        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    };

    calculaCategoria(){

        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil";
        }if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil";
        }if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário";
        }if(this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }else{
            return "Sem Categoria"
        }
        
    };
    calculaIMC(){
    return this.peso / (this.altura * this.altura);
    };
    calculaMediaValida(){
        let todasAsNotas = this.notas
        let totalNotas = todasAsNotas.sort(function(a,b){
            if(a === b){
                return 0;
            }if(a < b){
                return -1;
            }if( a > b){
                return 1;
            }
        })
        let notasComputadas = totalNotas.slice(1,4)
        let somaNotasComputadas = notasComputadas.reduce(function(total, atual){
                return total + atual;
        },0)
        let media = (somaNotasComputadas/notasComputadas.length).toFixed(2);
         return media;

        
        
        
    };
    obtemNomeAtleta(){
        return this.nome
    
    };
    obtemIdadeAtleta(){
        return this.idade
    };
    obtemPesoAtleta(){
        return this.peso
    };
    obtemNotasAtleta(){
        return this.notas;
    };
    obtemCategoria(){
        return this.calculaCategoria()
    };
    obtemIMC(){
        return this.calculaIMC().toFixed(2)
    };
    obtemMediaValida(){
        return this.calculaMediaValida()
    };
    
};

// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);





console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média Valida: " + atleta.obtemMediaValida());
//console.log(atleta.calculaCategoria());
//console.log(atleta.calculaIMC());
//console.log(atleta.calculaMediaValida());




