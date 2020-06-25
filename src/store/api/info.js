import api from './api'

export async function getBlog(){
    try {
        const blog = await api.get('/?fields=name')
        return {
            status: true,
            data: blog.data
        }
    } catch (error) {
        if(error.response) {
            return {
                status: false,
                data: error.response.data
            }
        }
    }
}
export async function getPages(){
    try {
        const pages = await api.get('/pages?fields=items(title)')
        return {
            status: true,
            data: pages.data
        }
    } catch (error) {
        if(error.response) {
            return {
                status: false,
                data: error.response.data
            }
        }
    }
}