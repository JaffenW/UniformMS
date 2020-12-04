import {request} from "./request";

function findAllNotices(page){
    return request({
        url:"/announcement/findAllAnnouncement/"+page+"/4"
    })
}
function deleteNotice(noticeId){
    return request({
        url:"/announcement/deleteAnnouncement?announcementId="+noticeId,
        method:"delete"
    })
}
export {findAllNotices,deleteNotice}