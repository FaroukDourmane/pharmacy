import Api from '../config/Api'

export const getCategories = async () => {
    try {
        const response = await Api.get(`/categories`);
        return response.data;
    } catch(error) {
        return error;
    }
}

export const getCategoryById = async (id) => {
    try {
        const response = await Api.get(`/categories/${id}`);
        return response.data;
    } catch(error) {
        return error;
    }
}