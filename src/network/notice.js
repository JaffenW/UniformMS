import {request} from "./request";

function findAllNotices(page){
    return request({
        url:"/announcement/findAllAnnouncement/"+page+"/9"
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
export {findAllNotices,findNotice,deleteNotice,saveNotice}