class hero {
    constructor(nome, idade, tipo){
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo
    }
    atacar(){
        switch(this.tipo){
            case "mago":
                console.log(`O ${this.tipo} atacou usando magia`)
                break;
            case "guerreiro":
                console.log(`O ${this.tipo} atacou usando espada`)
                break;
            case "monge":
                console.log(`O ${this.tipo} atacou usando artes marciais`)
                break;
            case "ninja":
                console.log(`O ${this.tipo} atacou usando shuriken`)
                break;
            default:
                console.log("Classe de herói não existe")
            }
        }
    
    /*atacar(){
        if(this.tipo =="mago"){
            console.log(`O ${this.tipo} atacou usando magia`)
        }else if(this.tipo =="guerreiro"){
            console.log(`O ${this.tipo} atacou usando espada`)
        }else if(this.tipo =="monge"){
            console.log(`O ${this.tipo} atacou usando artes marciais`)
        }else if(this.tipo =="ninja"){
            console.log(`O ${this.tipo} atacou usando shuriken`)
        }else{
            console.log("Classe de guerreiro não especificada")
        }

    }*/
        
} 

let heroi = new hero("RobimRu", 34, "monge")
heroi.atacar()