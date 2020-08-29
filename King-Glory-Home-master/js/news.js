//信息区域切换

var newsUl = document.querySelector('.news-container .title-container')

function switchNews(n){
    var left = -n * 100 + '%'
    var divNews = document.querySelector('.news-banner .news-blocks')
    divNews.style.marginleft = left

    var before = document.querySelector('.news-container .title-container')
    before.className = ''

    newsUl.children[n].className = 'active'
}

newsUl.onmouseover = function(e){
    // console.log(this)
    if (e.target.tagName != 'LI') {
        return
    }
    var arr = Array.from(newsUl.children)
    var index = arr.indexOf(e.target)
    var len = document.querySelectorAll('.news-container .title-container li').length
    if(index >= len-1){
        return
    }
    switchNews(index)
}