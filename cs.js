$(function() {
    var selectors = [
        ['amazon.', '#twotabsearchtextbox']
    ]

    for(i in selectors) {
        if(location.href.match(selectors[i][0])) {
            if(typeof selectors[0][1] == 'string') {
                $(selectors[0][1]).focus();
            }
        }
    }
});
