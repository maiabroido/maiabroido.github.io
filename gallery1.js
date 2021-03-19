let slides = document.getElementById('slideshow');
let imgs = slides.getElementsByTagName('img');
let imagemSelecionada = document.getElementById('displayed-img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let counter = 0;

next.addEventListener('click',nextSlide, false);
prev.addEventListener('click',prevSlide, false);

for (let i = 0; i < imgs.length; i++) {
       let index = i;
       let imagem = imgs[i];
       clickImage(imagem, index);
       //imagem.setAttribute('data-index', index);
  }
  function goToSlide(n) {
    counter = (n + imgs.length) % imgs.length;
    mudaImagem(imgs[counter], n);
    console.log(counter)
}

  function nextSlide() {
    goToSlide(counter + 1);
  }

  function prevSlide() {
    goToSlide(counter - 1);
  }

  function mudaImagem(imagem, index) {
    let path = imagem.getAttribute('src');
    imagemSelecionada.setAttribute('src', path);
  }

  function clickImage(imagem, index) {
      imagem.addEventListener('click', function(event){
      event.preventDefault();
      mudaImagem(imagem, index);
      goToSlide(index);
     });
  }



  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
