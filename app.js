let bread = document.querySelector('.breadcrumb').getBoundingClientRect();
let nav = document.querySelector('.navbar').getBoundingClientRect();

let height = nav.height + bread.height;
let sidebar = document.querySelector('.sidebar-desktop');


sidebar.setAttribute('style', 'top:' + height + 'px');
var y = document.getElementById("myDIV");
y.style.display="none";

function myFunction() {
   var x = document.getElementById("myDIV");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }
}

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>