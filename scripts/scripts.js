window.onload = function() { 
  let imagesH1 = ["img/tesla_model-s.jpg","img/tesla_model-x.jpg","img/3.jpeg"];
  let imagesH2 = ["img/4.jpg","img/5.jpg","img/6.jpg"];
  let imagesH3 = ["img/7.jpeg","img/8.jpg","img/9.jpg"];
  let rad = 0;
  document.getElementById("section__heading-h1").onclick = function(){
    document.getElementById('section__heading-h1').classList.add('hactive');
    document.getElementById('section__heading-h2').classList.remove('hactive');
    document.getElementById('section__heading-h3').classList.remove('hactive');
    document.getElementById("im").src = imagesH1[0];
    rad = 0;
  }
  document.getElementById("section__heading-h2").onclick = function(){
    document.getElementById('section__heading-h2').classList.add('hactive');
    document.getElementById('section__heading-h1').classList.remove('hactive');
    document.getElementById('section__heading-h3').classList.remove('hactive');
    document.getElementById("im").src = imagesH2[0];
    rad = 0;
  }
  document.getElementById("section__heading-h3").onclick = function(){
    document.getElementById('section__heading-h3').classList.add('hactive');
    document.getElementById('section__heading-h2').classList.remove('hactive');
    document.getElementById('section__heading-h1').classList.remove('hactive');
    document.getElementById("im").src = imagesH3[0];
    rad = 0;
  }
  document.getElementById("arrow_right").addEventListener("click",function(){
    if(document.getElementById("section__heading-h1").classList.contains("hactive")){
      if(rad <= 1){
        rad++;
      }
      document.getElementById("im").src = imagesH1[rad];
    }
    if(document.getElementById("section__heading-h2").classList.contains("hactive")){
      if(rad <= 1){
        rad++;
      }
      document.getElementById("im").src = imagesH2[rad];
    }

    if(document.getElementById("section__heading-h3").classList.contains("hactive")){
      if(rad <= 1){
        rad++;
      }
      document.getElementById("im").src = imagesH3[rad];
    }
  })
  document.getElementById("arrow_left").addEventListener("click",function(){
    if(document.getElementById("section__heading-h1").classList.contains("hactive")){
      if(rad >= 1){
        rad--;
      }
      document.getElementById("im").src = imagesH1[rad];
    }
      if(document.getElementById("section__heading-h2").classList.contains("hactive")){
        if(rad >= 1){
          rad--;
        }
        document.getElementById("im").src = imagesH2[rad];
      }
      if(document.getElementById("section__heading-h3").classList.contains("hactive")){
        if(rad >= 1){
          rad--;
        }
        document.getElementById("im").src = imagesH3[rad];
      }
  })
}
