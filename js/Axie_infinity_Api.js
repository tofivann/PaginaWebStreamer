const ethAddress = "0x8768576bB1465965Ab4fFe2A85A081C429B305fB"

const query = `
query GetPvpBattleLogs($battleLogsPvpId: ID!, $from: Int!, $size: Int!) {
    battleLogsPvp(pvpId: $battleLogsPvpId, from: $from, size: $size) {
        results {
            winner {
                battlePlayerId
                rank
                trophy
            }
            loser {
                battlePlayerId
                rank
                trophy
            }
            startedAt
            endedAt
            draw
        }
    }
}
`;

const variables = {
    "battleLogsPvpId": ethAddress,
    "from": 0,
    "size": 50
};

// Función para mostrar los datos en el HTML
function displayMatches(matches) {
    const container = document.getElementById('match-history');
    const loader = document.getElementById('loader');

    // Oculta el mensaje de carga
    loader.style.display = 'none';

    if (matches.length === 0) {
        container.innerHTML = '<p>No se encontraron partidas.</p>';
        return;
    }

    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card');

        // Determina si es victoria, derrota o empate
        let result = '';
        if (match.draw) {
            result = 'Empate';
        } else if (match.winner && match.winner.battlePlayerId === ethAddress) {
            result = 'Victoria';
            matchCard.classList.add('win');
        } else {
            result = 'Derrota';
            matchCard.classList.add('loss');
        }

        matchCard.innerHTML = `
            <div>
                <h3>Resultado: ${result}</h3>
                <p>Fecha: ${new Date(match.startedAt * 1000).toLocaleDateString()}</p>
            </div>
            <div class="team-info">
                <p>Tu Rango: ${result === 'Victoria' ? match.winner.rank : match.loser.rank}</p>
                <p>Tus Trofeos: ${result === 'Victoria' ? match.winner.trophy : match.loser.trophy}</p>
            </div>
        `;
        container.appendChild(matchCard);
    });
}

// Llama a la API y muestra los datos
async function fetchMatchHistory() {
    try {
    const response = await fetch('https://api.allorigins.win/get?url=https://axieinfinity.com/graphql-server-v2/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
});

        const data = await response.json();
        const matchHistory = data.data.battleLogsPvp.results;
        displayMatches(matchHistory);
        
    } catch (error) {
        console.error("Error al obtener el historial de partidas:", error);
        document.getElementById('loader').innerHTML = 'Error al cargar los datos.';
    }
}

// Inicia la carga de los datos al cargar la página
fetchMatchHistory();