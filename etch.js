

function makeSolid(e) {
    const changePix = e.currentTarget;
    changePix.style.backgroundColor = 'black';
    return false;
}

function makeClear(e) {
    const changePix = e.currentTarget;
    changePix.style.backgroundColor = 'white';
    return false;
}


function removeAllChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetGrid() {
    const container = document.querySelector('.container');
    removeAllChildren(container);

    //todo add try
    squaresPerSide = getSize()

    startEtch(squaresPerSide);
    
    return false;
}


function getSize() {
    
    let squaresPerSide = 101;

    while (squaresPerSide > 100 || Number.isInteger(squaresPerSide) == false) {
        squaresPerSide = parseInt(prompt('How many squares per side should the grid be?'));
    }
    return squaresPerSide;
    
}


function startEtch (squaresPerSide) {

    var size = 0.75 * Math.min(screen.height,screen.width);

    
    const container = document.querySelector('.container');
    container.style.width = size +'px';
    
    
    numPixels = squaresPerSide*squaresPerSide;
    pixWidth = size / squaresPerSide;
    for (let i = 0; i < numPixels; i++) {
        const etchPix = document.createElement('div');
        etchPix.classList.add('etchPix');
        etchPix.setAttribute('id',i);
        //etchPix.textContent = "test";
        etchPix.style.textAlign = ("center");
        etchPix.style.margin = "0px";
        etchPix.style.border = '1px dashed black';
        etchPix.style.flexGrow = '1';
        etchPix.style.flexShrink = '0';
        etchPix.style.flexBasis = pixWidth-2 + "px";
        etchPix.style.height = pixWidth-2 + "px";
        container.appendChild(etchPix);
    }
    
    
    const etchPixAll = Array.from(document.querySelectorAll('.etchPix'));
    
    etchPixAll.forEach((pixel) => {
        pixel.addEventListener('mouseover', makeSolid);
        pixel.addEventListener('click', makeClear);
    })


}

startEtch(10)

const resetButton = document.querySelector('button');
resetButton.addEventListener('click',resetGrid);
