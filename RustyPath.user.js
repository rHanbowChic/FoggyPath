// ==UserScript==
// @name        Rusty Path
// @namespace   Violentmonkey Scripts
// @match       *://dotflowcn.wikidot.com/*
// @grant       none
// @version     1.0
// @author      Ect07
// @description 2023/11/29 23:45:50
// ==/UserScript==
document.getElementById("container").style.display = "block";
const cssTemplateString = '#container-wrap:before{content:""}';
const styleTag = document.createElement("style");
styleTag.innerHTML = cssTemplateString;
document.head.insertAdjacentElement('beforeend', styleTag);
//这个脚本去除"本站点由于不可抗力暂时关闭。"的告示，使dotflowcn.wikidot.com的界面完全回到过去。
//但"不可抗力"到底是什么啊…
