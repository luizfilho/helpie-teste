import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import ClientesReducer from "./clientesReducer";

const reducers = combineReducers({ clientes: ClientesReducer, form });
export default reducers;
