import { CartItem, Pokemon, PixabayImage } from "@/app/Components/Containers/index";
import pokemonDB from "@/app/Components/Containers/Apis/pokeApi";
import storedImages from "@/app/Components/Containers/Apis/pixabay";
export type CartActions = | { type: "add-to-cart"; payload: { item: PixabayImage | Pokemon } }
                          | {type: "remove-from-cart";payload: { id: Pokemon["id"] | PixabayImage["id"] };}
                          | {type: "decrease-quantity";payload: { id: Pokemon["id"] | PixabayImage["id"] };}
                          | {type: "increase-quantity";payload: { id: Pokemon["id"] | PixabayImage["id"] };}
                          | { type: "clear-cart" }
                          | { type: 'buy' };
export type CartState = {
  pokemonData: Pokemon[];
  pixabayData: PixabayImage[];
  cart: CartItem[];
};
const initialCart = (): CartItem[] => {
  let localStorageCart: string | null = null;
    if (typeof window !== 'undefined') {
        localStorageCart = localStorage.getItem('cart');
    }
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const initialState: CartState = {
  pokemonData: pokemonDB,
  pixabayData: storedImages,
  cart: initialCart(),
};
const MIN_ITEMS = 1;
const MAX_ITEMS = 5;
export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  switch (action.type) {
    case 'add-to-cart': {
        const { item } = action.payload;
        if (!item) {
            console.error('Se intentó agregar un item indefinido al carrito.');
            return state;
        }
        const itemType = 'nombre' in item ? 'pokemon' : 'pixabayImage';
        const itemExists = state.cart.find(cartItem => cartItem.item && cartItem.item.id === item.id);
        let updatedCart: CartItem[] = [];
        if (itemExists) {
            updatedCart = state.cart.map(cartItem => {
                if (cartItem.item && cartItem.item.id === item.id && cartItem.quantity < MAX_ITEMS) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
        } else {
            updatedCart = [
                ...state.cart,
                {
                    id: item.id,
                    item,
                    type: itemType,
                    quantity: 1,
                },
            ];
        }
        return {
            ...state,
            cart: updatedCart,
        };
    }
    case "remove-from-cart": {
      const { id } = action.payload;
      const cart = state.cart.filter((item) => item.id !== id);
      return {
        ...state,
        cart,
      };
    }

    case "decrease-quantity": {
      const { id } = action.payload;
      const cart = state.cart.map((item) => {
        if (item.id === id && item.quantity > MIN_ITEMS) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      return {
        ...state,
        cart,
      };
    }

    case "increase-quantity": {
      const { id } = action.payload;
      const cart = state.cart.map((item) => {
        if (item.id === id && item.quantity < MAX_ITEMS) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        ...state,
        cart,
      };
    }

    case "clear-cart": {
      return {
        ...state,
        cart: [],
      };
    }
    case "buy":{
      return{
        ...state,
        cart:[],
      }
    }

    default:
      return state;
  }
};