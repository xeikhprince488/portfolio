function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex ';

}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none';
}

const sidebarLinks = document.querySelectorAll(' .sidebar li a');

sidebarLinks[0].classList.add('active');

sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

const menubarLinks = document.querySelectorAll(' .menubar li a');

menubarLinks[0].classList.add('active');

menubarLinks.forEach(link => {
  link.addEventListener('click', () => {
    menubarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

