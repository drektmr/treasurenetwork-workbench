import {LitElement} from 'lit';

export class Effect extends LitElement {
    constructor(player,
                card,
                costs=[
                    {name:"return-don", quantity: 2},
                    {name:"set-card", types:["StrawHat Pirates"]}
    ]){
        super();
        this.card = card;
        this.costs = costs;
        this.category = ""
        this.restCard = false;
    }

    static get properties() {
        return {
            card: {type: Object},
            costs: {type: Array},
            types: {type: Array},
            category: {type: String},
            restCard: {type: Boolean},
        };
    }

    doEffect() {
        this.payCost();
        this.resolveEffect();
    }

    payCost(player, card= undefined){
        let paid = false;
        this.costs.forEach((cost, index) => {
            if(index===0 || paid){
                switch (cost.name) {
                    case "return-don":
                        paid = player.returnDON(cost.quantity);
                        break;
                    case "set-don":
                        paid = player.setDON(cost.quantity);
                        break;
                    case "set-card":
                        if(card.checkTypes(cost.types)){
                            paid = player.setCard(card);
                        }else {
                            paid = false;
                        }
                        break;
                    case "discard":
                        if(card.checkTypes(cost.types)) {
                            paid = player.discardCard(cost.quantity, card = null);
                        }else {
                            paid = false;
                        }
                        break;
                    case "don-attached":
                        paid = player.donAttached(card, cost.quantity);
                        break;
                    default:
                        break;
                }
            }
        });
        return paid;
    }

    resolveEffect(){

    }

}



window.customElements.define('effect-element', Effect);
