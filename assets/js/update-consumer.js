(function(exports) {
    'use strict';

    var rules = {
        username: {
            identifier: 'username',
            rules: [{
                type: 'regExp[/^[a-z0-9_-]{3,20}$/]',
                prompt: '只能是字母和数字,长度3-20'
            }]
        },
    };

    update('/api/consumers', 'updateconsumer', rules);

})(window);
