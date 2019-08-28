(function() {
    var u = navigator.userAgent,
        ua = navigator.userAgent.toLowerCase(),
        app = navigator.appVersion, // APP 內建瀏覽器
        rules = ['WebView','(iPhone|iPod|iPad)(?!.*Safari\/)','Android.*(wv|\.0\.0\.0)'],
        regex = new RegExp(`(${rules.join('|')})`, 'ig');
    
    $('.userAgent').text(u)
    $('.appVersion').text(app)
    
    // 判斷是不是APP
    if ( Boolean(u.match(regex)) ) {
      detectApp() // 是APP
      $('body').css('opacity', 1);
      detectAppLayer()
    } else {
      detectNotApp() // 不是APP
      $('body').css('opacity', 1);
    }
    
    // 是APP
    function detectApp() {
      $('.boolean').text('isApp')
    }
    // 不是APP
    function detectNotApp() {
      $('.boolean').text('is not App')
    }
    // Layer 彈窗
    function detectAppLayer() {
      layer.open({
        type: 1,
        id: 'detectAppLayer',
        title: false,
        shade: 0.8,
        closeBtn: 0, //不显示关闭按钮
        anim: 0,     
        resize: false,
        maxmin: true, //弹出即全屏
        shadeClose: true,
        area: ['100%', '100%'],
        content: $('#detectAppContent')
      });
    }
    
    // 點擊任何地方關閉彈窗
    $(document).on('click',function(){layer.closeAll();})
    
  })();