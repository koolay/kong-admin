Vue.filter('empty', function (value) {
    if (value == 'undefined') {
        return '';
    }
    if (value == {}) {
        return '';
    }
    if (value == ' ') {
        return '';
    }
    if ((typeof value) == 'string') {
        return value;
    }
    if (Object.keys(value).length<1) {
        return '';
    }
    return value;
})
