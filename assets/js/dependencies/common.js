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
    prompt: function(title, msg, placeholder, cb) {
        swal({
            title: title,
            text: msg,
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            inputPlaceholder: "Write something"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false
            }
            cb(inputValue);
        });
    },
    loading: function() {
        $('.dimmer').addClass('active');
    },
    hideLoading: function() {
        $('.dimmer').removeClass('active');
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
