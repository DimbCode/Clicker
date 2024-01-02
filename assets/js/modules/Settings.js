// Class Statistic

export class Settings {

    constructor ({ levels, count, resultElement, countPerClick, countPerSecond, countFactor, timer }) {

        // Independent Objects

        this._statistic;
        this._timer = timer;

        // System Properties

        this._resultCount = count;
        this._levels = levels;

        // Click Options

        this._countPerClick = countPerClick;
        this._countPerSecond = countPerSecond;
        this._countFactor = countFactor;

        this._clickCount = 0;

        // ELement Properties

        this._resultElement = document.querySelector(resultElement);

        // Start Settings

        setInterval(() => this.updateText(), 1000);

    }

    // Getters And Setters

    get levels() {
        return this._levels;
    }

    set levels(value) {
        this._levels = value;
    }

    get resultCount() {
        return this._resultCount;
    }

    set resultCount(value) {
        this._resultCount = value;
    }

    get resultElement() {
        return this._resultElement;
    }

    get countPerClick() {
        return this._countPerClick;
    }

    set countPerClick(value) {
        this._countPerClick = value;
    }

    get countFactor() {
        return this._countFactor;
    }

    set countFactor(value) {
        this._countFactor = value;
    }

    get countPerSecond() {
        return this._countPerSecond;
    }

    set countPerSecond(value) {
        this._countPerSecond = value;
    }

    get clickCount() {
        return this._clickCount;
    }

    set clickCount(value) {
        this._clickCount = value;
    }

    set statistic(value) {
        this._statistic = value;
    }

    set timer(value) {
        this._timer = value;
    }

    // Methods

    updateText() {
        this._resultElement.textContent = (this._resultCount).toFixed(2);
        this._statistic.time = this._timer.time;
        this._statistic.show();
    }

}