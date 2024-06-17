'use strict';

const page = {
    months: document.querySelector('.months'),
    days: document.querySelector('.days'),
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
    monthsText: document.querySelector('.months-text'),
    daysText: document.querySelector('.days-text'),
    hoursText: document.querySelector('.hours-text'),
    minutesText: document.querySelector('.minutes-text'),
    secondsText: document.querySelector('.seconds-text')
}

const associativeDateTimeObj = {
    seconds: {
        one: 'секунда',
        few: 'секунды',
        many: 'секунд'
    },
    minutes: {
        one: 'минута',
        few: 'минуты',
        many: 'минут'
    },
    hours: {
        one: 'час',
        few: 'часа',
        many: 'часов'
    },
    days: {
        one: 'день',
        few: 'дня',
        many: 'дней'
    },
    months: {
        one: 'месяц',
        few: 'месяца',
        many: 'месяцев'
    }
};

function newYearTimer() {
    const newYear = new Date((new Date()).getFullYear(), 11, 31, 23, 59, 59);
    
    setInterval(() => {
        const newDate = new Date();
        const timer = {
            months: newYear.getMonth() - newDate.getMonth(),
            days: newYear.getDate() - newDate.getDate(),
            hours: newYear.getHours() - newDate.getHours(),
            minutes: newYear.getMinutes() - newDate.getMinutes(),
            seconds: newYear.getSeconds() - newDate.getSeconds()
        }

        for (const [key, value] of Object.entries(timer)) {
            page[`${key}`].innerText = value;
            page[`${key}Text`].innerText = associativeDateTimeObj[`${key}`][new Intl.PluralRules('ru-RU').select(value)];
        }
    }, 1000);
}

newYearTimer();
