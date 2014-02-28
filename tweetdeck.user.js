// ==UserScript==
// @name        TobHo Tweetdeck
// @namespace   de.tobho
// @description Tweetdeck Enhancements
// @include     https://tweetdeck.twitter.com/
// @include     http://tweetdeck.twitter.com/
// @version     1
// @grant       none
// ==/UserScript==

var styleOrigin = 'https://tobho.github.io/tweetdeck.css';

addStyleSheet = function(origin){
    var head = document.head;
    var link = document.createElement('link');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href', origin);
    link.setAttribute('type', 'text/css');
    head.appendChild(link);
}

addStyleSheet(styleOrigin);
console.log('Style should be added by now :)');