// Para adicionar ou mudar um evento, é só editar esta lista.
const eventos = [
    {
        dia: '19',
        mes: 'nov',
        titulo: 'consarte',
        horario: '19:00',
        foto: 'formatura.jpg'
    },
    {
        dia: '20',
        mes: 'nov',
        titulo: ' (Dia Nacional de Zumbi e da Consciência Negra)',
        ImageData eventos.1
    },
    {
        dia: '25/26',
        mes: 'DEZ',
        titulo: 'interclase',
        horario: '07:00 as 11:50  - Quadra da Escola',
        foto: 'patria.jpg'
    },
    {
        dia: '18',
        mes: 'dez',
     titulo: 'ultimo dia de aula',
        
    }
];

const lista = document.getElementById('lista-eventos');

eventos.forEach(function (e) {
    const item = document.createElement('div');
    item.className = 'evento';

    item.innerHTML =
        '<div class="evento-data"><strong>' + e.dia + '</strong><span>' + e.mes + '</span></div>' +
        '<img class="evento-foto" src="' + e.foto + '" alt="' + e.titulo + '" onerror="this.removeAttribute(\'src\')">' +
        '<div class="evento-info">' +
            '<h4>' + e.titulo + '</h4>' +
            '<p class="hora">' + e.horario + '</p>' +
            '<p class="desc">' + e.descricao + '</p>' +
        '</div>';

    lista.appendChild(item);
});







