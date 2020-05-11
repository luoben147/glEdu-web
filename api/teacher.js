import request from '@/utils/request'

const api_name = '/eduservice/teacherApi'
export default {
  //查询teacher数据
  getTeacherList(page, limit) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get'
    })
  },
  //讲师id查询讲师信息和课程信息
  getById(teacherId) {
    return request({
      url: `${api_name}/${teacherId}`,
      method: 'get'
    })
  }

}