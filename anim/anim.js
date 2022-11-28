let end = Date.now() + 2000;
let colors = ['#bb0000', '#ffffff'];

function explosion() {
    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });
        
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

}


window.addEventListener('load', explosion)



// cycleColor = '#325FAD';



function change() {
    cycleColor = document.querySelector('#color').value
    let part1 = document.querySelector('#path2458')
    let part2 = document.querySelector('#path2484')
    let part3 = document.querySelector('#path2462')
    let part4 = document.querySelector('#path3276')

    part1.style.fill = cycleColor
    part2.style.fill = cycleColor
    part3.style.fill = cycleColor
    part4.style.fill = cycleColor
}

document.querySelector('#btn').addEventListener('click', change)