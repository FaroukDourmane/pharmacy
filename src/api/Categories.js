import Api from '../config/Api'

// Register user
export const getCategories = async () => {
    try {
        const response = await Api.get(`/categories`);
        return response.data;
    } catch(error) {
        return error;
    }
}