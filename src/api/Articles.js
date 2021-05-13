import Api from '../config/Api'

export const getArticles = async (category) => {
    try {
        const response = await Api.get(`/articles/${category}`);
        return response.data;
    } catch(error) {
        return error;
    }
}

export const getArticle = async (id) => {
    try {
        const response = await Api.get(`/article/${id}`);
        return response.data;
    } catch(error) {
        return error;
    }
}