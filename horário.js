const dadosHorarios = {
    matutino: {
        turmas: [
            { id: "8ef", nome: "8º Ano — Ensino Fundamental" },
            { id: "9ef", nome: "9º Ano — Ensino Fundamental" },
            { id: "1em", nome: "1º Ano — Ensino Médio" },
            { id: "2em", nome: "2º Ano — Ensino Médio" },
            { id: "3em", nome: "3º Ano — Ensino Médio" }
        ],
        grades: {
            "8ef": [
                ["07:00 - 07:50", "Ciências", "Português", "Matemática", "Inglês", "História"],
                ["07:50 - 08:40", "Geografia", "Português", "Matemática", "Ciências", "Artes"],
                ["08:40 - 09:30", "Educação Física", "História", "Geografia", "Português", "Matemática"],
                ["INTERVALO", "Intervalo / Recreio (09:30 - 09:50)"],
                ["09:50 - 10:40", "Matemática", "Artes", "Inglês", "História", "Ciências"],
                ["10:40 - 11:30", "História", "Matemática", "Educação Cívica", "Geografia", "Português"]
            ],
            "9ef": [
                ["07:00 - 07:50", "História", "Geografia", "Matemática", "Português", "Ciências"],
                ["07:50 - 08:40", "Inglês", "História", "Matemática", "Português", "Ciências"],
                ["08:40 - 09:30", "Português", "Matemática", "Ciências", "Educação Física", "Geografia"],
                ["INTERVALO", "Intervalo / Recreio (09:30 - 09:50)"],
                ["09:50 - 10:40", "Ciências", "Português", "Artes", "Matemática", "Inglês"],
                ["10:40 - 11:30", "Matemática", "Artes", "Português", "História", "Educação Cívica"]
            ],
            "1em": [
                ["07:00 - 07:50", "Matemática", "Português", "História", "Física", "Biologia"],
                ["07:50 - 08:40", "Matemática", "Português", "Geografia", "Química", "Inglês"],
                ["08:40 - 09:30", "Física", "Biologia", "Matemática", "Português", "Educação Física"],
                ["INTERVALO", "Intervalo / Recreio (09:30 - 09:50)"],
                ["09:50 - 10:40", "História", "Química", "Artes", "Filosofia", "Sociologia"],
                ["10:40 - 11:30", "Geografia", "Inglês", "Projeto de Vida", "Matemática", "Português"]
            ],
            "2em": [
                ["07:00 - 07:50", "Português", "Matemática", "Física", "História", "Química"],
                ["07:50 - 08:40", "Biologia", "Matemática", "Química", "Geografia", "Português"],
                ["08:40 - 09:30", "Inglês", "História", "Português", "Matemática", "Física"],
                ["INTERVALO", "Intervalo / Recreio (09:30 - 09:50)"],
                ["09:50 - 10:40", "Educação Física", "Filosofia", "Biologia", "Sociologia", "Geografia"],
                ["10:40 - 11:30", "Projeto de Vida", "Artes", "Matemática", "Português", "Educação Cívica"]
            ],
            "3em": [
                ["07:00 - 07:50", "Física", "Química", "Matemática", "Biologia", "Português"],
                ["07:50 - 08:40", "Português", "História", "Matemática", "Geografia", "Redação"],
                ["08:40 - 09:30", "Matemática", "Geografia", "Português", "Física", "Redação"],
                ["INTERVALO", "Intervalo / Recreio (09:30 - 09:50)"],
                ["09:50 - 10:40", "Biologia", "Inglês", "História", "Química", "Filosofia"],
                ["10:40 - 11:30", "Sociologia", "Educação Física", "Atualidades", "Português", "Matemática"]
            ]
        }
    },
    vespertino: {
        turmas: [
            { id: "8ef", nome: "8º Ano — Ensino Fundamental" },
            { id: "9ef", nome: "9º Ano — Ensino Fundamental" },
            { id: "1em", nome: "1º Ano — Ensino Médio" },
            { id: "2em", nome: "2º Ano — Ensino Médio" },
            { id: "3em", nome: "3º Ano — Ensino Médio" }
        ],
        grades: {
            "8ef": [
                ["13:00 - 13:50", "Ciências", "Português", "Matemática", "Inglês", "História"],
                ["13:50 - 14:40", "Geografia", "Português", "Matemática", "Ciências", "Artes"],
                ["14:40 - 15:30", "Educação Física", "História", "Geografia", "Português", "Matemática"],
                ["INTERVALO", "Intervalo / Recreio (15:30 - 15:50)"],
                ["15:50 - 16:40", "Matemática", "Artes", "Inglês", "História", "Ciências"],
                ["16:40 - 17:30", "História", "Matemática", "Educação Cívica", "Geografia", "Português"]
            ],
            "9ef": [
                ["13:00 - 13:50", "História", "Geografia", "Matemática", "Português", "Ciências"],
                ["13:50 - 14:40", "Inglês", "História", "Matemática", "Português", "Ciências"],
                ["14:40 - 15:30", "Português", "Matemática", "Ciências", "Educação Física", "Geografia"],
                ["INTERVALO", "Intervalo / Recreio (15:30 - 15:50)"],
                ["15:50 - 16:40", "Ciências", "Português", "Artes", "Matemática", "Inglês"],
                ["16:40 - 17:30", "Matemática", "Artes", "Português", "História", "Educação Cívica"]
            ],
            "1em": [
                ["13:00 - 13:50", "Matemática", "Português", "História", "Física", "Biologia"],
                ["13:50 - 14:40", "Matemática", "Português", "Geografia", "Química", "Inglês"],
                ["14:40 - 15:30", "Física", "Biologia", "Matemática", "Português", "Educação Física"],
                ["INTERVALO", "Intervalo / Recreio (15:30 - 15:50)"],
                ["15:50 - 16:40", "História", "Química", "Artes", "Filosofia", "Sociologia"],
                ["16:40 - 17:30", "Geografia", "Inglês", "Projeto de Vida", "Matemática", "Português"]
            ],
            "2em": [
                ["13:00 - 13:50", "Português", "Matemática", "Física", "História", "Química"],
                ["13:50 - 14:40", "Biologia", "Matemática", "Química", "Geografia", "Português"],
                ["14:40 - 15:30", "Inglês", "História", "Português", "Matemática", "Física"],
                ["INTERVALO", "Intervalo / Recreio (15:30 - 15:50)"],
                ["15:50 - 16:40", "Educação Física", "Filosofia", "Biologia", "Sociologia", "Geografia"],
                ["16:40 - 17:30", "Projeto de Vida", "Artes", "Matemática", "Português", "Educação Cívica"]
            ],
            "3em": [
                ["13:00 - 13:50", "Física", "Química", "Matemática", "Biologia", "Português"],
                ["13:50 - 14:40", "Português", "História", "Matemática", "Geografia", "Redação"],
                ["14:40 - 15:30", "Matemática", "Geografia", "Português", "Física", "Redação"],
                ["INTERVALO", "Intervalo / Recreio (15:30 - 15:50)"],
                ["15:50 - 16:40", "Biologia", "Inglês", "História", "Química", "Filosofia"],
                ["16:40 - 17:30", "Sociologia", "Educação Física", "Atualidades", "Português", "Matemática"]
            ]
        }
    },
    noturno: {
        turmas: [
            { id: "1em", nome: "1º Ano — Ensino Médio" },
            { id: "2em", nome: "2º Ano — Ensino Médio" },
            { id: "3em", nome: "3º Ano — Ensino Médio" }
        ],
        grades: {
            "1em": [
                ["19:00 - 19:40", "Matemática", "Português", "História", "Física", "Biologia"],
                ["19:40 - 20:20", "Matemática", "Português", "Geografia", "Química", "Inglês"],
                ["20:20 - 21:00", "Física", "Biologia", "Matemática", "Português", "Filosofia"],
                ["INTERVALO", "Intervalo / Jantar (21:00 - 21:15)"],
                ["21:15 - 21:55", "História", "Química", "Artes", "Sociologia", "Educação Física"],
                ["21:55 - 22:35", "Geografia", "Inglês", "Projeto de Vida", "Matemática", "Português"]
            ],
            "2em": [
                ["19:00 - 19:40", "Português", "Matemática", "Física", "História", "Química"],
                ["19:40 - 20:20", "Biologia", "Matemática", "Química", "Geografia", "Português"],
                ["20:20 - 21:00", "Inglês", "História", "Português", "Matemática", "Física"],
                ["INTERVALO", "Intervalo / Jantar (21:00 - 21:15)"],
                ["21:15 - 21:55", "Filosofia", "Biologia", "Sociologia", "Geografia", "Educação Física"],
                ["21:55 - 22:35", "Projeto de Vida", "Artes", "Matemática", "Português", "Educação Cívica"]
            ],
            "3em": [
                ["19:00 - 19:40", "Física", "Química", "Matemática", "Biologia", "Português"],
                ["19:40 - 20:20", "Português", "História", "Matemática", "Geografia", "Redação"],
                ["20:20 - 21:00", "Matemática", "Geografia", "Português", "Física", "Redação"],
                ["INTERVALO", "Intervalo / Jantar (21:00 - 21:15)"],
                ["21:15 - 21:55", "Biologia", "Inglês", "História", "Química", "Filosofia"],
                ["21:55 - 22:35", "Sociologia", "Atualidades", "Português", "Matemática", "Educação Física"]
            ]
        }
    }
};

