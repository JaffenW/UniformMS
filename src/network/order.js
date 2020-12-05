import {request} from "./request";

function findAllOrder(page){
    return request({
        url:"/order/findAllOrder/"+page+"/4",
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
export {findAllOrder,deleteOrder,addOrder}