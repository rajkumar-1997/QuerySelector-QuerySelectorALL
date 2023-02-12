// console.log('hello world');

let second=document.querySelector('.list-group-item:nth-child(2)');
second.style.backgroundColor='green';

let third=document.querySelector('.list-group-item:nth-child(3)');
third.style.visibility = "hidden";

let odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

let secondi=document.querySelectorAll('li:nth-child(2)');
second.style.color='green';