let size = 16;
const container = document.querySelector('#container');
let Mode = 'color';
let currentColor = 'black';
let mousedown = false;
const slidervalue = document.getElementById('slidervalue');
document.body.onmousedown = () => {mousedown = true};
document.body.onmouseup = () => {mousedown = false};

//Colorpicker-changes currentcolor variable based on input
const colorpicker = document.querySelector("#colorpicker");
colorpicker.addEventListener("input", () => {
    currentColor = colorpicker.value;
    Mode = 'color';
});

//Rainbow mode
const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", ()=>{Mode = 'rainbow'});

//Erase mode
const erase = document.querySelector("#erase");
erase.addEventListener("click",()=>{Mode = 'erase'});

//sizeslider
const sizeslider = document.querySelector("#sizeslider");
sizeslider.addEventListener('input', () => {
    size = sizeslider.value;
    slidervalue.textContent = `${size}x${size}`;
    clearGrid();
    setupgrid(size);
})

//Clear
const clear = document.getElementById('clear')
clear.addEventListener('click',()=>{
    clearGrid();
    setupgrid(size);
});

function changeColor(e) 
{
    if (e.type === 'mouseover' && !mousedown)
    {
        return;
    }

    if (Mode === 'color') 
    {
      e.target.style.backgroundColor = currentColor;
    } 

    if (Mode === 'rainbow') 
    {
        R = Math.floor(Math.random() * 256)
        G = Math.floor(Math.random() * 256)
        B = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    } 

    if (Mode === 'erase') 
    {
      e.target.style.backgroundColor = '#fefefe';
    }
}

function setupgrid(size)
{
    let len = 600.0/size;
    for(i = 0; i < size*size; i++)
    {
        const grid = document.createElement('div');
        grid.style.cssText = `width: ${len}px; height: ${len}px;flex-shrink:0; border: 0px solid black; margin:0px`;
        grid.addEventListener('mouseover',changeColor);
        grid.addEventListener('mousedown',changeColor);
        container.appendChild(grid);
    }
}

function clearGrid()
{
    container.innerHTML='';
}

setupgrid(size);
