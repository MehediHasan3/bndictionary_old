 // combined_script.js

// Function to show and hide the popup
function showPopup() {
    // Check if the popup is already visible
    if (document.getElementById('popup').style.display === 'block') {
      // If visible, hide the popup
      hidePopup();
    } else {
      // If not visible, show the popup
  
      // Add blurred background to the body
      document.body.classList.add('blurred-background');
  
      // Get the search query
      var query = document.getElementsByName('query')[0].value;
  
      // Create the popup content
      var popupContent = `
        <div class="main">
          <p class="sign" align="center">${query} <br> Meaning</p>
        </div>
      `;
  
      // Set the popup content
      document.getElementById('popup').innerHTML = popupContent;
  
      // Show the popup
      document.getElementById('popup').style.display = 'block';
  
      // Add click event listener to body to close popup when clicking outside
      document.body.addEventListener('click', hidePopupOnClickOutside);
  
      // Prevent the click event from propagating to the body
      document.getElementById('popup').addEventListener('click', function (event) {
        event.stopPropagation();
      });
    }
  }
  
  // Header related code
  const header = document.getElementById('header');
  
  header.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:8000';
  });
  
  header.style.textDecoration = 'none';
  header.style.cursor = 'pointer';
  
  // Function to hide the popup
  function hidePopup() {
    // Remove blurred background from the body
    document.body.classList.remove('blurred-background');
  
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
  
    // Remove the click event listener from the body
    document.body.removeEventListener('click', hidePopupOnClickOutside);
  }
  
  // Function to hide the popup when clicking outside
  function hidePopupOnClickOutside(event) {
    // Check if the click is outside the popup
    if (!document.getElementById('popup').contains(event.target)) {
      // If outside, hide the popup
      hidePopup();
    }
  }
  
  // Function to show search results
  function showSearchResults(query, result) {
    var searchResultsDiv = document.getElementById('searchResults');
  
    if (query) {
      searchResultsDiv.innerHTML = '';
  
      if (result) {
        var mainDiv = document.createElement('div');
        mainDiv.className = 'main';
  
        var signParagraph = document.createElement('p');
        signParagraph.className = 'sign';
        signParagraph.style.textAlign = 'center';
        signParagraph.innerHTML = 'শব্দ: ' + result.word + '<br> অর্থ: ' + result.meaning;
  
        mainDiv.appendChild(signParagraph);
        searchResultsDiv.appendChild(mainDiv);
      } else {
        var noResultDiv = document.createElement('div');
        noResultDiv.className = 'main';
  
        var noResultParagraph = document.createElement('p');
        noResultParagraph.className = 'sign';
        noResultParagraph.style.textAlign = 'center';
        noResultParagraph.innerHTML = 'No result found for "' + query + '"';
  
        noResultDiv.appendChild(noResultParagraph);
        searchResultsDiv.appendChild(noResultDiv);
      }
    }
  }
  