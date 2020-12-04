import {request} from "./request";

function findAllUser(page){
    return request({
        url:"/user/findAllUser/"+page+"/4"
    })
}
function deleteUser(userId){
    return request({
        url:"/user/deleteUserByUserId?userId="+userId,
        method:"delete"
    })
}
export {findAllUser,deleteUser}