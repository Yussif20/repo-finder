import { setSearchResult } from "./setSearchResult";

const USERS_API = `http://api.github.com/search/users?q=`;

export const performSearch = (searchTerm,isUserSelected)=>{
    const type = isUserSelected ? `+type:user` : `+type:org`;
    fetch(`${USERS_API}${searchTerm}${type}`).
    then(result => result.json()).
    then((response) => {
        setSearchResult(response.items)
        console.log(response.items)
    })
}