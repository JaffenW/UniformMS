import {request} from "./request";

function findAllNotices(page){
    return request({
        url:"/announcement/findAllAnnouncement/"+page+"/8"
    })
}
function findNotice(noticeId){
    return request({
        url:"/announcement/findAnnouncement/"+noticeId
    })
}
function deleteNotice(noticeId){
    return request({
        url:"/announcement/deleteAnnouncement?announcementId="+noticeId,
        method:"delete"
    })
}
function saveNotice(data){
    return request({
        url:"/announcement/saveAnnouncement",
        method:'post',
        data
    })
}
function searchNotices(data){
    return request({
        url:"/announcement/searchAnnouncements/"+data.title+"/"+data.start+"/"+data.end,
    })
}
export {findAllNotices,findNotice,deleteNotice,saveNotice,searchNotices}