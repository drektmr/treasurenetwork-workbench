import {LitElement, html, css} from 'lit';

export class Card extends LitElement {
    constructor(
        name= "",
        frontImage= 'https://onepiece-cardgame.dev/images/cards/OP01-002_bd380d_jp.jpg',
        backImage= 'static/img/reverse_card/reverse-leader.png',
    ) {
        super();
        this.cardID = "default";
        this.name = name;
        this.frontImage = frontImage;
        this.backImage = backImage;
        this.category = "";
        this.faceDown = true;
        this.setted = false;
        this.yourTurn = true;
        this.showMenu = false;
    }

    static get properties() {
        return {
            cardID: {type: String},
            name: {type: String},
            frontImage: {type: String},
            backImage: {type: String},
            faceDown: {type: Boolean},
            category: {type: String},
            setted: {type: Boolean},
            yourTurn: {type: Boolean},
            showMenu: {type: Boolean},
        };
    }

    static get styles() {
        return css`
          /* define css for a card and it both faces and animate a flip*/

          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 280px;
          }

          .card {
            border-radius: 25px;
            background: transparent;
            width: 100%;
            height: 100%;
            cursor: pointer;
            transform-style: preserve-3d;
            transform-origin: center right;
            transition: transform 1s;

          }

          .is-flipped {
            transform: translateX(-100%) rotateY(-180deg);
          }

          /* rotate the card to the left site at same place at same axys*/

          .is-setted {
            transform: rotateY(-180deg) rotateZ(90deg) translate(100px, -100px);
          }


          .card__front, .card__back {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            perspective: 1000px;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }

          img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
          }
          
          .card__front {
            transform: rotateY(180deg);
          }
          
          /*in css, do a hover menu over the card */
            .action-menu {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                border-radius: 25px;
                z-index: 1;
            }
          
          
          /*.action-menu {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: rgba(0,0,0,0.5);
            z-index: 1;
          }*/
            
          .action-menu button {
            margin: 5px;
            padding: 5px;
            border-radius: 5px;
            background: #fff;
            border: none;
            cursor: pointer;
          }
          
            
        `;
    }

    flipCard() {
        this.faceDown = !this.faceDown;
        this.setted ? this.setted = false : '';
        this.closeMenu();
    }

    setCard() {
        if(!this.faceDown){
            this.setted = true;
            return this.setted;
        }
        this.closeMenu();
    }

    resetCard() {
        this.setted = false;
        this.closeMenu();
    }

    activateEffect() {
        this.closeMenu();
    }


    attack(){
        this.closeMenu();
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

    openMenu(){
        this.showMenu = true;
    }

    closeMenu(){
        this.showMenu = false;
    }

    render() {
        return html`
            <div class="container">
                <div class="card ${!this.faceDown?this.setted?"is-setted":"is-flipped":''}" @click="${()=>this.yourTurn?this.openMenu():''}">
                        <div class="card__front">
                            <img src="${this.frontImage}" alt="front">
                        </div>
                        <div class="card__back">
                            <img src="${this.backImage}" alt="back">
                        </div>
                </div>
                ${this.showMenu?this.generateMenu():''}
            </div>
        `;
    }

}

window.customElements.define('card-element', Card);
