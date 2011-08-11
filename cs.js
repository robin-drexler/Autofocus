$(function() {
    var matched = false;
    var $firstInput = $($('input[type=text], input[type=search]')[0]);
    var selectors = [
        ['amazon.', '#twotabsearchtextbox'],
    ]
    
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
    
});
