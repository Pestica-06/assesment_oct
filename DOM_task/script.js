document.getElementById('showHeaderText').onclick = function() {
    const headerText = document.querySelector('.header').textContent; 
    alert(headerText); 
};

document.getElementById('addBox').onclick = function() {
    const newBox = document.createElement('div'); // Create a new div
    newBox.className = 'box-style'; // Add the box style
    newBox.textContent = 'New Box'; // Set the text content
    document.querySelector('.container').appendChild(newBox); // Append to container
};

document.getElementById('removeBox').onclick = function() {
    const boxes = document.getElementsByClassName('box-style');
    if (boxes.length > 0) {
        boxes[boxes.length - 1].remove();
    }
};

document.getElementById('showBoxCount').onclick = function() {
    const boxCount = document.getElementsByClassName('box-style').length; 
    alert(`Number of boxes: ${boxCount}`);
};

const createLinkButton = document.createElement('button'); 
createLinkButton.textContent = 'Create Link'; 
document.querySelector('.container').appendChild(createLinkButton); 

createLinkButton.onclick = function() {
    const link = document.createElement('a'); 
    link.href = '#';
    link.textContent = 'link example';
    document.querySelector('.container').appendChild(link); 
};