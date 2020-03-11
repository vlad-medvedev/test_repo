!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,c=!l&&!h;(p||c)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var u in t)t[u].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,c,u,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,c=h&&p,u=!h&&!p,!g&&c?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&u?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvd2F5cG9pbnQuanMiXSwibmFtZXMiOlsidCIsIm8iLCJFcnJvciIsImVsZW1lbnQiLCJoYW5kbGVyIiwidGhpcyIsImtleSIsImUiLCJvcHRpb25zIiwiQWRhcHRlciIsImV4dGVuZCIsImRlZmF1bHRzIiwiYWRhcHRlciIsImNhbGxiYWNrIiwiYXhpcyIsImhvcml6b250YWwiLCJlbmFibGVkIiwidHJpZ2dlclBvaW50IiwiZ3JvdXAiLCJHcm91cCIsImZpbmRPckNyZWF0ZSIsIm5hbWUiLCJjb250ZXh0IiwiQ29udGV4dCIsImZpbmRPckNyZWF0ZUJ5RWxlbWVudCIsIm9mZnNldEFsaWFzZXMiLCJvZmZzZXQiLCJhZGQiLCJpIiwicHJvdG90eXBlIiwicXVldWVUcmlnZ2VyIiwidHJpZ2dlciIsImFwcGx5IiwiZGVzdHJveSIsInJlbW92ZSIsImRpc2FibGUiLCJlbmFibGUiLCJyZWZyZXNoIiwibmV4dCIsInByZXZpb3VzIiwiaW52b2tlQWxsIiwicHVzaCIsIm4iLCJyIiwibGVuZ3RoIiwiZGVzdHJveUFsbCIsImRpc2FibGVBbGwiLCJlbmFibGVBbGwiLCJyZWZyZXNoQWxsIiwidmlld3BvcnRIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwidmlld3BvcnRXaWR0aCIsImNsaWVudFdpZHRoIiwiYWRhcHRlcnMiLCJjb250aW51b3VzIiwiYm90dG9tLWluLXZpZXciLCJvdXRlckhlaWdodCIsInJpZ2h0LWluLXZpZXciLCJpbm5lcldpZHRoIiwib3V0ZXJXaWR0aCIsIldheXBvaW50Iiwic2V0VGltZW91dCIsImRpZFNjcm9sbCIsImRpZFJlc2l6ZSIsIm9sZFNjcm9sbCIsIngiLCJzY3JvbGxMZWZ0IiwieSIsInNjcm9sbFRvcCIsIndheXBvaW50cyIsInZlcnRpY2FsIiwid2F5cG9pbnRDb250ZXh0S2V5IiwiY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlciIsImNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIiLCJvbmxvYWQiLCJjaGVja0VtcHR5IiwiaXNFbXB0eU9iamVjdCIsIm9mZiIsImhhbmRsZVJlc2l6ZSIsIm9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFuZGxlU2Nyb2xsIiwiaXNUb3VjaCIsIm5ld1Njcm9sbCIsImZvcndhcmQiLCJiYWNrd2FyZCIsInMiLCJhIiwibCIsImgiLCJwIiwidSIsImlkIiwiYyIsImZsdXNoVHJpZ2dlcnMiLCJjb250ZXh0T2Zmc2V0IiwibGVmdCIsImNvbnRleHRTY3JvbGwiLCJjb250ZXh0RGltZW5zaW9uIiwib2Zmc2V0UHJvcCIsInRvcCIsImQiLCJmIiwidyIsImciLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsIk1hdGgiLCJjZWlsIiwiZmluZEJ5RWxlbWVudCIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGwiLCJjbGVhclRyaWdnZXJRdWV1ZXMiLCJ0cmlnZ2VyUXVldWVzIiwidXAiLCJkb3duIiwicmlnaHQiLCJzb3J0IiwiaW5BcnJheSIsInNwbGljZSIsImZpcnN0IiwibGFzdCIsIiRlbGVtZW50IiwialF1ZXJ5IiwiZWFjaCIsIkFycmF5Iiwic2xpY2UiLCJhcmd1bWVudHMiLCJpc0Z1bmN0aW9uIiwiY2xvc2VzdCIsImZuIiwid2F5cG9pbnQiLCJaZXB0byJdLCJtYXBwaW5ncyI6IkNBTUMsV0FBVyxZQUFhLFNBQVNBLEdBQUVDLEdBQUcsSUFBSUEsRUFBRSxLQUFNLElBQUlDLE9BQU0sNENBQTZDLEtBQUlELEVBQUVFLFFBQVEsS0FBTSxJQUFJRCxPQUFNLG1EQUFvRCxLQUFJRCxFQUFFRyxRQUFRLEtBQU0sSUFBSUYsT0FBTSxtREFBb0RHLE1BQUtDLElBQUksWUFBWUMsRUFBRUYsS0FBS0csUUFBUVIsRUFBRVMsUUFBUUMsVUFBVVYsRUFBRVcsU0FBU1YsR0FBR0ksS0FBS0YsUUFBUUUsS0FBS0csUUFBUUwsUUFB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LFNBQVMsSUFBSU0sRUFBRWEsS0FBSyxHQUFJbEMsR0FBRW1DLE1BQU1kLEdBQUcsR0FBSXJCLEdBQUUyQyxPQUFPYyxRQUFTZCxRQUFPOEUsU0FBUzlFLE9BQU84RSxPQUFPTyxHQUFHQyxTQUFTeEksRUFBRWtELE9BQU84RSxTQUFTOUUsT0FBT3VGLFFBQVF2RixPQUFPdUYsTUFBTUYsR0FBR0MsU0FBU3hJLEVBQUVrRCxPQUFPdUYiLCJmaWxlIjoibGlicy93YXlwb2ludC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG5XYXlwb2ludHMgLSA0LjAuMFxyXG5Db3B5cmlnaHQg0JLCqSAyMDExLTIwMTUgQ2FsZWIgVHJvdWdodG9uXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaHR0cHM6Ly9naXRodWIuY29tL2ltYWtld2VidGhpbmdzL3dheXBvaW50cy9ibG9iL21hc3Rlci9saWNlbnNlcy50eHRcclxuKi9cclxuIWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChvKXtpZighbyl0aHJvdyBuZXcgRXJyb3IoXCJObyBvcHRpb25zIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvclwiKTtpZighby5lbGVtZW50KXRocm93IG5ldyBFcnJvcihcIk5vIGVsZW1lbnQgb3B0aW9uIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvclwiKTtpZighby5oYW5kbGVyKXRocm93IG5ldyBFcnJvcihcIk5vIGhhbmRsZXIgb3B0aW9uIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvclwiKTt0aGlzLmtleT1cIndheXBvaW50LVwiK2UsdGhpcy5vcHRpb25zPXQuQWRhcHRlci5leHRlbmQoe30sdC5kZWZhdWx0cyxvKSx0aGlzLmVsZW1lbnQ9dGhpcy5vcHRpb25zLmVsZW1lbnQsdGhpcy5hZGFwdGVyPW5ldyB0LkFkYXB0ZXIodGhpcy5lbGVtZW50KSx0aGlzLmNhbGxiYWNrPW8uaGFuZGxlcix0aGlzLmF4aXM9dGhpcy5vcHRpb25zLmhvcml6b250YWw/XCJob3Jpem9udGFsXCI6XCJ2ZXJ0aWNhbFwiLHRoaXMuZW5hYmxlZD10aGlzLm9wdGlvbnMuZW5hYmxlZCx0aGlzLnRyaWdnZXJQb2ludD1udWxsLHRoaXMuZ3JvdXA9dC5Hcm91cC5maW5kT3JDcmVhdGUoe25hbWU6dGhpcy5vcHRpb25zLmdyb3VwLGF4aXM6dGhpcy5heGlzfSksdGhpcy5jb250ZXh0PXQuQ29udGV4dC5maW5kT3JDcmVhdGVCeUVsZW1lbnQodGhpcy5vcHRpb25zLmNvbnRleHQpLHQub2Zmc2V0QWxpYXNlc1t0aGlzLm9wdGlvbnMub2Zmc2V0XSYmKHRoaXMub3B0aW9ucy5vZmZzZXQ9dC5vZmZzZXRBbGlhc2VzW3RoaXMub3B0aW9ucy5vZmZzZXRdKSx0aGlzLmdyb3VwLmFkZCh0aGlzKSx0aGlzLmNvbnRleHQuYWRkKHRoaXMpLGlbdGhpcy5rZXldPXRoaXMsZSs9MX12YXIgZT0wLGk9e307dC5wcm90b3R5cGUucXVldWVUcmlnZ2VyPWZ1bmN0aW9uKHQpe3RoaXMuZ3JvdXAucXVldWVUcmlnZ2VyKHRoaXMsdCl9LHQucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24odCl7dGhpcy5lbmFibGVkJiZ0aGlzLmNhbGxiYWNrJiZ0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMsdCl9LHQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmNvbnRleHQucmVtb3ZlKHRoaXMpLHRoaXMuZ3JvdXAucmVtb3ZlKHRoaXMpLGRlbGV0ZSBpW3RoaXMua2V5XX0sdC5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuYWJsZWQ9ITEsdGhpc30sdC5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dC5yZWZyZXNoKCksdGhpcy5lbmFibGVkPSEwLHRoaXN9LHQucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ncm91cC5uZXh0KHRoaXMpfSx0LnByb3RvdHlwZS5wcmV2aW91cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdyb3VwLnByZXZpb3VzKHRoaXMpfSx0Lmludm9rZUFsbD1mdW5jdGlvbih0KXt2YXIgZT1bXTtmb3IodmFyIG8gaW4gaSllLnB1c2goaVtvXSk7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtyPm47bisrKWVbbl1bdF0oKX0sdC5kZXN0cm95QWxsPWZ1bmN0aW9uKCl7dC5pbnZva2VBbGwoXCJkZXN0cm95XCIpfSx0LmRpc2FibGVBbGw9ZnVuY3Rpb24oKXt0Lmludm9rZUFsbChcImRpc2FibGVcIil9LHQuZW5hYmxlQWxsPWZ1bmN0aW9uKCl7dC5pbnZva2VBbGwoXCJlbmFibGVcIil9LHQucmVmcmVzaEFsbD1mdW5jdGlvbigpe3QuQ29udGV4dC5yZWZyZXNoQWxsKCl9LHQudmlld3BvcnRIZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmlubmVySGVpZ2h0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fSx0LnZpZXdwb3J0V2lkdGg9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRofSx0LmFkYXB0ZXJzPVtdLHQuZGVmYXVsdHM9e2NvbnRleHQ6d2luZG93LGNvbnRpbnVvdXM6ITAsZW5hYmxlZDohMCxncm91cDpcImRlZmF1bHRcIixob3Jpem9udGFsOiExLG9mZnNldDowfSx0Lm9mZnNldEFsaWFzZXM9e1wiYm90dG9tLWluLXZpZXdcIjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHQuaW5uZXJIZWlnaHQoKS10aGlzLmFkYXB0ZXIub3V0ZXJIZWlnaHQoKX0sXCJyaWdodC1pbi12aWV3XCI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0LmlubmVyV2lkdGgoKS10aGlzLmFkYXB0ZXIub3V0ZXJXaWR0aCgpfX0sd2luZG93LldheXBvaW50PXR9KCksZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3dpbmRvdy5zZXRUaW1lb3V0KHQsMWUzLzYwKX1mdW5jdGlvbiBlKHQpe3RoaXMuZWxlbWVudD10LHRoaXMuQWRhcHRlcj1uLkFkYXB0ZXIsdGhpcy5hZGFwdGVyPW5ldyB0aGlzLkFkYXB0ZXIodCksdGhpcy5rZXk9XCJ3YXlwb2ludC1jb250ZXh0LVwiK2ksdGhpcy5kaWRTY3JvbGw9ITEsdGhpcy5kaWRSZXNpemU9ITEsdGhpcy5vbGRTY3JvbGw9e3g6dGhpcy5hZGFwdGVyLnNjcm9sbExlZnQoKSx5OnRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKX0sdGhpcy53YXlwb2ludHM9e3ZlcnRpY2FsOnt9LGhvcml6b250YWw6e319LHQud2F5cG9pbnRDb250ZXh0S2V5PXRoaXMua2V5LG9bdC53YXlwb2ludENvbnRleHRLZXldPXRoaXMsaSs9MSx0aGlzLmNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIoKSx0aGlzLmNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIoKX12YXIgaT0wLG89e30sbj13aW5kb3cuV2F5cG9pbnQscj13aW5kb3cub25sb2FkO2UucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXt2YXIgZT10Lm9wdGlvbnMuaG9yaXpvbnRhbD9cImhvcml6b250YWxcIjpcInZlcnRpY2FsXCI7dGhpcy53YXlwb2ludHNbZV1bdC5rZXldPXQsdGhpcy5yZWZyZXNoKCl9LGUucHJvdG90eXBlLmNoZWNrRW1wdHk9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLkFkYXB0ZXIuaXNFbXB0eU9iamVjdCh0aGlzLndheXBvaW50cy5ob3Jpem9udGFsKSxlPXRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLnZlcnRpY2FsKTt0JiZlJiYodGhpcy5hZGFwdGVyLm9mZihcIi53YXlwb2ludHNcIiksZGVsZXRlIG9bdGhpcy5rZXldKX0sZS5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtlLmhhbmRsZVJlc2l6ZSgpLGUuZGlkUmVzaXplPSExfXZhciBlPXRoaXM7dGhpcy5hZGFwdGVyLm9uKFwicmVzaXplLndheXBvaW50c1wiLGZ1bmN0aW9uKCl7ZS5kaWRSZXNpemV8fChlLmRpZFJlc2l6ZT0hMCxuLnJlcXVlc3RBbmltYXRpb25GcmFtZSh0KSl9KX0sZS5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtlLmhhbmRsZVNjcm9sbCgpLGUuZGlkU2Nyb2xsPSExfXZhciBlPXRoaXM7dGhpcy5hZGFwdGVyLm9uKFwic2Nyb2xsLndheXBvaW50c1wiLGZ1bmN0aW9uKCl7KCFlLmRpZFNjcm9sbHx8bi5pc1RvdWNoKSYmKGUuZGlkU2Nyb2xsPSEwLG4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQpKX0pfSxlLnByb3RvdHlwZS5oYW5kbGVSZXNpemU9ZnVuY3Rpb24oKXtuLkNvbnRleHQucmVmcmVzaEFsbCgpfSxlLnByb3RvdHlwZS5oYW5kbGVTY3JvbGw9ZnVuY3Rpb24oKXt2YXIgdD17fSxlPXtob3Jpem9udGFsOntuZXdTY3JvbGw6dGhpcy5hZGFwdGVyLnNjcm9sbExlZnQoKSxvbGRTY3JvbGw6dGhpcy5vbGRTY3JvbGwueCxmb3J3YXJkOlwicmlnaHRcIixiYWNrd2FyZDpcImxlZnRcIn0sdmVydGljYWw6e25ld1Njcm9sbDp0aGlzLmFkYXB0ZXIuc2Nyb2xsVG9wKCksb2xkU2Nyb2xsOnRoaXMub2xkU2Nyb2xsLnksZm9yd2FyZDpcImRvd25cIixiYWNrd2FyZDpcInVwXCJ9fTtmb3IodmFyIGkgaW4gZSl7dmFyIG89ZVtpXSxuPW8ubmV3U2Nyb2xsPm8ub2xkU2Nyb2xsLHI9bj9vLmZvcndhcmQ6by5iYWNrd2FyZDtmb3IodmFyIHMgaW4gdGhpcy53YXlwb2ludHNbaV0pe3ZhciBhPXRoaXMud2F5cG9pbnRzW2ldW3NdLGw9by5vbGRTY3JvbGw8YS50cmlnZ2VyUG9pbnQsaD1vLm5ld1Njcm9sbD49YS50cmlnZ2VyUG9pbnQscD1sJiZoLHU9IWwmJiFoOyhwfHx1KSYmKGEucXVldWVUcmlnZ2VyKHIpLHRbYS5ncm91cC5pZF09YS5ncm91cCl9fWZvcih2YXIgYyBpbiB0KXRbY10uZmx1c2hUcmlnZ2VycygpO3RoaXMub2xkU2Nyb2xsPXt4OmUuaG9yaXpvbnRhbC5uZXdTY3JvbGwseTplLnZlcnRpY2FsLm5ld1Njcm9sbH19LGUucHJvdG90eXBlLmlubmVySGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudD09dGhpcy5lbGVtZW50LndpbmRvdz9uLnZpZXdwb3J0SGVpZ2h0KCk6dGhpcy5hZGFwdGVyLmlubmVySGVpZ2h0KCl9LGUucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbih0KXtkZWxldGUgdGhpcy53YXlwb2ludHNbdC5heGlzXVt0LmtleV0sdGhpcy5jaGVja0VtcHR5KCl9LGUucHJvdG90eXBlLmlubmVyV2lkdGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50PT10aGlzLmVsZW1lbnQud2luZG93P24udmlld3BvcnRXaWR0aCgpOnRoaXMuYWRhcHRlci5pbm5lcldpZHRoKCl9LGUucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgdD1bXTtmb3IodmFyIGUgaW4gdGhpcy53YXlwb2ludHMpZm9yKHZhciBpIGluIHRoaXMud2F5cG9pbnRzW2VdKXQucHVzaCh0aGlzLndheXBvaW50c1tlXVtpXSk7Zm9yKHZhciBvPTAsbj10Lmxlbmd0aDtuPm87bysrKXRbb10uZGVzdHJveSgpfSxlLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKCl7dmFyIHQsZT10aGlzLmVsZW1lbnQ9PXRoaXMuZWxlbWVudC53aW5kb3csaT1lP3ZvaWQgMDp0aGlzLmFkYXB0ZXIub2Zmc2V0KCksbz17fTt0aGlzLmhhbmRsZVNjcm9sbCgpLHQ9e2hvcml6b250YWw6e2NvbnRleHRPZmZzZXQ6ZT8wOmkubGVmdCxjb250ZXh0U2Nyb2xsOmU/MDp0aGlzLm9sZFNjcm9sbC54LGNvbnRleHREaW1lbnNpb246dGhpcy5pbm5lcldpZHRoKCksb2xkU2Nyb2xsOnRoaXMub2xkU2Nyb2xsLngsZm9yd2FyZDpcInJpZ2h0XCIsYmFja3dhcmQ6XCJsZWZ0XCIsb2Zmc2V0UHJvcDpcImxlZnRcIn0sdmVydGljYWw6e2NvbnRleHRPZmZzZXQ6ZT8wOmkudG9wLGNvbnRleHRTY3JvbGw6ZT8wOnRoaXMub2xkU2Nyb2xsLnksY29udGV4dERpbWVuc2lvbjp0aGlzLmlubmVySGVpZ2h0KCksb2xkU2Nyb2xsOnRoaXMub2xkU2Nyb2xsLnksZm9yd2FyZDpcImRvd25cIixiYWNrd2FyZDpcInVwXCIsb2Zmc2V0UHJvcDpcInRvcFwifX07Zm9yKHZhciByIGluIHQpe3ZhciBzPXRbcl07Zm9yKHZhciBhIGluIHRoaXMud2F5cG9pbnRzW3JdKXt2YXIgbCxoLHAsdSxjLGQ9dGhpcy53YXlwb2ludHNbcl1bYV0sZj1kLm9wdGlvbnMub2Zmc2V0LHc9ZC50cmlnZ2VyUG9pbnQseT0wLGc9bnVsbD09dztkLmVsZW1lbnQhPT1kLmVsZW1lbnQud2luZG93JiYoeT1kLmFkYXB0ZXIub2Zmc2V0KClbcy5vZmZzZXRQcm9wXSksXCJmdW5jdGlvblwiPT10eXBlb2YgZj9mPWYuYXBwbHkoZCk6XCJzdHJpbmdcIj09dHlwZW9mIGYmJihmPXBhcnNlRmxvYXQoZiksZC5vcHRpb25zLm9mZnNldC5pbmRleE9mKFwiJVwiKT4tMSYmKGY9TWF0aC5jZWlsKHMuY29udGV4dERpbWVuc2lvbipmLzEwMCkpKSxsPXMuY29udGV4dFNjcm9sbC1zLmNvbnRleHRPZmZzZXQsZC50cmlnZ2VyUG9pbnQ9eStsLWYsaD13PHMub2xkU2Nyb2xsLHA9ZC50cmlnZ2VyUG9pbnQ+PXMub2xkU2Nyb2xsLHU9aCYmcCxjPSFoJiYhcCwhZyYmdT8oZC5xdWV1ZVRyaWdnZXIocy5iYWNrd2FyZCksb1tkLmdyb3VwLmlkXT1kLmdyb3VwKTohZyYmYz8oZC5xdWV1ZVRyaWdnZXIocy5mb3J3YXJkKSxvW2QuZ3JvdXAuaWRdPWQuZ3JvdXApOmcmJnMub2xkU2Nyb2xsPj1kLnRyaWdnZXJQb2ludCYmKGQucXVldWVUcmlnZ2VyKHMuZm9yd2FyZCksb1tkLmdyb3VwLmlkXT1kLmdyb3VwKX19cmV0dXJuIG4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIG8pb1t0XS5mbHVzaFRyaWdnZXJzKCl9KSx0aGlzfSxlLmZpbmRPckNyZWF0ZUJ5RWxlbWVudD1mdW5jdGlvbih0KXtyZXR1cm4gZS5maW5kQnlFbGVtZW50KHQpfHxuZXcgZSh0KX0sZS5yZWZyZXNoQWxsPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIG8pb1t0XS5yZWZyZXNoKCl9LGUuZmluZEJ5RWxlbWVudD1mdW5jdGlvbih0KXtyZXR1cm4gb1t0LndheXBvaW50Q29udGV4dEtleV19LHdpbmRvdy5vbmxvYWQ9ZnVuY3Rpb24oKXtyJiZyKCksZS5yZWZyZXNoQWxsKCl9LG4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGUpe3ZhciBpPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHQ7aS5jYWxsKHdpbmRvdyxlKX0sbi5Db250ZXh0PWV9KCksZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQsZSl7cmV0dXJuIHQudHJpZ2dlclBvaW50LWUudHJpZ2dlclBvaW50fWZ1bmN0aW9uIGUodCxlKXtyZXR1cm4gZS50cmlnZ2VyUG9pbnQtdC50cmlnZ2VyUG9pbnR9ZnVuY3Rpb24gaSh0KXt0aGlzLm5hbWU9dC5uYW1lLHRoaXMuYXhpcz10LmF4aXMsdGhpcy5pZD10aGlzLm5hbWUrXCItXCIrdGhpcy5heGlzLHRoaXMud2F5cG9pbnRzPVtdLHRoaXMuY2xlYXJUcmlnZ2VyUXVldWVzKCksb1t0aGlzLmF4aXNdW3RoaXMubmFtZV09dGhpc312YXIgbz17dmVydGljYWw6e30saG9yaXpvbnRhbDp7fX0sbj13aW5kb3cuV2F5cG9pbnQ7aS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3RoaXMud2F5cG9pbnRzLnB1c2godCl9LGkucHJvdG90eXBlLmNsZWFyVHJpZ2dlclF1ZXVlcz1mdW5jdGlvbigpe3RoaXMudHJpZ2dlclF1ZXVlcz17dXA6W10sZG93bjpbXSxsZWZ0OltdLHJpZ2h0OltdfX0saS5wcm90b3R5cGUuZmx1c2hUcmlnZ2Vycz1mdW5jdGlvbigpe2Zvcih2YXIgaSBpbiB0aGlzLnRyaWdnZXJRdWV1ZXMpe3ZhciBvPXRoaXMudHJpZ2dlclF1ZXVlc1tpXSxuPVwidXBcIj09PWl8fFwibGVmdFwiPT09aTtvLnNvcnQobj9lOnQpO2Zvcih2YXIgcj0wLHM9by5sZW5ndGg7cz5yO3IrPTEpe3ZhciBhPW9bcl07KGEub3B0aW9ucy5jb250aW51b3VzfHxyPT09by5sZW5ndGgtMSkmJmEudHJpZ2dlcihbaV0pfX10aGlzLmNsZWFyVHJpZ2dlclF1ZXVlcygpfSxpLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKGUpe3RoaXMud2F5cG9pbnRzLnNvcnQodCk7dmFyIGk9bi5BZGFwdGVyLmluQXJyYXkoZSx0aGlzLndheXBvaW50cyksbz1pPT09dGhpcy53YXlwb2ludHMubGVuZ3RoLTE7cmV0dXJuIG8/bnVsbDp0aGlzLndheXBvaW50c1tpKzFdfSxpLnByb3RvdHlwZS5wcmV2aW91cz1mdW5jdGlvbihlKXt0aGlzLndheXBvaW50cy5zb3J0KHQpO3ZhciBpPW4uQWRhcHRlci5pbkFycmF5KGUsdGhpcy53YXlwb2ludHMpO3JldHVybiBpP3RoaXMud2F5cG9pbnRzW2ktMV06bnVsbH0saS5wcm90b3R5cGUucXVldWVUcmlnZ2VyPWZ1bmN0aW9uKHQsZSl7dGhpcy50cmlnZ2VyUXVldWVzW2VdLnB1c2godCl9LGkucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbih0KXt2YXIgZT1uLkFkYXB0ZXIuaW5BcnJheSh0LHRoaXMud2F5cG9pbnRzKTtlPi0xJiZ0aGlzLndheXBvaW50cy5zcGxpY2UoZSwxKX0saS5wcm90b3R5cGUuZmlyc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy53YXlwb2ludHNbMF19LGkucHJvdG90eXBlLmxhc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy53YXlwb2ludHNbdGhpcy53YXlwb2ludHMubGVuZ3RoLTFdfSxpLmZpbmRPckNyZWF0ZT1mdW5jdGlvbih0KXtyZXR1cm4gb1t0LmF4aXNdW3QubmFtZV18fG5ldyBpKHQpfSxuLkdyb3VwPWl9KCksZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3RoaXMuJGVsZW1lbnQ9ZSh0KX12YXIgZT13aW5kb3cualF1ZXJ5LGk9d2luZG93LldheXBvaW50O2UuZWFjaChbXCJpbm5lckhlaWdodFwiLFwiaW5uZXJXaWR0aFwiLFwib2ZmXCIsXCJvZmZzZXRcIixcIm9uXCIsXCJvdXRlckhlaWdodFwiLFwib3V0ZXJXaWR0aFwiLFwic2Nyb2xsTGVmdFwiLFwic2Nyb2xsVG9wXCJdLGZ1bmN0aW9uKGUsaSl7dC5wcm90b3R5cGVbaV09ZnVuY3Rpb24oKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO3JldHVybiB0aGlzLiRlbGVtZW50W2ldLmFwcGx5KHRoaXMuJGVsZW1lbnQsdCl9fSksZS5lYWNoKFtcImV4dGVuZFwiLFwiaW5BcnJheVwiLFwiaXNFbXB0eU9iamVjdFwiXSxmdW5jdGlvbihpLG8pe3Rbb109ZVtvXX0pLGkuYWRhcHRlcnMucHVzaCh7bmFtZTpcImpxdWVyeVwiLEFkYXB0ZXI6dH0pLGkuQWRhcHRlcj10fSgpLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaT1bXSxvPWFyZ3VtZW50c1swXTtyZXR1cm4gdC5pc0Z1bmN0aW9uKGFyZ3VtZW50c1swXSkmJihvPXQuZXh0ZW5kKHt9LGFyZ3VtZW50c1sxXSksby5oYW5kbGVyPWFyZ3VtZW50c1swXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIG49dC5leHRlbmQoe30sbyx7ZWxlbWVudDp0aGlzfSk7XCJzdHJpbmdcIj09dHlwZW9mIG4uY29udGV4dCYmKG4uY29udGV4dD10KHRoaXMpLmNsb3Nlc3Qobi5jb250ZXh0KVswXSksaS5wdXNoKG5ldyBlKG4pKX0pLGl9fXZhciBlPXdpbmRvdy5XYXlwb2ludDt3aW5kb3cualF1ZXJ5JiYod2luZG93LmpRdWVyeS5mbi53YXlwb2ludD10KHdpbmRvdy5qUXVlcnkpKSx3aW5kb3cuWmVwdG8mJih3aW5kb3cuWmVwdG8uZm4ud2F5cG9pbnQ9dCh3aW5kb3cuWmVwdG8pKX0oKTsiXX0=