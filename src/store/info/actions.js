import {getBlog, getPages} from '../api/info'

async function getInfo({commit}){
    const info = await getBlog()
    if(info.status){
        commit("INFO_UPDATED",info.data)
    }
}
async function getCategories({commit}){
    const categories = await getPages();
    if(categories.status){
        commit('CATEGORIES_UPDATED',categories.data.items.reverse());
    }
}

export default {getInfo, getCategories}