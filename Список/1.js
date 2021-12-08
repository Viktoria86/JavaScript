const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', function(event) {
let li = document.createElement('li');
li.innerHTML = input.value;
  if(li.innerHTML>10) {
     li.className = "red";
}
  else if(li.innerHTML<10) {
     li.className = "green";
}
  if(li.innerHTML==10) {
     li.className = "blue";
}
  
list.appendChild(li);
});