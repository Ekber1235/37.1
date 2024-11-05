const board = document.querySelector('#board');


for (let i = 0; i < 8; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('td'); 

       
        if ((i + j) % 2 === 0) {
            cell.className = 'gray'; 
        } else {
            cell.className = 'black';
        }

        row.append(cell); 
    }
    board.append(row); 
}