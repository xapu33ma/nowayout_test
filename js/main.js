let countDownDate = new Date("Aug 1, 2020 00:00:00").getTime();
// Обновляєм таймер каждую секунду
let countDownFunction = setInterval(function(){
    //время на данный момент
    let now = new Date().getTime();
    // Вычитываем промежуток времени между установленным временем
    let distance = countDownDate - now;
    //высчитываем время для часов,минут,секунд
    let hours = Math.floor(distance / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000*60)) /  1000);
    //выдаем результат на сайт
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
    if (distance < 0){
        clearInterval(countDownFunction);
        document.getElementById("timer").innerHTML = "Time is out!";
    }
}, 1000);