console.log('java script is working!');

// Greeting
let userName = prompt("Please input your name", "").trim();
console.log("Nama yang dimasukkan:", userName);

if (userName) {
    document.getElementById("greeting").innerText = "Hai " + userName + ", Welcome To My Portfolio!";
}

// Function to validate form
function validateForm(event) {
    event.preventDefault(); // Mencegah refresh halaman

    const name = document.forms["message-us"]["name"].value;
    const birthDate = document.forms["message-us"]["birthDate"].value;
    const genderElement = document.forms["message-us"]["gender"]; 
    const messages = document.forms["message-us"]["messages"].value;

    let gender = "";
    for (let i = 0; i < genderElement.length; i++) {
        if (genderElement[i].checked) {
            gender = genderElement[i].value;
            break;
        }
    }

    if (name === "" || birthDate === "" || gender === "" || messages === "") {
        alert("Tidak Boleh Ada Yang Kosong");
        return;
    }

    setSenderUI(name, birthDate, gender, messages);
}

// Function to set UI after form submission
function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("name-input-result").innerText = name;
    document.getElementById("birth-input-result").innerText = birthDate;
    document.getElementById("gender-input-result").innerText = gender;
    document.getElementById("messages-result").innerText = messages;
}

let bannerIndex = 0;
showBanner();

// Function to change banner
function nextBanner(){
    bannerIndex += 1;
    showBanner();
}

// Function to show banner
function showBanner(){
    const banners = document.getElementsByClassName('banner-img');
    console.log(banners);

    if (bannerIndex >= banners.length){
        bannerIndex = 0;
    }

    for (let i = 0; i < banners.length; i++){
        banners[i].style.display = 'none';
    }
    
    banners[bannerIndex].style.display = 'block';  
}

// Set interval to change banner
setInterval(nextBanner, 3000);
