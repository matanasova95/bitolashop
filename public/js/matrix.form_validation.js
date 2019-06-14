$(document).ready(function(){
	/// check current password is correct or not
	$("#pwd_current").keyup(function () {
		var pwd_current=$("#pwd_current").val();
		$.ajax({
            type:'get',
            url:'/admin/check-pwd',
            data:{pwd_current:pwd_current},
            success:function(resp){
                if(resp=="false"){
                    $("#chkPwd").html("<span style='color: red; font-weight: bold;'>Current Password is Incorrect</span>");
                }else if(resp=="true"){
                    $("#chkPwd").html("<span style='color: green;font-weight: bold;'>Current Password is Correct</span>");
                }
            },error:function(){
                alert("Error Ajax");
            }
        });
	});
	////// Check Category name is exist or not
		
	// Form Validation
    $("#basic_validate").validate({
		rules:{
			name:{
				required:true
			},
			email:{
				required:true,
				email: true
			},
			date:{
				required:true,
				date: true
			},
			url:{
				required:true,
				url: true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	$("#number_validate").validate({
		rules:{
			min:{
				required: true,
				min:10
			},
			max:{
				required:true,
				max:24
			},
			number:{
				required:true,
				number:true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	$("#password_validate").validate({
		rules:{
            pwd_current:{
                required: true,
                minlength:6,
                maxlength:20
            },
            pwd_new:{
				required: true,
				minlength:6,
				maxlength:20
			},
            pwdnew_confirm:{
				required:true,
				minlength:6,
				maxlength:20,
				equalTo:"#pwd_new"
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
});
