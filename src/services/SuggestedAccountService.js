import * as httpRequest from '~/utils/HttpRequest'

export const search = async (q, page = "less") => {
    try {
        const response = await httpRequest.get('users/suggested', {
            params: {
                q,
                page
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}