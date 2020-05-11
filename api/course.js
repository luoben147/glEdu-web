import request from '@/utils/request'

const api_name = '/eduservice/courseApi'
export default {
  //查询课程数据
  getCourseList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 获取所有分类
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },
  //查询课程详情
  getById(courseId) {
    return request({
      url: `${api_name}/${courseId}`,
      method: 'get'
    })
  }

}