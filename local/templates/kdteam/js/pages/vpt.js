(function(){var t,i;t=this.jQuery||window.jQuery,i=t(window),t.fn.stick_in_parent=function(o){var s,e,n,r,l,c,a,f,h,p,d,u;for(null==o&&(o={}),u=o.sticky_class,c=o.inner_scrolling,d=o.recalc_every,p=o.parent,h=o.offset_top,f=o.spacer,n=o.bottoming,null==h&&(h=80),null==p&&(p=void 0),null==c&&(c=!0),null==u&&(u="is_stuck"),s=t(document),null==n&&(n=!0),r=function(o,e,r,l,a,k,g,m){var v,y,_,b,$,w,x,T,C,D,I,z;if(!o.data("sticky_kit")){if(o.data("sticky_kit",!0),$=s.height(),x=o.parent(),null!=p&&(x=x.closest(p)),!x.length)throw"failed to find stick parent";if(_=!1,v=!1,I=null!=f?f&&o.closest(f):t("<div />"),I&&I.css("position",o.css("position")),T=function(){var t,i,n;if(!m)return $=s.height(),t=parseInt(x.css("border-top-width"),10),i=parseInt(x.css("padding-top"),10),e=parseInt(x.css("padding-bottom"),10),r=x.offset().top+t+i,l=x.height(),_&&(_=!1,v=!1,null==f&&(o.insertAfter(I),I.detach()),o.css({position:"",top:"",width:"",bottom:""}).removeClass(u),n=!0),a=o.offset().top-(parseInt(o.css("margin-top"),10)||0)-h,k=o.outerHeight(!0),g=o.css("float"),I&&I.css({width:o.outerWidth(!0),height:k,display:o.css("display"),"vertical-align":o.css("vertical-align"),"float":g}),n?z():void 0},T(),k!==l)return b=void 0,w=h,D=d,z=function(){var t,p,y,C,z,A;if(!m)return y=!1,null!=D&&(D-=1,D<=0&&(D=d,T(),y=!0)),y||s.height()===$||(T(),y=!0),C=i.scrollTop(),null!=b&&(p=C-b),b=C,_?(n&&(z=C+k+w>l+r,v&&!z&&(v=!1,o.css({position:"fixed",bottom:"",top:w}).trigger("sticky_kit:unbottom"))),C<a&&(_=!1,w=h,null==f&&("left"!==g&&"right"!==g||o.insertAfter(I),I.detach()),t={position:"",width:"",top:""},o.css(t).removeClass(u).trigger("sticky_kit:unstick")),c&&(A=i.height(),k+h>A&&(v||(w-=p,w=Math.max(A-k,w),w=Math.min(h,w),_&&o.css({top:w+"px"}))))):C>a&&(_=!0,t={position:"fixed",top:w},t.width="border-box"===o.css("box-sizing")?o.outerWidth()+"px":o.width()+"px",o.css(t).addClass(u),null==f&&(o.after(I),"left"!==g&&"right"!==g||I.append(o)),o.trigger("sticky_kit:stick")),_&&n&&(null==z&&(z=C+k+w>l+r),!v&&z)?(v=!0,"static"===x.css("position")&&x.css({position:"relative"}),o.css({position:"absolute",bottom:e,top:"auto"}).trigger("sticky_kit:bottom")):void 0},C=function(){return T(),z()},y=function(){if(m=!0,i.off("touchmove",z),i.off("scroll",z),i.off("resize",C),t(document.body).off("sticky_kit:recalc",C),o.off("sticky_kit:detach",y),o.removeData("sticky_kit"),o.css({position:"",bottom:"",top:"",width:""}),x.position("position",""),_)return null==f&&("left"!==g&&"right"!==g||o.insertAfter(I),I.remove()),o.removeClass(u)},i.on("touchmove",z),i.on("scroll",z),i.on("resize",C),t(document.body).on("sticky_kit:recalc",C),o.on("sticky_kit:detach",y),setTimeout(z,0)}},l=0,a=this.length;l<a;l++)e=this[l],r(t(e));return this}}).call(this),$(document).ready(function(){$(window).on("click",".landing--block_left--small_p",function(t){t.preventDefault();var i=$(this).attr("href"),o=$(i).offset().top;$("body,html").animate({scrollTop:o},1500)}),$(".landing--block_left").on("click","a",function(t){t.preventDefault();var i=$(this).attr("href"),o=$(i).offset().top;$(".header").height()+30;$("body,html").animate({scrollTop:o},1500)}),$(".seven").on("click","a",function(t){t.preventDefault();var i=$(this).attr("href"),o=$(i).offset().top;$(".header").height()+30;$("body,html").animate({scrollTop:o},1500)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZwdC5qcyJdLCJuYW1lcyI6WyIkIiwid2luIiwidGhpcyIsImpRdWVyeSIsIndpbmRvdyIsImZuIiwic3RpY2tfaW5fcGFyZW50Iiwib3B0cyIsImRvYyIsImVsbSIsImVuYWJsZV9ib3R0b21pbmciLCJpIiwiaW5uZXJfc2Nyb2xsaW5nIiwibGVuIiwibWFudWFsX3NwYWNlciIsIm9mZnNldF90b3AiLCJwYXJlbnRfc2VsZWN0b3IiLCJyZWNhbGNfZXZlcnkiLCJzdGlja3lfY2xhc3MiLCJwYXJlbnQiLCJzcGFjZXIiLCJib3R0b21pbmciLCJkb2N1bWVudCIsInBhZGRpbmdfYm90dG9tIiwicGFyZW50X3RvcCIsInBhcmVudF9oZWlnaHQiLCJ0b3AiLCJoZWlnaHQiLCJlbF9mbG9hdCIsImRldGFjaGVkIiwiYm90dG9tZWQiLCJkZXRhY2giLCJmaXhlZCIsImxhc3RfcG9zIiwibGFzdF9zY3JvbGxfaGVpZ2h0Iiwib2Zmc2V0IiwicmVjYWxjIiwicmVjYWxjX2FuZF90aWNrIiwicmVjYWxjX2NvdW50ZXIiLCJ0aWNrIiwiZGF0YSIsImNsb3Nlc3QiLCJsZW5ndGgiLCJjc3MiLCJib3JkZXJfdG9wIiwicGFkZGluZ190b3AiLCJyZXN0b3JlIiwicGFyc2VJbnQiLCJpbnNlcnRBZnRlciIsInBvc2l0aW9uIiwid2lkdGgiLCJib3R0b20iLCJyZW1vdmVDbGFzcyIsIm91dGVySGVpZ2h0Iiwib3V0ZXJXaWR0aCIsImRpc3BsYXkiLCJ2ZXJ0aWNhbC1hbGlnbiIsImZsb2F0IiwiZGVsdGEiLCJyZWNhbGNlZCIsInNjcm9sbCIsIndpbGxfYm90dG9tIiwid2luX2hlaWdodCIsInNjcm9sbFRvcCIsInRyaWdnZXIiLCJNYXRoIiwibWF4IiwibWluIiwiYWRkQ2xhc3MiLCJhZnRlciIsImFwcGVuZCIsIm9mZiIsImJvZHkiLCJyZW1vdmVEYXRhIiwicmVtb3ZlIiwib24iLCJzZXRUaW1lb3V0IiwiY2FsbCIsInJlYWR5IiwiZXZlbnQiLCJwcmV2ZW50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QixFQUFJRSxFQUFLRixJQUN0Q0YsRUFBTVAsS0FBS1MsR0FDWE4sRUFBR0wsRUFBRVMsR0FFUCxPQUFPUCxTQUdSMkUsS0FBSzNFLE1BRVJGLEVBQUVzQixVQUFVd0QsTUFBTSxXQWVoQjlFLEVBQUVJLFFBQVF1RSxHQUFHLFFBQVMsZ0NBQWlDLFNBQVVJLEdBRS9EQSxFQUFNQyxnQkFHTixJQUFJQyxHQUFLakYsRUFBRUUsTUFBTWdGLEtBQUssUUFHbEJ4RCxFQUFNMUIsRUFBRWlGLEdBQUk5QyxTQUFTVCxHQUd6QjFCLEdBQUUsYUFBYW1GLFNBQVNwQixVQUFXckMsR0FBTSxRQUczQzFCLEVBQUUsd0JBQXdCMkUsR0FBRyxRQUFTLElBQUssU0FBVUksR0FHbkRBLEVBQU1DLGdCQUdOLElBQUlDLEdBQUtqRixFQUFFRSxNQUFNZ0YsS0FBSyxRQUdsQnhELEVBQU0xQixFQUFFaUYsR0FBSTlDLFNBQVNULEdBR2QxQixHQUFFLFdBQVcyQixTQUFXLEVBSW5DM0IsR0FBRSxhQUFhbUYsU0FBU3BCLFVBQVdyQyxHQUFNLFFBRzNDMUIsRUFBRSxVQUFVMkUsR0FBRyxRQUFTLElBQUssU0FBVUksR0FFckNBLEVBQU1DLGdCQUdOLElBQUlDLEdBQUtqRixFQUFFRSxNQUFNZ0YsS0FBSyxRQUdsQnhELEVBQU0xQixFQUFFaUYsR0FBSTlDLFNBQVNULEdBR2QxQixHQUFFLFdBQVcyQixTQUFXLEVBR25DM0IsR0FBRSxhQUFhbUYsU0FBU3BCLFVBQVdyQyxHQUFNIiwiZmlsZSI6InBhZ2VzL3ZwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcclxuXHJcbi8qKlxyXG4gQGxpY2Vuc2UgU3RpY2t5LWtpdCB2MS4xLjIgfCBXVEZQTCB8IExlYWYgQ29yY29yYW4gMjAxNSB8IGh0dHA6Ly9sZWFmby5uZXRcclxuICovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgdmFyICQsIHdpbjtcclxuXHJcbiAgJCA9IHRoaXMualF1ZXJ5IHx8IHdpbmRvdy5qUXVlcnk7XHJcblxyXG4gIHdpbiA9ICQod2luZG93KTtcclxuXHJcbiAgJC5mbi5zdGlja19pbl9wYXJlbnQgPSBmdW5jdGlvbihvcHRzKSB7XHJcbiAgICB2YXIgZG9jLCBlbG0sIGVuYWJsZV9ib3R0b21pbmcsIGZuLCBpLCBpbm5lcl9zY3JvbGxpbmcsIGxlbiwgbWFudWFsX3NwYWNlciwgb2Zmc2V0X3RvcCwgcGFyZW50X3NlbGVjdG9yLCByZWNhbGNfZXZlcnksIHN0aWNreV9jbGFzcztcclxuICAgIGlmIChvcHRzID09IG51bGwpIHtcclxuICAgICAgb3B0cyA9IHt9O1xyXG4gICAgfVxyXG4gICAgc3RpY2t5X2NsYXNzID0gb3B0cy5zdGlja3lfY2xhc3MsIGlubmVyX3Njcm9sbGluZyA9IG9wdHMuaW5uZXJfc2Nyb2xsaW5nLCByZWNhbGNfZXZlcnkgPSBvcHRzLnJlY2FsY19ldmVyeSwgcGFyZW50X3NlbGVjdG9yID0gb3B0cy5wYXJlbnQsIG9mZnNldF90b3AgPSBvcHRzLm9mZnNldF90b3AsIG1hbnVhbF9zcGFjZXIgPSBvcHRzLnNwYWNlciwgZW5hYmxlX2JvdHRvbWluZyA9IG9wdHMuYm90dG9taW5nO1xyXG4gICAgaWYgKG9mZnNldF90b3AgPT0gbnVsbCkge1xyXG4gICAgICBvZmZzZXRfdG9wID0gODA7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyZW50X3NlbGVjdG9yID09IG51bGwpIHtcclxuICAgICAgcGFyZW50X3NlbGVjdG9yID0gdm9pZCAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGlubmVyX3Njcm9sbGluZyA9PSBudWxsKSB7XHJcbiAgICAgIGlubmVyX3Njcm9sbGluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RpY2t5X2NsYXNzID09IG51bGwpIHtcclxuICAgICAgc3RpY2t5X2NsYXNzID0gXCJpc19zdHVja1wiO1xyXG4gICAgfVxyXG4gICAgZG9jID0gJChkb2N1bWVudCk7XHJcbiAgICBpZiAoZW5hYmxlX2JvdHRvbWluZyA9PSBudWxsKSB7XHJcbiAgICAgIGVuYWJsZV9ib3R0b21pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm4gPSBmdW5jdGlvbihlbG0sIHBhZGRpbmdfYm90dG9tLCBwYXJlbnRfdG9wLCBwYXJlbnRfaGVpZ2h0LCB0b3AsIGhlaWdodCwgZWxfZmxvYXQsIGRldGFjaGVkKSB7XHJcbiAgICAgIHZhciBib3R0b21lZCwgZGV0YWNoLCBmaXhlZCwgbGFzdF9wb3MsIGxhc3Rfc2Nyb2xsX2hlaWdodCwgb2Zmc2V0LCBwYXJlbnQsIHJlY2FsYywgcmVjYWxjX2FuZF90aWNrLCByZWNhbGNfY291bnRlciwgc3BhY2VyLCB0aWNrO1xyXG4gICAgICBpZiAoZWxtLmRhdGEoXCJzdGlja3lfa2l0XCIpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGVsbS5kYXRhKFwic3RpY2t5X2tpdFwiLCB0cnVlKTtcclxuICAgICAgbGFzdF9zY3JvbGxfaGVpZ2h0ID0gZG9jLmhlaWdodCgpO1xyXG4gICAgICBwYXJlbnQgPSBlbG0ucGFyZW50KCk7XHJcbiAgICAgIGlmIChwYXJlbnRfc2VsZWN0b3IgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5jbG9zZXN0KHBhcmVudF9zZWxlY3Rvcik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFwYXJlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgXCJmYWlsZWQgdG8gZmluZCBzdGljayBwYXJlbnRcIjtcclxuICAgICAgfVxyXG4gICAgICBmaXhlZCA9IGZhbHNlO1xyXG4gICAgICBib3R0b21lZCA9IGZhbHNlO1xyXG4gICAgICBzcGFjZXIgPSBtYW51YWxfc3BhY2VyICE9IG51bGwgPyBtYW51YWxfc3BhY2VyICYmIGVsbS5jbG9zZXN0KG1hbnVhbF9zcGFjZXIpIDogJChcIjxkaXYgLz5cIik7XHJcbiAgICAgIGlmIChzcGFjZXIpIHtcclxuICAgICAgICBzcGFjZXIuY3NzKCdwb3NpdGlvbicsIGVsbS5jc3MoJ3Bvc2l0aW9uJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlY2FsYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBib3JkZXJfdG9wLCBwYWRkaW5nX3RvcCwgcmVzdG9yZTtcclxuICAgICAgICBpZiAoZGV0YWNoZWQpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdF9zY3JvbGxfaGVpZ2h0ID0gZG9jLmhlaWdodCgpO1xyXG4gICAgICAgIGJvcmRlcl90b3AgPSBwYXJzZUludChwYXJlbnQuY3NzKFwiYm9yZGVyLXRvcC13aWR0aFwiKSwgMTApO1xyXG4gICAgICAgIHBhZGRpbmdfdG9wID0gcGFyc2VJbnQocGFyZW50LmNzcyhcInBhZGRpbmctdG9wXCIpLCAxMCk7XHJcbiAgICAgICAgcGFkZGluZ19ib3R0b20gPSBwYXJzZUludChwYXJlbnQuY3NzKFwicGFkZGluZy1ib3R0b21cIiksIDEwKTtcclxuICAgICAgICBwYXJlbnRfdG9wID0gcGFyZW50Lm9mZnNldCgpLnRvcCArIGJvcmRlcl90b3AgKyBwYWRkaW5nX3RvcDtcclxuICAgICAgICBwYXJlbnRfaGVpZ2h0ID0gcGFyZW50LmhlaWdodCgpO1xyXG4gICAgICAgIGlmIChmaXhlZCkge1xyXG4gICAgICAgICAgZml4ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGJvdHRvbWVkID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAobWFudWFsX3NwYWNlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVsbS5pbnNlcnRBZnRlcihzcGFjZXIpO1xyXG4gICAgICAgICAgICBzcGFjZXIuZGV0YWNoKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbG0uY3NzKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIHRvcDogXCJcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiXCIsXHJcbiAgICAgICAgICAgIGJvdHRvbTogXCJcIlxyXG4gICAgICAgICAgfSkucmVtb3ZlQ2xhc3Moc3RpY2t5X2NsYXNzKTtcclxuICAgICAgICAgIHJlc3RvcmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3AgPSBlbG0ub2Zmc2V0KCkudG9wIC0gKHBhcnNlSW50KGVsbS5jc3MoXCJtYXJnaW4tdG9wXCIpLCAxMCkgfHwgMCkgLSBvZmZzZXRfdG9wO1xyXG4gICAgICAgIGhlaWdodCA9IGVsbS5vdXRlckhlaWdodCh0cnVlKTtcclxuICAgICAgICBlbF9mbG9hdCA9IGVsbS5jc3MoXCJmbG9hdFwiKTtcclxuICAgICAgICBpZiAoc3BhY2VyKSB7XHJcbiAgICAgICAgICBzcGFjZXIuY3NzKHtcclxuICAgICAgICAgICAgd2lkdGg6IGVsbS5vdXRlcldpZHRoKHRydWUpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgZGlzcGxheTogZWxtLmNzcyhcImRpc3BsYXlcIiksXHJcbiAgICAgICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogZWxtLmNzcyhcInZlcnRpY2FsLWFsaWduXCIpLFxyXG4gICAgICAgICAgICBcImZsb2F0XCI6IGVsX2Zsb2F0XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3RvcmUpIHtcclxuICAgICAgICAgIHJldHVybiB0aWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICByZWNhbGMoKTtcclxuICAgICAgaWYgKGhlaWdodCA9PT0gcGFyZW50X2hlaWdodCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsYXN0X3BvcyA9IHZvaWQgMDtcclxuICAgICAgb2Zmc2V0ID0gb2Zmc2V0X3RvcDtcclxuICAgICAgcmVjYWxjX2NvdW50ZXIgPSByZWNhbGNfZXZlcnk7XHJcbiAgICAgIHRpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY3NzLCBkZWx0YSwgcmVjYWxjZWQsIHNjcm9sbCwgd2lsbF9ib3R0b20sIHdpbl9oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGRldGFjaGVkKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlY2FsY2VkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlY2FsY19jb3VudGVyICE9IG51bGwpIHtcclxuICAgICAgICAgIHJlY2FsY19jb3VudGVyIC09IDE7XHJcbiAgICAgICAgICBpZiAocmVjYWxjX2NvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICByZWNhbGNfY291bnRlciA9IHJlY2FsY19ldmVyeTtcclxuICAgICAgICAgICAgcmVjYWxjKCk7XHJcbiAgICAgICAgICAgIHJlY2FsY2VkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZWNhbGNlZCAmJiBkb2MuaGVpZ2h0KCkgIT09IGxhc3Rfc2Nyb2xsX2hlaWdodCkge1xyXG4gICAgICAgICAgcmVjYWxjKCk7XHJcbiAgICAgICAgICByZWNhbGNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjcm9sbCA9IHdpbi5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZiAobGFzdF9wb3MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgZGVsdGEgPSBzY3JvbGwgLSBsYXN0X3BvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdF9wb3MgPSBzY3JvbGw7XHJcbiAgICAgICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgICAgICBpZiAoZW5hYmxlX2JvdHRvbWluZykge1xyXG4gICAgICAgICAgICB3aWxsX2JvdHRvbSA9IHNjcm9sbCArIGhlaWdodCArIG9mZnNldCA+IHBhcmVudF9oZWlnaHQgKyBwYXJlbnRfdG9wO1xyXG4gICAgICAgICAgICBpZiAoYm90dG9tZWQgJiYgIXdpbGxfYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgYm90dG9tZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBlbG0uY3NzKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IG9mZnNldFxyXG4gICAgICAgICAgICAgIH0pLnRyaWdnZXIoXCJzdGlja3lfa2l0OnVuYm90dG9tXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Nyb2xsIDwgdG9wKSB7XHJcbiAgICAgICAgICAgIGZpeGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IG9mZnNldF90b3A7XHJcbiAgICAgICAgICAgIGlmIChtYW51YWxfc3BhY2VyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICBpZiAoZWxfZmxvYXQgPT09IFwibGVmdFwiIHx8IGVsX2Zsb2F0ID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgIGVsbS5pbnNlcnRBZnRlcihzcGFjZXIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzcGFjZXIuZGV0YWNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3NzID0ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHRvcDogXCJcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBlbG0uY3NzKGNzcykucmVtb3ZlQ2xhc3Moc3RpY2t5X2NsYXNzKS50cmlnZ2VyKFwic3RpY2t5X2tpdDp1bnN0aWNrXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlubmVyX3Njcm9sbGluZykge1xyXG4gICAgICAgICAgICB3aW5faGVpZ2h0ID0gd2luLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBpZiAoaGVpZ2h0ICsgb2Zmc2V0X3RvcCA+IHdpbl9oZWlnaHQpIHtcclxuICAgICAgICAgICAgICBpZiAoIWJvdHRvbWVkKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gZGVsdGE7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBNYXRoLm1heCh3aW5faGVpZ2h0IC0gaGVpZ2h0LCBvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gTWF0aC5taW4ob2Zmc2V0X3RvcCwgb2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChmaXhlZCkge1xyXG4gICAgICAgICAgICAgICAgICBlbG0uY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IG9mZnNldCArIFwicHhcIlxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHNjcm9sbCA+IHRvcCkge1xyXG4gICAgICAgICAgICBmaXhlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNzcyA9IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgIHRvcDogb2Zmc2V0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNzcy53aWR0aCA9IGVsbS5jc3MoXCJib3gtc2l6aW5nXCIpID09PSBcImJvcmRlci1ib3hcIiA/IGVsbS5vdXRlcldpZHRoKCkgKyBcInB4XCIgOiBlbG0ud2lkdGgoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgZWxtLmNzcyhjc3MpLmFkZENsYXNzKHN0aWNreV9jbGFzcyk7XHJcbiAgICAgICAgICAgIGlmIChtYW51YWxfc3BhY2VyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICBlbG0uYWZ0ZXIoc3BhY2VyKTtcclxuICAgICAgICAgICAgICBpZiAoZWxfZmxvYXQgPT09IFwibGVmdFwiIHx8IGVsX2Zsb2F0ID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlci5hcHBlbmQoZWxtKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxtLnRyaWdnZXIoXCJzdGlja3lfa2l0OnN0aWNrXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZml4ZWQgJiYgZW5hYmxlX2JvdHRvbWluZykge1xyXG4gICAgICAgICAgaWYgKHdpbGxfYm90dG9tID09IG51bGwpIHtcclxuICAgICAgICAgICAgd2lsbF9ib3R0b20gPSBzY3JvbGwgKyBoZWlnaHQgKyBvZmZzZXQgPiBwYXJlbnRfaGVpZ2h0ICsgcGFyZW50X3RvcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghYm90dG9tZWQgJiYgd2lsbF9ib3R0b20pIHtcclxuICAgICAgICAgICAgYm90dG9tZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAocGFyZW50LmNzcyhcInBvc2l0aW9uXCIpID09PSBcInN0YXRpY1wiKSB7XHJcbiAgICAgICAgICAgICAgcGFyZW50LmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGVsbS5jc3Moe1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgYm90dG9tOiBwYWRkaW5nX2JvdHRvbSxcclxuICAgICAgICAgICAgICB0b3A6IFwiYXV0b1wiXHJcbiAgICAgICAgICAgIH0pLnRyaWdnZXIoXCJzdGlja3lfa2l0OmJvdHRvbVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHJlY2FsY19hbmRfdGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJlY2FsYygpO1xyXG4gICAgICAgIHJldHVybiB0aWNrKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGRldGFjaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRldGFjaGVkID0gdHJ1ZTtcclxuICAgICAgICB3aW4ub2ZmKFwidG91Y2htb3ZlXCIsIHRpY2spO1xyXG4gICAgICAgIHdpbi5vZmYoXCJzY3JvbGxcIiwgdGljayk7XHJcbiAgICAgICAgd2luLm9mZihcInJlc2l6ZVwiLCByZWNhbGNfYW5kX3RpY2spO1xyXG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkub2ZmKFwic3RpY2t5X2tpdDpyZWNhbGNcIiwgcmVjYWxjX2FuZF90aWNrKTtcclxuICAgICAgICBlbG0ub2ZmKFwic3RpY2t5X2tpdDpkZXRhY2hcIiwgZGV0YWNoKTtcclxuICAgICAgICBlbG0ucmVtb3ZlRGF0YShcInN0aWNreV9raXRcIik7XHJcbiAgICAgICAgZWxtLmNzcyh7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJcIixcclxuICAgICAgICAgIGJvdHRvbTogXCJcIixcclxuICAgICAgICAgIHRvcDogXCJcIixcclxuICAgICAgICAgIHdpZHRoOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyZW50LnBvc2l0aW9uKFwicG9zaXRpb25cIiwgXCJcIik7XHJcbiAgICAgICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgICAgICBpZiAobWFudWFsX3NwYWNlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChlbF9mbG9hdCA9PT0gXCJsZWZ0XCIgfHwgZWxfZmxvYXQgPT09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgIGVsbS5pbnNlcnRBZnRlcihzcGFjZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYWNlci5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBlbG0ucmVtb3ZlQ2xhc3Moc3RpY2t5X2NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHdpbi5vbihcInRvdWNobW92ZVwiLCB0aWNrKTtcclxuICAgICAgd2luLm9uKFwic2Nyb2xsXCIsIHRpY2spO1xyXG4gICAgICB3aW4ub24oXCJyZXNpemVcIiwgcmVjYWxjX2FuZF90aWNrKTtcclxuICAgICAgJChkb2N1bWVudC5ib2R5KS5vbihcInN0aWNreV9raXQ6cmVjYWxjXCIsIHJlY2FsY19hbmRfdGljayk7XHJcbiAgICAgIGVsbS5vbihcInN0aWNreV9raXQ6ZGV0YWNoXCIsIGRldGFjaCk7XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KHRpY2ssIDApO1xyXG4gICAgfTtcclxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgZWxtID0gdGhpc1tpXTtcclxuICAgICAgZm4oJChlbG0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG59KS5jYWxsKHRoaXMpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICBmdW5jdGlvbiBzdGlja0FzaWRlKCkge1xyXG4gICAgdmFyICRlbGVtZW50ID0gJCgnLmZpeGVkX3JpZ2h0X2Jsb2NrJyk7XHJcblxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAkZWxlbWVudC5zdGlja19pbl9wYXJlbnQoe1xyXG4gICAgICAgIHBhcmVudDogJy5wYWdlX193cmFwcGVyJyxcclxuICAgICAgICBpbm5lcl9zY3JvbGxpbmc6IGZhbHNlLFxyXG4gICAgICAgIHJlY2FsY19ldmVyeTogMFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICRlbGVtZW50LnRyaWdnZXIoJ3N0aWNreV9raXQ6ZGV0YWNoJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICQod2luZG93KS5vbihcImNsaWNrXCIsIFwiLmxhbmRpbmctLWJsb2NrX2xlZnQtLXNtYWxsX3BcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcblxyXG4gICAgICAgIC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXHJcbiAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgIC8v0LDQvdC40LzQuNGA0YPQtdC8INC/0LXRgNC10YXQvtC0INC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LUgLSB0b3Ag0LfQsCAxNTAwINC80YFcclxuICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTUwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIubGFuZGluZy0tYmxvY2tfbGVmdFwiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcblxyXG4gICAgICAgIC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXHJcbiAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wLFxyXG5cclxuICAgICAgICAvLyDQstGL0YHQvtGCINC/0LvQsNCy0LDRjtGJ0LXQuSDRiNCw0L/QutC4XHJcbiAgICAgICAgaGVhZCA9ICQoXCIuaGVhZGVyXCIpLmhlaWdodCgpICsgMzA7XHJcblxyXG4gICAgLy/QsNC90LjQvNC40YDRg9C10Lwg0L/QtdGA0LXRhdC+0LQg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSAtIHRvcCDQt9CwIDE1MDAg0LzRgVxyXG5cclxuICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTUwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuc2V2ZW5cIikub24oXCJjbGlja1wiLCBcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcblxyXG4gICAgICAgIC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXHJcbiAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wLFxyXG5cclxuICAgICAgICAvLyDQstGL0YHQvtGCINC/0LvQsNCy0LDRjtGJ0LXQuSDRiNCw0L/QutC4XHJcbiAgICAgICAgaGVhZCA9ICQoXCIuaGVhZGVyXCIpLmhlaWdodCgpICsgMzA7XHJcblxyXG4gICAgLy/QsNC90LjQvNC40YDRg9C10Lwg0L/QtdGA0LXRhdC+0LQg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSAtIHRvcCDQt9CwIDE1MDAg0LzRgVxyXG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxNTAwKTtcclxuICB9KTtcclxuXHJcblxyXG59KTsiXX0=
