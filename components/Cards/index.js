// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const parent = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log(res.data.articles);
        Object.values(res.data.articles).forEach(item => {
            item.forEach(item => parent.append(articleMaker(item)));
        })
    })
    .catch(err => {
        console.log(err);
    });


function articleMaker(obj) {
    let card = document.createElement('div');
    card.classList.add('card');
    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = obj.headline;
    let author = document.createElement('div');
    author.classList.add('author');
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    let image = document.createElement('img');
    image.src = obj.authorPhoto;
    let name = document.createElement('span');
    name.textContent = obj.authorName;
    
    imageContainer.append(image);
    author.append(imageContainer, name);
    card.append(headline, author);

    return card;
}