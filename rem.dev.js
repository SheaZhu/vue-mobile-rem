(function(win, designW) {
	var doc = win.document;
	var docEle = doc.documentElement;
	designW = designW || 640; //设计稿宽度px,默认640px设计稿
	var ratio = designW / 100;//640px=> 1rem = 100px, 超出640px font-size：100px;
	var or = "orientationchange" in win ? "orientationchange" : "resize";
	//创建viewport	
	_createViewport();
	if(doc.addEventListener){
		win.addEventListener(or, _refreshRem, false);
		doc.addEventListener("DOMContentLoaded", _refreshRem, false);
	}
	/**
	 * 创建viewport
	 */
	function _createViewport(){
		var metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
        if (docEle.firstElementChild) {
            docEle.firstElementChild.appendChild(metaEl);
        }
	}
	/**
	 * 动态更新rem
	 */
	function _refreshRem() {
		var clientW = docEle.clientWidth || 320;
		//设置最大和最小宽度取值
		if(clientW > designW){
			clientW = designW
		} else if(clientW<320){
			clientW=320;
		}
		docEle.style.fontSize = clientW / ratio + "px";
	};
})(window, 1080);//750为设计稿宽度px值,根据实际设计稿大小对应设置