console.log('JS CONECTADO')
function actualizarFecha() {
    const fecha = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaString = fecha.toLocaleDateString(undefined, opciones);
    document.querySelector('.fecha').textContent = fechaString;
}

function actualizarTiempo() {
    const fecha = new Date();
    const hora = fecha.getHours();
    const minuto = fecha.getMinutes();
    const segundo = fecha.getSeconds();

    const tiempoString = `${formatoTiempo(hora)}:${formatoTiempo(minuto)}:${formatoTiempo(segundo)}`;
    document.querySelector('.tiempo').textContent = tiempoString;
}

function formatoTiempo(tiempo) {
    return tiempo < 10 ? `0${tiempo}` : tiempo;
}

actualizarFecha()
setInterval(actualizarTiempo, 1000);