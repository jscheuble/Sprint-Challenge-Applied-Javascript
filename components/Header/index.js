// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let container = document.createElement('div');
    container.classList.add('header');
    let date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';
    let heading = document.createElement('h1');
    heading.textContent = 'Lambda Times';
    let temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';

    container.append(date, heading, temp);

    return container;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header());