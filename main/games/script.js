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

c1r1.addEventListener('click', function() {
    if(flag) return;
    if(c1r1.textContent !== "") return;
    if((playermoves % 2) == 0){
        c1r1.textContent = "O";
        c1r1.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        c1r1.textContent = "X";
        c1r1.value = 1;
        playermoves++;
    }
})
c1r2.addEventListener('click', function() {
    if(flag) return;
    if(c1r2.textContent !== "") return;
    if((playermoves % 2) == 0){
        c1r2.textContent = "O";
        c1r2.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        c1r2.textContent = "X";
        c1r2.value = 1;
        playermoves++;
    }
})
c1r3.addEventListener('click', function() {
    if(flag) return;
    if(c1r3.textContent !== "") return;
    if((playermoves % 2) == 0){
        c1r3.textContent = "O";
        c1r3.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        c1r3.textContent = "X";
        c1r3.value = 1;
        playermoves++;
    }
})
c2r1.addEventListener('click', function() {
    if(flag) return;
    if(c2r1.textContent !== "") return;
    if((playermoves % 2) == 0){
        c2r1.textContent = "O";
        c2r1.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        c2r1.textContent = "X";
        c2r1.value = 1;
        playermoves++;
    }
})
c2r2.addEventListener('click', function() {
    if(flag) return;
    if(c2r2.textContent !== "") return;
    if((playermoves % 2) == 0){
        c2r2.textContent = "O";
        c2r2.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        c2r2.textContent = "X";
        c2r2.value = 1;
        playermoves++;
    }
})
c2r3.addEventListener('click', function() {
    if(flag) return;
    if(c2r3.textContent !== "") return;
    if((playermoves % 2) == 0){
        c2r3.textContent = "O";
        c2r3.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        c2r3.textContent = "X";
        c2r3.value = 1;
        playermoves++;
    }
})
c3r1.addEventListener('click', function() {
    if(flag) return;
    if(c3r1.textContent !== "") return;
    if((playermoves % 2) == 0){
        c3r1.textContent = "O";
        c3r1.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        c3r1.textContent = "X";
        c3r1.value = 1;
        playermoves++;
    }
})
c3r2.addEventListener('click', function() {
    if(flag) return;
    if(c3r2.textContent !== "") return;
    if((playermoves % 2) == 0){
        c3r2.textContent = "O";
        c3r2.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        c3r2.textContent = "X";
        c3r2.value = 1;
        playermoves++;
    }
})
c3r3.addEventListener('click', function() {
    if(flag) return;
    if(c3r3.textContent !== "") return;
    if((playermoves % 2) == 0){
        c3r3.textContent = "O";
        c3r3.value = 0;
        playermoves++;
    } else if((playermoves % 2) == 1){
        c3r3.textContent = "X";
        c3r3.value = 1;
        playermoves++;
    }
})