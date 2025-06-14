/* global bootstrap */

// Show modal on page load
window.onload = function() {
    "use strict";
    var myModal = new bootstrap.Modal(document.getElementById('intro-modal'));
    myModal.show();
};

document.addEventListener('DOMContentLoaded', function () {
    const offcanvasElements = document.querySelectorAll('.offcanvas');

    offcanvasElements.forEach(function(offcanvasEl) {
        offcanvasEl.addEventListener('show.bs.offcanvas', function () {
            document.body.classList.add('offcanvas-active');
        });

        offcanvasEl.addEventListener('hide.bs.offcanvas', function () {
            document.body.classList.remove('offcanvas-active');
        });
    });
});
