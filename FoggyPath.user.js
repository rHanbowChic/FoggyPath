// ==UserScript==
// @name        Foggy Path
// @namespace   Violentmonkey Scripts
// @match       *://*.wikidot.com/*
// @grant       none
// @version     1.0
// @author      Ect07
// @description 2023/11/29 23:45:50
// ==/UserScript==
var container_obj=document.getElementById("container");
if (document.defaultView.getComputedStyle(container_obj,null).display == "none"){
  document.getElementById("container").style.display = "block";
}
