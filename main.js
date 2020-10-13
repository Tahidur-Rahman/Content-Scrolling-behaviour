const input = document.querySelector('input'),
      output = document.getElementById('output'),
      main = document.getElementById('main'),
      sub = document.getElementById('sub'),
      button = document.querySelector('button');
let scroller  = true;

window.onload = setUpScroll;
main.addEventListener('mouseenter',scrollOrNot)
main.addEventListener('mouseleave',scrollOrNot);

function scrollOrNot(e){
  scroller = (e.type == 'mouseenter')? false :true;
  
}
button.addEventListener('click',function(){
  scroller ^= true;
  button.innerText = !scroller ? 'Start' : 'Stop';
})
let content = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut. Autem eveniet suscipit neque magni facilis nemo, vitae sapiente aliquam expedita qui ex minima consequatur incidunt iusto sequi veniam! Explicabo./nLorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nulla est, optio harum, illum quo amet aliquid nisi voluptates odit veritatis? Dignissimos aliquam doloremque odit, minima cupiditate autem reiciendis aspernatur, itaque laborum voluptate explicabo odio, quod illum quasi blanditiis accusamus delectus earum at quaerat error. Velit recusandae est pariatur numquam ullam maxime cupiditate molestiae. Magni minima quam iste voluptas saepe optio necessitatibus sit? Provident, distinctio laborum recusandae eligendi, ipsa dolorum nesciunt exercitationem eveniet eos quisquam repellat laudantium beatae corrupti. Quae similique consectetur delectus excepturi, libero quis vero, minus incidunt aliquid dolorum sint deserunt. Necessitatibus voluptate quis officiis, harum natus quod, atque aspernatur ratione nostrum amet quidem voluptatibus sapiente assumenda iure incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nulla est, optio harum, illum quo amet aliquid nisi voluptates odit veritatis? Dignissimos aliquam doloremque odit, minima cupiditate autem reiciendis aspernatur, itaque laborum voluptate explicabo odio, quod illum quasi blanditiis accusamus delectus earum at quaerat error. Velit recusandae est pariatur numquam ullam maxime cupiditate molestiae. Magni minima quam iste voluptas saepe optio necessitatibus sit? Provident, distinctio laborum recusandae eligendi, ipsa dolorum nesciunt exercitationem eveniet eos quisquam repellat laudantium beatae corrupti. Quae similique consectetur delectus excepturi, libero quis vero, minus incidunt aliquid dolorum sint deserunt. Necessitatibus voluptate quis officiis, harum natus quod, atque aspernatur ratione nostrum amet quidem voluptatibus sapiente assumenda iure incidunt.</p>';

function setUpScroll(){
  sub.innerHTML = content; 
  let temp = sub.getBoundingClientRect();

  main.style.height = temp.height +'px';
  sub.style.top = temp.height  + 'px';

 setInt = setInterval(viewScrolling,50)
}

function viewScrolling(){
  let scrollSpeed = input.value;
  
  if(scroller){
    let posY = parseInt(sub.style.top);
  console.log(posY)
  if(posY + sub.clientHeight > 0 ){
    sub.style.top = posY - scrollSpeed + 'px'
  }else{
    sub.style.top = main.clientHeight +'px'
  }
  output.innerText = 'Scrolling speed : ' + input.value +'. Position ' +posY
}
}

