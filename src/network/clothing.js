import {request} from "./request";

function findAllClothes(page){
    return request({
        url:"/clothing/findAllClothing/"+page+"/8"
    })
}

function deleteClothing(clothesId){
    return request({
        url:"/clothing/deleteClothing/"+clothesId
    })
}
// function addClothing(data){
//     return request({
//         url:"/clothing/addClothing?belong="+data.belong+"&description="+data.description+"&rent="+data.rent+"&type="+data.type,
//         method:"post"
//     })
// }
function addClothing(data){
    return request({
        url:"/clothing/addClothing",
        method:"post",
        data
    })
}
function findClothes(clothingId){
    return request({
        url:"/clothing/findClothing/"+clothingId
    })
}
function searchClothes(data){
    return request({
        url:"/clothing/searchClothes/"+data.type+"/"+data.owner
    })
}
export {findAllClothes,deleteClothing,addClothing,findClothes,searchClothes}