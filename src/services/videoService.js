import * as httpRequest from '~/utils/HttpRequest'

export const loadVideo = async (type, page = "1") => {
    try {
        const response = await httpRequest.get('videos', {
            params: {
                type,
                page
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}
