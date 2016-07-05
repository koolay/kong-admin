(function(exports) {
    'use strict';
    exports.apis = new Vue({
        el: '#apis',
        data: {
            pagesize: 2,
            columns: [
                'name',
                'upstream_url',
                'request_host',
                'request_path',
                'created_at',
                '__actions'
            ],
            itemActions: [{
                name: 'view-item',
                label: '',
                icon: 'zoom icon',
                class: 'ui teal button'
            }, {
                name: 'edit-item',
                label: '',
                icon: 'edit icon',
                class: 'ui orange button'
            }, {
                name: 'delete-item',
                label: '',
                icon: 'delete icon',
                class: 'ui red button'
            }]

        },
        methods: {
            viewProfile: function(id) {
                console.log('view profile with id:', id)
            },
            deleteApi: function(item) {
                var self = this;

                if (confirm("确定要删除接口" + item.name + "?")) {
                    axios.delete("/apis / " + item.id).then(function(response) {
                        if (response.data.result) {
                            alert('删除成功');
                            self.items.$remove(item);
                        } else {
                            alert(response.data.msg);
                        }
                    }).catch(function(err) {
                        console.log(err);
                    })
                }

            }
        },
        events: {
            'vuetable:action': function(action, data) {
                console.log('vuetable:action', action, data)
                if (action == 'view-item') {
                    this.viewProfile(data.id)
                }
            },
            'vuetable:load-error': function(response) {
                console.log('Load Error: ', response)
            }
        },
        ready: function() {

        },
    });
})(window);
