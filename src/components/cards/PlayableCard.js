import {Card} from './Card.js';

export class PlayableCard extends Card {
    constructor(
        name= "Playable Card",
        frontImage= 'https://onepiece-cardgame.dev/images/cards/OP01-002_bd380d_jp.jpg',
        backImage= 'https://onepiece-cardgame.dev/images/cards/OP01-003_b2e838_jp.jpg',
        /****************************************************************************************/
        collection = "OP0",
        number = "000",
        rarity = "C",
        cost = 1,
        types = [],
        effects = [],
        trigger = {}
    ) {
        super(name, frontImage, backImage);
        this.cardID = collection + "-" + number;
        this.category = "playable";
        this.collection = collection;
        this.number = number;
        this.rarity = rarity;
        this.cost = cost;
        this.color = "red";
        this.types = types;
        //this.description = "This is a playable card";
        this.effects = effects;
        this.trigger = trigger;
    }
    checkTypes(types = null) {
        if(types === null || types === undefined){
            return true;
        }
        for (let type of types) {
            if (this.types.includes(type)) {
                return true;
            }
        }
        return false;
    }

    static get properties() {
        return {
            ...super.properties,
            collection: {type: String},
            number: {type: String},
            rarity: {type: String},
            cost: {type: Number},
            color: {type: String},
            types: {type: Array},
            //description: {type: String},
            effects: {type: Array},
            trigger: {type: Object},
        };
    }

    render() {
        return super.render();
    }
}

window.customElements.define('playable-card', PlayableCard);
