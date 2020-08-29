//菜单区域切换

var menuUl = document.querySelector(".header .menu");
var menusLi = document.querySelectorAll(".header .sub-nav .menus li");

//绑定事件 - 鼠标移入
menuUl.addEventListener('mouseover', function(e) {
    //清除之前的active
    var before = document.querySelector(".header .menu .active");
    // console.log(before)
    before.className = "";
});

menuUl.addEventListener('mouseout', function(e) {
    menuUl.children[0].className = "active";
});