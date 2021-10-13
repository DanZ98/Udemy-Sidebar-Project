// Retrieving elements
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// sidebar toggle add click event
toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});

// close button add click event
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});