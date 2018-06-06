var basePath = "/rural";
function progressLoad(){  
	$("<div class=\"datagrid-mask\" style=\"position:absolute;z-index: 9999;\"></div>").css({'top':'-71px', 'left':0, 'opacity': 0.5,'background': '#333', display:"block",width:"100%",height:$(window).height()}).appendTo("body");  
	$("<div class=\"datagrid-mask-msg\" style=\"position:absolute;z-index: 9999;\"></div>").html("正在处理，请稍候。。。").appendTo("body").css({display:"block",left:($(document.body).outerWidth(true) - 190) / 2,top:($(window).height() - 45) / 2 - 71});  
}
function progressClose(){
	$(".datagrid-mask").remove();  
	$(".datagrid-mask-msg").remove();
}
$(function(){
	//init swiper
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    autoplay:3000
	});
});
try{
	var _href = window.location.href+"";
	if(_href && _href.indexOf('?kickout')!=-1){
		layer.msg('您已经被踢出，请重新登录！');
	}
}catch(e){
	
}
function submitForm(){
	progressLoad();
	var username = $('#username').val();
	var password = $('#password').val();
	if(username == '') {
		return false;
	}
	if(password == '') {
		return false;
	}
	var pswd = MD5(username +"#" + password),
	data = {pswd:pswd,email:username,rememberMe:false};
	
	$.ajax({
		url:basePath+"/submitLogin",
		data:data,
		type:"post",
		dataType:"json",
		beforeSend:function(){
			console.log('开始登录，请注意后台控制台。');
		},
		success:function(result){
			progressClose()
			if(result && result.status != 200){
//     			layer.msg(result.message,function(){});
				$('.password').val('');
				return;
			}else{
//     			layer.msg('登录成功！');
				setTimeout(function(){
					//登录返回
					window.location.href= result.back_url || "basePath"+"/";
				},1000)
			}
		},
		error:function(e){
			console.log(e,e.message);
			alert('请看后台Java控制台，是否报错，确定已经配置数据库和Redis');
		}
	});
}
function clearForm(){
	$('#loginform').form('clear');
}
//回车登录
function enterlogin(){
	if (event.keyCode == 13){
		event.returnValue=false;
		event.cancel = true;
		submitForm();
	}
}

$(function(){
	 // 验证码
   /* $("#captchaImg").click(function() {
        var $this = $(this);
        var url = $this.data("src") + new Date().getTime();
        $this.attr("src", url);
    });*/
});