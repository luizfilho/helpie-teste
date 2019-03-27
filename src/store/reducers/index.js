import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import ClientesReducer from "./clientesReducer";

export default combineReducers({ clientes: ClientesReducer, form });
