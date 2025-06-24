var ctx = document.getElementById('progressChart').getContext('2d');
var progressChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Web Development', 'Data Structures', 'Database Systems'],
        datasets: [{
            label: 'Progress',
            data: [70, 45, 100], 
            backgroundColor: ['#007bff', '#28a745', '#dc3545'],
            borderColor: ['#0056b3', '#218838', '#c82333'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
