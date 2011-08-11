$(function() {
    var matched = false;
    var $wnd = $(window);
    var $firstInput = $($('input[type=text], input[type=search]')[0]);
    var selectors = [
        ['amazon.', '#twotabsearchtextbox'],
    ]
    
    var $scrollLeft = $wnd.scrollLeft();
    var $scrollTop  = $wnd.scrollTop();
    
    for(i in selectors) {
        if(location.href.match(selectors[i][0])) {
            matched = true;
            if(typeof selectors[i][1] == 'string') {
                $(selectors[i][1]).focus();
            } 
        }
    }
    
    if(!matched) {
        $firstInput.focus();
    }
    $wnd.scrollTop($scrollTop).scrollLeft($scrollLeft);
    
});
