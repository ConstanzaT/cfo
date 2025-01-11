  // Cargar el footer
  fetch('modulo/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el footer:', error));
