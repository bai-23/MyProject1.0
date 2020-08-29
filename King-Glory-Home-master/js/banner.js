// 轮播图

var ulTitles = document.querySelector('.banner-title')
var bannerContainer = document.querySelector('.banner-container')
var index = 0
var timer = null

//切换图片函数
function switchImage(index){
    var left = -index * 100 + '%'   //左偏移量
    var ulBanner = document.querySelector('.banner-container .banner-img')
    ulBanner.style.marginLeft = left

    // 清除active
    var before = document.querySelector('.banner-title .active')
    before.className = ""

    // 给当前焦点图片添加active
    ulTitles.children[index].className = 'active'
}

//绑定事件 - 鼠标移入
ulTitles.onmouseover = function(e){
    //Array.from()：ES6 将一个类数组对象或可遍历对象转换成一个真正的数组
    var arr = Array.from(ulTitles.children)
    // var arrtitle = document.querySelector('.banner-title').children
    //indexOf()：返回某个指定的字符串值在字符串中首次出现的位置
    // target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。
    var index = arr.indexOf(e.target)
    // index = contains(arr, this.arr.children)
    switchImage(index)
    
}
// 获取数组元素下标函数
function contains(arrays, obj) {
    var i = arrays.length;
    while (i--) {
        if (arrays[i] === obj) {
            return i;
        }
    }
    return false;
}
//开启自动切换图片
function start() {
    //获取图片的数量
    var len = document.querySelectorAll(".banner-container .banner-img li").length;
    clearInterval(timer);
    timer = setInterval(function() {
        index = (index + 1) % len;
        switchImage(index);
    }, 3000);
}

//停止自动切换图片
function stop() {
    clearInterval(timer);
}

start()

//鼠标移入图片，则停止自动切换
bannerContainer.onmouseover = function() {
    stop();
}
//鼠标移出图片，则开启自动切换
bannerContainer.onmouseout = function() {
    start();
}