// pages/me/me.js

const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
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
     * 显示我的生词
     */
    showMyNewWords: function () {
        wx.navigateTo({
            url: './my_new_words/my_new_words',
        })
    },

    /**
     * 显示使用条款
     */
    showUserTerms: function () {
        wx.navigateTo({
            url: './user_terms/user_terms',
        })
    },

    /**
     * 显示软件说明
     */
    showSoftwareDoc: function () {
        wx.navigateTo({
            url: './software_doc/software_doc',
        })
    },

    /**
     * 交流学习
     */
    communicate: function () {
        wx.showModal({
            title: "提示",
            content: "此功能暂未开放，后期会组织英语学习交流活动，敬请期待！",
            showCancel: false,
            confirmColor: "#FF6A00",
            confirmText: "一起进步"
        })
    },

    /**
     * 反馈
     */
    feedBack: function () {
        wx.navigateTo({
          url: './feedback/feedback',
        })
    }
})