const selectTurno = document.getElementById("select-turno");
const selectTurma = document.getElementById("select-turma");
const tabelaCorpo = document.getElementById("tabela-corpo");

function atualizarTurmasPorTurno() {
    const turnoSelecionado = selectTurno.value;
    const turmasDisponiveis = dadosHorarios[turnoSelecionado].turmas;

    selectTurma.innerHTML = "";

    turmasDisponiveis.forEach(turma => {
        const option = document.createElement("option");
        option.value = turma.id;
        option.textContent = turma.nome;
        selectTurma.appendChild(option);
    });

    renderizarTabelaHorarios();
}

function renderizarTabelaHorarios() {
    const turnoSelecionado = selectTurno.value;
    const turmaSelecionada = selectTurma.value;
    const grade = dadosHorarios[turnoSelecionado].grades[turmaSelecionada] || [];

    tabelaCorpo.innerHTML = "";

    grade.forEach(linha => {
        const tr = document.createElement("tr");

        if (linha[0] === "INTERVALO") {
            tr.classList.add("linha-intervalo");
            tr.innerHTML = `<td colspan="6">${linha[1]}</td>`;
        } else {
            tr.innerHTML = `
                <td><strong>${linha[0]}</strong></td>
                <td>${linha[1]}</td>
                <td>${linha[2]}</td>
                <td>${linha[3]}</td>
                <td>${linha[4]}</td>
                <td>${linha[5]}</td>
            `;
        }

        tabelaCorpo.appendChild(tr);
    });
}

selectTurno.addEventListener("change", atualizarTurmasPorTurno);
selectTurma.addEventListener("change", renderizarTabelaHorarios);

atualizarTurmasPorTurno();