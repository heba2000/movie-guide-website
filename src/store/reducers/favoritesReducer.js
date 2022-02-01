const INITIAL_STATE = [];

export default function favoritesReducer(state = INITIAL_STATE, action){
switch (action.type) {
    case "ADD_TO_FAVORITES":
        return [...state , action.payload];
        case "REMOVE_OF_FAVORITES":
            const removedArr = [...state.filter(movie => movie.id !== action.payload)]
            return removedArr;
    default:
        return state;
    }
} 