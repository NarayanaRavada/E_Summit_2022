/*document.addEventListener("DOMContentLoaded", function() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("mouseover", function() {
        this.querySelector(".details").style.display = "block";
      });
      cards[i].addEventListener("mouseout", function() {
        this.querySelector(".details").style.display = "none";
      });
    }
  });
*/
  document.addEventListener('DOMContentLoaded', function() {
    var cards = document.getElementsByClassName('car');
    
    function toggleDetails(card) {
      var details = card.querySelector('.details');
      card.classList.toggle('expanded');
      
      if (card.classList.contains('expanded')) {
        details.style.display = 'block';
      } else {
        details.style.display = 'none';
      }
    }
    
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      
      card.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          toggleDetails(this);
        }
      });
      
      card.addEventListener('mouseover', function() {
        if (window.innerWidth > 768) {
          toggleDetails(this);
        }
      });
      
      card.addEventListener('mouseout', function() {
        if (window.innerWidth > 768) {
          toggleDetails(this);
        }
      });
    }
  });
  
   
  /*function toggleDetails(button) {
    var card = button.closest('.card');
    var details = card.querySelector('.details');
    var expandButton = card.querySelector('.expand-button');
    var closeButton = card.querySelector('.close-button');
  
    if (details.style.display === 'block') {
      details.style.display = 'none';
      expandButton.style.display = 'block';
      closeButton.style.display = 'none';
    } else {
      details.style.display = 'block';
      expandButton.style.display = 'none';
      closeButton.style.display = 'block';
    }
  }
  
  function toggleButtons(buttons) {
    var expandButton = buttons.querySelector('.expand-button');
    var closeButton = buttons.querySelector('.close-button');
  
    expandButton.disabled = !expandButton.disabled;
    closeButton.disabled = !closeButton.disabled;
  }
  
  function checkScreenSize() {
    var tabletBreakpoint = 768; // Adjust the breakpoint as needed
    var screenWidth = window.innerWidth;
  
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var buttons = card.querySelector('.buttons');
  
      if (screenWidth <= tabletBreakpoint) {
        buttons.style.display = 'block';
        toggleButtons(buttons);
      } else {
        buttons.style.display = 'none';
      }
    }
  }
  
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();*/
  
  
  
    