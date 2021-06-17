function searchCar() {
    const input = document.querySelector(".filter").value.toUpperCase();
    const container = document.querySelector(".car-gallery");
    console.log(container);

    const card = container.getElementsByClassName("gallery-inner-flexbox");
    console.log(card);

    for(let i = 0; i < card.length; i++) {
        let title = card[i].querySelector(".carList");
        console.log(title)

        if(title.innerText.toUpperCase().indexOf(input) > -1){
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}