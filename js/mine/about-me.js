"use strict";Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return t},$(function(){$.post("https://v1.jinrishici.com/all.json",{},function(t,e){var i="<blockquote>"+t.origin+'<br>"'+t.content+'"<br>–'+t.author+"</blockquote>";$("#poetry-container-time").append("<p>"+(new Date).Format("yyyy.MM.dd/hh:mm:ss")+"</p>"+i)})}),$(function(){$.getJSON("../data/record.json",function(t){$.each(t,function(t,e){var i='<li class="time-axis-item"><div class="time-axis-date">'+e.date+'<span></span></div><div class="time-axis-title">'+e.title+'</div><p class="time-axis-achievement">'+e.achievement+"</p></li>";$(".time-axis").append(i)})})});