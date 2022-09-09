



function onSubmit(){
    const passin = document.getElementById("passin");
    const login = document.getElementById("login");
    if(login.value=="" || passin.value==""){
        passin.style.borderColor = "red";
        login.style.borderColor = "red";
        passin.placeholder = "Уведіть пароль!";
        login.placeholder = "Уведіть логін!";
       } else {
           document.getElementById("title").innerHTML = "Ну ти тіпа вішов ну таке крч"
       }
}




function onEntering(){
    const passin = document.getElementById("passin");
    const login = document.getElementById("login");
    passin.style.borderColor = "purple";
    login.style.borderColor = "purple";
    passin.placeholder = "Пароль";
    login.placeholder = "Логін";
}
