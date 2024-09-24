// http://api.weatherapi.com/v1/current.json?key=33c81b334ebc488f80f114654242209&q=Mumbai&aqi=no

const tempraturefield = document.querySelector(".temp");
const locationfield = document.querySelector(".time_location p");
const dateandtimefield = document.querySelector(".time_location span");
const conditionfield = document.querySelector(".condition p");
const Searchfield = document.querySelector(".search_area");
const formfield = document.querySelector('form');

formfield.addEventListener('submit',searchforlocation)
let target=`lucknow`

const fetchResults = async (targetlocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=33c81b334ebc488f80f114654242209&q=${targetlocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    let LocationName = data.location.name;
    let time = data.location.localtime;
    let condition = data.current.condition.text
    let temp = data.current.temp_c
    updateDetails(temp,condition,LocationName,time)

}
function updateDetails(temp,condition,LocationName,time) {
    tempraturefield.innerText = temp
    locationfield.innerText = LocationName
    conditionfield.innerText = condition
    dateandtimefield.innerText=time
}
function searchforlocation(e) {
    e.preventDefault()
    target = Searchfield.value
    console.log("searching for",target)
    fetchResults(target);
}
  fetchResults(target);
