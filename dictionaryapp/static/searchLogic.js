// searchLogic.js

if (query) {
  var popupDiv = document.getElementById('popup');

  if (result) {
      // Display result
      var mainDiv = document.createElement('div');
      mainDiv.className = 'main';

      var signParagraph = document.createElement('p');
      signParagraph.className = 'sign';

      var wordSpan = document.createElement('span');
      wordSpan.className = 'bold';
      wordSpan.textContent = 'শব্দ: ' + result.word + ' ';

      var meaningSpan = document.createElement('span');
      meaningSpan.className = 'regular';
      meaningSpan.textContent = 'অর্থ: ' + result.meaning;

      signParagraph.appendChild(wordSpan);
      signParagraph.appendChild(meaningSpan);
      mainDiv.appendChild(signParagraph);

      popupDiv.appendChild(mainDiv);
  } else {
      // Display "No result found" message
      popupDiv.innerHTML = '<div class="main"><p class="sign" text-align="center"> <span class="regular"> দুঃখিত, আমার ডাটাবেজে </span> <span class="bold">' + query + '</span>শব্দের অর্থ নেই।</p></div>';
      popupDiv.style.display = 'block';
  }
}
