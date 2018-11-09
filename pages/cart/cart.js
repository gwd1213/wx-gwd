const app = getApp();
Page({
  cartItemChange(e) {
      this.setData({
        cart: app.cartItemChange(e.currentTarget.dataset.id),
      }, ()=> {
        this.setAllCheck();
        this.setTotalCount();
        this.setTotalPrice();
      })
  },
  increment(e) {
    this.setData({
      cart: app.increment(e.currentTarget.dataset.id)
    }, ()=> {
      this.setTotalCount();
      this.setTotalPrice();
    })
  },
  decrement(e) {
    this.setData({
      cart: app.decrement(e.currentTarget.dataset.id)
    }, () => {
      this.setTotalCount();
      this.setTotalPrice();
    })
  },
  deleteCartItemById(e) {
    this.setData({
      cart: app.deleteCartItemById(e.currentTarget.dataset.id)
    }, () => {
      this.setTotalCount();
      this.setTotalPrice();
    })
  },
  checkedAllCart() {
    this.setData({
      cart: app.checkedAllCart(!this.data.isCartAllCheck)
    }, ()=> {
      this.setAllCheck();
      this.setTotalCount();
      this.setTotalPrice();
    })
  },
  setAllCheck() {
    this.setData({
      isCartAllCheck: !this.data.cart.some(item => item.checked == false)
    })
  },
  setTotalPrice() {
    const totalPriceChecked = this.data.cart.filter(item => item.checked === true).reduce((result,item) => {
      return result + item.count * item.price;
      
    }, 0)
    this.setData({
      totalPriceChecked
    })
  },
  setTotalCount() {
    const totalCountChecked = this.data.cart.filter(item => item.checked === true).reduce((result, item) => {
      return result + item.count * item.price;      
    }, 0)
    this.setData({
      totalCountChecked
    })
  },
  data: {
    cart: [],
    isCartAllCheck: false,
    totalPriceChecked: 0,
    totalCountChecked: 0
  },
  onLoad: function (options) {
    
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
    this.setData({
      cart: app.cart
    }, ()=> {
      this.setAllCheck();
      this.setTotalCount();
      this.setTotalPrice();
    })
  },


})