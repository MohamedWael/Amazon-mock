import Product from "@/app/response/product";


export const CART_ADD_PRODUCT_ACTION = "cart/add";
export const CART_REMOVE_PRODUCT_ACTION = "cart/remove";

export interface CartAction {
    type: string,
    payload: Product
}

type Action = CartAction;

export default function cartReducer(state: Product[] = [], action: Action) {
    console.log("state.length: " + state.length)
    console.log("Products added to cart: ")
    console.log(state)
    switch (action.type) {
        case CART_ADD_PRODUCT_ACTION:
            if (state.some(product => product.id === action.payload.id)) {
                return state.map(product =>
                    product.id === action.payload.id
                        ? {...product, quantity: (product.quantity || 0) + 1}
                        : product
                );
            } else {
                return [...state, {...action.payload, quantity: 1}];
            }

        case CART_REMOVE_PRODUCT_ACTION:
            return state
                .map(product =>
                    product.id === action.payload.id
                        ? {...product, quantity: (product.quantity || 0) - 1}
                        : product
                )
                .filter(product => (product.quantity || 0) >= 0); // Remove products with quantity 0

        default:
            return state
    }
}


