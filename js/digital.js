//Reloj Digital
(function(){

    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

        var semana = ['Domingo,', 'Lunes,', 'Martes', 'Miercoles', 'Jueves','viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana];
        
        pDia.textContent = dia;

        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        pMes.textContent = meses[mes];

        pYear.textContent = year;

        if (horas >= 12){
            horas = horas - 12;
            ampm = 'PM';
        } else{
            ampm = 'AM';
        };
        
        if (horas == 0){
            horas = 12;
        };

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if(minutos < 10){ minutos = "0" + minutos };
        if(segundos < 10){ segundos = "0" + segundos };

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };

    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);

}());

// function startTime() {
//     var today = new Date(), hours = today.getHours(), minutes = today.getMinutes(),
//     date = today.getDate(), day = today.getDay(), month = today.getMonth(), year = today.getYear();

//     hours = (hours == 0) ? 12 : hours;
//     hours = (hours > 12) ? hours - 12 : hours;

//     hours = checkTime(hours);
//     minutes = checkTime(minutes);

//     var dia = ["Domingo", " Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado"],
//     mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//     var hr = document.getElementById('time').innerHTML = hours + ":" + minutes,
//     dt = document.getElementById('date').innerHTML = dia[day] + ", " + date + " De " + mes[month] + " De " + year;

//     var time = setTimeout(function() {
//         startTime();
//     }, 500);
// }
// function checkTime(e) {
//     if (e < 10) {
//         e = "0" + e;
//     }
//     return e;
// }