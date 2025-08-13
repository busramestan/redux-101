import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterReducer } from "./counterSlice";
import { usersApi } from "./api";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [usersApi.reducerPath]: usersApi.reducer, //bir objeyi key olarakkullanıcınca köşeli parantzde yazarız.
    },
    middleware: (getDefaultMiddleware) =>  //async işlemler middleware tarafından yapılır. arakatmandır. api istekerlerini yapar.storela ui arasına giren ve veri isterklerini yöneten katmandır. Her istek buranın üzerinde geçer.
        getDefaultMiddleware().concat(usersApi.middleware),
})

// Store'un içindeki kısımları tiplendiriyoruz
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Hooks
// Store'a action'lar dispatch edilir (gönderilir)
export const useAppDispatch: () => AppDispatch = useDispatch;
// Store'dan veriler seçilir (select edilir)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

