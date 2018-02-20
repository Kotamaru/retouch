	window.addEventListener('DOMContentLoaded', function() {
  var o=document.createElement('img');
  o.src='img/system/yes.png';
  o.classList.add("yes-marker");  
  var divs = document.querySelectorAll(".setting-row");
  [].forEach.call(divs, function(item) {
          item.addEventListener('click', function() {
              var img = item.querySelector('.yes-marker');
              if (img)  item.removeChild(img);
              else item.appendChild(o.cloneNode())
          });
      });

  });