//index.js
//获取应用实例
const app = getApp()
import * as api from '../../api/home.js';
Page({
  data: {
    sowing_list:[],
    home_ad:'',
    nav_list:[],
    flash_sale_product_list:[],
    specialZone:{},
    newItemList:[],
    tabBarList:["全部","晚餐","人气","心选"],
    tabBarIndex:0,
    allProductList:[], // 全部
    dinnerProductList:[], // 晚餐
    hotProductList:[], // 人气
    preferredProductList:[], // 心选
    swiperHeight:0
  },
  onLoad: function () {
    api.getHomeData().then(res => {
      this.setData({
        sowing_list:res.list[0].icon_list,
        home_ad:res.home_ad.image_url,
        nav_list:res.list[2].icon_list,
        flash_sale_product_list:res.list[3].product_list,
        specialZone:res.special_zone,
        allProductList:res.list[12].product_list,
        dinnerProductList:res.list[3].product_list,
        hotProductList:res.list[4].product_list,
        preferredProductList:res.list[5].product_list,
      })
      this._calcSwiperItemHeight(".swiperItem1 >>> .product")
    })
  },
  tabClick: function(e) {
    this.setData({
      tabBarIndex:e.currentTarget.dataset.num
    })
  },
  // 动态机选每个swiper里面内容高度
  _calcSwiperItemHeight(_dom){
    var query = wx.createSelectorQuery();
      var that = this;
      query.selectAll(_dom).boundingClientRect(function (rect) {
        if(rect){
          that.setData({
            // 获取要循环标签的高度
            swiperHeight: rect[0].height * rect.length
          })
        }
      }).exec();
  }
})
