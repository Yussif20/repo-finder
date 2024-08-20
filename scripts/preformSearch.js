import { setLoadingState } from "./setLoadingState";
import { setMessage } from "./setMessage";
import { setSearchResult } from "./setSearchResult";

const USERS_API = `http://api.github.com/search/users?q=`;

export const performSearch = (searchTerm,isUserSelected)=>{
    const type = isUserSelected ? `+type:user` : `+type:org`;

    if(!searchTerm.trim()){
        setMessage("Please fill out the search field 👆")
        return;
    }
    setMessage()
    setLoadingState(true)
    fetch(`${USERS_API}${searchTerm}${type}`).
    then(result => result.json()).
    then((response) =>{
        setSearchResult(response.items);
    }).finally(()=>{
        setLoadingState(false)
    })
}