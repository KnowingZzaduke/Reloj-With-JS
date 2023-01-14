function starTime(){
    let i = 0;
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ap = (hours < 12) ? "<span>AM</span>" : "<span>PM</span>"
    hours = (hours > 12) ? hours - 12 : hours;
    //
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    const mostrarTiempo = document.querySelector('.clock');
    mostrarTiempo.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ap; 
    
    
    function checkTime(i){
        if(i > 10){
            i = 0 + i;
        }else{
            return i;
        }
    }

let months = ["Enero", "Febrero", "Marzo", "Abrirl", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let days = ["Lunes", "Martes", "Míercoles", "Jueves", "Viernes"];
let curWeekDay = days[today.getDay()];
let curDay = today.getDate();
let curMouth = months[today.getMonth()];
let curYear = today.getFullYear();
let date = curWeekDay + ", " + curDay + ", " + curMouth + ", " + curYear + ", ";
let mostrarFecha = document.querySelector('.date');
mostrarFecha.innerHTML = date;
}

let time = setInterval(() => {
    starTime();
}, 1000);

