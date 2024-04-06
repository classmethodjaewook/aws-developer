const poolData = {
	UserPoolId: 'xxxxxxxxx', // 사용자 풀 ID
	ClientId: 'xxxxxxxx', // 클라이언트 ID
};

// signup.html
function SignUp() {
	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	userPool.signUp(username, password, null, null, function(
		err
	) {
		if (err) {
		alert(err.message || JSON.stringify(err));
			return;
		}
		window.location.href = 'confirm.html';
	});
}

// confirm.html
function ConfirmRegistration() {
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var username = document.getElementById("email").value;
	var code = document.getElementById("ConfirmCode").value;
	var userData = {
		Username: username,
		Pool: userPool,
	};
	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

	cognitoUser.confirmRegistration(code, true, function(err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		console.log('call result: ' + result);
		window.location.href = 'login.html';		
	});
}

// login.html
function Login() {
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	var authenticationData = {
		Username: username,
		Password: password,
	};

	var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
		authenticationData
	);
	var userData = {
		Username: username,
		Pool: userPool,
	};
    
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

	cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var idToken = result.getIdToken().getJwtToken();          // ID 토큰
            var accessToken = result.getAccessToken().getJwtToken();  // 액세스 토큰
            var refreshToken = result.getRefreshToken().getToken();   // 갱신 토큰
            
            console.log("idToken : " + idToken);
            console.log("accessToken : " + accessToken);
            console.log("refreshToken : " + refreshToken);

            window.location.href = 'main.html';
        },

        onFailure: function(err) {
            // 로그인에 실패 했을 경우 에러 메시지 표시
            console.log(err);
            alert("로그인 실패")
        }
    });
}

// main.html
function main() {
    // cognitoUser에 현재 유저 정보를 받아옴
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const cognitoUser = userPool.getCurrentUser(); 
    

    const currentUserData = {};

    // 현재 cognitoUser가 null이 아니라면 세션 정보를 받아옴 (세션 정보가 없다면 로그인 페이지로 이동)
  if (cognitoUser != null) {
    cognitoUser.getSession((err, session) => {
      if (err) {
        console.log(err);
        location.href = "login.html";
      } else {
        // 세션 정보가 유효하다면, cognitoUser에서 유저 속성을 확인(유저 속성이 없다면 로그인 페이지로 이동)
        cognitoUser.getUserAttributes((err, result) => {
          if (err) {
            location.href = "login.html";
          }

          // 취득한 정보를 화면에 출력
          for (i = 0; i < result.length; i++) {
            currentUserData[result[i].getName()] = result[i].getValue();
          }

          document.getElementById("email").value = currentUserData["email"];

          // 로그아웃
          const signoutButton = document.getElementById("signout");
          signoutButton.addEventListener("click", event => {
            cognitoUser.signOut();
            location.reload();
          });
          signoutButton.hidden = false;
        });
      }
    });
  } else {
    location.href = "login.html";
  }
}