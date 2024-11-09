// map

// chart
const ctx = document.getElementById('myDoughnutChart').getContext('2d');

const data = {
    labels: ['Red', 'Yellow', 'Blue'],
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB']
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
            
        },
        cutout: '50%'
    },
    plugins: [{
      id: 'centerText',
      afterDraw(chart) {
          const { ctx, chartArea: { width, height } } = chart;
          ctx.save();
          ctx.font = '50px Arial'; // Font style and size
          ctx.fillStyle = categoryColor; // Text color
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('5', width / 2, height/1.25); // Text content and position
          ctx.restore();
      }
  }]
    
};

new Chart(ctx, config);
// level color change
let category = 5;
let categoryColor = '';
if (category === 0) {
  categoryColor = ctx.fillStyle = '#333'; 
} else if (category === 1) {
  categoryColor = ctx.fillStyle = '#f0e68c'; 
} else if (category === 2) {
  categoryColor = ctx.fillStyle = '#ffa500'; 
} else if (category === 3) {
  categoryColor = ctx.fillStyle = '#ff8c00';
} else if (category === 4) {
  categoryColor = ctx.fillStyle = '#ff4500'; 
} else if (category === 5) {
  categoryColor = ctx.fillStyle = '#ff0000'; 
}       

document.getElementById("myBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  let mapLoctionX = 51.505; 
  let mapLoctionY = -0.09; 
  const map = L.map('map').setView([mapLoctionX, mapLoctionY], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  var bounds = [[mapLoctionX + 0.2, mapLoctionY + 0.5], [mapLoctionX - 0.2, mapLoctionY - 0.5]];
  L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
  map.fitBounds(bounds);
  
  alert(document.getElementById("add").value); // Use .value to get the input's value
});



const apiKey = 'a92740b1dc28f48a3aecde2452d84c45';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${a92740b1dc28f48a3aecde2452d84c45}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

