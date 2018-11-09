import http from "../../utils/require.js";
const app = getApp();
Page({
  handleAddClick(e) {
    const addItem = this.data.list.filter(item => item.id == e.currentTarget.dataset.id)[0]
    app.addToCart({
      id: addItem.id,
      title: addItem.title,
      price: addItem.price,
      src: addItem.src
    });
  },
  data: {
    list:[],
  },
  onLoad: function (options) {
    http.get(`/api/productList/:${options}`)
      .then(resp => {
        this.setData({
          list: resp.data.data.productList
        })
      })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    app.setBadge();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})