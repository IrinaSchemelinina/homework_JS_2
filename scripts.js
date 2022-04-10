// Задача №1
// Задача №2

{
    let year = 2022;
    let name = prompt('Ваше имя?');
    let age = prompt('Ваш возраст?');
    let userage = ((year - 1)- age);
    let city = prompt('В каком городе проживаете?');
    let company = prompt('В какой компании работаете?');
    let phone = prompt('Ваш номер телефона');
    let email = prompt('Укажите вашу почту?');
    console.log(`Меня зовут: ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании: ${company}. Мои контактные данные: Телефон: ${phone}, Почта: ${email}`);
    alert(`Пользователь ${name} родился в ${userage} году`);
}

// Задача №3

{
    let str = '246835';
    let sum1 = str[0] + str[1] + str[2];
    let sum2 = str[3] + str[4] + str[5];

    if (sum1 == sum2){
        console.log('Да');
    }else{
        console.log('Нет');
    }
}

// Задача №4

{

    let a = 1;  //0, -3

    if (a > 0){
        console.log('верно');
    }else{
        console.log('неверно')
    }

}

// Задача №5


    let a = 10,
        b = 2,
        sum2 = (a + b),
        diff = (a - b),
        mul = (a * b),
        del = (a / b);

    if (sum2 > 1){
        console.log(sum2**2);
    }else{
        console.log(sum2);
    }


// Задача №6

if (a > 2 && a < 11){
    if (b >= 6 && b < 14){
        console.log('Верно')
    }else
    console.log('Неверно')
    }



// Задача №7

let n = 15;

if (n >= 0 && n <= 14){
    console.log('1-я четверть');
}

if (n >= 15 && n <= 29){
    console.log('2-я четверть');
}

if (n >= 30 && n <= 44){
    console.log('3-я четверть');
}

if (n >= 45 && n <= 59){
    console.log('4-я четверть');
}

// Задача №8

{
    let day = 5;

    if (day >= 1 && day <= 10){
        console.log('1-я декада');
    }

    if (day >= 11 && day <= 20){
        console.log('2-я декада');
    }

    if (day >= 21 && day <= 31){
        console.log('3-я декада');
    }
}


// Задача №9

let day = 250;

let year = (day / 365),
    month = parseInt(day / 31),
    week = parseInt(day / 7),
    time = (day * 24),
    min = (time * 60),
    sec = (min * 60);

year < 1 ? console.log('Меньше года') : console.log(year);
month < 1 ? console.log('Меньше месяца') : console.log(month);
week < 1 ? console.log('Меньше недели') : console.log(week);
time < 1 ? console.log('Меньше часа') : console.log(time);   
min < 1 ? console.log('Меньше минуты') : console.log(min);
sec < 1 ? console.log('Меньше секунды') : console.log(sec);

// Задача №10

let month2 = 0;

if (month > 12){
    if (year > 1)month2 = month - (12 * (year - 1));
    else month2 = month - 12;
}else{
    month2 = month;
}

console.log(month2);

switch (month2){
    case 12:
    case 1:
    case 2:
        console.log('Зима')
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна')
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето')
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень')
        break;
}
 
