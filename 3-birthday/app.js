'use strict';

function isUserAgeValid(age) {
    if (age) {
        const currentDate = new Date;
        const userBirthday = new Date(age);
        const userAgeThisYear = currentDate.getFullYear() - userBirthday.getFullYear();
    
        if (userAgeThisYear > 14 
            || userAgeThisYear === 14 
            && userBirthday.getMonth() <= currentDate.getMonth()
            && userBirthday.getDate() < currentDate.getDate())
        {
            return true;
        }
    }
    return false;
}

console.log(isUserAgeValid());
console.log(isUserAgeValid('2017-01-01'));
console.log(isUserAgeValid('2010-01-01'));
console.log(isUserAgeValid('2010-05-28'));
console.log(isUserAgeValid('2010-05-29'));
console.log(isUserAgeValid('2010-05-30'));
console.log(isUserAgeValid('2010-06-01'));
