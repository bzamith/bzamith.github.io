// Dean Attali / Beautiful Jekyll 2016

var main = {

  bigImgEl : null,
  numImgs : null,

  init : function() {
    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-short");
        } else {
            $(".navbar").removeClass("top-nav-short");
        }
    });
    
    // Sidebar mobile toggle functionality
    var sidebarToggle = document.getElementById('sidebar-toggle');
    var sidebar = document.getElementById('sidebar');
    var sidebarOverlay = document.getElementById('sidebar-overlay');
    var body = document.body;
    
    function toggleSidebar() {
      sidebar.classList.toggle('active');
      sidebarOverlay.classList.toggle('active');
      body.classList.toggle('sidebar-open');
    }
    
    function closeSidebar() {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      body.classList.remove('sidebar-open');
    }
    
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleSidebar();
      });
    }
    
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar when clicking on a link (mobile)
    if (window.innerWidth <= 767) {
      var sidebarLinks = document.querySelectorAll('.sidebar-nav a[href^="/"], .sidebar-nav a[href^="http"]');
      sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          closeSidebar();
        });
      });
    }
    
    // Handle window resize - close sidebar on mobile when resizing to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 767) {
        closeSidebar();
      }
    });
    
    // Hide/show menu button on scroll (mobile only)
    var lastScrollTop = 0;
    var scrollThreshold = 100; // Hide after scrolling 100px
    
    function handleScroll() {
      if (window.innerWidth <= 767 && sidebarToggle) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > scrollThreshold && scrollTop > lastScrollTop) {
          // Scrolling down - hide button
          sidebarToggle.classList.add('hide-on-scroll');
        } else if (scrollTop < lastScrollTop || scrollTop <= scrollThreshold) {
          // Scrolling up or near top - show button
          sidebarToggle.classList.remove('hide-on-scroll');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    }
    
    // Throttle scroll events for better performance
    var scrollTimeout;
    window.addEventListener('scroll', function() {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 10);
    }, { passive: true });        
    
    // show the big header image	
    main.initImgs();
  },
  
  initImgs : function() {
    // If the page was large images to randomly select from, choose an image
    if ($("#header-big-imgs").length > 0) {
      main.bigImgEl = $("#header-big-imgs");
      main.numImgs = main.bigImgEl.attr("data-num-img");

          // 2fc73a3a967e97599c9763d05e564189
	  // set an initial image
	  var imgInfo = main.getImgInfo();
	  var src = imgInfo.src;
	  var desc = imgInfo.desc;
  	  main.setImg(src, desc);
  	
	  // For better UX, prefetch the next image so that it will already be loaded when we want to show it
  	  var getNextImg = function() {
	    var imgInfo = main.getImgInfo();
	    var src = imgInfo.src;
	    var desc = imgInfo.desc;		  
	    
		var prefetchImg = new Image();
  		prefetchImg.src = src;
		// if I want to do something once the image is ready: `prefetchImg.onload = function(){}`
		
  		setTimeout(function(){
                  var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
  		  $(".intro-header.big-img").prepend(img);
  		  setTimeout(function(){ img.css("opacity", "1"); }, 50);
		  
		  // after the animation of fading in the new image is done, prefetch the next one
  		  //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		  setTimeout(function() {
		    main.setImg(src, desc);
			img.remove();
  			getNextImg();
		  }, 1000); 
  		  //});		
  		}, 6000);
  	  };
	  
	  // If there are multiple images, cycle through them
	  if (main.numImgs > 1) {
  	    getNextImg();
	  }
    }
  },
  
  getImgInfo : function() {
  	var randNum = Math.floor((Math.random() * main.numImgs) + 1);
    var src = main.bigImgEl.attr("data-img-src-" + randNum);
	var desc = main.bigImgEl.attr("data-img-desc-" + randNum);
	
	return {
	  src : src,
	  desc : desc
	}
  },
  
  setImg : function(src, desc) {
	$(".intro-header.big-img").css("background-image", 'url(' + src + ')');
	if (typeof desc !== typeof undefined && desc !== false) {
	  $(".img-desc").text(desc).show();
	} else {
	  $(".img-desc").hide();  
	}
  }
};

// 2fc73a3a967e97599c9763d05e564189

document.addEventListener('DOMContentLoaded', main.init);

// Dark mode functionality
(function() {
  'use strict';
  
  // Get theme from localStorage or default to light
  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = theme => localStorage.setItem('theme', theme);
  
  // Get system preference
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  
  // Set theme
  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    }
    setStoredTheme(theme);
    updateThemeIcon(theme);
  };
  
  // Update theme icon
  const updateThemeIcon = theme => {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        themeIcon.classList.remove('fa-moon-o');
        themeIcon.classList.add('fa-sun-o');
      } else {
        themeIcon.classList.remove('fa-sun-o');
        themeIcon.classList.add('fa-moon-o');
      }
    }
  };
  
  // Get current theme state
  const getCurrentTheme = () => {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  };
  
  // Initialize theme (only if not already set by inline script)
  const initTheme = () => {
    // Check if theme is already set (by inline script in head)
    const currentThemeAttr = document.documentElement.getAttribute('data-theme');
    if (!currentThemeAttr) {
      // Only set if not already applied
      const preferredTheme = getPreferredTheme();
      setTheme(preferredTheme);
    } else {
      // Theme already set, just update the icon
      const currentTheme = currentThemeAttr === 'dark' ? 'dark' : 'light';
      updateThemeIcon(currentTheme);
    }
  };
  
  // Theme toggle handler
  const handleThemeToggle = (buttonElement) => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Remove focus from button after clicking to prevent it staying highlighted
    if (buttonElement) {
      buttonElement.blur();
    }
    
    // On mobile, optionally close the navbar after toggling theme
    // (Uncomment the line below if you want the menu to close after theme toggle)
    // if (window.innerWidth <= 767) {
    //   const navbar = document.getElementById('main-navbar');
    //   if (navbar && navbar.classList.contains('in')) {
    //     $('.navbar-toggle').click();
    //   }
    // }
  };
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Add click handler to theme toggle button (works for both click and touch)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      let touchHandled = false;
      
      // Handle touch events (mobile)
      themeToggle.addEventListener('touchstart', function(e) {
        touchHandled = true;
        e.preventDefault();
        e.stopPropagation();
        handleThemeToggle(this);
        // Blur immediately after touch
        setTimeout(() => this.blur(), 100);
      }, { passive: false });
      
      // Handle click events (desktop and mobile fallback)
      themeToggle.addEventListener('click', function(e) {
        if (!touchHandled) {
          e.preventDefault();
          e.stopPropagation();
          handleThemeToggle(this);
          // Blur immediately after click
          this.blur();
        }
        touchHandled = false;
      });
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme();
      if (!storedTheme || storedTheme === 'auto') {
        setTheme(storedTheme || 'auto');
      }
    });
  });
})();

