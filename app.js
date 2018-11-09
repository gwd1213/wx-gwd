App({
  cart: wx.getStorageSync('cart') || [],
  addToCart(addItem) {
    const isIncart = this.cart.some(item => item.id === addItem.id)
    if (isIncart) {
      this.cart = this.cart.map(item => {
        if (item.id == addItem.id) {
          item.count += 1;
        }
        return item;
      })
    } else {
      this.cart.push({
        ...addItem, 
        count: 1,
        checked: false,
      });
    }
    wx.setStorageSync('cart', this.cart);
  },
  cartItemChange(id) {
    this.cart = this.cart.map(item => {
      if (item.id == id) {
        item.checked = !item.checked;
      }
      return item;
    })
    wx.setStorageSync('cart', this.cart);
    return this.cart;
  },
  increment(id) {
    this.cart = this.cart.map(item => {
      if(item.id == id) {
        item.count += 1;
      }
      return item;
    })
    this.setBadge();
    wx.setStorageSync('cart', this.cart); 
    return this.cart;
  },
  decrement(id) {
    this.cart = this.cart.map(item => {
      if (item.id == id && item.count > 1) {
        item.count -= 1;
      }
      return item;
    })
    this.setBadge();
    wx.setStorageSync('cart', this.cart);    
    return this.cart;
  },
  deleteCartItemById(id) {
    this.cart = this.cart.filter(item => item.id !== id)
    this.setBadge();
    wx.setStorageSync('cart', this.cart);    
    return this.cart;
  },
  checkedAllCart(state) {
    this.cart = this.cart.map(item => {
      item.checked = state;
      return item;
    })
    wx.setStorageSync('cart', this.cart);
    return this.cart;    
  },
  setBadge() {
    var totalCount = this.cart.reduce((result,item) => {
      return result + item.count;
    },0);
    if (totalCount > 99) {
      totalCount = "99+";
    };
    wx.setTabBarBadge({
      index: 2,
      text: `${totalCount}`
    })
  },
  onShow() {
    this.setBadge();
  },
  onLaunch() {
    if(this.globalData.userInfo == null) {
      console.log("111")
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})