import request from '@/utils/request'
export default {
    //根据手机号发送验证码
    sendCode(phone) {
        return request({
            url: `/edusms/sms/send/${phone}`,
            method: 'get'
        })
    },

    //注册
    submitRegister(formItem) {
        return request({
            url: `/ucenterservice/member/register`,
            method: 'post',
            data: formItem
        })
    }
}