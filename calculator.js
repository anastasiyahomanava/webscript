// function for calculator
let divCounter = document.getElementsByClassName("calculator__card")[0];
let button = document.getElementsByClassName("btn-purple")[0];
let inputsChoice =  document.getElementsByClassName("choice");
let inputsCalcut =  document.getElementsByClassName("calcut");
let show_result = document.getElementsByClassName("calculator__card--text")[0];
let label = document.getElementsByClassName("secondLabel");
let button_Back = document.getElementsByClassName("btn-back")[0];

let dev = [{Name:"Верстка Landing Page",cost:"от 100 рублей"},{Name:"Адаптивная версткаx",cost:"от 110 рублей"},{Name:"Разработка интернет-магазинаx",cost:"от 120 рублей"},{Name:"Работа с базой данных",cost:"от 130 рублей"},{Name:"Доработка сайтовx",cost:"от 140 рублей"},{Name:"Комплексная разработка",cost:"от 100 рублей"}];
let UX = [{Name:"Индивидуальный дизайн",cost:"от 100 рублей"},{Name:"Проектирование веб-сайтов",cost:"от 110 рублей"},{Name:"Дизайн Landing Page",cost:"от 120 рублей"},{Name:"UX/UI дизайн",cost:"от 130 рублей"},{Name:"Дизайн полиграфии",cost:"от 140 рублей"},{Name:"Брендинг и многое другое",cost:"от 100 рублей"}];
let prom = [{Name:"SMM (Реклама в соцсетях)", cost:"от 100 рублей"},{Name:"SEO-продвижение",cost:"от 110 рублей"},{Name:"Viber и SMS-рассылка", cost:"от 120 рублей"},{Name:"Таргетинг", cost:"от 130 рублей"},{Name:"Контекстная реклама", cost:"от 140 рублей"},{Name:"Бесплатная консультация",cost:"от 100 рублей"}];
let found = [{Name:"Анализ целевой аудитории",cost:"от 100 рублей"},{Name:"Привлечение новых клиентов",cost:"от 110 рублей"},{Name:"Оценка потребностей клиентов", cost:"от 120 рублей"},{Name:"Разработка под конкретную ЦА", cost:"от 130 рублей"},{Name:"Анализ конкурентов",cost:"от 140 рублей"},{Name:"Бесплатная консультация",cost:"от 100 рублей"}];
let video = [{Name:"Съемка видеороликов",cost:"от 100 рублей"},{Name:"Видео-дизайн",cost:"от 110 рублей"},{Name:"Креативная реклама", cost:"от 120 рублей"},{Name:"Раскрутка в YouTube", cost:"от 130 рублей"},{Name:"Генерация креативных идей для", cost:"от 140 рублей"},{Name:"Видео визитка",cost:"от 100 рублей"}];
let support = [{Name:"Помощь выбора домена",cost:"от 100 рублей"},{Name:"Круглосуточная техподдержка",cost:"от 110 рублей"},{Name:"Исправление ошибок на сайте", cost:"от 120 рублей"},{Name:"Помощь с формами", cost:"от 130 рублей"},{Name:"Помощь в размещении контента",cost:"от 140 рублей"},{Name:"Бесплатная консультация",cost:"от 100 рублей"}];

let showChoice = function()
{ 
    [].forEach.call(inputsChoice, (i) => 
        {
            if(i.checked)
            {
                setTwo(i.id)
            }
        }
    )                      
}
let showCalcut = function()
{ 
    [].forEach.call(inputsCalcut, (i) => 
    {
        if(i.checked)
        {
            show_result.getElementsByTagName("span")[0].innerText = i.cost;
        }
    })                      
}

button.addEventListener("click", showChoice);

[].forEach.call(inputsCalcut, (i) => i.addEventListener("click", showCalcut));

let creatForm = function(id,div){
    [].forEach.call(inputsCalcut, (elem,index ) =>{elem.name = id, elem.value = div[index]["Name"], elem.cost = div[index]["cost"]});
    [].forEach.call(label, (elem, index)=>{elem.innerHTML = div[index]["Name"]})
}


let setTwo = function(id){

    /// скрываем первую форму и кнопку вперед
    document.getElementsByClassName("calculator__card-content")[0].style.display = "none";

    /// показываем вторую форму 
    document.getElementsByClassName("calculator__card-content--second")[0].style.display = "block";
    
    switch(id){
        case "dev":
            
            return  creatForm(id,dev);

        case "UX": 

        return  creatForm(id,UX);

        case "prom":
            
        return  creatForm(id,prom)

        case "found":

        return  creatForm(id,found)

        case "video":

        return  creatForm(id,video)

        case "support": 

        return  creatForm(id,support)   

        default: console.log("nathing")  

    }
};
        
    //// возврат к первой форме
let BackFirstForm = function()
{
    /// скрываем вторую форму и кнопку вперед
    document.getElementsByClassName("calculator__card-content")[0].style.display = "block";

    /// показываем первую форму 
    document.getElementsByClassName("calculator__card-content--second")[0].style.display = "none";
}
                        /// кнопка назад клик
button_Back.addEventListener("click", BackFirstForm)