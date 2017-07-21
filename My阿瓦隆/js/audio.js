/**
 * Created by qin on 2017/7/19.
 */
var oli = document.querySelectorAll('#dropmenu>li');
var audio = document.querySelectorAll('#dropmenu>li .audio');
var length = oli.length;
for(var i=0;i<length;i++){
    (function (i) {
        oli[i].onmouseenter = function () {
            audio[i].play();
        }
        oli[i].onmouseleave = function () {
            audio[i].ended;
        }
    })(i)
}