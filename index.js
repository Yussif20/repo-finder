import {
    searchButton,
    searchInput,
    userInputElement
    } from "./scripts/elements"
import { performSearch } from "./scripts/preformSearch";


searchButton.addEventListener("click",(e)=>{
    e.preventDefault();
    performSearch(searchInput.value,userInputElement.checked);
})
