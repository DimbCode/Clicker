// Business Class

export class Business {

    constructor ({ settings, name }) {

        // Independet Objects

        this._settings = settings;

        // System Properties

        this._name = name;

        // Class Elements

        this._resultElement = this._settings.resultElement;

        // Start Settings

        setInterval(() => this.plusCount(), 1000);

    }

    // Getters And Setters

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    } 

    // Methods

    plusCount() {
        this._settings.resultCount += this._settings.countPerSecond;
        this._settings.updateText();
    }

}