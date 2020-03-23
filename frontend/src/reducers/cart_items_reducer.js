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
            return action.cartItems.cartItem;
        case REMOVE_CART_ITEM:
            let newState = Object.assign({}, state);
            delete newState[action.cartItemId];
            return newState;
        default:
            return state;
    };
}