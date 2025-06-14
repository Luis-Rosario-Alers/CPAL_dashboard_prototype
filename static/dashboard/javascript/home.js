const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const pageHeader = document.getElementById('pageHeader');

sidebar.addEventListener('show.bs.offcanvas', function () {
    console.log("Sidebar is shown");
    mainContent.classList.add('content-shifted');
    pageHeader.classList.add('content-shifted');
});

sidebar.addEventListener('hide.bs.offcanvas', function () {
    console.log("Sidebar is hidden");
    mainContent.classList.remove('content-shifted');
    pageHeader.classList.remove('content-shifted');
});
