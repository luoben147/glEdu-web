import request from '@/utils/request'
const api_name = '/eduservice/comment'
export default {

  getPageList(page, limit, courseId) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: {courseId}
    })
  },
  addComment(comment) {
    return request({
      url: `${api_name}/auth/save`,
      method: 'post',
      data: comment
    })
  }
}