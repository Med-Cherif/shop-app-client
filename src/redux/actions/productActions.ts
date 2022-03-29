import ProductApis from "../../apis/productApi";
import { productActions } from "../slices/productSlice";
import { AppDispatch } from "../store";

const productApi = new ProductApis();

const errorHandler = (error: any) => {
    const err = error?.response?.data?.message || error?.message;
    console.log(err);
    return err;
}

export const getSimilarProductAction = (categories: string[]) => async (dispatch: AppDispatch) => {

    let queryParam = '';

    for (let category of categories) {
        queryParam += `&categories=${encodeURIComponent(category)}`
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
        console.log(data.products)
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

export const getFilteredProductsAction = (filterQuery: { [field: string]: any }, cb?: () => void) => async (dispatch: AppDispatch) => {
    dispatch(productActions.loading());
    let queryParam: string | string[] = [];
    for (let key in filterQuery) {
        queryParam.push(`${encodeURIComponent(key)}=${encodeURIComponent(filterQuery[key])}`)
    }

    queryParam = queryParam.join('&');

    try {
        const { data } = await productApi.getFilteredProducts(queryParam);
        dispatch(productActions.getProducts({
            products: data.products
        }))
        if (cb) {
            cb()
        }
    } catch (error) {
        dispatch(productActions.error(errorHandler(error)))
    }
}