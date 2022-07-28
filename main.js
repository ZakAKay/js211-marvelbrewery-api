// require("dotenv").config(); //standard for importing outside files or code

// console.log(process.env); //

// const api_key = process.env.SECRET_API_KEY;

// console.log(api_key);

let arrayOfCharacters = [];

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  marvelHeroes();
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfCharacters
const marvelHeroes = () => {
  fetch(
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d1c7a12f111e5223abc04519933d9cc2&hash=2a419df310c9ca8b004905f6f564a553&limit=10"
  )
    .then((res) => res.json())
    .then((post) => (arrayOfCharacters = post.data.results))
    .then(() => console.log("hellothere", arrayOfCharacters));
};

// This function logs the results in your browser's console
// const consolePosts = () => {
// }
 let has = [];
let wants = [];
// this function creates elements inside the all-characters ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById("all-characters");
  arrayOfCharacters.map((post, index) => {
    console.log("index", index, "post", post);
    const li = document.createElement("li");
    const dontHave = document.createElement("button")
    dontHave.innerHTML = 'Dont have'
    dontHave.addEventListener('click', function(){moveToDontHaves(post)})
    const have = document.createElement("button")
    have.innerHTML = 'Have'
    have.addEventListener('click', function(){moveToHaves(post)})
    const img = document.createElement("img");
    img.src = `${post.thumbnail.path}.${post.thumbnail.extension}`;
    //  img.src = post.thumbnail.path + "." + post.thumbnail.extension   same as the line above
    const text = document.createTextNode(`#${index}, Title: ${post.name}:`);
    li.appendChild(text);
    li.append(img);
    li.append(dontHave)
    li.append(have)
    allPosts.append(li);
  });
};

const moveToHaves = (character) => {
  if (!has.includes(character)) {
    has.push(character)
  }
  const haves = document.getElementById("haves");
  haves.innerHTML = null
  displayHaves()
console.log(has)
}

const moveToDontHaves = (character) => {
  if (wants.includes(character)) 
  {} else {
    wants.push(character)
  }
  const haveNots = document.getElementById("have-nots");
  haveNots.innerHTML = null
    displayDontHaves()
    console.log(haveNots)
}

const displayHaves = () => {
  const haves = document.getElementById("haves");
  has.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = `${post.thumbnail.path}.${post.thumbnail.extension}`;
    const text = document.createTextNode(`#${index}, Title: ${post.name}:`);
    li.appendChild(text);
    li.append(img);
    haves.append(li);
  })
}

const displayDontHaves = () => {
  const haveNots = document.getElementById("have-nots");
  wants.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = `${post.thumbnail.path}.${post.thumbnail.extension}`;
    const text = document.createTextNode(`#${index}, Title: ${post.name}:`);
    li.appendChild(text);
    li.append(img);
    haveNots.append(li);
  })
}

// const herosIDontHave = arrayOfCharacters(3, 7, 9)
//     herosIDontHave();
