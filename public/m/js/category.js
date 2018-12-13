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
// 获取左侧点击事件(移动端用tap)的id
$('.main-left ul').on('tap','li a' ,function(){
    // 给父元素li添加active类
    // console.log(this);
    $(this).parent().addClass('active').siblings().removeClass('active'); 

    // 获取id第一种方法
    // var id= $(this).data('id');
    // 第二种获取id办法
    var id =$(this).attr('data-id');
    // console.log(id);
    // alert(id);
    // 右侧区域滚动数据渲染
$.ajax({
    url:'/category/querySecondCategory',
    data:{id:id},
    success:function(obj){
    //    console.log(obj);
    // 将数据添加到页面上
        var html= template('categoryRightTpl',obj);
        // console.log(html);
        $('.main-right ul').html(html);

    }
})
})

})




