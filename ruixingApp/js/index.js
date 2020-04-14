// 轮播图
document.addEventListener('plusready', function(){
	//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
	// 设置目标位置坐标点和其实位置坐标点
	var dst = new plus.maps.Point(116.39131928,39.90793074); // 天安门 
	var src = new plus.maps.Point(116.335,39.966); // 大钟寺
	// 调用系统地图显示 
	plus.maps.openSysMap( dst, "天安门", src );
});


