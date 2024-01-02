// Imports

import { clickers, busineses, factors } from "./modules/startValues.js";
import { Settings } from "./modules/Settings.js";
import { Counter } from "./modules/Counter.js";
import { Business } from "./modules/Business.js";
import { Statistic } from "./modules/Statistic.js";
import { ClickerService, BusinessService, FactorService } from "./modules/Services.js";

// Start Settings

let servicesCount = 0;
let businessCount = 0;
let factorsCount = 0;

const settings = new Settings({
    levels: {
        clickers: 0,
    },
    count: 0,
    resultElement: ".clicker__score-number",
    countPerClick: 1,
    countPerSecond: 0,
    countFactor: 1,
});

const clicker = new Counter({
    button: ".clicker__btn",
    settings: settings,
});

const business = new Business({ settings: settings, name: "Отсутствует" });

clickers.forEach(item => {
    servicesCount++;

    item.settings = settings;
    item.parentEl = ".tab__content_services-clickers";
    item.unicalId = servicesCount;

    let service = new ClickerService(item);
});

busineses.forEach(item => {
    businessCount++;

    item.settings = settings;
    item.parentEl = ".tab__content_services-business";
    item.unicalId = businessCount;
    item.business = business;

    let service = new BusinessService(item);
});

factors.forEach(item => {
    factorsCount++;

    item.settings = settings;
    item.parentEl = ".tab__content_services-factors";
    item.unicalId = factorsCount;

    let service = new FactorService(item);
});

const statistic = new Statistic({ settings: settings, business: business, parentElement: ".tab__content_info-blocks" });