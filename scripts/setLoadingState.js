import { loaderElement } from "./elements"
import { setSearchResult } from "./setSearchResult";

export const setLoadingState = (loadingState)=>{
    loaderElement.classList.toggle("hidden",!loadingState);
    loadingState && setSearchResult(null)
}