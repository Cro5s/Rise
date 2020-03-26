import {
    RECEIVE_CART_ITEMS,
    RECEIVE_CART_ITEM,
    REMOVE_CART_ITEM
} from "../actions/cart_item_actions";

export default function (state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cartItems;
        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, action.cartItems);
        case REMOVE_CART_ITEM:
            let newState = Object.assign({}, state);
            const items = Object.values(newState);
            const itemId = items.findIndex(el => el._id === action.cartItemId);
            delete newState[itemId];
            return newState;
        default:
            return state;
    };
}