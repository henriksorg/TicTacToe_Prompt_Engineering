let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
]
let currentPlayer = 'X';

function render() {
    const board = document.getElementById('tic-tac-toe-board');
    let tableHtml = '';  // Beginne mit einem leeren String für die Tabelle
    // Erstellt die Tabellenzellen
    for (let row = 0; row < 3; row++) {
        tableHtml += createRow(row);
    }
    // Umhüllt die Zeilen mit dem table-Tag und der entsprechenden ID
    tableHtml = `<table id="tic-tac-toe-board">${tableHtml}</table>`;
    // Setzt das innerHTML von board auf die erzeugte HTML-Tabelle
    board.innerHTML = tableHtml;
}


function createRow(row) {
    let rowHtml = '<tr>'; // Beginn einer neuen Zeile
    for (let col = 0; col < 3; col++) {
        let index = row * 3 + col;
        rowHtml += createCell(index); // Verwendet die createCell Funktion
    }
    rowHtml += '</tr>'; // Ende der Zeile
    return rowHtml;
}


function createCell(index) {
    // Prüft, ob ein Wert in der Zelle vorhanden ist
    if (fields[index] !== null) {
        // Wenn ein Wert vorhanden ist, gibt den Wert zurück
        return `<td class="tic-tac-toe-cell" onclick="handleCellClick(${index})">${fields[index]}</td>`;
    } else {
        // Wenn kein Wert vorhanden ist, gibt eine Zelle mit einem leeren String zurück
        return `<td class="tic-tac-toe-cell" onclick="handleCellClick(${index})"></td>`;
    }
}


function handleCellClick(index) {
    // Überprüfen, ob das Feld leer ist
    if (fields[index] === null) {
        // Setze das Feld auf den aktuellen Spieler
        fields[index] = currentPlayer;
        // Wechsle den Spieler
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        // Rendere das Board neu, um das Update anzuzeigen
        render();
    } else {
        // Wenn das Feld bereits besetzt ist, tu nichts
        console.log('Feld bereits besetzt.');
    }
}