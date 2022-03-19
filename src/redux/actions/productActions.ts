import ProductApis from "../../apis/productApi";
import { productActions } from "../slices/productSlice";
import { AppDispatch, RootState } from "../store";

const productApi = new ProductApis();

const errorHandler = (error: any) => {
    const err = error?.response?.data?.message || error?.message;
    console.log(err);
    return err;
}

export const getSimilarProductAction = (categories: string[]) => async (dispatch: AppDispatch) => {

    let queryParam = '';

    for (let category of categories) {
        queryParam += `&categories=${category}`
    }

    try {
        const { data } = await productApi.getSimilarProducts(queryParam);
        dispatch(productActions.getSimilarProducts({
            products: data.products
        }))
    } catch (error) {
        dispatch(productActions.error(errorHandler(error)))
    }
}

export const getSingleProductAction = (productID: string) => async (dispatch: AppDispatch) => {
    dispatch(productActions.loading());
    try {
        const { data } = await productApi.getSingleProduct(productID);
        dispatch(productActions.getSingleProduct({
            product: data.product
        }))
    } catch (error) {
        dispatch(productActions.error(errorHandler(error)))
    }
}

export const getSearchedProductsAction = (keyword: string) => async (dispatch: AppDispatch) => {
    dispatch(productActions.loading());
    try {
        const { data } = await productApi.getSearchedProducts(keyword);
        dispatch(productActions.getProducts({
            products: data.products
        }))
    } catch (error) {
        dispatch(productActions.error(errorHandler(error)))
    }
}

export const getLatestProductsAction = () => async (dispatch: AppDispatch) => {
    dispatch(productActions.loading());
    try {
        const { data } = await productApi.getLatestProducts();
        dispatch(productActions.getLatestProducts({
            products: data.products
        }))
    } catch (error) {
        dispatch(productActions.error(errorHandler(error)))
    }
}