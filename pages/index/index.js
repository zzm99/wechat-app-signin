//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    phonenumber: '',
    password: '',
    modelInnerHtml: '123',
    loadingHidden: true,
    modalHidden: true
  },
  onLoad: function () {
    var that = this
  	//登录
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({userInfo: res.userInfo})
          }
        })
      },
      fail: function (res) {
      }
    }); 
  },

  // 账号修改
  bindNumInput: function(e) {
    this.setData({
      phonenumber: e.detail.value
    })
  },
  // 密码修改
  bindPsdInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 弹窗消失
  modalChange: function() {
    this.setData({
      modalHidden: true
    })
  },
  // 点击提交按钮
  loginSubmit: function(e) {
    if(this.data.phonenumber != '' && this.data.password != '') {
      this.setData({
        loadingHidden: false
      })
      var that = this
      setTimeout(function () {
        that.setData({
          loadingHidden: true
        })
        wx.navigateTo({
          url: '../main/main'
        })
      }, 500)
    }else if(this.data.phonenumber == '' && this.data.password != '') {
      this.setData({
        modelInnerHtml: '账号不能为空',
        modalHidden:  false
      })
    }else if(this.data.password == '' && this.data.phonenumber != '') {
      this.setData({
        modelInnerHtml: '密码不能为空',
        modalHidden:  false
      })
    }else {
      this.setData({
        modelInnerHtml: '账号密码不能为空',
        modalHidden:  false
      })
    }
  },
  // 点击 注册
  register: function(){
    wx.navigateTo({
      url: '../signup/signup'
    })
  },
  // 找回密码
  forget_password: function(){
    wx.navigateTo({
      url: '../getpassword/getpassword'
    })
  }
})
