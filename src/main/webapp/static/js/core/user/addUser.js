$(function() {
    	$('#userAddOrganizationId').comboZTree({
        url : basePath+'/organization/tree',
		check: {
			enable: true,
			chkStyle: "radio",
			radioType: "all"
		}
    });

	$('#userAddRoleIds').comboZTree({
        url : basePath+'/role/tree',
        check: {
        		enable: true,
			chkboxType: {"Y":"", "N":""}
		}
    });

    $('#userAddForm').form({
        url : basePath+'/user/add',
        onSubmit : function() {
            progressLoad();
            var isValid = $(this).form('validate');
            if (!isValid) {
                progressClose();
            }
            return isValid;
        },
        success : function(result) {
            progressClose();
            result = $.parseJSON(result);
            if (result.success) {
            	parent.organizationTree.reAsyncChildNodes(null, "refresh");//是因为user.jsp页面预定义好了
                parent.$.modalDialog.handler.dialog('close');
            } else {
                var form = $('#userAddForm');
                parent.$.messager.alert('提示', eval(result.msg), 'warning');
            }
        }
    });
});