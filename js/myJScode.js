let TypeOfSite, design, adaptability;
let calc = {
    cost: [
        [500,1000,1500],
        [1100,1800,2000],
        [1500,2200,2500],
    ],
    days: [
        [1,2,3],
        [1,2,2],
        [3,2,3],
    ],
    run(TypeOfSite,design,adaptability){
        let sum = parseInt(calc.cost[0][TypeOfSite-1]) + parseInt(calc.cost[1][design-1]) + parseInt(calc.cost[2][adaptability-1]); 
        let days = parseInt(calc.days[0][TypeOfSite-1]) + parseInt(calc.days[1][design-1]) + parseInt(calc.days[2][adaptability-1]);
        alert('Сроки: ' + days + ' Стоимость: ' + sum);
    }
}

function FinalCost() { 
TypeOfSite = prompt('Какой тип сайта вам нужен? 1) Сайт-визитка 2) Корпоративный сайт 3) Интернет-магазин');
    if(TypeOfSite != 1 && TypeOfSite != 2 && TypeOfSite != 3){
        alert('Вы ввели что-то не так в параметре "Тип сайта"')
        FinalCost();
        return;
    }
design = prompt('Какой дизайн сайта вам нужен? 1) Шаблонный 2) Уникальный 3) WOW-Дизайн');
    if(design != 1 && design != 2 && design != 3){
        alert('Вы ввели что-то не так в параметре "Дизайн сайта"')
        FinalCost();
        return;
    }
adaptability = prompt('Какая адаптивность сайта вам нужна? 1) Только для ПК 2) Только для телефонов 3) ПК + Телефон');
    if(adaptability != 1 && adaptability != 2 && adaptability != 3){
        alert('Вы ввели что-то не так в параметре "Адаптивность сайт"')
        FinalCost();
        return;
    }
    calc.run(TypeOfSite,design,adaptability);

}
FinalCost();