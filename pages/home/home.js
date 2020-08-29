// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headline:'选择模式',
    age : 18,
    students:[
      {age:18, name: "zhangsan", id: 1},
      {age:18, name: "lisi", id: 1},
      {age:18, name: "wnagwu", id: 1},
    ],
    counter: 0
  },

  //计数加
  add(){
    if (this.data.counter == 20) {  //计到20,再加则归0
      this.setData({
        counter: 0
      })
    }else{
      this.setData({
        counter: this.data.counter + 1
      })
    }
    console.log(this.data.counter)
  },
  //计数减
  minus(){

    if (this.data.counter == 0) {  //不会减成负数
      this.setData({
        counter: 0
      })
    }else{
      this.setData({
        counter: this.data.counter - 1
      })
    }
    console.log(this.data.counter)
  },

  /**
   * 生命周期函数--监听页面加载
   */
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