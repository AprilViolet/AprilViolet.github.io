<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '(≧﹏ ≦)记得回来看看~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
		 <!-- document.title = 'ヾ(Ő∀Ő3)ノ你帅就回来！' + OriginTitle; -->
         document.title = 'ヾ(Ő∀Ő3)ノ你回来啦！';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
