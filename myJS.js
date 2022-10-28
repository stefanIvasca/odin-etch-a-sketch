
let container=document.querySelector("#container");
const changeButton=document.querySelector('#changeButton');
let userChoice=16;

changeButton.style.margin='20px';
container.style.boxShadow='6px 6px 10px rgba(0,0,0,0.15), -6px -6px 10px rgba(0,0,0,0.15)';

function createGridRow(){
    let gridDivRow;
    let gridCell;
    for (let i=0; i<userChoice; i++){
        gridDivRow=document.createElement('div');
        gridDivRow.style.height=`${480/userChoice}px`;
        gridDivRow.className='gridDivRow';
        gridDivRow.style.display='flex';
        container.appendChild(gridDivRow);
        for (let j=0; j<userChoice; j++){
            gridCell=document.createElement('div');
            gridCell.style.width=`${480/userChoice}px`;
            gridCell.className='gridCell';
            gridCell.style.backgroundColor='white';
            gridDivRow.appendChild(gridCell);
        }
    }
    let allCells=document.querySelectorAll('div.gridCell');
    function colorHover(){
        allCells.forEach(function(item){
            item.addEventListener('mouseover', function(){
                item.style.backgroundColor='black';
            })
        })
    }
    colorHover();
}

createGridRow();

changeButton.addEventListener('click', function(){
    userChoice= + prompt('Please select a number up to 100');
    container.innerHTML='';
    if (userChoice>=100){
        alert('to big of a number');
        userChoice= + prompt('Please select a number up to 100');
    }
    console.log(userChoice);
    createGridRow();
})