import {request} from "./request";

function findAllUser(page){
    return request({
        url:"/user/findAllUser/"+page+"/8"
    })
}
function deleteUser(userId){
    return request({
        url:"/user/deleteUserByUserId?userId="+userId,
        method:"delete"
    })
}
// function modifyUser(data){
//     return request({
//         url:"/user/modifyUserInfo",
//         method:"post",
//         data
//     })
// }
function modifyUser(data){
    return request({
        url:"/user/modifyUserInfo?userName="+data.userName+"&userId="+data.userId+"&height="+data.height+"&weight="+data.weight+"&gender="+data.gender+"&password="+data.password+"&role="+data.role+"&address="+data.address+"&phone="+data.phone,
        method:"post",
    })
}
function findUser(userId){
    return request({
        url:"/user/findUser/"+userId
    })
}
function searchUsers(data){
    return request({
        url:"/user/searchUsers",
        method:'post',
        data
    })
}
export {findAllUser,deleteUser,modifyUser,findUser,searchUsers}