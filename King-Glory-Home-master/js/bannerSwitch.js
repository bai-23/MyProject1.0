//横幅 - 图片列表的切换

var ulTitles = document.querySelector(".banner-title");
var bannerContainer = document.querySelector(".banner-container");
var index = 0; //当前切换的图片的索引
var timer = null; //定时器

//切换图片
function switchImage(n) {
    var left = -n * 100 + "%";
    var ulBanner = document.querySelector(".banner-container .banner-img");
    ulBanner.style.marginLeft = left;

    //清除之前的active
    var before = document.querySelector(".banner-title .active");
    before.className = "";

    //添加当前的active
    ulTitles.children[n].className = "active";
}

//绑定事件 - 鼠标移入
ulTitles.onmouseover = function(e) {
    //Array.from()：ES6 将一个类数组对象或可遍历对象转换成一个真正的数组
    var arr = Array.from(ulTitles.children);
    //indexOf()：返回某个指定的字符串值在字符串中首次出现的位置
    var index = arr.indexOf(e.target);
    switchImage(index);
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

start();

//鼠标移入图片，则停止自动切换；鼠标移出图片，则开启自动切换
bannerContainer.onmouseover = function() {
    stop();
}

bannerContainer.onmouseout = function() {
    start();
}