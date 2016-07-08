(function(exports) {
    'use strict';

    var rules = {
        username: {
            identifier: 'username',
            rules: [{
                type: 'regExp[/^[a-z0-9_-]{3,20}$/]',
                prompt: '只能是字母和数字下划线,长度3-20'
            }]
        },

    };

    add('/api/consumers', 'addconsumer', rules);
})(window);
