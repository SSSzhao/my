    window.onload=function(){
        //头部
        changeHeader();
        function changeHeader(){
            var header=document.getElementsByTagName('header')[0];
            var logo=document.getElementById('logo');
            var headerTop=document.getElementsByClassName('header-top')[0];
            var robot=headerTop.getElementsByClassName('robot')[0];
            var robotCartoon=robot.getElementsByClassName('robot-cartoon')[0];
            var robotText=robot.getElementsByClassName('robot-text')[0];
            window.onscroll = function(){
                if(document.documentElement.scrollTop>130){
                    header.style.top=0;
                    logo.style.backgroundPositionX=-150+"px";
                    logo.style.height=40+'px';
                    logo.style.width=100+'px';
                    headerTop.style.padding="6px 0px";
                    robot.style.height=40+'px';
                    robotCartoon.style.top=-4+'px';
                    robotText.style.top=0;
                }
                if(document.documentElement.scrollTop<129){
                    header.style.top=-150+'px';
                    logo.style.backgroundPositionX=0+"px";
                    logo.style.height=56+'px';
                    logo.style.width=150+'px';
                    headerTop.style.padding="14px 0px";
                    robot.style.height=50+'px';
                    robotCartoon.style.top=15+'px';
                    robotText.style.top=9+'px';
                }
                var div=document.getElementsByTagName('body')[0].children;
                var nav=document.getElementsByTagName('nav')[0].getElementsByTagName('a');
                var scroll=document.documentElement.scrollTop
                for(var i=0;i<nav.length;i++){
                    nav[i].onclick=function(index){
                        return function(){
                            for(var i=0;i<nav.length;i++){
                                nav[i].classList.remove('nav-active');
                            }
                            nav[index].classList.add('nav-active');
                            document.documentElement.scrollTop=div[index+2].offsetTop-100;
                        }
                    }(i)
                }
                function loop(){
                    for(var i=0;i<nav.length;i++){
                        nav[i].classList.remove('nav-active');
                    }
                }
                if(scroll>300){
                    document.getElementsByTagName('nav')[0].style.display='block'
                    if(scroll<1950){
                        loop()
                        nav[0].classList.add('nav-active');
                    }else if(scroll<3500){
                        loop()
                        nav[1].classList.add('nav-active');
                    }else if(scroll<3900){
                        loop()
                        nav[2].classList.add('nav-active');
                    }else if(scroll<4600){
                        loop()
                        nav[3].classList.add('nav-active');
                    }else if(scroll<5350){
                        loop()
                        nav[4].classList.add('nav-active');
                    }else if(scroll<6000){
                        loop()
                        nav[5].classList.add('nav-active');
                    }else if(scroll<6600){
                        loop()
                        nav[6].classList.add('nav-active');
                    }else if(scroll<7200){
                        loop()
                        nav[7].classList.add('nav-active');
                    }else if(scroll<7800){
                        loop()
                        nav[8].classList.add('nav-active');
                    }else if(scroll<9150){
                        loop()
                        nav[9].classList.add('nav-active');
                    }else{
                        loop()
                        nav[10].classList.add('nav-active');
                    }
                }else{
                    document.getElementsByTagName('nav')[0].style.display='none'
                }
                
            }
        }
        //头部广告
        document.getElementById('advert').onmouseenter=function(){
            document.getElementById('findcar').style.marginTop=0;
        }
        document.getElementById('advert').onmouseleave=function(){
            document.getElementById('findcar').style.marginTop=-180+'px';
        }
        //热门导航
        changeHotCar()
        function changeHotCar() {
            var hotcarLink=document.getElementsByClassName('hotcar-link');
            var hotcarContent=document.getElementsByClassName('hotcar-content');
            for(var i=0;i<hotcarLink.length;i++){
                hotcarLink[i].onmousemove=function(index){
                    return function() {
                        for(var i=0;i<hotcarLink.length;i++){
                            hotcarContent[i].style.display='none';
                            hotcarLink[i].classList.remove('hotcar-nav-active');
                        }
                        this.classList.add('hotcar-nav-active');
                        hotcarContent[index].style.display='flex';
                    }
                }(i)
            }
        }
        function hotCarNav(obj){
            var hotcarUl=document.getElementById(obj.hotcarUl).getElementsByTagName('ul')
            var hotcarLeft=document.getElementById(obj.hotcarLeft)
            var hotcarRight=document.getElementById(obj.hotcarRight)
            var n=0;
            hotcarRight.onclick=function(){
                n++;
                if(n>2){
                    n=2;
                }
                for(var i=0;i<hotcarUl.length;i++){
                    hotcarUl[i].style.opacity=0;
                    hotcarUl[i].style.zIndex=1;
                }
                hotcarUl[n].style.opacity=1;
                hotcarUl[n].style.zIndex=2;
                hotcarLeft.classList.remove('disabled')
                if(n===2){
                    // hotcarRight.style['transitionDelay']=1+'s'
                    hotcarRight.innerText="更多>"
                    hotcarRight.classList.add('hover')
                    n=2;
                }
            }
            hotcarLeft.onclick=function(){
                n--;
                if(n<0){
                    n=0;
                }
                for(var i=0;i<hotcarUl.length;i++){
                    hotcarUl[i].style.opacity=0;
                    hotcarUl[i].style.zIndex=1;
                }
                hotcarUl[n].style.opacity=1;
                hotcarUl[n].style.zIndex=2;
                hotcarRight.innerHTML='<i class="iconfont icon-right"></i>';
                hotcarRight.classList.remove('hover')
                if(n===0){
                    hotcarLeft.classList.add('disabled')
                    n=0;
                }
            }
            
        }
        for(var i=1;i<7;i++){
            if(i!==5){
                for(var j=1;j<4;j++){
                    var obj={
                        hotcarUl: 'hotcar'+i+'-'+j,
                        hotcarLeft: 'hotcar'+i+'-left'+j,
                        hotcarRight: 'hotcar'+i+'-right'+j
                    }
                    hotCarNav(obj)
                }
            }
        }
    
        //下拉框
        function select(obj){
            obj.li=document.getElementById(obj.id1).getElementsByTagName('li');
            obj.dl=document.getElementById(obj.id2);
            obj.dt=obj.dl.getElementsByTagName(obj.tag);
            for(var i=0;i<obj.li.length;i++){
                var n=0;
                obj.li[i].onclick=function(index){
                    return function() {
                        n=index;
                        for(var i=0;i<obj.li.length;i++){
                            obj.li[i].classList.remove(obj.id1.split("-")[0]+'-active');
                        }
                        this.classList.add(obj.id1.split("-")[0]+'-active');
                        obj.dl.scrollTop=obj.dt[n].offsetTop-obj.height;
                    }
                }(i)
            }
        }
        select({
            id1: 'brand-ol',
            id2: 'brand-dl',
            tag: 'dt',
            height: ''
        });
        select({
            id1: 'forum-ol',
            id2: 'forum-dl',
            tag: 'dt',
            height: ''
        });
        select({
            id1: 'tool-ol',
            id2: 'tool-dl',
            tag: 'dt',
            height: '39'
        });
        select({
            id1: 'picture-ol',
            id2: 'picture-dl',
            tag: 'dt',
            height: ''
        });
        select({
            id1: 'finance-ol',
            id2: 'finance-dl',
            tag: 'dt',
            height: '39'
        });
        //焦点
        function player1(obj){
            var clientWidth=document.getElementsByClassName(obj.clientWidth)[0].clientWidth;
            var a=document.getElementById(obj.a).getElementsByTagName('a');
            var ul=document.getElementById(obj.ul);
            ul.style.width=clientWidth*(a.length+2)+'px'
            ul.style.left = "-" + clientWidth + "px";
            var li=ul.getElementsByTagName('li');
            var first_li=li[0].cloneNode(true);
            var last_li=li[li.length-1].cloneNode(true);
            ul.prepend(last_li);
            ul.append(first_li);
            var p=document.getElementsByClassName(obj.p)[0].getElementsByTagName('p');
            var n=1;
            document.getElementById(obj.prev).onclick=function(){
                n--;
                openTransition();
                move();
                if(n<1){
                    n=a.length;
                    setTimeout(function(){
                        closeTransition();
                        move();
                    },500);
                }
                for(i=0;i<a.length;i++){
                    a[i].classList.remove(obj.ul.split("-")[0]+'-active');
                    p[i].style.display='none';
                }
                a[n-1].classList.add(obj.ul.split("-")[0]+'-active');
                p[n-1].style.display='block';
            }
            setInterval(
                document.getElementById(obj.next).onclick=function(){
                    n++;
                    openTransition();
                    move();
                    if(n>a.length){
                        n=1;
                        setTimeout(function(){
                            closeTransition();
                            move();
                        },500);
                    }
                    for(var i=0;i<a.length;i++){
                        a[i].classList.remove(obj.ul.split("-")[0]+'-active');
                        p[i].style.display='none';
                    }
                    a[n-1].classList.add(obj.ul.split("-")[0]+'-active');
                    p[n-1].style.display='block';
                },3000);
                for(var i=0;i<a.length;i++){
                    a[i].onclick=function(index){
                        return function() {
                            n=index+1;
                            openTransition();
                            for(var i=0;i<a.length;i++){
                                a[i].classList.remove(obj.ul.split("-")[0]+'-active');
                                p[i].style.display='none';
                            }
                            this.classList.add(obj.ul.split("-")[0]+'-active');
                            p[n-1].style.display='block';
                            move();
                        }
                    }(i)
                }
                function openTransition() {
                    ul.style.transition = "all .5s";
                }
                function closeTransition() {
                    ul.style.transition = "none";
                }
                function move() {
                    ul.style.left=-clientWidth*n+'px';
                }
        }
        player1({
            clientWidth: 'focus-inner',
            a: 'focus-page',
            ul: 'focus-ul',
            p: 'focus-title',
            prev: 'focus-prev',
            next: 'focus-next'
        })
        function player2(obj){
            var clientWidth=document.getElementsByClassName(obj.clientWidth)[0].clientWidth;
            var a=document.getElementById(obj.a).getElementsByTagName('a');
            var ul=document.getElementById(obj.ul);
            ul.style.width=clientWidth*(a.length+1)+'px';
            var li=ul.getElementsByTagName('li');
            var first_li=li[0].cloneNode(true);
            ul.append(first_li);
            var n=0;
            setInterval(
                function next(){
                    n++;
                    openTransition();
                    move();
                    if(n>a.length-1){
                        n=0;
                        setTimeout(function(){
                            closeTransition();
                            move();
                        },500);
                    }
                    for(var i=0;i<a.length;i++){
                        a[i].classList.remove(obj.ul.split("-")[0]+'-active');
                    }
                    a[n].classList.add(obj.ul.split("-")[0]+'-active');
                },5000);
            for(var i=0;i<a.length;i++){
                a[i].onclick=function(index){
                    return function() {
                        n=index;
                        openTransition();
                        for(var i=0;i<a.length;i++){
                            a[i].classList.remove(obj.ul.split("-")[0]+'-active');
                        }
                        this.classList.add(obj.ul.split("-")[0]+'-active');
                        move();
                    }
                }(i)
            }
            function openTransition() {
                ul.style.transition = "all .5s";
            }
            function closeTransition() {
                ul.style.transition = "none";
            }
            function move() {
                ul.style.left=-clientWidth*n+'px';
            }
        }
        player2({
            clientWidth: 'focus-autoplay',
            a: 'live-page',
            ul: 'live-ul'
        });
        
        //论坛
        changeForumTool();
        function changeForumTool() {
            var toolA=document.getElementById('tool-ul').getElementsByTagName('a');
            var toolFoot1=document.getElementsByClassName('tool-foot1')[0];
            var toolFoot2=document.getElementsByClassName('tool-foot2')[0];
            toolA[0].onmousemove=function(){
                toolFoot1.style.display='block';
                toolFoot2.style.display='none';
                this.classList.add('tool-active');
                toolA[1].classList.remove('tool-active');
            }
            toolA[1].onmousemove=function(){
                toolFoot1.style.display='none';
                toolFoot2.style.display='flex';
                this.classList.add('tool-active');
                toolA[0].classList.remove('tool-active');
            }
        }
        //视频
        player3({
            clientWidth: 'video-content',
            a: 'video-page',
            ul: 'video-ul',
            prev: 'video-prev',
            next: 'video-next'
        });
        function player3(obj){
            var clientWidth=document.getElementsByClassName(obj.clientWidth)[0].clientWidth;
            var a=document.getElementById(obj.a).getElementsByTagName('a');
            var ul=document.getElementById(obj.ul);
            ul.style.width=clientWidth*(a.length+2)+'px';
            ul.style.left = "-" + clientWidth + "px";
            var li=ul.children;
            var first_li=li[0].cloneNode(true);
            var last_li=li[li.length-1].cloneNode(true);
            ul.prepend(last_li);
            ul.append(first_li);
            var n=1;
            document.getElementById(obj.prev).onclick=function(){
                n--;
                openTransition();
                move();
                if(n<1){
                    n=a.length;
                    setTimeout(function(){
                        closeTransition();
                        move();
                    },500);
                }
                for(i=0;i<a.length;i++){
                    a[i].classList.remove(obj.ul.split("-")[0]+'-active');
                }
                a[n-1].classList.add(obj.ul.split("-")[0]+'-active');
            }
            setInterval(
            document.getElementById(obj.next).onclick=function(){
                n++;
                openTransition();
                move();
                if(n>a.length){
                    n=1;
                    setTimeout(function(){
                        closeTransition();
                        move();
                    },500);
                }
                for(var i=0;i<a.length;i++){
                    a[i].classList.remove(obj.ul.split("-")[0]+'-active');
                }
                a[n-1].classList.add(obj.ul.split("-")[0]+'-active');
            },5000);
            for(var i=0;i<a.length;i++){
                a[i].onclick=function(index){
                    return function() {
                        n=index+1;
                        openTransition();
                        for(var i=0;i<a.length;i++){
                            a[i].classList.remove(obj.ul.split("-")[0]+'-active');
                        }
                        this.classList.add(obj.ul.split("-")[0]+'-active');
                        move();
                    }
                }(i)
            }
            function openTransition() {
                ul.style.transition = "all .5s";
            }
            function closeTransition() {
                ul.style.transition = "none";
            }
            function move() {
                ul.style.left=-clientWidth*n+'px';
            }
        }
        
        //车图
        player3({
            clientWidth: 'picture-content',
            a: 'picture-page',
            ul: 'picture-ul',
            prev: 'picture-prev',
            next: 'picture-next'
        });
        player1({
            clientWidth: 'picture-play',
            a: 'picture2-page',
            ul: 'picture2-ul',
            p: 'picture-p',
            prev: 'picture2-prev',
            next: 'picture2-next'
        });
        //买车
        changeBuyCar();
        function changeBuyCar() {
            var buyCarDiv=document.getElementById('buycar-body').getElementsByTagName('div');
            var buyCarli=document.getElementById('buycar-ul').getElementsByTagName('li');
            for(var i=0;i<buyCarli.length;i++){
                buyCarli[i].onmousemove=function(index){
                    return function(){
                        for(var i=0;i<buyCarli.length;i++){
                            buyCarli[i].classList.remove('buycar-active');
                            buyCarDiv[i].style.display="none";
                        }
                        this.classList.add('buycar-active');
                        buyCarDiv[index].style.display="flex";
                    }
                }(i)
            }
            var buycarUl=document.getElementsByClassName('buycar-right')[0].getElementsByTagName('ul');
            var buycarChange=document.getElementById('buycar-change');
            var n=0;
            buycarChange.onclick=function(){
                n++;
                if(n>2){
                    n=0;
                }
                for(var i=0;i<buycarUl.length;i++){
                    buycarUl[i].style.display="none";
                }
                buycarUl[n].style.display="flex";
            }
        }
        //经销商
        player2({
            clientWidth: 'dealer-play',
            a: 'dealer-p',
            ul: 'dealer-ul',
        });
        changeDealer();
        function changeDealer() {
            var dealerA1=document.getElementById('dealer-a1')
            var dealerA2=document.getElementById('dealer-a2')
            var dealerMore=document.getElementById('dealer-more')
            var dealerHot=document.getElementsByClassName('dealer-hot')[0]
            var dealerRecommend=document.getElementsByClassName('dealer-recommend')[0]
            dealerA1.onmouseenter=function(){
                dealerMore.style.display='none';
                this.classList.add('dealer-body-active');
                dealerA2.classList.remove('dealer-body-active');
                dealerHot.style.display='flex';
                dealerRecommend.style.display='none';
            }
            dealerA2.onmouseenter=function(){
                dealerMore.style.display='block';
                this.classList.add('dealer-body-active');
                dealerA1.classList.remove('dealer-body-active');
                dealerHot.style.display='none';
                dealerRecommend.style.display='flex';
            }
        }
        //车商城
        player3({
            clientWidth: 'carmall-play',
            a: 'carmall-page',
            ul: 'carmall-ul',
            prev: 'carmall-prev',
            next: 'carmall-next'
        });
        player8();
        function player8(){
            var clientWidth=document.getElementsByClassName('carmall-play2')[0].clientWidth;
            var ul=document.getElementById('carmall-ul2');
            ul.style.left = "-" + clientWidth + "px";
            var li=ul.getElementsByTagName('li');
            ul.style.width=clientWidth*(li.length+2)+'px';
            var first_li=li[0].cloneNode(true);
            var last_li=li[li.length-1].cloneNode(true);
            ul.prepend(last_li);
            ul.append(first_li);
            var n=1;
            document.getElementById('carmall-prev2').onclick=function(){
                n--;
                openTransition();
                move();
                if(n<1){
                    n=2;
                    setTimeout(function(){
                        closeTransition();
                        move();
                    },500);
                }
            }
            document.getElementById('carmall-next2').onclick=function(){
                n++;
                openTransition();
                move();
                if(n>2){
                    n=1;
                    setTimeout(function(){
                        console.log(li.length)
                        closeTransition();
                        move();
                    },500);
                }
            }
            function openTransition() {
                ul.style.transition = "all .5s";
            }
            function closeTransition() {
                ul.style.transition = "none";
            }
            function move() {
                ul.style.left=-clientWidth*n+'px';
            }
        }
        //金融
        financeChange();
        function financeChange() {
            var financeA=document.getElementById('finance-p').getElementsByTagName('a');
            var financeDiv=document.getElementsByClassName('finance-middle')[0].children;
            for(var i=0;i<financeA.length;i++){
                financeA[i].onmousemove=function(index){
                    return function() {
                        for(var i=0;i<financeA.length;i++){
                            financeDiv[i+1].style.display='none';
                            financeA[i].classList.remove('finance-active');
                        }
                        this.classList.add('finance-active');
                        financeDiv[index+1].style.display='flex';
                    }
                }(i)
            }
        }
        //资讯
        player3({
            clientWidth: 'information1-play',
            a: 'information1-page',
            ul: 'information1-ul',
            prev: 'information1-prev',
            next: 'information1-next'
        })
        changeHeight()
        function changeHeight(){
            var informationContent=document.getElementsByClassName('information-content')[0];
            var informationMore=document.getElementById('information-more');
            var n=0;
            informationMore.onclick=function(){
                n++;
                if(n===1){
                    informationContent.style.height=2500+'px';
                }
                if(n===2){
                    informationContent.style.height='auto';
                    informationMore.innerText='查看全部文章';
                }
            }
        }
        //精选帖
        player3({
            clientWidth: 'club-play',
            a: 'club-page',
            ul: 'club-ul',
            prev: 'club-prev',
            next: 'club-next'
        });
        //友情链接
        friendlinkChange();
        function friendlinkChange() {
            var a=document.getElementById('friendlink-p').getElementsByTagName('a');
            var div=document.getElementsByClassName('friendlink-cen')[0].children;
            for(var i=0;i<a.length;i++){
                a[i].onclick=function(index){
                    return function() {
                        for(var i=0;i<a.length;i++){
                            div[i+1].style.display='none';
                            a[i].classList.remove('friendlink-active');
                        }
                        this.classList.add('friendlink-active');
                        div[index+1].style.display='block';
                    }
                }(i)
            }
            return
        }
    }