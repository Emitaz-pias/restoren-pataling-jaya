import { CART_ITEM } from "../actions/types";

const initialState = {
    Cart: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART_ITEM:
            return {
                ...state,
                Cart: payload,
            };
        default:
            return state;
    }
};

export default CartReducer;