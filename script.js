const toggleSidebarBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});