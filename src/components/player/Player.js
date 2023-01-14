import {html, LitElement} from 'lit';

export class Player extends LitElement {
    constructor(user, deck) {
        super();
        this.playerID = user;
        this.deck = deck.deck;
        this.leader = deck.leader;
        this.donDeck = deck.donDeck
        this.hand = [];
        this.characterZone = [];
        this.donZone = [];
        this.discard = [];
        this.menu = false;
    }

    static get properties() {
        return {
            playerID: {type: String},
            deck: {type: Array},
            leader: {type: Object},
            donDeck: {type: Array},
            hand: {type: Array},
            characterZone: {type: Array},
            donZone: {type: Array},
            discard: {type: Array},
            menu: {type: Boolean},
        };
    }

    drawCard() {
        let card = this.deck.pop();
        this.hand.push(card);
    }


    shuffleDeck() {
        let shuffledDeck = this.deck.sort(() => Math.random() - 0.5);
        this.deck = shuffledDeck;
    }


    putCardsOnBottomDeck(cards) {
        this.deck = this.deck.concat(cards);
    }


    putCardsOnTopDeck(cards) {
        this.deck = cards.concat(this.deck);
    }


    returnDON(quantity) {
        if(this.donZone.empty || this.donZone.length < quantity){
            return false;
        }
        else {
            for (let i = 0; i < quantity; i++) {
                let card = this.donZone.pop();
                this.donDeck.push(card);
            }
        }
        return true;
    }


    drawDON(turn) {
        if (turn === 1) {
            this.donZone.push(this.donDeck.pop());
        } else {
            this.donZone.push(this.donDeck.pop());
            this.donZone.push(this.donDeck.pop());
        }
    }

    setDON(quantity) {
        if(this.donZone.empty || this.donZone.length < quantity){
            return false;
        }
        else {
            for (let i = 0; i < quantity; i++) {
                if(!this.donZone[i].setted)
                this.donZone;
                this.discard.push(card);
            }
        }
        return true;
    }

    drawHand() {
        for(let i = 0; i < 5; i++) {
            this.drawCard();
        }
    }

    setCard(card) {
        card.setCard();
    }

    mulligan() {
        this.deck = this.deck.concat(this.hand);
        this.hand = [];
        this.shuffleDeck();
        this.drawHand();
    }


    destroyCard(card) {
        this.characterZone = this.characterZone.filter(item => item !== card);
        this.toDiscardZone(card);
    }

    donAttached(card, quantity) {
        if(card.dons.length<quantity){
            return false;
        }else{
            return true;
        }
    }

    discardCard(card) {
        if(this.hand.empty){
            return false;
        }else{
            this.hand = this.hand.filter(item => item !== card);
            this.toDiscardZone(card);
            return true;
        }
    }

    generateMenu(){
        return html`
            <div class="action-menu">
                <button @click="${this.flipCard}">Flip</button>
                <button @click="${this.setCard}">Set</button>
                <button @click="${this.resetCard}">Reset</button>
                <button @click="${this.activateEffect}">Activate</button>
                <button @click="${this.attack}">Attack</button>
                <button @click="${this.closeMenu}">Close</button>
            </div>
        `
    }

    toDiscardZone(card) {
        this.discard.push(card);
    }

    render(){
        return html`
         ${this.menu?this.generateMenu():''}
        `
    }

}

window.customElements.define('player', Player);
