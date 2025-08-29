// console.log('connected')
let count = 0;


 const hearBtn = document.getElementById('count-increase-btn')
 const favCount = document
   .getElementById("fav-count")


   hearBtn.addEventListener("click", function (e) {
     e.preventDefault();
     count++;
     favCount.innerText = count;
    //  console.log(count)
   });