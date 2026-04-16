const { colorSuccess, colorWarning, colorError, colorOffline, textColor } = loadColors();
const ctx = document.querySelector('#status-chart').getContext('2d');
const statusChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Em Rota', 'Ociosos', 'Alerta', 'Offline'],
    datasets: [{
      data: [12, 3, 1, 1],
      backgroundColor: [colorSuccess, colorWarning, colorError, colorOffline],
      borderWidth: 0,
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: textColor,
          font: { size: 12, family: "'Inter', sans-serif" },
          boxWidth: 12,
          padding: 10
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label;
            label += ': ';
            label += context.raw;
            label += context.raw > 1 ? ' veículos' : ' veículo';
            return label;
          }
        }
      }
    }
  }
});