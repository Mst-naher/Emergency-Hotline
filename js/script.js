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

const NameList = getElement("call-list").innerText;
console.log(NameList);
// currentList = 

getElement("call-list").innerText = NameList;

const callContainer = getElement("call-container");
const newCall = document.createElement("div");
newCall.innerHTML = `
  
                <div class="m-5 bg-gray-200 rounded-xl p-4">
                 <h3 class="font-bold">Service's Name</h3>
                 <h3 class="font-bold "></h3>
                </div>
              

`;

callContainer.append("newCall");


});


document
  .getElementById("call-btn-national")
  .addEventListener("click", function () {
    const name = getElement("card-title-1").innerText;
    const number = getElement("call-number-1").innerText;
    console.log(name, number);

    const NameList = getElement("call-list").innerText;
    console.log(NameList);
    // currentList =

    getElement("call-list").innerText = NameList;

    const callContainer = getElement("call-container");
    const newCall = document.createElement("div");
    newCall.innerHTML = `
  
                <div class="m-5 bg-gray-200 rounded-xl p-4">
                 <h3 class="font-bold">Service's Name</h3>
                 <h3 class="font-bold "></h3>
                </div>
              

`;

    callContainer.append("newCall");
  });


 





















