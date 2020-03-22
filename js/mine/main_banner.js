"use strict";var Carousel=function(){};Carousel.prototype={container:"",datas:null,autoplaySpeed:null,autoplay:!1,init:function(t){this.container=t.container,this.datas=t.datas,this.autoplaySpeed=t.autoplaySpeed,this.autoplay=t.autoplay,$(this.container).html(""),this.createCarousel(t),this.arrowHover(),this.tabImg(),this.setZindex(),!t.autoplay&&1!=this.autoplay||this.autoPlay(this.autoplaySpeed)},createCarousel:function(t){this.createDOM(this.container,t)},createDOM:function(t,a){$(t).html("<div class='carousel-box clearfix'><div class='transverse-box pull-left'></div><div class='vertical-box pull-right'><ul></ul></div><span class='left-arrow'>‹</span><span class='right-arrow'>›</span></div>");for(var e=a.datas.length,i=0;i<e;i++)$(".transverse-box").append("<div class='img-item'><a href='"+a.datas[i].url+"' target='_blank'><img src='"+a.datas[i].img+"' url='"+a.datas[i].url+"' alt='"+a.datas[i].alt+"'></a></div>");$(".vertical-box ul").append("<li><a href='"+a.datas[1].url+"' target='_blank'><img src='"+a.datas[1].img+"' alt='"+a.datas[1].alt+"'></a></li>"),$(".vertical-box ul").append("<li><a href='"+a.datas[2].url+"' target='_blank'><img src='"+a.datas[2].img+"' alt='"+a.datas[2].alt+"'></a></li>")},arrowHover:function(){$(".carousel-box").hover(function(){$(".left-arrow,.right-arrow").css("display","flex")},function(){$(".left-arrow,.right-arrow").css("display","none")})},tabImg:function(){var t=this;$(".left-arrow").on("click",function(){t.changeZindex_add()}),$(".right-arrow").on("click",function(){t.changeZindex_sub()})},setZindex:function(){for(var t=$(".transverse-box").find(".img-item").length,a=1e4;a<t;a++)$(".img-item").eq(a).css({zIndex:a}),$(".img-item").eq(a).attr("Zindex",a)},changeZindex_add:function(){$(".transverse-box").find(".img-item").length;var t=$(".transverse-box").find(".img-item").eq(length-1).attr("zindex"),a=$(".transverse-box").find(".img-item").eq(0).find("img"),e=a.attr("src"),i=a.attr("alt"),r=a.attr("url"),n=$(".transverse-box").find(".img-item").eq(length-1).find("img"),s=n.attr("src"),l=n.attr("url"),o=$(".transverse-box").find(".img-item").eq(length-2).find("img"),d=o.attr("src"),c=o.attr("url");$(".transverse-box").find(".img-item").eq(0).remove(),$(".transverse-box").append("<div class='img-item' zindex='"+(parseInt(t)+1)+"'><a href='"+r+"' target='_blank'><img src='"+e+"' alt='"+i+"' url='"+r+"'></a><div>"),$(".vertical-box ul").find("li").eq(0).find("img").attr("src",s),$(".vertical-box ul").find("li").eq(0).find("a").attr("href",l),$(".vertical-box ul").find("li").eq(1).find("img").attr("src",d),$(".vertical-box ul").find("li").eq(1).find("a").attr("href",c),$(".transverse-box").find(".img-item").eq(length-1).css({zIndex:parseInt(t)+1,opacity:0},500),$(".transverse-box").find(".img-item").eq(length-1).animate({opacity:1},500)},changeZindex_sub:function(){$(".transverse-box").find(".img-item").length,$(".transverse-box").find(".img-item").eq(length-1).attr("zindex");var t=$(".transverse-box").find(".img-item").eq(0).attr("zindex"),a=$(".transverse-box").find(".img-item").eq(length-1).find("img"),e=a.attr("src"),i=a.attr("alt"),r=a.attr("url"),n=$(".transverse-box").find(".img-item").eq(0).find("img"),s=n.attr("src"),l=n.attr("url"),o=$(".transverse-box").find(".img-item").eq(1).find("img"),d=o.attr("src"),c=o.attr("url");$(".transverse-box").find(".img-item").eq(length-1).remove(),$(".transverse-box").prepend("<div class='img-item' zindex='"+(parseInt(t)-1)+"'><a href='"+r+"' target='_blank'><img src='"+e+"' alt='"+i+"' url='"+r+"'></a><div>"),$(".vertical-box ul").find("li").eq(0).find("img").attr("src",s),$(".vertical-box ul").find("li").eq(0).find("a").attr("href",l),$(".vertical-box ul").find("li").eq(1).find("img").attr("src",d),$(".vertical-box ul").find("li").eq(1).find("a").attr("href",c),$(".transverse-box").find(".img-item").eq(0).css({zIndex:parseInt(t)-1}).siblings().css("opacity","0"),$(".transverse-box").find(".img-item").eq(length-1).animate({opacity:1})},autoPlay:function(t){var a=this;this.changeZindex_add(),setTimeout(function(){a.autoPlay(t)},t)}},$(document).ready(function(){$.getJSON("./data/main-banner.json",function(t){var a=t;(new Carousel).init({container:"#banner",datas:a,autoplaySpeed:5e3,autoplay:!0})})});