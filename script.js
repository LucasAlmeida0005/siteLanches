

let navbar = document.querySelector('.navbar'); // pega a nav que envolve os itens do menu

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');

  // quando ativamos o menu do navbar os outros somem, isso evita de ter mais de um aberto ao mesmo tempo, isso vale para os outros 2 abaixo
}
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
  cartItem.classList.toggle('active'); 
  navbar.classList.remove('active');
  searchForm.classList.remove('active');

  
}

window.onscroll = () =>{    // quando rolar a tela desativa os menus 
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

