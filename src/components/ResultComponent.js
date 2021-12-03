import Component from './index.js';

export default class ResultComponent extends Component {
    getGameResultItemHTML(game) {
        return game
            .map(
                (car) => `
            <li>${car.name}: ${new Array(car.move).fill('-').join('')}</li>
        `
            )
            .join('');
    }

    getGameResultLogHTML() {
        return this.$state.gameHists
            .map(
                (game) => `
            <ul class="game-log">
                ${this.getGameResultItemHTML(game)}
            </ul>
        `
            )
            .join('');
    }

    getWinnerListString() {
        return this.$state.winners.join(', ');
    }

    template() {
        return `
            <div id="game-history">${this.getGameResultLogHTML()}</div>
            ${
                this.$state.winners &&
                `최종 우승자: <span id="racing-winners">${this.getWinnerListString()}</span>`
            }
        `;
    }

    setup() {
        this.$state = {
            gameHists: [],
            winners: '',
        };
    }
}
