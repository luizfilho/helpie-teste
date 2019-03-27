import * as actionsTypes from "../actionsTypes";

export const addCliente = e => {
  return {
    type: actionsTypes.ADD_CLIENTE,
    payload: e
  };
};
