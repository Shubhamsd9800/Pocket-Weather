// const userTab = document.querySelector("[data-userWeather]")
// const searchTab = document.querySelector("[data-searchWeather]")
// const userContainer = document.querySelector(".weather-container")

// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container")
// const userInfoContainer=document.querySelector(".user-info-container");


// //intially variable needs

// let oldTab = userTab;
// const API_KEY = "0e3c3c0175baa2ebaf977f18ec52ba00";
// oldTab.classList.add("current-tab")
// getfromSessionStorage();
// //pending

// function switchTab(newTab){
//     if(newTab != oldTab){
//         oldTab.classList.remove("current-tab");
//         oldTab = newTab;
//         oldTab.classList.add("current-tab");

//         if(!searchForm.classList.contains("active")) {
//             //kya search wala container is invisible then visible 
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         }
//         else {
//             //phle search m tha ab your weather a asbo
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//            //ab main ypur weather tab m ayga oth weather display krunga so let's check local storge
//            //first for coordinates, if we have saved them there.
//             getfromSessionStorage(); 
//         }
//     }
// }

// userTab.addEventListener('click',()=>{
//     //pass clicked tab as input parameter
//     switchTab(userTab);
// })

// searchTab.addEventListener('click',()=>{
//     switchTab(searchTab);
// });

// //check if coordinates are already present in session storage
// function getfromSessionStorage(){
//         const localCoordinates = sessionStorage.getItem("user-coordinates");
//         if(!localCoordinates){
//             grantAccessContainer.classList.add("active");

//         }
//         else{
//             const coordinates = JSON.parse(localCoordinates);
//             fetchUserWeatherInfo(coordinates);
//         }
// }

// async function fetchUserWeatherInfo(coordinates){
//     const {lat, lon} = coordinates;
//     //make grant container invisible
//     grantAccessContainer.classList.remove("active");
//     //make loader visible
//     loadingScreen.classList.add("active");
    
//     //api call
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
//         const data= await response.json()

//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     } 
//     catch (err) {
//         loadingScreen.classList.remove("active")
//     }
// }

// function renderWeatherInfo(weatherInfo){
//     //first fetch the element

//     const cityName = document.querySelector("[data-cityName]");
//     const countryIcon = document.querySelector("[data-countryIcon]")
//     const desc = document.querySelector("[data-weatherDesc]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]");
//     const temp = document.querySelector("[data-temp]");
//     const windspeed = document.querySelector("[data-windspeed]");
//     const humidity = document.querySelector("[data-humidity]");
//     const cloudiness = document.querySelector("[data-cloudiness]");

//     console.log(weatherInfo)
    
//     //fetch values from weatherinfo object and pput in ui elements
//     cityName.innerText = weatherInfo?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = weatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText = `${weatherInfo?.main?.temp} °C`;
//     windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
//     humidity.innerText = `${weatherInfo?.main?.humidity}%`;
//     cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


// }

// function getLocation(){
//      if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//      }
//      else{

//      }
     
// }

// function showPosition(position){
//     const userCoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude
//     }

//     sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);
// }

// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener('click',getLocation);
 

// const searchInput = document.querySelector("[data-searchInput]");
// searchForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let cityName = searchInput.value;
//     if(cityName === ""){
//         return;
//     }
//     else{
//         fetchSearchWeatherInfo(cityName);
//     }
// })

// async function fetchSearchWeatherInfo(city){
//         loadingScreen.classList.add("active");
//         userInfoContainer.classList.remove("active");
//         grantAccessContainer.classList.remove("active");
//         try {
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//             const data = await response.json();
//             loadingScreen.classList.remove("active");
//             userInfoContainer.classList.add("active");
//             renderWeatherInfo(data);
//         }
//         catch(err) {

//         }
// }
// background: rgb(194,117,223);
// background: linear-gradient(90deg, rgba(194,117,223,1) 0%, rgba(9,72,121,1) 53%, rgba(28,188,99,1) 100%);

