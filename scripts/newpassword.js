var newpassword = document.getElementById("newpassword");

newpassword.addEventListener("click", function(){

        var password = document.getElementById("password").value;

        var cnewpassword = document.getElementById("cnewpasswordRegister").value;

        if(password === cnewpassword) {
            sessionStorage.setItem("password", password);
                alert("Senha mudada com sucesso!");
                    window.location.href = "../pages/login.html";
        }else{
            alert("Não foi possível mudar a senha, por favor confirme se os dois espaços estão iguais e se a nova senha é diferente da antiga");
        }

})