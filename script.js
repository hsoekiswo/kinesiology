const toggleSidebarBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const sidebarContent = document.getElementById("sidebar-content");

toggleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    sidebarContent.classList.toggle("active");
});