var map, center, address;
function showMap(){
    plus.nativeUI.showWaiting();
    //创建地图
    map = new plus.maps.Map('map');
    //设置缩放级别
    map.setZoom(18);
    //开启用户位置显示
    map.showUserLocation(true);
    //获取用户位置信息
    map.getUserLocation( function(state, point){
        console.log(JSON.stringify(point));
        locationPos = point;
        center = new plus.maps.Point(point.longitude, point.latitude);
        //设置地图中心点
        map.setCenter(center);
        //在周围设置图标 "latitude":34.2337,"longitude":108.903271,
        var bike1 = new plus.maps.Point(point.longitude+0.0001, point.latitude+0.0003);
        var bike1Icon = new plus.maps.Marker(bike1);
        bike1Icon.setIcon('img/bike.png');
        var bubble = new plus.maps.Bubble("打造最好的HTML5移动开发工具");
        bike1Icon.setBubble(bubble);
        map.addOverlay(bike1Icon);
        
        // var bike1 = new plus.maps.Point(point.longitude - 0.0001, point.latitude - 0.0003);
        // var bike1Icon = new plus.maps.Marker(bike1);
        // bike1Icon.setIcon('img/bike.png');
        // var bubble = new plus.maps.Bubble("打造最好的HTML5移动开发工具");
        // bike1Icon.setBubble(bubble);
        // map.addOverlay(bike1Icon);
    });
    //获取用户地址信息
    plus.geolocation.getCurrentPosition(function(p){
        plus.nativeUI.closeWaiting();
        console.log(JSON.stringify(p));
        address =  p.address.poiName;
        document.getElementById('address').innerHTML = address;
    }, function(){
        
    });
    
}
document.addEventListener('plusready', function(){
    var winHeight = document.documentElement.clientHeight;
    document.getElementById('map').style.height = (winHeight - 88)+'px';
    showMap();
});
function goto(){
    plus.maps.openSysMap(center, address, center);
}