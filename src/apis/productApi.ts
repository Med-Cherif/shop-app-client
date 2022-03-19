import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL + '/api/products';

export default class ProductApis {
    getLatestProducts() {
        return axios.get(`${apiUrl}?type=latest`)
    }

    getSimilarProducts(categories: string) {
        // &categories=field1&category=field2&category=field3
        return axios.get(`${apiUrl}?type=similar${categories}`)
    }

    getSearchedProducts(keyword: string) {
        return axios.get(`${apiUrl}?keyword=${keyword}`)
    }

    getSingleProduct(productID: string) {
        return axios.get(`${apiUrl}/single/${productID}`)
    }
}