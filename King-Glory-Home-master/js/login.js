
// 登陆蒙版的显示和隐藏
var divLogin = document.querySelector('.header .login .welcome')
var divLoginArea = document.querySelector(".login-area");
var divClose = document.querySelector(".login-area .close");

divLogin.onclick = function (){
    divLoginArea.style.display = 'block'
}

divClose.onclick = function(e){
    // 阻止元素的默认事件(超链接跳转)
    // e.preventDefault()
    divLoginArea.style.display = 'none'

    // 阻止元素的默认事件(超链接跳转)
    return false
}