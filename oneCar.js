const carId  = window.location.hash.slice(1)
  
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(carId)
    var response = JSON.parse(xhttp.responseText);
    var people = response.Vehicles;
    const car = people.find( element => element.Id == carId)


    document.getElementById("modelh1").innerText = car.Model + ' ' + car.Variant
    document.getElementById("braend").innerText = car.Propellant
    document.getElementById("km").innerText = car.Mileage
    document.getElementById("farve").innerText = car.Color
    document.getElementById("reg").innerText = car.RegistrationDate
    document.getElementById("doors").innerText = car.NumberOfDoors
    document.getElementById("model").innerText = car.Model
    document.getElementById("type").innerText = car.Motor
    document.getElementById("price").innerText = car.Price
    
    for (let i = 0; i < car.Pictures.length ; i++){
      



      let divpic = document.createElement('div')
      divpic.setAttribute('class', 'mySlides fade')
      
     
  
      document.getElementById('slideshow-container').appendChild(divpic)

      let divnum = document.createElement('div')
      divnum.setAttribute('class', 'numbertext')
      divnum.innerText = i + ' / ' + car.Pictures.length
      divpic.appendChild(divnum)
      

      let image = document.createElement('img')
      image.setAttribute('class', 'car-image img')
      image.setAttribute('src', car.Pictures[i])
  
      document.querySelectorAll('.mySlides').item(i).appendChild(image)
     

      let navImageSpan = document.createElement('span')
      navImageSpan.setAttribute('class', 'dot')
      navImageSpan.setAttribute('onclick', 'currentSlide(' + i +')')
      
      let navImage = document.createElement('img')
      navImage.setAttribute('class', 'dot')
      navImage.setAttribute('src', car.Pictures[i])

      document.getElementById('navImageCont').appendChild(navImageSpan);
      navImageSpan.appendChild(navImage)


      

//navImageCont
      
    }


     

    }
};
xhttp.open("GET", "../brugt.json", true);
xhttp.send();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
}
