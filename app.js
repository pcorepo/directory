let bread = document.querySelector('.breadcrumb').getBoundingClientRect();
let nav = document.querySelector('.navbar').getBoundingClientRect();

let height = nav.height + bread.height;
let sidebar = document.querySelector('.sidebar-desktop');


sidebar.setAttribute('style', 'top:' + height + 'px');