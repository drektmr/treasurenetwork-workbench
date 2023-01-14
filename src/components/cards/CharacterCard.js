import {PlayableCard} from './PlayableCard.js';

export class CharacterCard extends PlayableCard {
    constructor(
        name,
        frontImage,
        collection,
        number,
        rarity,
        cost,
        types,
        power,
        attribute,
        effects = undefined,
        counter = 0,
        trigger= undefined,
        backImage= 'https://onepiece-cardgame.dev/images/cards/OP01-003_b2e838_jp.jpg',
    ) {
        super(name, frontImage, backImage, collection, number, rarity, cost, types, effects, trigger);
        this.category = 'character';
        this.power = power;
        this.extraPower = 0;
        this._attribute = attribute;
        this.counter = counter;
        this.taunt = false;
        this.dons = [];
    }

    static get properties() {
        return {
            ...super.properties,
            _attribute: {type: String},
            power: {type: Number},
            extraPower: {type: Number},
            counter: {type: Number},
            dons : {type: Array},
            taunt: {type: Boolean},
        };
    }

    activateEffect() {
        super.activateEffect();
        alert("Reverse card open!");
    }

    attack() {
        alert("Attack!");
        console.log(this)
        super.attack();
    }

    render() {
        return super.render();
    }
}
window.customElements.define('character-card', CharacterCard);

