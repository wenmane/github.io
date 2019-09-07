layui.use(['layer', 'form', 'element','laydate'], function(){
	var layer = layui.layer,form = layui.form,element=layui.element,laydate=layui.laydate;
	$('.layui-footer span').click(function(){
		//跳转页面
		location.href = $(this).attr("data-name");
		//$(".layui-body .layui-fluid").load($(this).attr("data-name"));
	});
});

$.get('bill.json',function(data){
	if(localStorage.getItem('data')==null){
		localStorage.setItem("data",JSON.stringify(data));
	}
});

$.mockjax({
    url: '/list/*',
    status: 200,
    responseTime: 50,
    responseText: JSON.parse(localStorage.getItem('list'))
});

//{
//	  "code": 200,
//	  "msg": "",
//	  "count": 1000,
//	  "data": [
//				{
//					"date":"2019-09-06",
//					"type":1,
//					"amount":18.9,
//					"desc":"吃饭"
//				}
//				,{
//					"date":"2019-09-07",
//					"type":2,
//					"amount":88.9,
//					"desc":"买衣服"
//				}
//			]
//	}