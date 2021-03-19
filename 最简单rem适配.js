(function(doc, win){
    var docE1 = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            var clientWidth = docE1.clientWidth;
            if(!clientWidth) return;
            console.log(10 * (clientWidth / 320));
            
            docE1.style.fontSize = 10 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window);


html {
  font-size：20px
}
.page {
  width:200px;
  width:10rem;
}