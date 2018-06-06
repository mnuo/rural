<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/commons/global.jsp" %>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>管理中心</title>
  	<link href="${path }/static/libs/bootstrap-3.3.5/css/bootstrap.min.css" rel="stylesheet">
	<link href="${path }/static/style/css/usercommon.css" rel="stylesheet"/>
</head>
<body>
<div class="main-body" ng-controller="UserinfoController">
    <div class="" ng-animate="{enter:'fade-enter'}">
    	<div class="main-body-section" bindonce="">
    		<div class="main-body-title console-title-border clearfix">
    			<h5 class="main-body-title-text">安全设置</h5>
    		</div>
    		<div class="main-body-content clearfix">
    			<div class="avatar pull-left">
    				<p>
    					<img ng-src="https://gtd.alicdn.com/tps/i2/TB1KlQRHpXXXXcCXFXXrywt4VXX-120-120.png" width="120" height="120" src="https://gtd.alicdn.com/tps/i2/TB1KlQRHpXXXXcCXFXXrywt4VXX-120-120.png">
    				</p>
    				<p class="avatar-txt">
    					<a modify-avatar="" selected-value="gtd.alicdn.com/tps/i2/TB1KlQRHpXXXXcCXFXXrywt4VXX-120-120.png" bo-bind="'account.security.setting.modify.avatar' | translate" class="ng-isolate-scope">
    						修改头像
    					</a>
    				</p>
    			</div>
    			<div class="summary">
    					<p class="">
    						<span class="login-acount-title">登录账号</span>
    						<span class="login-acount-text">：</span> 
    							yu1****@163.com 
    						<a ng-if="vm.securitySettingsActionType.email.modifyEmail" href="https://account.aliyun.com/profile/setting.htm?actionType=email_modify&amp;locale=zh" bo-bind="'accountcenter.common.change' | translate" class="ng-scope">
    							修改<span><a class="edit-email">修改</a></span>(<span class="email-valid">您已通过邮箱认证</span>)
    						</a>
    						
    					</p>
    					<p class="">
    						<span class="login-acountId-title">账号ID</span> 
    						<span class="login-acountId-text">：</span>
     							1412253948981628
     					</p>
					    <p class="">
					    	<span class="register-time-title">注册时间</span>
      					<span class="register-time-text">：</span>
      						2016-01-28 10:43:01
      				</p>
      		</div>
      	</div>
	</div>
</div>
</body>
</html>