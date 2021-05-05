import Api from '../config/Api'

// Register user
export const checkCode = async (code) => {
    try {
        const response = await Api.get(`/products/code/${code}`);
        return response;
    } catch(error) {
        return error;
    }
}