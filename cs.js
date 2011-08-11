$(function() {
    var $firstInput = $($('input[type=text]')[0]);
    var selectors = [
        ['amazon.', '#twotabsearchtextbox'],
        ['php.net'],
        ['.wikipedia.org']
    ]
    
    for(i in selectors) {
        if(location.href.match(selectors[i][0])) {
            if(typeof selectors[i][1] == 'string') {
                $(selectors[i][1]).focus();
            } else {
                $firstInput.focus();
            }
        }
    }
});
