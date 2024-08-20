const USERS_API = `http://api.github.com/search/users?q=`;

const searchButton = document.querySelector(".button");
const searchInput = document.querySelector(".input");
const userInputElement = document.querySelector("input[value = 'users']");
const cardsElements = document.querySelector(".cards")

const setSearchResult = (data) =>{
    let result ='';
    data.map((item)=>{
        result += `
            <article class="card">
                <img class="img" loading="lazy" src="${item.avatar_url}" />
                <h2 class="name">${item.login}</h2>
            </article>
        `
    })
    cardsElements.innerHTML = result;
}

const performSearch = (searchTerm,isUserSelected)=>{
    const type = isUserSelected ? `+type:user` : `+type:org`;
    fetch(`${USERS_API}${searchTerm}${type}`).
    then(result => result.json()).
    then(response => setSearchResult(response.items))

   
}
searchButton.addEventListener("click",(e)=>{
    e.preventDefault();
    performSearch(searchInput.value,userInputElement.checked);
})
