import {PlayableCard} from './PlayableCard.js';

export class EventCard extends PlayableCard {
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
        this.cardID = collection + "-" + number;
        this.category = 'event';
    }

    static get properties() {
        return {
            ...super.properties,
        };
    }

    activateEffect() {
        alert("Reverse card open!");
    }

    render() {
        return super.render();
    }
}
window.customElements.define('event-card', EventCard);

