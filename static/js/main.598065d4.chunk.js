(this["webpackJsonpamerican-president"]=this["webpackJsonpamerican-president"]||[]).push([[0],[function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}n.r(t);n(0);var o=function(){function e(t){i(this,e),this.element=t,this.message=t.getAttribute("data-message")}return r(e,[{key:"init",value:function(){var e=document.createElement("div");e.classList.add("tip"),e.textContent=this.message,this.element.appendChild(e),this.element.addEventListener("mouseenter",(function(){e.classList.add("active")})),this.element.addEventListener("mouseleave",(function(){e.classList.remove("active")}))}}]),e}(),s=(n(1),function(){function e(t){i(this,e),this.container=t,this.trigger=t.querySelector(".trigger"),this.content=t.querySelector(".content")}return r(e,[{key:"init",value:function(){var e=this;this.trigger.addEventListener("click",(function(){e.trigger.classList.toggle("active"),e.content.classList.toggle("active")}))}}]),e}()),a=(n(2),function(){function e(t){i(this,e),this.container=t}return r(e,[{key:"init",value:function(){this.trigger.addEventListener("click",(function(){}))}}]),e}());console.log("test"),document.querySelectorAll(".tooltip").forEach((function(e){new o(e).init()})),document.querySelectorAll(".dropdown").forEach((function(e){new s(e).init()}));new a(document.querySelector(".timeline"))}],[[3,1]]]);
//# sourceMappingURL=main.598065d4.chunk.js.map