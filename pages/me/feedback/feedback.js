// pages/me/feedback/feedback.js

var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        feedbakcText: "",
        contactText: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },

    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
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

    },

    /**
     * 获取用户反馈内容
     */
    getFeedBackText: function (e) {
        this.setData({
            feedbakcText: e.detail.value
        })
    },

    /**
     * 获取用户联系方式
     */
    getContact: function (e) {
        this.setData({
            contactText: e.detail.value
        })
    },

    /**
     * 获取当前时间
     */
    getCurrentDate: function () {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1
        var strDate = date.getDate()

        if (month >= 1 && month <= 9) {
            month = "0" + month
        }

        if (month >= 1 && strDate <= 9) {
            strDate = "0" + strDate;
        }

        var currentDate = date.getFullYear() + seperator1 + month + seperator2 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
        return currentDate
    },
    

    /**
     * 用户提交反馈内容
     */
    submitFeedback: function () {

        wx.showModal({
            title: "提示",
            content: "提交成功，感谢反馈，我们会尽快与您核实，并提供解决方案！" + this.data.userInfo.nickName + "," + this.data.feedbakcText + "," + this.data.contactText + "," + this.getCurrentDate(),
            showCancel: false,
            confirmColor: "#ff6a00"
        })
    }
})