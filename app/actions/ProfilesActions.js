export function setProfile(id) {
  return {
    type: 'SET_PROFILE',
    id
  };
}

export function setCart(cart) {
  return {
    type: 'SET_CART',
    cart
  };
}

export function addToCart(id) {
  return {
    type: 'CART_ADD',
    id
  };
}

export function removeFromCart(id) {
  return {
    type: 'CART_REMOVE',
    id
  };
}
