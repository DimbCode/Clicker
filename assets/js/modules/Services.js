// Services Classes

class Service {

    constructor ({ img, name, infoArray, parentEl, unicalId, level, settings, price, type }) {

        // Independent Objects

        this._settings = settings;

        // System Properties

        this._img = img;
        this._name = name;
        this._info = infoArray;
        this._id = unicalId;
        this._level = level;
        this._price = price;
        this._type = type;
        this._isAnimation = false;

        // Elements Properties

        this._parent = document.querySelector(parentEl);
        this._element;
        this._buyBtn;

        // Start Settings
        
        this.create();

        // Events

        this.addEvents();
    }

    // Getters And Setters

    get img() {
        return this._img;
    }

    get name() {
        return this._name;
    }

    get info() {
        return this._info;
    }

    get parent() {
        return this._parent;
    }

    get unicalId() {
        return this._id;
    }

    get price() {
        return this._price;
    }

    // Methods

    createHTML() {

        return `

            <div class="service__section service__section_error-1">
                <span class="service__status-title">
                    Недостаточно денег для покупки!
                </span>
            </div>

            <div class="service__section service__section_success">
                <span class="service__status-title">
                    Успешно!
                </span>
            </div>

            <div class="service__section service__section_purchased">
                <span class="service__status-title">
                    Куплено
                </span>
            </div>

            <div class="service__section service__section_hidden">

                <div class="service__section-wrapper">

                    <ul class="service__info-list">

                        ${

                            this._info.map(obj => {

                                return `
                                    <li class="service__info-list-item">
                                        <span class="service__info-list-name">
                                            ${obj.name}
                                        </span>
            
                                        <span class="service__info-list-value">
                                            ${obj.value}
                                        </span>
                                    </li>
                                `;

                            }).join("")

                        }

                    </ul>

                    <button class="service__btn">
                        Купить
                    </button>

                </div>

            </div>

            <div class="service__section service__section_img">
                <i class="service__img ${this._img}"></i>
            </div>

            <div class="service__section service__section_text">
                <div class="service__section service__section_text">
                    <h3 class="service__name">
                        ${this.name}
                    </h3>
                </div>
            </div>

        `;

    }

    create() {

        const serviceELement = document.createElement("article");
        const HTML = this.createHTML();

        serviceELement.className = "service tab__service";
        serviceELement.innerHTML = HTML;
        serviceELement.setAttribute("data-unical-id", this._id);

        this._parent.append(serviceELement);

        this._element = serviceELement;
        this._buyBtn = serviceELement.querySelector(".service__btn");

    }

    buy() {

        const clickCount = this._settings.resultCount;

        if (!this._isAnimation) {

            if (clickCount < this._price) {

                this._isAnimation = true;
                this._element.classList.add("service_error-1");

                setTimeout(() => {
                    this._isAnimation = false;
                    this._element.classList.remove("service_error-1");
                }, 2000);

            }   else {

                this._isAnimation = true;
                this._element.classList.add("service_success");

                setTimeout(() => {
                    this._isAnimation = false;
                    this._element.classList.remove("service_success");
                    this._element.classList.add("service_purchased");
                }, 2000);

                this._settings.levels[this._type] = this._level;
                this._settings.resultCount -= this._price;

                this._settings.updateText();

            }

        }

    }

    addEvents() {
        this._buyBtn.addEventListener("click", () => this.buy());
    }
}

export class ClickerService extends Service {

    constructor ({ img, name, infoArray, parentEl, unicalId, level, settings, price, type, countPerClick }) {

        // Parent Class Constructor

        super({ img, name, infoArray, parentEl, unicalId, level, settings, price, type });

        // System Properties

        this._countPerClick = countPerClick;
        
    }

    buy() {
        const clickCount = this._settings.resultCount;

        if (!(clickCount < this._price)) {
            this._settings.countPerClick += this._countPerClick;    
        }

        super.buy();
    }

}

export class BusinessService extends Service {

    constructor ({ img, name, infoArray, parentEl, unicalId, level, settings, price, type, countPerSecond, business }) {

        // Parent Class Constructor

        super({ img, name, infoArray, parentEl, unicalId, level, settings, price, type });

        // System Properties

        this._countPerSecond = countPerSecond;
        
        // Independent Objects

        this._business = business;
        
    }

    buy() {

        const clickCount = this._settings.resultCount;

        if (!(clickCount < this._price)) {
            this._settings.countPerSecond += this._countPerSecond;
            this._business.name = this._name;
        }

        super.buy();
    }

}

export class FactorService extends Service {

    constructor ({ img, name, infoArray, parentEl, unicalId, level, settings, price, type, countFactor }) {

        // Parent Class Constructor

        super({ img, name, infoArray, parentEl, unicalId, level, settings, price, type });

        // System Properties

        this._countFactor = countFactor;
        
    }

    createHTML() {
        return `

            <div class="service__section service__section_error-1">
                <span class="service__status-title">
                    Недостаточно денег для покупки!
                </span>
            </div>

            <div class="service__section service__section_error-2">
                <span class="service__status-title">
                    Ваш уровень товара выше, чем этот!
                </span>
            </div>

            <div class="service__section service__section_success">
                <span class="service__status-title">
                    Успешно!
                </span>
            </div>

            <div class="service__section service__section_purchased">
                <span class="service__status-title">
                    Куплено
                </span>
            </div>

            <div class="service__section service__section_hidden">

                <div class="service__section-wrapper">

                    <ul class="service__info-list">

                        ${

                            this._info.map(obj => {

                                return `
                                    <li class="service__info-list-item">
                                        <span class="service__info-list-name">
                                            ${obj.name}
                                        </span>
            
                                        <span class="service__info-list-value">
                                            ${obj.value}
                                        </span>
                                    </li>
                                `;

                            }).join("")

                        }

                    </ul>

                    <button class="service__btn">
                        Купить
                    </button>

                </div>

            </div>

            <div class="service__section service__section_img">
                <span class="service__img-text">
                    ${this._img}
                </span>
            </div>

            <div class="service__section service__section_text">
                <div class="service__section service__section_text">
                    <h3 class="service__name">
                        ${this.name}
                    </h3>
                </div>
            </div>

        `;

    }

    buy() {

        const clickCount = this._settings.resultCount;

        if (!(clickCount < this._price)) {

            if (this._settings.levels[this._type] < this._level) {
                this._settings.countFactor = this._countFactor;
            }  else {
                this._isAnimation = true;
                this._element.classList.add("service_error-2");

                setTimeout(() => {
                    this._isAnimation = false;
                    this._element.classList.remove("service_error-2");
                }, 2000);
            }

        }

        super.buy();
    }

}