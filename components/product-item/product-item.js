// components/productItem/product-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function() {
       // 页面参数 paramA 的值
      console.log(this.data.detail)
      // this.data.paramB // 页面参数 paramB 的值
    }
  }
})
