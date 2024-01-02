// Class Statistic

export class Statistic {

    constructor ({ settings, business, parentElement }) {

        // Independent Objects

        this._settings = settings;

        // System Properies

        this._time = 0;
        this._business = business;

        this._statisticList = [

            {name: "Время в игре", value: this._time},
            {name: "Текущий бизнес", value: this._business.name},
            {name: "Общее количество кликов", value: this._settings.clickCount},
            {name: "Доход за клик", value: this._settings.countPerClick},
            {name: "Доход в секунду", value: this._settings.countPerSecond},
            {name: "Множитель клика", value: this._settings.countFactor},

        ];

        // Class Elements

        this._parentElement = document.querySelector(parentElement);
        this._element = document.createElement("div");
        this._list;

        // Start Settings

        this._element.className = "info-block tab__info-block";
        this._element.innerHTML = `<ul class="info-block__list"></ul>`;
        this._parentElement.append(this._element);

        this._list = this._element.querySelector("ul");

        this.show();

    }

    // Methods

    createHTML(name, value) {
        return `
        
            <li class="info-block__list-item">
                <span class="info-block__list-name">
                    ${name}
                </span>

                <span class="info-block__list-value">
                    ${value}
                </span>
            </li>
        
        `;
    }

    show() {

        this._statisticList = [

            {name: "Время в игре", value: this._time},
            {name: "Текущий бизнес", value: this._business.name},
            {name: "Общее количество кликов", value: this._settings.clickCount},
            {name: "Доход за клик", value: this._settings.countPerClick},
            {name: "Доход в секунду", value: this._settings.countPerSecond},
            {name: "Множитель клика", value: `x${this._settings.countFactor}`},

        ];

        this._list.innerHTML = "";

        this._statisticList.forEach(obj => {
            this._list.innerHTML += this.createHTML(obj.name, obj.value);
        });
        
    }

}