class PorquinhoDigital{
    cash:number;
    goal:number;

    constructor(cash:number, goal:number){
        this.cash = cash;
        this.goal = goal;
    }

    inputCash():number{
        let Inserir = this.cash + 50
        console.log(`Seu saldo agora é ${Inserir}`)
        return Inserir
    }

    removeCash(Inserir): number{
        let Remover = 60
        let quantiaRetirada = Inserir - Remover
        if(this.cash < Remover){
            console.log('Seu saldo é insuficiente')
        }
        else{
            console.log(`Se retirar ${Remover} reais, seu novo saldo será ${quantiaRetirada}`)
        }   
        return quantiaRetirada
    }

    Objetivo():number{
        let Meta = this.goal
        console.log(`Sua meta é ${Meta}`)
        return Meta
    }

    Progress():number{
        let Restante = this.goal - this.cash
        console.log(`Para sua meta ser atingida ainda falta ${Restante} `)
        return Restante
    }
}

const Porco = new PorquinhoDigital(80, 800);
Porco.inputCash();
Porco.removeCash(80)
Porco.Objetivo()
Porco.Progress()


