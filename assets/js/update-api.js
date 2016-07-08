(function(exports) {
    'use strict';

    var rules = {
        name: {
            identifier: 'name',
            rules: [{
                type: 'regExp[/^[a-z0-9_-]{3,50}$/]',
                prompt: '只能是字母和数字,长度3-50'
            }]
        },
        upstream_url: {
            identifier: 'upstream_url',
            rules: [{
                type: 'empty',
                prompt: 'url不合法'
            }]
        },
        request_path: {
            identifier: 'request_path',
            rules: [{
                type: 'regExp[/^\/.+/]',
                prompt: '必须是/开头的路径'
            }]
        },
    };
    update('/api/apis', 'updateapi', rules);

})(window);
