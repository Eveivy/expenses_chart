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

        }]
    },

};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
); 


function chartData() {
    async function expensesData() {
        const url = './data.json'
        const res = await fetch(url);
        const result = await res.json()
        return result;
    }

    expensesData().then(result => {

        const days = result.map((day, index) => {
            return day.day;
        }) 

        const amount = result.map((amount, index) => {
            return amount.amount;
        })
       
        myChart.config.data.labels = days
        myChart.config.data.datasets[0].data = amount 
        myChart.update() 
    })
}

chartData() 
