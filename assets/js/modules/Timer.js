// Timer Class

export class Timer {

    constructor ({ startTime }) {

        // System Properties

        this._time = startTime;

        // Start Settings

        setInterval(() => this.timer(), 1000);
    }

    // Getters And Setters

    get time() {
        return this.timeParse(this._time);
    }

    // Methods

    timer() {
        this._time += 1;
    }

    timeParse(time) {
        if (time >= 3600) {
            return `${(time / 3600).toFixed(1)} ч.`;
        }   else if (time >= 60) {
            return `${(time / 60).toFixed(0)} мин.`;
        }   else {
            return `${time} сек.`;
        }
    }
}