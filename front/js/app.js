document.app = {

    init: function() {
        this.initModalWindow();
        document.querySelector('#registration-btn').addEventListener('click', this.registrationOpen.bind(this));
    },

    myModal: null,

    initModalWindow: function() {
        const modalOptions = {
            keyboard: false
        };
        const domEl = document.getElementById('modal-registration');
        this.myModal = new bootstrap.Modal(domEl, modalOptions);
    },

    registrationOpen: function(){
        this.myModal.show();
    }
};

document.addEventListener('DOMContentLoaded', document.app.init.bind(document.app));

