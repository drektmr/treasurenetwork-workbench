import {Card} from './Card.js';

export class DONCard extends Card {
    constructor(
        cardID="default-DON",
        name= "Default DON",
        frontImage= 'static/img/don_card/default-don.png',
        backImage= 'static/img/reverse_card/reverse-don.png',
    ) {
        super(name, frontImage, backImage);
        this.cardID = cardID;
        this.category= "don",
        this.points = 1000;
    }


    static get properties() {
        return {
            ...super.properties,
            points: {type: Number},
        };
    }


    render() {
        return super.render();
    }

}

window.customElements.define('don-card', DONCard);
