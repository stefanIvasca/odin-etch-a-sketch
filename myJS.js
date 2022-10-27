let container=document.querySelector("#container");

for (let i=0; i<256; i++){
    let gridDiv=document.createElement('div');
    gridDiv.className='gridDiv';
    gridDiv.style.backgroundColor='lightblue';
    gridDiv.style.height='30px';
    gridDiv.style.width='30px';
    container.appendChild(gridDiv);
}
