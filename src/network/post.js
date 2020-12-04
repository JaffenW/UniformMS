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
export {findAllPosts,deletePost}