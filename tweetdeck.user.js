// ==UserScript==
// @name        TobHo Tweetdeck
// @namespace   de.tobho
// @description Tweetdeck Enhancements
// @include     https://tweetdeck.twitter.com/
// @include     http://tweetdeck.twitter.com/
// @version     1
// @grant       none
// ==/UserScript==

var styleOrigin = 'https://github.com/ToBHo/us_tweetdeck/raw/master/tweetdeck_enhancements.css';

addStyleSheet = function(origin){
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href', origin);
    link.setAttribute('type', 'text/css');
    head.appendChild(link);
}

addStyleSheet(styleOrigin);
console.log('Style should be added by now :)');