import {CharacterCard} from './CharacterCard.js';

export class LeaderCard extends CharacterCard {
    constructor(
        name,
        frontImage,
        collection,
        number,
        rarity,
        cost,
        types,
        effects,
        power,
        attribute,
        life,
        backImage= 'static/img/reverse_card/reverse-leader.png'
    ) {
        super(name, frontImage, collection, number, rarity, cost, types, power, attribute, effects, 0, undefined, backImage);
        this.category = 'leader';
        this.life = life;
    }

    static get properties() {
        return {
            ...super.properties,
            life: {type: Number},
        };
    }

    render() {
        return super.render();
    }
}
window.customElements.define('leader-card', LeaderCard);

