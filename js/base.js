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