import http from '../../utils/require.js'
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    activeIndex: 101,
    sidebarList: [],
    listItem: [],
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  tabClick(e) {
    this.setData({
      activeIndex: e.target.id,
    });
    this.showProList(e.target.id);
  },
  showProList(id) {
    id = id || this.data.activeIndex;
    const listItem = this.data.sidebarList.filter(item => item.id == id)[0].child;
    this.setData({
      listItem,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.get('/api/catelist')
      .then(resp => {
        this.setData({
          sidebarList: resp.data.data.sidebar
        })
        this.showProList();        
      })
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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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