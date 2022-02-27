import { CART_ITEM } from "./types";

export const getCartItems = (item) => async (dispatch) => {
    const items = await item;
    dispatch({
        type: CART_ITEM,
        payload: items,
    });
}