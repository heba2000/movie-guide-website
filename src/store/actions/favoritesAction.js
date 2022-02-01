export const addToFavorites = (payload)=>{
    return {
        type :"ADD_TO_FAVORITES",
        payload,
    }
}
export const removeFromFavorites = (payload)=>{
    return {
        type :"REMOVE_OF_FAVORITES",
        payload,
    }
}

