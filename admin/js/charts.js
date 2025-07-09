// Ventas línea
new Chart(document.getElementById('ventasLineChart'), {
  type: 'line',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Semana Actual',
        data: [10, 20, 15, 30, 25, 35],
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        tension: 0.3
      },
      {
        label: 'Semana Pasada',
        data: [8, 16, 12, 24, 18, 28],
        borderColor: 'rgb(100, 100, 255)',
        backgroundColor: 'rgba(100, 100, 255, 0.1)',
        tension: 0.3
      }
    ]
  },
  options: {
    plugins: {
      legend: { labels: { color: 'white' } }
    },
    scales: {
      x: { ticks: { color: 'white' } },
      y: { ticks: { color: 'white' } }
    }
  }
});

// Ventas por mes (barras)
new Chart(document.getElementById('ventasBarChart'), {
  type: 'bar',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [{
      label: 'Ventas',
      data: [20, 25, 22, 28, 26, 30],
      backgroundColor: 'rgb(59, 130, 246)'
    }]
  },
  options: {
    plugins: {
      legend: { labels: { color: 'white' } }
    },
    scales: {
      x: { ticks: { color: 'white' } },
      y: { ticks: { color: 'white' } }
    }
  }
});

// Platos vendidos (doughnut)
new Chart(document.getElementById('platosDoughnutChart'), {
  type: 'doughnut',
  data: {
    labels: ['Milanesas', 'Comida Americana', 'Hamburguesas', 'Otros'],
    datasets: [{
      data: [38.6, 22.6, 30.8, 8.0],
      backgroundColor: ['#60a5fa', '#f87171', '#34d399', '#a78bfa']
    }]
  },
  options: {
    plugins: {
      legend: { labels: { color: 'white' } }
    }
  }
});

// Gastos por mes (barras)
new Chart(document.getElementById('gastosBarChart'), {
  type: 'bar',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
    datasets: [{
      label: 'Gastos',
      data: [12, 15, 10, 14, 11, 16, 13, 17, 15, 14, 12, 13],
      backgroundColor: '#facc15'
    }]
  },
  options: {
    responsive: true,
    maintainAspecRatio: false,
    plugins: {
      legend: { labels: { color: 'white' } }
    },
    scales: {
      x: { ticks: { color: 'white' } },
      y: { ticks: { color: 'white' } }
    }
  }
});