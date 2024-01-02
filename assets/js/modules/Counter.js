// Class Counter

export class Counter {

    constructor ({ button, settings}) {

        // Independent Objects

        this._settings = settings;

        // ELements Properties

        this._btn = document.querySelector(button);
        this._resElement = this._settings.resultElement;

        // Event Listener

        this.addEvents();
    }

    // Getter And Setters

    get btn() {
        return this._btn;
    }

    set btn(selector) {
        this._btn = document.querySelector(selector);
    }

    // Methods

    plusCount() {
        this._settings.clickCount++;
        this._settings.resultCount += this._settings.countPerClick * this._settings.countFactor;
        this._settings.updateText();
    }

    addEvents() {
        this._btn.addEventListener("click", () => this.plusCount());
    }
}