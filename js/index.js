//Recargar Pagina
function openUrl(url, container) {
    $.get(url, {}, function(data) {
        $("#" + container).html(data);
    });
};

//Reloj Analógico
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;

});

//FECHA
(function(){

    var actualizarHora = function(){
        var fecha = new Date(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        var pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

        var semana = ['Domingo,', 'Lunes,', 'Martes,', 'Miercoles,', 'Jueves,','viernes,', 'Sabado,'];
        pDiaSemana.textContent = semana[diaSemana];
        
        pDia.textContent = dia;

        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        pMes.textContent = meses[mes];

        pYear.textContent = year;

    };

    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);

}());