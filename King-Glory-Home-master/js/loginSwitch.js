//登录蒙层区域的显示和隐藏

//querySelector()：返回文档中匹配指定CSS选择器的第一个元素
var divLogin = document.querySelector(".header .login .welcome");
var divLoginArea = document.querySelector(".login-area");
var divClose = document.querySelector(".login-area .close");

//绑定事件
divLogin.onclick = function() {
    divLoginArea.style.display = "block";
}

divClose.onclick = function(e) {
    e.preventDefault(); //阻止元素的默认事件
    divLoginArea.style.display = "none";
}