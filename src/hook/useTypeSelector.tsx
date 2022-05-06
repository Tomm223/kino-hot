import { TypedUseSelectorHook, useSelector } from "react-redux";
//import {createSelectorHook} from 'redux'
import { RootType } from "../store/rootReducer";

//
export const useTypeSelector: TypedUseSelectorHook<RootType> = useSelector
//export const useTypeSelector = createSelectorHook<RootType>()