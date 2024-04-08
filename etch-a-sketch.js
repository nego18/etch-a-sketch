document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let emoji = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;

    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';

    body.appendChild(emoji);

    setTimeout(function() {
        emoji.remove();
    }, 1000)
})

const container = document.querySelector('#container');
container.style.width = '643px';
container.style.height = '643px';
container.style.border = '2px solid darkblue';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

let cuadro = document.querySelectorAll('.square');

cuadro.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.backgroundColor = 'yellow';
    });
});

cuadro.forEach(el => {
    el.addEventListener('mouseout', () => {
        setTimeout(() => {
            el.style.backgroundColor = 'white';
        }, 500)
    });
});


const btnGrid = document.getElementById('grid');
btnGrid.addEventListener('click', () => {
    const grid = parseInt(prompt('Give me the numbre of rows for the new grid'));

    if (grid <= 100) {
        const body = document.querySelector('#body');
        container.remove();
        const newContainer = document.createElement('div');
        newContainer.style.width = '643px';
        newContainer.style.height = '643px';
        newContainer.style.border = '2px solid red';
        newContainer.style.display = 'flex';
        newContainer.style.flexWrap = 'wrap';
        body.appendChild(newContainer);

        for (let i = 0; i < grid * grid; i++) {
            const square = document.createElement('div');
            square.classList.add('newSquare');
            square.style.width = 640 / grid + 'px';
            square.style.height = 640 / grid + 'px';
            newContainer.appendChild(square);
        }

        let cuadro2 = document.querySelectorAll('.newSquare');

        cuadro2.forEach(el => {
            el.addEventListener('mouseover', () => {
                el.style.backgroundColor = 'yellow';
            });
        });

        cuadro2.forEach(el => {
            el.addEventListener('mouseout', () => {
                setTimeout(() => {
                    el.style.backgroundColor = 'white';
                }, 500)
            });
        });
    } else {
        alert("Can't be more than 100");
    };
    
});