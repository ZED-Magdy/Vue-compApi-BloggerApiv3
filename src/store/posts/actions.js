import {getPosts, getByLabel, findById, searchPosts} from '../api/posts'

async function getAll({commit}){
    const posts = await getPosts();
    if(posts.status) {
        commit("POSTS_UPDATED",posts.data.items);
    }
}
async function getByCategory(context,category){
    const posts = await getByLabel(category);
    if(posts.status){
        return posts.data.items;
    }
}
async function getById(context, id){
    const post = await findById(id);
    if(post.status){
        return post.data;
    }
}
async function getFromSearch(context,query){
    const posts = await searchPosts(query);
    if(posts.status){
        return posts.data.items;
    }
}
export default {getAll, getByCategory, getById, getFromSearch}