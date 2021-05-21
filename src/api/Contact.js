import Api from '../config/Api'

export const sendEmail = async (reqData) => {
    try {
        const response = await Api.post(`/email`, reqData);
        return response.status;
    } catch(error) {
        return error;
    }
}