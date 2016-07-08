(function(exports) {
    'use strict';

    var rules = {
        name: {
            identifier: 'name',
            rules: [{
                type: 'empty',
                prompt: '请选择插件'
            }]
        },
        api: {
            identifier: 'api',
            rules: [{
                type: 'empty',
                prompt: 'api名称或id'
            }]
        },
    };

    add('/api/plugins', 'addplugin', rules);
})(window);
