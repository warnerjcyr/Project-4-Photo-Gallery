/* Treehouse Project #4: Interactive Photo Gallery */
/* by Warner Cyr */

/* Searchbox Script */


(function() {			
	// Get the images														
	var $imgs = $('#gallery a');
    
	// Get the input element							
	var $search = $('#filter');
    
	// Create an array called cache					
	var cache = [];		

	// For each image													
	$imgs.each(function() {
        
		// Add object to cache array
		cache.push({
			// This image															
			element: this,
            
			// The title text (lowercase trimmed)						
			text: this.title.trim().toLowerCase()			
		});
	});

	// Declare filter() function
	function filter() {
        
		// Get the query										
		var query = this.value.trim().toLowerCase();
		
		// For each entry in cache pass image
		cache.forEach(function(img) {		
				// Set index to 0						
				var index = 0;
            
				// If there is any query text												
				if (query) {							
					// Find if query text is in there							
					index = img.text.indexOf(query);			
				}

				// Show / hide
				img.element.style.display = index === -1 ? 'none' : ''; 
		});
	}

	// If browser supports input event
	if ('oninput' in $search[0]) {
		// Use input event to call filter()								
		$search.on('input', filter);
        
		// Otherwise						
	} else {									
		// Use keyup event to call filter()									
		$search.on('keyup', filter);								
	}																				
}());