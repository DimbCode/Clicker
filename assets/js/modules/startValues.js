// Start Values

// Clickers

export const clickers = [

    {
        img: "fa-brands fa-pagelines",
        name: "Деревянный клик",
        infoArray: [
            { name: "Цена:", value: "100р." },
            { name: "Доходность:", value: "10р./Клик" },
        ],
        level: 1,
        price: 100,
        type: "clicker",
        countPerClick: 10,
        parentEl: ".tab__content_services-clickers",
    },

    {
        img: "fa-brands fa-pagelines",
        name: "Деревянный клик",
        infoArray: [
            { name: "Цена:", value: "1000р." },
            { name: "Доходность:", value: "10р./Клик" },
        ],
        level: 2,
        price: 1000,
        type: "clicker",
        countPerClick: 100,
        parentEl: ".tab__content_services-clickers",
    }

];

// Business

export const busineses = [

    {
        img: "fa-brands fa-pagelines",
        name: "Лесопилка",
        infoArray: [
            { name: "Цена:", value: "1 000р." },
            { name: "Доходность:", value: "1р./Сек" },
        ],
        level: 1,
        price: 1,
        type: "business",
        countPerSecond: 1,
        parentEl: ".tab__content_services-business",
    },

    {
        img: "fa-brands fa-pagelines",
        name: "Шахта",
        infoArray: [
            { name: "Цена:", value: "10 000р." },
            { name: "Доходность:", value: "10р./Сек." },
        ],
        level: 2,
        price: 10,
        type: "business",
        countPerSecond: 2,
        parentEl: ".tab__content_services-business",
    }

];

// Factors

export const factors = [

    {
        img: "x1.1",
        name: "Множитель x1.1",
        infoArray: [
            { name: "Цена:", value: "1 000р." },
            { name: "Множитель:", value: "x1.1" },
        ],
        level: 1,
        price: 1,
        type: "factor",
        countFactor: 1.1,
        parentEl: ".tab__content_services-factors",
    },

    {
        img: "x1.2",
        name: "Множитель x1.2",
        infoArray: [
            { name: "Цена:", value: "10 000р." },
            { name: "Множитель:", value: "x1.2" },
        ],
        level: 2,
        price: 10,
        type: "factor",
        countFactor: 1.2,
        parentEl: ".tab__content_services-factors",
    }

];

// Clicker Settings


const timer = { startTime: 0 };
const business = { name: "Отсутствует" };
const counter = { button: ".clicker__btn" };

const settings = {
    levels: {
        clicker: 0,
        business: 0,
        factor: 0,
    },
    count: 0,
    resultElement: ".clicker__score-number",
    countPerClick: 1,
    countPerSecond: 0,
    countFactor: 1,
};

const statistic = {
    parentElement: ".tab__content_info-blocks",
    time: 0,
}

export { timer, settings, business, counter, statistic };