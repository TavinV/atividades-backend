async function getWeather(){
    var response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mogi%20das%20Cruzes&units=metric&appid=64ed82577ced7f69cb1687f0ce536131')

    var tempCelcius = response.data.main.temp

    document.getElementById("temperatura").innerHTML = `A temperatura atual em Mogi das Cruzes é de ${tempCelcius.toFixed(1) } °C`
}

getWeather()