import {request} from "./request";

function findAllClothes(page){
    return request({
        url:"/clothing/findAllClothing/"+page+"/4"
    })
}

function deleteClothing(clothesId){
    return request({
        url:"/clothing/deleteClothing/"+clothesId
    })
}
function addClothing(data){
    return request({
        url:"/clothing/addClothing?belong="+data.belong+"&description="+data.description+"&rent="+data.rent+"&type="+data.type,
        method:"post"
    })
}

export {findAllClothes,deleteClothing,addClothing}