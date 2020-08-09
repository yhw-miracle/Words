// pages/word/word.js

const words = require("../../data/words.js")
const words_with_translations = require("../../data/words_with_translation.js")

const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()


Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: null,
        pronunciations_uk: null,
        pronunciations_us: null,
        is_has_definition_en: true,
        is_show_definition_en: true,
        definition_en: null,
        is_has_definition_cn: true,
        is_show_definition_cn: true,
        definition_cn: null,
        has_audio: false,
        audio_uk_url: null,
        audio_us_url: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var random_index = Math.floor(Math.random() * 100) + 1
        var current_word = words_with_translations.words_with_translation[random_index]
        
        this.setData({
            content: current_word.content,
            pronunciations_uk: current_word.pronunciations_uk,
            pronunciations_us: current_word.pronunciations_us,
            is_has_definition_en: true,
            is_show_definition_en: false,
            definition_en: current_word.definition_en,
            is_has_definition_cn: true,
            is_show_definition_cn: false,
            definition_cn: current_word.definition_cn,
            has_audio: true,
            audio_uk_url: current_word.audio_uk_url,
            audio_us_url: current_word.audio_us_url
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
        var random_index = Math.floor(Math.random() * 100) + 1
        var current_word = words_with_translations.words_with_translation[random_index]
        
        this.setData({
            content: current_word.content,
            pronunciations_uk: current_word.pronunciations_uk,
            pronunciations_us: current_word.pronunciations_us,
            is_has_definition_en: true,
            is_show_definition_en: false,
            definition_en: current_word.definition_en,
            is_has_definition_cn: true,
            is_show_definition_cn: false,
            definition_cn: current_word.definition_cn,
            has_audio: true,
            audio_uk_url: current_word.audio_uk_url,
            audio_us_url: current_word.audio_us_url
        })
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
     * 显示释义函数
     */
    show: function () {
        this.setData({
            is_show_definition_en: true,
            is_show_definition_cn: true
        })
    },

    /**
     * 上一个单词
     */
    previous: function () {
        var random_index = Math.floor(Math.random() * 100) + 1
        var current_word = words_with_translations.words_with_translation[random_index]
        
        this.setData({
            content: current_word.content,
            pronunciations_uk: current_word.pronunciations_uk,
            pronunciations_us: current_word.pronunciations_us,
            is_has_definition_en: true,
            is_show_definition_en: false,
            definition_en: current_word.definition_en,
            is_has_definition_cn: true,
            is_show_definition_cn: false,
            definition_cn: current_word.definition_cn,
            has_audio: false,
            audio_uk_url: current_word.audio_uk_url,
            audio_us_url: current_word.audio_us_url
        })
    },

    /**
     * 下一个单词
     */
    next: function () {
        var random_index = Math.floor(Math.random() * 100) + 1
        var current_word = words_with_translations.words_with_translation[random_index]
        
        this.setData({
            content: current_word.content,
            pronunciations_uk: current_word.pronunciations_uk,
            pronunciations_us: current_word.pronunciations_us,
            is_has_definition_en: true,
            is_show_definition_en: false,
            definition_en: current_word.definition_en,
            is_has_definition_cn: true,
            is_show_definition_cn: false,
            definition_cn: current_word.definition_cn,
            has_audio: false,
            audio_uk_url: current_word.audio_uk_url,
            audio_us_url: current_word.audio_us_url
        })
    },

    /**
     * 英式发音
     */
    read_pronunciations_uk: function () {
        if (this.data.audio_uk_url) {
            innerAudioContext.src = this.data.audio_uk_url
            innerAudioContext.play()
        }
    },

    /**
     * 美式发音
     */
    read_pronunciations_us: function () {
        if (this.data.audio_us_url) {
            innerAudioContext.src = this.data.audio_us_url
            innerAudioContext.play()
        }
    },

    /**
     * 标记新词
     */
    noKnown: function () {
        app.globalData.newWords.push({
            content: this.data.content,
            definition_en: this.data.definition_en,
            definition_cn: this.data.definition_cn,
        })
        wx.showModal({
            title: "提示",
            content: "已标记该单词 " + this.data.content + " 为生词，请在【我 >> 我的生词】页面查看！",
            showCancel: false,
            confirmText: "查下释义",
            confirmColor: "#FF6A00",
        })
    }
})