!function(e){var t={trigger:"imageMouseMove",triggerTarget:false,mouseMoveTrigger:50,hoverTrigger:200,scrollTrigger:100,target:"> img"};e.fn.shuffleImages=function(n){return this.each(function(){var r=e.extend({},t,n),i=e(this),s=0,o=r.mouseMoveTrigger,u=r.hoverTrigger,a=r.scrollTrigger,f=r.triggerTarget;i.addClass("si-container").find(r.target).css({maxWidth:"100%"}).not(":first-child").hide();i.find("> img:first-child").addClass("active");if(i.attr("data-si-mousemove-trigger"))o=i.data("si-mousemove-trigger");if(i.attr("data-si-hover-trigger"))u=i.data("si-hover-trigger");if(i.attr("data-si-scroll-trigger"))a=i.data("si-scroll-trigger");if(r.triggerTarget==false)f=i;switch(r.trigger){case"imageMouseMove":f.mousemove(function(e){var t=Math.round(Math.sqrt(Math.pow(e.clientY,2)+Math.pow(e.clientX,2)))+"px";if(Math.abs(parseInt(t)-s)>o){var n=i.find("img.active");if(n.next().length>0){n.next().addClass("active").show();n.removeClass("active").hide()}else{i.find("img:first-child").addClass("active").show();n.removeClass("active").hide()}s=parseInt(t)}});break;case"imageHover":var l;f.mouseover(function(e){l=setInterval(function(){var e=i.find("img.active");if(e.next().length>0){e.next().addClass("active").show();e.removeClass("active").hide()}else{i.find("img:first-child").addClass("active").show();e.removeClass("active").hide()}},u)}).mouseout(function(e){clearInterval(l)});break;case"documentMouseMove":e(document).mousemove(function(e){var t=Math.round(Math.sqrt(Math.pow(e.clientY,2)+Math.pow(e.clientX,2)))+"px";if(Math.abs(parseInt(t)-s)>o){var n=i.find("img.active");if(n.next().length>0){n.next().addClass("active").show();n.removeClass("active").hide()}else{i.find("img:first-child").addClass("active").show();n.removeClass("active").hide()}s=parseInt(t)}});break;case"documentScroll":e(document).on("touchmove mousewheel DOMMouseScroll",function(t,n){var r=e(document).scrollTop();if(Math.abs(parseInt(r)-s)>a){var o=i.find("img.active");if(o.next().length>0){o.next().addClass("active").show();o.removeClass("active").hide()}else{i.find("img:first-child").addClass("active").show();o.removeClass("active").hide()}s=parseInt(e(document).scrollTop())}});break;default:}})}}(window.jQuery)