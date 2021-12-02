// selectors
const button = document.getElementById("button");
const odd = document.getElementById("odd");
const even = document.getElementById("even");

// 
const htmlTemplate = (arg) => {
  return `<li>${arg}</li>`;
}

//
const buttonLogic = () => {
  const range = 20, max=100, min=1;
  let numbers = [];

  for(let i=0; i<range; i++){
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }


  for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
      even.insertAdjacentHTML('beforeend',htmlTemplate(numbers[i]));
    }
    else if(numbers[i]%2!=0){
      odd.insertAdjacentHTML('beforeend', htmlTemplate(numbers[i]));
    }
  }
}

// button event listener
button.addEventListener('click', function(event){
  event.preventDefault();
  buttonLogic();
})