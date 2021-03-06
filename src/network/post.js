import {request} from "./request";

function findAllPosts(page){
    return request({
        url:"/post/findAllPosts/"+page+"/8"
    })
}
function deletePost(postId){
    return request({
        url:"/post/deletePost?postId="+postId,
        method:"delete"
    })
}
function addPost(data){
    return request({
        url:"/post/addPost",
        method:"post",
        data
    })
}
function findPost(postId){
    return request({
        url:"/post/findPost/"+postId
    })
}
function searchPosts(data){
    return request({
        url:"/post/searchPosts/"+data.name+"/"+data.title+"/"+data.start+"/"+data.end,
    })
}
export {findAllPosts,deletePost,addPost,findPost,searchPosts}