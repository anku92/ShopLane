import Constants from "./Constants"

const EndPoints = {
    PRODUCTS_URL: `${Constants.BASE_API_URL}products/`,
    CATEGORIES_URL: `${Constants.BASE_API_URL}products/categories/`,
    PRODUCT_BY_CATEGORY_URL: `${Constants.BASE_API_URL}products/category/`,
    LOGIN_URL: `${Constants.BASE_API_URL}auth/login`,
    REGISTER_URL: `${Constants.BASE_API_URL}users`
}

export default EndPoints;