const header = document.getElementById('header');

header.addEventListener('click', () => {
  window.location.href = 'http://127.0.0.1:8000';
});

header.style.textAlign = 'center';
header.style.cursor = 'pointer';

document.addEventListener('dblclick', function (event) {
  const selectedWord = window.getSelection().toString().trim();

  if (selectedWord) {
    const queryParam = encodeURIComponent(selectedWord);

    fetch(`/entobn/?query=${queryParam}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Check if the response is JSON, otherwise handle differently
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          throw new Error('Response is not JSON');
        }
      })
      .then(data => {
        console.log('Success:', data);  // Log the successful response
        // Handle the data, e.g., display the meaning or pronounce the word
      })
      .catch(error => {
        console.error('Error:', error);
        console.error('Error details:', error.message);  // Log the error message
      });
  }
});
