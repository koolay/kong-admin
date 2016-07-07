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
