  $(function () {
    
    var filterList = {
    
      init: function () {
      
        // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixItUp({
          selectors: {
            target: '.portfolio',
            filter: '.filter' 
          },
          load: {
            filter: '.2017'  
          }     
        });               
      
      }

    };
    
    // Run the show!
    filterList.init();
    
    
  }); 