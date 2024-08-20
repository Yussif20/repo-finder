import { cardsElements } from "./elements";

export const setSearchResult = (data) =>{
    let result ='';
    data.map((item)=>{
        result += `
            <article class="card">
                <img class="img" loading="lazy" src="${item.avatar_url}" />
                <h2 class="name"><a href="${item.html_url}" target="_blank">${item.login}</a></h2>
            </article>
        `
    })
    cardsElements.innerHTML = result;
}
