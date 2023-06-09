/*CREATED BY AMIRABBAS DORASAY*/
function loadContent() {
  fetch(window.location.href, {
      method: 'GET',
      headers: {
          'Content-Type': 'text/html',
          'Cache-Control': 'no-cache'
      }
  })
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const newContentElement = doc.getElementById('archive-container');
    
    if (newContentElement) {
      const newContent = newContentElement.innerHTML;
      const currentContent = document.getElementById('archive-container').innerHTML;
      
      if (newContent !== currentContent) {
        document.getElementById('archive-container').innerHTML = newContent;
      }
    } else {
      console.log('Error: Content element not found in the fetched HTML.');
    }
  })
  .catch(error => console.log('An error occurred:', error));
}

loadContent();

setInterval(loadContent, 5000); // Refresh content every 5 seconds
