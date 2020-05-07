import request from '@/utils/request'
export default {
    //查询banner数据
  getBannerList() {
    return request({
      url: `/educms/banneraApi/getAllBanner`,
      method: 'get'
    })
  }
}