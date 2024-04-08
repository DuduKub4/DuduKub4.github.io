function updateDateTime() {
    var now = new Date();
    var dateElement = document.getElementById("currentDate");
    var timeElement = document.getElementById("currentTime");
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    dateElement.innerText = now.toLocaleDateString('pt-BR', options);
    timeElement.innerText = now.toLocaleTimeString('pt-BR');
}

// Atualiza a data e hora imediatamente
updateDateTime();

// Atualiza a data e hora a cada segundo
setInterval(function() {
    updateDateTime();
}, 1000);
