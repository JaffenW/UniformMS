import {request} from "./request";

function findAllOrder(page){
    return request({
        url:"/order/findAllOrder/"+page+"/9",
    })
}
function deleteOrder(orderId){
    return request({
        url:"/order/deleteOrder?orderId="+orderId,
        method:"delete",
    })
}
function addOrder(data){
    return request({
        url:"/order/saveOrder",
        method:"post",
        data
    })
}
function findOrder(orderId){
    return request({
        url:"/order/findOrder/"+orderId,
    })
}
export {findAllOrder,deleteOrder,addOrder,findOrder}