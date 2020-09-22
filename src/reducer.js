//initialise the initial state
export const initialState = {
	basket: [],
	user: null,
};
// Selector for total  in the cart
export const getBasketTotal = (basket) =>
	//maps throught the basket and tallies the total
	basket?.reduce((amount, item) => item.price + amount, 0);
//always listening for dispatch
const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'EMPTY_BASKET':
			return {
				...state,
				 basket: []
			}
		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product(id:${action.id} as it is not in the basket)`
				);
            }
            return {
                ...state,
                basket:newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
		default:
			return state;
	}
};
export default reducer;
