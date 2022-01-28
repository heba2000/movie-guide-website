const INITIAL_STATE = [];

export default function favoritesReducer(state = INITIAL_STATE, action){
switch (action.type) {
    case "ADD_TO_FAVORITES":
        return [...state , action.payload];
        break;

    default:
        return state;
    }
} 