/* import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
export default {
    getTopics(params) {
        return axios.get(`/topics?tab=${params.tab}&page=${params.page}&limit=${params.limit}&mdrender=${params.mdrender}`)
    },
    getTopic(params) {
        return axios.get(`/topic/${params.accesstoken}?mdrender=${params.mdrender}`)
    },
    createTopic(params) {
        return axios.post(`/topics`, params)
    },
    updateTopic(params) {
        return axios.post(`/topics/update`, params)
    },
    collectTopic(params) {
        return axios.post(`/topic_collect/collect`, params)
    },
    deCollectTopic(params) {
        return axios.post(`/topic_collect/de_collect`, params)
    },
    getCollectTopics(params) {
        return axios.get(`/topic_collect/${params.loginname}`)
    },
    createReply(params) {
        return axios.post(`/topic/${params.topic_id}/replies`, params)
    },
    upReply(params) {
        return axios.post(`/reply/${params.reply_id}/ups`, params)
    },
    getUser(params) {
        return axios.get(`/user/${params.loginname}`)
    },
    checkAccessToken(params) {
        return axios.post(`/accesstoken`, params)
    },
    getUnreadMessages(params) {
        return axios.get(`/message/count?accesstoken=${params.accesstoken}`)
    },
    getMessages(params) {
        return axios.get(`/messages?accesstoken=${params.accesstoken}&mdrender=${params.mdrender}`)
    },
    remarkTopic(params) {
        return axios.post(`/message/mark_all`, params)
    },
    remarkTopic(params) {
        return axios.post(`/message/mark_all`, params)
    }

}
 */