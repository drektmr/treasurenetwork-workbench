import {PlayableCard} from './PlayableCard.js';

export class StageCard extends PlayableCard {
    constructor(
        name,
        frontImage,
        collection,
        number,
        rarity,
        cost,
        types,
        effects,
        trigger= undefined,
        backImage= 'https://onepiece-cardgame.dev/images/cards/OP01-003_b2e838_jp.jpg',
    ) {
        super(name, frontImage, backImage, collection, number, rarity, cost, types, effects, trigger);
        this.category = 'Stage';
        this.effects = effects;
    }

    static get properties() {
        return {
            ...super.properties,
        };
    }

    render() {
        return super.render();
    }
}
window.customElements.define('stage-card', StageCard);

