// console.log('connected')

function alertMessage() {
  alert("National Emergency called");
}

document
  .getElementById("call-btn-national")
  .addEventListener("click", function () {
    alert("National Emergency Number : 999");
  });



 
function getElement(id){
  const element =document.getElementById(id);
  return element;
}

document.getElementById("call-btn-national").addEventListener('click', function (){

  const name = getElement("card-title-1").innerText;
  const number = getElement("call-number-1").innerText;
console.log(name, number)

const totalName = getElement("call-list").innerText;
console.log(totalName)
// currentList = 

getElement("call-list").innerText = totalName;
});



























//  const titles = document.getElementsByClassName("card-title");
// console.log(titles);

//inner content changing:
// function removeSpace(str){
//   return str.replaceAll(" ", "").toUpperCase();
// }

// const titles = document.querySelectorAll(".card-title");
// for (let title of titles){
// console.log(title);
// title.innerText = "We are PH Studernt";
// title.innerHTML = `<span class='text-pink-500'>${removeSpace(title.innerText)}</span>`;
// title.style.backgroundColor = 'green';
// title.style.border = '3px solid red';
// title.classList.remove("card-title");
// }

// const images = document.getElementsByTagName("img");
// console.log(images);
// for (let img of images) {
//   img.addEventListener("mouseenter", function () {
    
//     img.src =
//       "https://www.thestudentpocketguide.com/wp-content/uploads/2007/05/Mr-Bean.jpg";
//   });
// }
