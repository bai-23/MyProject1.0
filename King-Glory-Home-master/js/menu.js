// 顶部菜单鼠标移入移除切换
var ulmenu = document.querySelector('.header .menu')

// 鼠标移入事件
ulmenu.addEventListener('mouseover', function(e){

    // 移入时，清除默认选中
    // var before = document.getElementById('.header .menu .active')
    var before = document.querySelector(".header .menu .active")
    
    before.className = "";
})

ulmenu.addEventListener('mouseout', function(e){
    ulmenu.children[0].className = 'active'
})