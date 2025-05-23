const contain = document.getElementById('container-buttons');
const path = window.location.origin

const pages = [
    {
        page_name: "Formative 2",
        page_path: "../pages/formative 2"
    },
    {
        page_name: "Testing",
        page_path: "../pages/testing"
    },
    {
        page_name: "Tic Tac Toe",
        page_path: "./games/tictactoe"
    },
    {
        page_name: "S1 Activity #1",
        page_path: "../pages/summative 1/activity 1"
    },
    {
        page_name: "S1 Activity #2",
        page_path: "../pages/summative 1/activity 2"
    }
];

for(let i = 0; i < pages.length; i++){
    const newClickableDiv = document.createElement('div');
    newClickableDiv.textContent = pages[i].page_name;
    newClickableDiv.className = "buttons"
    newClickableDiv.addEventListener('click', function() {
        window.location.href = pages[i].page_path;
    });

    contain.appendChild(newClickableDiv)
}