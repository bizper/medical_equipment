import {get,post} from '@/common/js/RequestUtil'


export function getUserInfo(params){
    return get('/api/v1/basic/user/info',params)
}

export function getUserList(params){
    return get('/api/v1/advance/user/list',params)
}
export function updateUserInfo(params){
    return get('/api/v1/advance/user/updateInfo',params)
}
export function getUserGroupList(params){
    return get('/api/v1/advance/usergroup/list',params)
}

export function addToGroup(params){
    return get('/api/v1/advance/user/addToGroup',params)
}
export function removeFromGroup(params){
    return get('/api/v1/advance/user/removeFromGroup',params)
}
