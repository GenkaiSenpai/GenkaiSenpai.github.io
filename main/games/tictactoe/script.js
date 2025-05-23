const c1r1 = document.getElementById('11');
const c1r2 = document.getElementById('12');
const c1r3 = document.getElementById('13');
const c2r1 = document.getElementById('21');
const c2r2 = document.getElementById('22');
const c2r3 = document.getElementById('23');
const c3r1 = document.getElementById('31');
const c3r2 = document.getElementById('32');
const c3r3 = document.getElementById('33');
const announce = document.getElementById('yes');
const buttonx = document.getElementById('button');
let cells = document.querySelectorAll('.cells');

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        clicking(cell); // Pass the clicked cell to the clicking function
    });
});

let playermoves = 1;
let flag = false;

buttonx.addEventListener('click', function() {
    let p1 = (c1r1.value + c1r2.value + c1r3.value);
    let p2 = (c2r1.value + c2r2.value + c2r3.value);
    let p3 = (c3r1.value + c3r2.value + c3r3.value);
    let p4 = (c1r1.value + c2r1.value + c3r1.value);
    let p5 = (c1r2.value + c2r2.value + c3r2.value);
    let p6 = (c1r3.value + c2r3.value + c3r3.value);
    let p7 = (c1r1.value + c2r2.value + c3r3.value);
    let p8 = (c3r1.value + c2r2.value + c1r3.value);

    if(p1 == 3 || p2 == 3 || p3 == 3 || p4 == 3 || p5 == 3 || p6 == 3 || p7 == 3 || p8 == 3){
        announce.innerHTML = "Player 1 Won!";
        flag = true;
        return
    } else if(p1 == 0 || p2 == 0 || p3 == 0 || p4 == 0 || p5 == 0 || p6 == 0 || p7 == 0 || p8 == 0){
        announce.innerHTML = "Player 2 Won!";
        flag = true;
        return
    }
    if(playermoves >= 10){
        announce.innerHTML = "It's a Draw!";
        flag = true;
        return;
    }
})

function clicking(x){
    if(flag) return;
    if(x.textContent !== "") return;
    if((playermoves % 2) == 0){
        x.textContent = "O";
        x.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        x.textContent = "X";
        x.value = 1;
        playermoves++;
    }
}