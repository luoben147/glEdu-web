import request from '@/utils/request'
const api_name = '/orderservice/order'
export default {
  //生成订单 
  creatrOrder(courseId) {
    return request({
      url: `${api_name}/creatrOrder/${courseId}`,
      method: 'post'
    })
  },
  //根据订单id查询订单信息
  getOrderInfo(orderId) {
    return request({
      url: `${api_name}/getOrder/${orderId}`,
      method: 'get'
    })
  },
  //3、生成微信支付二维码
  createNative(cid) {
    return request({
      url: `/orderservice/paylog/createNative/${cid}`,
      method: 'get'
    })
  },
  //4、根据id获取订单支付状态
  queryPayStatus(orderNo) {
    return request({
      url: `/orderservice/paylog/queryPayStatus/${orderNo}`,
      method: 'get'
    })
  }
}