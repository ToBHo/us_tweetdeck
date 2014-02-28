// ==UserScript==
// @name        TobHo Tweetdeck
// @namespace   td
// @description Tweetdeck Enhancements
// @include     https://tweetdeck.twitter.com/
// @version     1
// @grant       GM_addStyle
// @resource    style https://github.com/ToBHo/us_tweetdeck/blob/master/tweetdeck_enhancements.css
// ==/UserScript==
var cssTxt = GM_getResourceText('style');
GM_addStyle(cssTxt);

GM_log('Style should be added by now :)');