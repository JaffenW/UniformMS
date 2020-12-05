import {request} from "./request";

function findAllPosts(page){
    return request({
        url:"/post/findAllPosts/"+page+"/4"
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
export {findAllPosts,deletePost,addPost}