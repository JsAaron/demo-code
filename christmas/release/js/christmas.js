
/**
 * http://www.jq22.com/yanshi242
 * 慕课网特制
 * 圣诞主题效果
 * @type {Object}
 */
var Christmas = function() {
    //页面容器
    var container = $(".container");
    //设置新的页面容器大小
    container.css(config.layer);
    //页面可视区域
	var visualWidth  = container.width()
	var visualHeight = container.height()

	//第一副页面
	var pageA = new PageA()
	//运行动画
	// pageA.run();
    // pageA.change();

    //3d旋转
    var carousel = new Carousel($("#carousel"), {
        imgUrls: [
            "images/carousel/1.png",
            "images/carousel/2.png",
            "images/carousel/3.png",
            "images/carousel/1.png",
            "images/carousel/2.png",
            "images/carousel/3.png"
        ]
    });
    carousel.run();
};


$(function() {
    //圣诞主题效果，开始
    Christmas()
})