// Book filtering functionality
(function() {
  'use strict';
  
  function initBookFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const bookBelts = document.querySelectorAll('.book-belt');
    const bookItems = document.querySelectorAll('.book-item');
    
    if (filterButtons.length === 0) return; // Not on books page
    
    // Initialize data attributes from tags if not already set
    bookItems.forEach(function(item) {
      // Set data-type from tags
      if (!item.hasAttribute('data-type')) {
        const libraryTag = item.querySelector('.book-tag-library');
        const kindleTag = item.querySelector('.book-tag-kindle');
        if (libraryTag) {
          item.setAttribute('data-type', 'library');
        } else if (kindleTag) {
          item.setAttribute('data-type', 'kindle');
        }
      }
      
      // Set data-topics from topic tags
      if (!item.hasAttribute('data-topics')) {
        const topics = [];
        if (item.querySelector('.book-tag-genai')) topics.push('genai');
        if (item.querySelector('.book-tag-xai')) topics.push('xai');
        if (item.querySelector('.book-tag-fundamentals') || item.querySelector('.book-tag-others')) topics.push('others');
        if (item.querySelector('.book-tag-recommender')) topics.push('recommender');
        if (item.querySelector('.book-tag-career')) topics.push('career');
        if (item.querySelector('.book-tag-engineering')) topics.push('engineering');
        if (item.querySelector('.book-tag-statistics')) topics.push('statistics');
        if (item.querySelector('.book-tag-ml')) topics.push('ml');
        if (topics.length > 0) {
          item.setAttribute('data-topics', topics.join(' '));
        }
      }
    });
    
    // Get current filter state
    function getActiveFilters() {
      const filters = {
        status: 'all',
        type: 'all',
        topic: 'all'
      };
      
      filterButtons.forEach(function(btn) {
        if (btn.classList.contains('active')) {
          const filterType = btn.getAttribute('data-filter');
          const filterValue = btn.getAttribute('data-value');
          if (filterType && filterValue) {
            filters[filterType] = filterValue;
          }
        }
      });
      
      return filters;
    }
    
    // Filter books
    function filterBooks() {
      const filters = getActiveFilters();
      
      bookBelts.forEach(function(belt) {
        const beltStatus = belt.getAttribute('data-status');
        let beltVisible = false;
        
        // Check if belt matches status filter
        if (filters.status === 'all' || beltStatus === filters.status) {
          beltVisible = true;
        }
        
        // Check items within belt
        const items = belt.querySelectorAll('.book-item');
        let hasVisibleItems = false;
        
        items.forEach(function(item) {
          let itemVisible = true;
          
          // Check type filter
          if (filters.type !== 'all') {
            const itemType = item.getAttribute('data-type');
            if (itemType !== filters.type) {
              itemVisible = false;
            }
          }
          
          // Check topic filter
          if (filters.topic !== 'all') {
            const itemTopics = item.getAttribute('data-topics');
            if (!itemTopics || !itemTopics.split(' ').includes(filters.topic)) {
              itemVisible = false;
            }
          }
          
          // Show/hide item
          if (itemVisible) {
            item.style.display = '';
            hasVisibleItems = true;
          } else {
            item.style.display = 'none';
          }
        });
        
        // Show/hide belt (and section header)
        if (beltVisible && hasVisibleItems) {
          belt.style.display = '';
          // Show section header (h3 before the belt)
          const header = belt.previousElementSibling;
          if (header && header.tagName === 'H3') {
            header.style.display = '';
          }
        } else {
          belt.style.display = 'none';
          // Hide section header if belt is hidden
          const header = belt.previousElementSibling;
          if (header && header.tagName === 'H3') {
            header.style.display = 'none';
          }
        }
      });
    }
    
    // Handle filter button clicks
    filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const filterType = this.getAttribute('data-filter');
        const filterValue = this.getAttribute('data-value');
        
        // Deactivate all buttons in the same filter group
        const filterGroup = this.closest('.filter-group');
        if (filterGroup) {
          filterGroup.querySelectorAll('.filter-btn').forEach(function(b) {
            b.classList.remove('active');
          });
        }
        
        // Activate clicked button
        this.classList.add('active');
        
        // Apply filters
        filterBooks();
      });
    });
    
    // Initial filter application
    filterBooks();
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBookFilters);
  } else {
    initBookFilters();
  }
})();
