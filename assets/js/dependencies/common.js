var ui = {

    confirm: function(title, msg, onApprove) {

        swal({
            title: title,
            text: msg,
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        }, function() {
            onApprove();
        });

    },

    alert: function(title, msg, type) {

        swal(title, msg, type);
    }
}

var utils = {
    getQuery: function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    },
}
