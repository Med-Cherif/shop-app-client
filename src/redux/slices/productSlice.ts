import { createSlice } from "@reduxjs/toolkit";

interface Product {
    [field: string]: any 
}

interface InitState {
    status: null | 'loading' | 'error' | 'success';
    error: string | string[] | null;
    product: Product,
    products: Product[],
    latestProducts: Product[],
    similarProducts: Product[],
}

const initialState: InitState = {
    status: null,
    error: null,
    product: {},
    products: [],
    latestProducts: [],
    similarProducts: []
}

const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loading: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        error: (state, action) => {
            state.status = 'error';
            state.error = action.payload
        },
        getLatestProducts: (state, action) => {
            state.status = 'success';
            state.latestProducts = action.payload.products
        },
        getSimilarProducts: (state, action) => {
            state.similarProducts = action.payload.products
        },
        getProducts: (state, action) => {
            state.status = 'success';
            state.products = action.payload.products
        },
        getSingleProduct: (state, action) => {
            state.status = 'success'
            state.product = action.payload.product;
        }
    }
})

export const productActions = product.actions;
const productReducer = product.reducer;
export default productReducer