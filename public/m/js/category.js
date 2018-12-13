// 入口函数
$(function(){
// 分类的区域滚动
mui('.mui-scroll-wrapper').scroll({
    indicators: false, //是否显示滚动条
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
// 左侧区域滚动数据渲染
$.ajax({
url:'/category/queryTopCategory',
success:function(obj){
// console.log(obj);
// 将模板添加到页面上
var html=template('categoryLeftTpl',obj)
$('.main-left ul').html(html);
}

})    
})


