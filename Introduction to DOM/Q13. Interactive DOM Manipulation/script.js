document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('#item-list');
    const addButton = document.querySelector('#add-btn');
    let itemCount = 3;
    addButton.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = `New Item ${++itemCount}`;
        
        if (itemCount % 2 === 1) {
            newItem.style.fontWeight = 'bold';
            newItem.style.color = 'blue';
        } else {
            newItem.style.fontStyle = 'italic';
            newItem.style.color = 'red';
        }
        
        list.appendChild(newItem);
    });
});