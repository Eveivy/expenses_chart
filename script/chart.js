
const config = {
    type: 'bar',
    options: {
        scales: {
            y: {
                display: false
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                yAlign: top, 
                backgroundColor: 'hsl(25, 47%, 15%)',
                callbacks: {
                    title: function () { },
                    label: function (context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        }
    },
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            backgroundColor: ['hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'],
            hoverBackgroundColor: ['hsla(10, 79%, 65%, 0.849)',
             'hsla(10, 79%, 65%, 0.849)', 
             'hsl(176, 34%, 60%)', 
             'hsla(10, 79%, 65%, 0.849)', 
             'hsla(10, 79%, 65%, 0.849)', 
             'hsla(10, 79%, 65%, 0.849)', 
             'hsla(10, 79%, 65%, 0.849)'],
            borderRadius: 5,
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],

        }]
    },

};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);



