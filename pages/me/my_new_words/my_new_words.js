// pages/me/my_new_words/my_new_words.js

const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isHasNewWords: false,
        newWords: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (app.globalData.newWords && app.globalData.newWords.length > 0) {
            this.setData({
                isHasNewWords: true,
                newWords: app.globalData.newWords
            })
        }

        if (!this.data.isHasNewWords) {
            wx.showModal({
                title: "提示",
                content: "恭喜你，目前还没有生词，继续学习吧！",
                showCancel: false,
                confirmText: "继续学习",
                success(e) {
                    if (e.confirm) {
                        wx.switchTab({
                          url: '../../word/word',
                        })
                    }
                }
            })
        }
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
     * 取消生词
     */
    cancelNewWords: function (e) {
        const index = e.currentTarget.dataset.index
        const current_word = this.data.newWords[index].content
        this.data.newWords.splice(index, 1)
        
        this.setData({
            isHasNewWords: true,
            newWords: this.data.newWords
        })
        app.globalData.newWords = this.data.newWords

        wx.showModal({
            title: "提示",
            content: "很棒，你学会了这个单词 " + current_word + ", 记得常复习哦！",
            showCancel: false,
            confirmText: "继续回顾",
            confirmColor: "#FF6A00"
        })
    }
})