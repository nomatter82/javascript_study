
$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});


// 회원가입하기

// 1. 회원가입 버튼 함수 만들기
function register() {
    // 내용 체크하기

    const checkResult = CheckJoinFields();

    if(!checkResult){
        return;
    }
    // 회원가입 진행

    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");

    const newUser = {
        unsername: usernameElement.value,
        email: emailElement.value,
        password:passwordElement.value
    }

    console.log(newUser);


    // 회원가입 완료 메시지
    alert("회원가입이 완료 되었습니다.");
    // 페이지 이동
    // window.location.href = "이동페이지";
}

// 2. 회원가입 내용 체크 함수 만들기
function CheckJoinFields(){
    // id들
    // username
    // email
    // password
    // confirm-password

    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");
    const confirmPasswordElement = document.getElementById("confirm-password");

    // 유저네임이 없으면 안됨
    if(usernameElement.value == ""){
        alert("username을 입력해주세요.");
        usernameElement.focus();
        return false;
    }
    // 이메일이 없으면 안됨
    if(emaliElement.value == ""){
        alert("email을 입력해주세요.");
        emaliElement.focus();
        return false;
    }
    // 비밀번호가 없으면 안됨
    if(passwordElement.value == ""){
        alert("password을 입력해주세요.");
        upasswordElement.focus();
        return false;
    }
    // 비밀번호 확인이 없으면 안됨
    if(confirmPasswordElement.value == ""){
        alert("confirmPassword을 입력해주세요.");
        confirmPasswordElement.focus();
        return false;
    }  
    // 비밀번호와 비밀번호 확인이 동일해야함
    if (passwordElement != confirmpasswordElement){
        alert("비밀번호가 동일하지 않습니다.")
        return false;
    }

    // 모두 통과함
     return true;


}




// 로그인하기

// 1. 로그인 버튼 함수 만들기
// 2. 로그인 내용 체크 함수 만들기