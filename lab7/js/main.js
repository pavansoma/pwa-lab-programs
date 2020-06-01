document.getElementById("login").addEventListener("click", loginFun);

function loginFun(){
	let uname = document.getElementById("user").value;
	let pass = document.getElementById("pass").value;
	fetch('data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data.login.username==uname && data.login.password==pass){
            	window.location.replace('/success.html');
            } else {
            	window.location.replace('/unsuccess.html');
            }
        })
        .catch((err) => {
            console.log('error ', err);
    });
}