import request from '@/utils/request'
export default {
    //查询首页热门课程和名师
  getIndexData() {
    return request({
      url: `/eduservice/index/index`,
      method: 'get'
    })
  }
}