const contain = document.getElementById('container-buttons');
const path = window.location.origin

const pages = [
    {
        page_name: "Aisah",
        page_path: "./friends/ais_external.html"
    },
    {
        page_name: "Lemuel",
        page_path: "./friends/lems_inline.html"
    },
    {   
        page_name: "Maverick",
        page_path: "./friends/mavs_internal.html"
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