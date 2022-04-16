document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        
      chrome.tabs.query({
          active: true,
          lastFocusedWindow: true
      }, function(tab) {
          var tabURL = tab[0].url;
          console.log(tabURL);
          /*
        d = document;
        var f = d.createElement('form');
        //f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'post';
        var i = d.createElement('input');
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab.url;
        f.appendChild(i);
        d.body.appendChild(f);
        f.submit();
        */
      });
      
    });
  });