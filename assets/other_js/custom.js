  // show header when scroll
  $(window).scroll(() => {
      if ($(window).scrollTop() >= 40) {
        $('.header_menu').css('top', '-67px').css('background-color', 'white').css('position','relative');
        $('.header_menu').css('background-color', 'white')
        $('.navbar-nav li a').css('color', '#1d5e2a')
        $('.header-logo ').css('position', 'static')
        $('.header-logo ').css('padding', '0px')
        $('.navbar-toggler .toggler-icon').css('background-color', '#1d5e2a')

        
      //   $('nav').css('border-bottom-right-radius', '50px')
      //   $('a').addClass('a-hover')
      //   $('.activeitem').css('color', '#F17C2D !important');
      
      
        
      }else if ($(window).scrollTop() <= 40) {
          $(' .header_menu').css('background-color', '#3B7E49').css('position', 'static')
          $('.home-header .header_menu').css('position', 'static').css('background-color', 'transparent')

          $('.navbar-nav li a').css('color', '#fff')

          $('.header-logo ').css('position', 'absolute').css('padding-right', '10px').css('padding-left', '10px').css('padding-top', '30px').css('padding-bottom', '30px')
          $('.sub-menu li a').css('color', '#000')
          $('.navbar-toggler .toggler-icon').css('background-color', '#fff')

          if ($(window).width() < 1024) {
            $('.navbar-nav li a').css('color', 'black')
      
          }



      }
    });


    

    $('.navbar-nav li a').css('color', '#fff')
    $('.sub-menu li a').css('color', '#000')


    if ($(window).width() < 1024) {
      $('.navbar-nav li a').css('color', 'black')

    }

  // hidden loader when page load 
  $(window).on('load', function(event) {
      $('#preloader').delay(500).fadeOut(500);
    
  });
  


  
// Function for allowing only letters and spaces on keydown
function handleKeydown(event) {
  const allowedKeys = /[a-zA-Zء-ي\s]/;
  const keyPressed = event.key;

  if (!allowedKeys.test(keyPressed)) {
      event.preventDefault();
  }
}

// Function for preventing users from pasting numbers in input
function handlePaste(event) {
  event.preventDefault();

  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData('text/plain');
  const allowedPattern = /^[a-zA-Zء-ي\s]+$/;

  if (!allowedPattern.test(pastedText)) {
      // Optionally, you can display an error message or perform some action here.
      return;
  }

  // Manipulate the pasted text if needed
  const modifiedText = pastedText.toUpperCase();

  // Insert the modified text into the input field or perform any other desired action
  const inputElement = event.target;
  const currentPosition = inputElement.selectionStart || 0;
  const inputValue = inputElement.value;
  const newValue = inputValue.slice(0, currentPosition) + modifiedText + inputValue.slice(currentPosition);
  inputElement.value = newValue;
}


// Function for allowing only numbers on keydown
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

// Function for preventing users from pasting letters in number input
function onPaste(event) {
  const pastedText = event.clipboardData?.getData('text');
  if (pastedText && /\D/.test(pastedText)) {
      event.preventDefault(); // Cancel the paste action if it contains non-numeric characters
  }
}