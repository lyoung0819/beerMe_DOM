// console.log('Hello from the index.js!')

// const exampleHeader = document.getElementById('example')
// console.log(exampleHeader)

// function handleEvent(event){
//     console.log('The event has happened');
//     console.log(event);
//     exampleHeader.innerHTML = 'Something else'
// }

// exampleHeader.addEventListener('mouseover', handleEvent);



// Get the color buttons
let colorButtons = document.getElementsByClassName('light-dark-button')
console.log(colorButtons); // array (HTML collection)
// Loop through the buttons and add a clieck event listerner to each button 
for (let btn of colorButtons){
    btn.addEventListener('click', changeBackgroundColor)
}

// Event Listener that will change the background color 
function changeBackgroundColor(e){
    console.log('Color button clicked')
    console.log(e.target.value);
    if (e.target.value === 'Dark'){
        document.body.style.backgroundColor = '#C96E12'
    } else {
        document.body.style.backgroundColor = '#FFF897'
    }
}


