// map
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
map.fitBounds(bounds);

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
    }
};

new Chart(ctx, config);
