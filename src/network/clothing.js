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

export {findAllClothes,deleteClothing}