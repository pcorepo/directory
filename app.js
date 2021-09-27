let bread = document.querySelector('.breadcrumb').getBoundingClientRect();
let nav = document.querySelector('.navbar').getBoundingClientRect();

let height = nav.height + bread.height;
let sidebar = document.querySelector('.sidebar-desktop').getBoundingClientRect();
let sidebarwidth = sidebar.width;
console.log(sidebarwidth);
//sidebar.setAttribute('style','margin-left:'+ sidebarwidth + 'px');


sidebar.setAttribute('style', 'top:' + height + 'px');
var y = document.getElementById("myDIV");
var i = document.getElementById('MYDIV');
y.style.display="none";

function myFunction1() {
   var x = document.getElementById("myDIV");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }
}


i.style.display="none";
function myFunction2() {
   var n = document.getElementById("MYDIV");
   if (n.style.display === "none") {
      n.style.display = "block";
   } else {
      n.style.display = "none";
   }
}
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>