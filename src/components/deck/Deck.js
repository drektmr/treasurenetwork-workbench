import {LitElement} from 'lit';

export class Deck extends LitElement {
    constructor(ownerID,leader,deck,donDeck) {
        super();
        this.ownerID = ownerID;
        this.leader = leader;
        this.deck = deck;
        this.donDeck = donDeck;
    }

    static get properties() {
        return {
            ownerID: {type: String},
            deck: {type: Array},
            leader: {type: Object},
            donDeck: {type: Array},
        };
    }
}

window.customElements.define('deck', Deck);