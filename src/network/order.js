import {request} from "./request";

function findAllOrder(page){
    return request({
        url:"/order/findAllOrder/"+page+"/7",
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
function searchOrders(data){
    return request({
        url:"/order/searchOrders/"+data.start+"/"+data.end,
    })
}
export {findAllOrder,deleteOrder,addOrder,findOrder,searchOrders}