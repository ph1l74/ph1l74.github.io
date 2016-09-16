var main = function (){

    // Объявление переменных

    var Round = 1;
    var Question = 1;
    var QuestionCost = 10;
    var PlayerNames = [];
    var PlayerResult = [3];


    for (var i = 1; i < 4; i++) {
        // Обнуление результатов
        PlayerResult[i] = 0;
        // Имена игроков           
        PlayerNames[i] = prompt("Введите имя игрока под номером " + i);
        $('.PlayerName1').text(PlayerNames[1]);
        $('.PlayerName2').text(PlayerNames[2]);
        $('.PlayerName3').text(PlayerNames[3]);
    }

    // Номер раунда
    $('.round').text('Раунд ' + Round);
    
    $('.Result1').text(PlayerResult[1]);     
    $('.Result2').text(PlayerResult[2]);
    $('.Result3').text(PlayerResult[3]);
    
    $('.nextquestion').click(function () {
        Question+=1;
        QuestionCost = 10 * Question;
        $('.question').text('Вопрос '+Question);

        if (Question > 5) {
            Question = 1;
            QuestionCost = 10;
            Round+=1;

            $('.round').text('Раунд ' + Round);
            $('.question').text('Вопрос '+Question);
        }
    });

        // Прибавление очков  
        $('.btnp1').click(function () {
            $('.Result1').text(PlayerResult[1] += QuestionCost);
        });
        $('.btnp2').click(function () {
            $('.Result2').text(PlayerResult[2] += QuestionCost);
        });
        $('.btnp3').click(function () {
            $('.Result3').text(PlayerResult[3] += QuestionCost);
        });
        // Вычет очков    
        $('.btnm1').click(function () {
            $('.Result1').text(PlayerResult[1] -= QuestionCost);
        });
        $('.btnm2').click(function () {
            $('.Result2').text(PlayerResult[2] -= QuestionCost);
        });
        $('.btnm3').click(function () {
            $('.Result3').text(PlayerResult[3] -= QuestionCost);
        });


        $('.resetscore').click(function () {
            for(var i = 1; i < 4; i++){
            PlayerResult[i] = 0;
            Round = 1;
            Question = 1;
            QuestionCost = 10;
            $('.Result1').text(PlayerResult[1]);     
            $('.Result2').text(PlayerResult[2]);
            $('.Result3').text(PlayerResult[3]);
            $('.round').text('Раунд ' + Round);
            $('.question').text('Вопрос '+Question);
            }
            
    });
};
    $(document).ready(main);