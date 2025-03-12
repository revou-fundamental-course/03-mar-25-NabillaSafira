// pesan selamat datang
document.addEventListener("DOMContentLoaded", function() {
    let name = prompt("please input your name", "").trim();
    console.log(name);
    if (name) {
        document.getElementById("greeting").innerText = "Hai " + name +","+"Welcome To My Portofolio!";      
    }
});
//slide show
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
document.addEventListener("DOMContentLoaded", showSlides);

//message us
function validationForm(){
    const name = document["message-us"]["full-name"].value;
    const birthDate = document["message-us"]["birth-date"].value;
    const gender = document["message-us"]["gender"].value;
    const messages = document["message-us"]["messages"].value;

    if (name == "" || birthDate == ""|| gender == "" || messages == ""){
            alert("Tidak Boleh Ada Yang Kosong");
            return false;
    }
    setSenderUI(name, birthDate, gender, messages);
    function setSenderUI(name, birthDate, gender, messages) {
        document.getElementById("sender-full-name").innerText = name;
        document.getElementById("sender-birth-date").innerText = birthDate;
        document.getElementById("sender-gender").innerText = gender;
        document.getElementById("sender-messages").innerText = messages;
    }    
    return false;

}

