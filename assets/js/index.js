// Imports

import { Tabs } from "./modules/Tabs.js";
import { clickers, busineses, factors, timer, settings, business, counter, statistic } from "./modules/startValues.js";
import { ClickerService, BusinessService, FactorService } from "./modules/Services.js";
import { Clicker } from "./modules/Clicker.js";

const tabs = new Tabs({
    tabs: ".clicker__tab",
    buttons: ".clicker__list-btn",
    activeClass: "clicker__list-btn_active",
    noneClass: "tab_none"
});

const clicker = new Clicker({
    timer: timer,
    settings: settings,
    business: business,
    counter: counter,
    statistic: statistic,
});

clicker.showServices(ClickerService, clickers, {});
clicker.showServices(BusinessService, busineses, {});
clicker.showServices(FactorService, factors, {});