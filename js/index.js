// 移动端是否可以使用jquery
// 1.1:当然可以使用js库 但是 不建议使用
// 1.2：特点是兼容性好 体积大 加载慢 80kb 【在js中超过100kb的都是重量级的库】
// 解决方法：使用H5API
// window.onload = function(ev){};页面所有资源加载完成后执行
// $(function(){});页面文档加载完成后执行，不包括资源
document.addEventListener("DOMContentLoaded", function() {
  new Search(".jd_header_box");
});
var Search = function(selector) {
  this.el = document.querySelector(selector);
  this.bannerHeight = document.querySelector(".jd_banner").offsetHeight;
  this.maxOpacity = 0.85;
  this.init();
};
Search.prototype.init = function() {
  // console.log(1);
  var that = this;
  // 业务逻辑
  // 1：background:rgba(216,80,92,0);完全透明
  that.el.style.background = "rgba(216,80,92,0)";
  // 2：当页面滚动的时候，透明度改变
  window.onscroll = function(ev) {
    // 滚动的距离 卷曲的大小
    var scrollTop =
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop;
    // 轮播图的高度
    // that.bannerHeight;
    var opcity = 0;
    // 2.1：当在轮播图内滚动的时候 滚动的距离越多透明度越多
    if (scrollTop < that.bannerHeight) {
      opcity = (scrollTop / that.bannerHeight) * that.maxOpacity;
    }
    // 2.2:当已经滚出了轮播图 透明度固定不变 0.85
    else {
      opcity = that.maxOpacity;
    }
    that.el.style.background = "rgba(216,80,92," + opcity + ")";
  };
};
