/* eslint-disable no-underscore-dangle */

import { Map, fromJS } from 'immutable';
import rp from 'request-promise';

async function setProfile(state, action) {
  // todo: determine uri based on on env vars
  const opts = { uri: `${process.env.DB_URL}/profile/${action.id}`, json: true };
  const nextState = await rp(opts)
    .then((profile) => {
      return profile;
    })
    .catch((err) => {
      throw new Error(err);
    });
  return state.merge(fromJS(nextState));
}

function addToCart(state, action) {
  const nextCart = state.get('cart').push(action.id);

  // $.ajax({
  //   type: 'POST',
  //   url: '/products/cart/update',
  //   data: JSON.stringify({ cart: nextCart }),
  //   contentType: 'application/json',
  //   success(response) {
  //     console.log(response);
  //   }
  // });

  return state.set('cart', nextCart);
}

function removeFromCart(state, action) {
  const cart = state.get('cart');
  const index = cart.findIndex(id => id === action.id);
  const nextCart = cart.delete(index);

  // $.ajax({
  //   type: 'POST',
  //   url: '/products/cart/update',
  //   data: JSON.stringify({ cart: nextCart }),
  //   contentType: 'application/json',
  //   success(response) {
  //     console.log(response);
  //   }
  // });

  return state.set('cart', nextCart);
}

export default async function profileReducer(state = Map(), action) {
  switch (action.type) {
    case 'SET_PROFILE':
      const nextState = await setProfile(state, action);
      return nextState;
    case 'SET_CART':
      return state.set('cart', fromJS(action.cart));
    case 'CART_ADD':
      return addToCart(state, action);
    case 'CART_REMOVE':
      return removeFromCart(state, action);
    default:
      return state;
  }
}
