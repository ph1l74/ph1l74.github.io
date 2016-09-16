var main = function () {

    var Names = ["Sasha", "Сашка", "Александр", "Скай", "Длинный", "Скайволкир"];
    var Surnames = ["Sasha", "Ryzhov", "Рыжов", "Гандболист", "Рыжков"];

    function randomInt(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 0.5);
        rand = Math.round(rand);
        return rand;
    }

    $('.generate').click(function () {
        $('.result').text(Names[randomInt(0,5)] + ' ' +  Surnames[randomInt(0,5)]);
    });
};

$(document).ready(main);