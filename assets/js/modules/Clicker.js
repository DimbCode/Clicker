// Imports

import { Timer } from "./Timer.js";
import { Settings } from "./Settings.js";
import { Counter } from "./Counter.js";
import { Business } from "./Business.js";
import { Statistic } from "./Statistic.js";

// Class Clicker

export class Clicker {

    constructor ({ timer, settings, business, counter, statistic }) {

        // Composition Objects

        this._timer = new Timer({ ...timer });
        this._settings = new Settings({ ...settings, timer: this._timer });
        this._business = new Business({ ...business, settings: this._settings });
        this._counter = new Counter({ ...counter, settings: this._settings });
        this._statistic = new Statistic({ ...statistic, settings: this._settings, business: this._business });

        // Start Settings

        this._settings.statistic = this._statistic;

    }

    // Methods

    showServices(Service, services, optionalSettings) {
        const serviceType = services[0].type;
        
        services.forEach((service, index) => {

            let serviceItem = new Service({
                ...service,
                ...optionalSettings,
                unicalId: serviceType + index,
                settings: this._settings
            });

        });
    }

}