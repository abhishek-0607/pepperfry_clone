
function login(){

    const data = JSON.parse(localStorage.getItem('signup'));
    for(var i = 0;i<data.length;i++){
        let e = data[i].email;
        let p = data[i].password;
   
        if(e==myform.mail.value && p == myform.psw.value){
           alert("LogIn Successful");
          window.location.href="/users/home"
          return;
        }
       }
   
     return alert("Invalid Credential");

   }
   
        
