// Fetch albums data from the backend json file
fetch('/api/albums')
  .then(response => response.json())
  .then(data => {//Create a dynamic html content
    // Get the container where albums will be displayed
    const albumsContainer = document.querySelector('.albums');

    // Get the audio player tag
    const audioPlayer = document.getElementById('audioPlayer');

    // Loop through each album in the fetched data
    data.forEach(album => {
      // Create the HTML structure for each album item
      const albumItem = document.createElement('div');
      albumItem.classList.add('item');//Called item div

      // Add the album image
      const albumImage = document.createElement('img');
      albumImage.src = album.image;
      albumImage.alt = album.title;

      // Add album description div for html
      const descriptionDiv = document.createElement('div');
      descriptionDiv.classList.add('description');
      const albumTitle = document.createElement('h1');
      albumTitle.textContent = album.title;
      const albumYear = document.createElement('p');
      albumYear.textContent = album.year;

      // Append album title and year to the description section
      descriptionDiv.appendChild(albumTitle);
      descriptionDiv.appendChild(albumYear);

      // Create the album dropdown div for description and songs
      const albumDropdown = document.createElement('div');
      albumDropdown.classList.add('album-dropdown');

      // Create album description div
      const albumDescription = document.createElement('div');
      albumDescription.classList.add('album_description');
      albumDescription.textContent = `${album.description}`;
      //Create song title div
      const songsTitle = document.createElement('div');
      songsTitle.textContent = '';
      const songsList = document.createElement('ul');

      // Loop through each song and create list items
      album.songs.forEach(song => {
        const songItem = document.createElement('li');
        songItem.textContent = `${song.title} - ${song.duration}`;
        songsList.appendChild(songItem);
      });

      // Append everything to the dropdown
      albumDropdown.appendChild(albumDescription);
      albumDropdown.appendChild(songsTitle);
      albumDropdown.appendChild(songsList);

      // Append the image, description, and dropdown to the album item
      albumItem.appendChild(albumImage);
      albumItem.appendChild(descriptionDiv);
      albumItem.appendChild(albumDropdown);

      // Add hover event listeners to play/pause preview song
      albumItem.addEventListener('mouseenter', () => {//play the music when it hovers
        audioPlayer.src = album.songPreview;
        audioPlayer.play();
      });
      //pause the music when the mouse leave the content
      albumItem.addEventListener('mouseleave', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Reset to the beginning
      });

      //Append the album item to the albums container
      albumsContainer.appendChild(albumItem);

      // Add event listener for toggling the dropdown description
      albumItem.addEventListener('click', () => {
        const dropdown = albumItem.querySelector('.album-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      });
    });
  })
  .catch(error => {
    console.error('Error fetching albums:', error);
  });
  //Fetch the databse from compilation json
  fetch('/api/compilations')
  .then(response => response.json())
  .then(compilations => {
    // Get the section where the compilations will be displayed
    const compilationsSection = document.querySelector('.compilations');

    // Get the audio player element tag
    const audioPlayer = document.getElementById('audioPlayer');

    // Loop through the compilations data
    compilations.forEach(compilation => {
      // Create the main container div
      const compDiv = document.createElement('div');
      compDiv.classList.add('comp');

      // Added the image of the album
      const compImg = document.createElement('img');
      compImg.src = compilation.image;
      compImg.alt = `${compilation.title} cover`;
      compDiv.appendChild(compImg);

      // Added the title of the album
      const compTitle = document.createElement('h1');
      compTitle.textContent = compilation.title;
      compDiv.appendChild(compTitle);

      // Added the year of the album
      const compYear = document.createElement('p');
      compYear.textContent = compilation.year;
      compDiv.appendChild(compYear);

      // Added the description of the album
      const compDescription = document.createElement('p');
      compDescription.textContent = compilation.description;
      compDiv.appendChild(compDescription);

      // Added hover event listeners
      compDiv.addEventListener('mouseenter', () => {
        audioPlayer.src = compilation.songPreview;
        audioPlayer.play();
      });
      //When mouse leaves it will paus the music
      compDiv.addEventListener('mouseleave', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Reset to the beginning
      });

      // Append the compilation to the section
      compilationsSection.appendChild(compDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching compilations:', error);
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Select all .NAT elements
    const NATElements = document.querySelectorAll('.NAT');

    NATElements.forEach(NAT => {
        // Get the audio element inside each .NAT
        const audio = NAT.querySelector('audio');

        // Add event listeners for hover
        NAT.addEventListener('mouseenter', () => {
            audio.currentTime = 0; // Reset to the start
            audio.play(); // Play the audio
        });

        NAT.addEventListener('mouseleave', () => {
            audio.pause(); // Pause the audio
            audio.currentTime = 0; // Reset to the start
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Select the product link
  var productLink = document.querySelector('.scroll-link');

  // Add a click event listener
  productLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the section
      var targetSection = document.getElementById('albums');

      // Scroll to the section smoothly
      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Select the product link
  var productLink = document.querySelector('.scroll-link2');

  // Add a click event listener
  productLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the section
      var targetSection = document.getElementById('compilations');

      // Scroll to the section smoothly
      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Select the product link
  var productLink = document.querySelector('.scroll-link3');

  // Add a click event listener
  productLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the section
      var targetSection = document.getElementById('banner');

      // Scroll to the section smoothly
      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  });
});





