import api from './api'

export async function getPosts(){
    try {
        const posts = await api.get('/posts?fields=items(id,title,content,updated,labels,author(displayName,image))');
        return {
            status: true,
            data: posts.data
        }
    } catch (error) {
        if(error.response.data){
            return {
                status: false,
                data: error.response.data
            }
        }
    }
}
export async function findById(id){
    try {
        const post = await api.get('/posts/'+id+'?fields=title,content,updated,labels,author(displayName,image)');
        return {
            status: true,
            data: post.data
        }
    } catch (error) {
        if(error.response.data){
            return {
                status: false,
                data: error.response.data
            }
        }
    }
}
export async function getByLabel(category) {
    try {
        const posts = await api.get('/posts/search?q=label:'+category);
        return {
            status: true,
            data: posts.data
        }
    } catch (error) {
        return {
            status:false,
            data: error.response.data
        }
    }
}
export async function searchPosts(query) {
    try {
        const posts = await api.get('/posts/search?q='+query+'&fields=items(id,title,content,updated,labels,author(displayName,image))');
        return {
            status: true,
            data: posts.data
        }
    } catch (error) {
        return {
            status:false,
            data: error.response.data
        }
    }
}