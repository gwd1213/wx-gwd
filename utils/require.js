export default {
  get(url) {
    return new Promise((resolve,reject) => {
      wx.showLoading({
        title: '加载中……',
      })
      wx.request({
        url: `http://rap2api.taobao.org/app/mock/115921${url}`,
        method: 'GET',
        dataType: 'json',
        success(resp) {
          resolve(resp);
        },
        fail(resp) {
          reject(resp);
        },
        complete() {
          wx.hideLoading();
        }
      })
    })
  }
}