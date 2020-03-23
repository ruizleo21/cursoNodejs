const axios = require('axios');
const apiKey = '0745bb6165ff3d1c126697ba28ccdfb0';

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}