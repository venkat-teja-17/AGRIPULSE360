document.addEventListener('DOMContentLoaded', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  
  gridItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.querySelector('p')?.textContent || item.querySelector('a')?.textContent;
      if (text) {
        switch(text.trim()) {
          case 'Crop Management':
            // Navigate to crop management page
            break;
          case 'Crop Recommendation':
            // Navigate to crop recommendation page
            break;
          case 'Soil Health Analysis':
            // Navigate to soil health analysis page
            break;
          case 'Water Management':
            window.location.href = 'water-management.html';
            break;
          case 'Schemes and Subsidies':
            window.location.href = 'schemes.html';
            break;
          // Add more cases for other grid items
        }
      }
    });
  });

  // Footer button interactions
  const footerButtons = document.querySelectorAll('.animated-btn');
  footerButtons.forEach(button => {
    button.addEventListener('click', () => {
      switch(button.textContent) {
        case 'Home':
          window.location.href = 'dashboard.html';
          break;
        case 'Search':
          // Implement search functionality
          break;
        case 'Notifications':
          // Implement notifications
          break;
        case 'Profile':
          window.location.href = 'profile.html';
          break;
      }
    });
  });
});
