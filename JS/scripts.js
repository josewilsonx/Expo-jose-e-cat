document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.coincap.io/v2/assets')
      .then(response => response.json())
      .then(data => {
          const container = document.getElementById('data-container');
          data.data.forEach(crypto => {
              const item = document.createElement('div');
              item.className = 'crypto-item';
              item.innerHTML = `
                  <h3>${crypto.name}</h3>
                  <p>Price: $${parseFloat(crypto.priceUsd).toFixed(2)}</p>
                  <p>Market Cap: $${parseFloat(crypto.marketCapUsd).toFixed(2)}</p>
              `;
              container.appendChild(item);
          });
      })
      .catch(error => console.error('Error fetching data:', error));
});