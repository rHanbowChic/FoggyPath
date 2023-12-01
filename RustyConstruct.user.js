// ==UserScript==
// @name        Rusty Construct
// @namespace   Violentmonkey Scripts
// @match       *://dotflowcn.wikidot.com/*
// @grant       none
// @version     1.0
// @author      Ect07
// @description 进入.flow中文维基的页面时，自动展开代码查看页并选择源代码。
// ==/UserScript==
WIKIDOT.page.listeners.viewSourceClick();
function selectPageSource(){
    var range = document.createRange();
    range.selectNode(document.getElementsByClassName("page-source")[0]);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
}
setTimeout(selectPageSource,2000)
//在备份整个wiki的wikidot源代码时，这个脚本发挥了很大作用。