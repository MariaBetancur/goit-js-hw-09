!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;t.addEventListener("click",(function(){t.disabled=!0,n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.46fc5cf2.js.map
