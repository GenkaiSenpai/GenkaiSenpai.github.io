const container = document.getElementById('orbContainer');

for (let i = 0; i < 30; i++) {
    const orb = document.createElement('div');
    orb.classList.add('orb');
    orb.style.left = Math.random() * 100 + 'vw';
    orb.style.top = Math.random() * 100 + 'vh';
    orb.style.animationDuration = 20 + Math.random() * 10 + 's';
    orb.style.animationDelay = Math.random() * 10 + 's';
    orb.style.opacity = 0.05 + Math.random() * 0.1;
    container.appendChild(orb);
}