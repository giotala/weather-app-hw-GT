
    
  
    var cities = [];
    
    // Function for dumping the JSON content for each button into the div
    function displayWeatherInfo() {
        
        var APIKey = "166a433c57516f51dfab1f7edaed8413";
        var city = $(this).attr("data-name");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
       
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#city-info").text(JSON.stringify(response)); //done where city info
          // Creating a div to hold the weather
          var weatherDiv = $("<div class='city'>");
          $(".wind").text("Wind Speed: " + response.wind.speed);
          // Storing the rating data
          var cityCity = response.name;

          // Creating an element to have the rating displayed
          var pOne = $("<p>").text(city + cityCity);

          // Displaying the rating
          weatherDiv.append(pOne);

          // Storing the release year
        //   var released = response.Released;

        //   // Creating an element to hold the release year
        //   var pTwo = $("<p>").text("Released: " + released);

        //   // Displaying the release year
        //   movieDiv.append(pTwo);

        //   // Storing the plot
        //   var plot = response.Plot;

        //   // Creating an element to hold the plot
        //   var pThree = $("<p>").text("Plot: " + plot);

        //   // Appending the plot
        //   movieDiv.append(pThree);

        //   // Retrieving the URL for the image
        //   var imgURL = response.Poster;

        //   // Creating an element to hold the image
        //   var image = $("<img>").attr("src", imgURL);

        //   // Appending the image
        //   movieDiv.append(image);

        //   // Putting the entire movie above the previous movies
        //   $("#movies-view").prepend(weatherDiv);
        });

      }

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("movie-btn");
          // Adding a data-attribute
          a.attr("data-name", movies[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the buttons prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#city-drop").empty();

        // Looping through the array of movies
        for (var i = 0; i < cities.length; i++) {

          // Then dynamically generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("city");
          // Adding a data-attribute
          a.attr("data-name", cities[i]);
          // Providing the initial button text
          a.text(cities[i]);
          // Adding the button to the buttons-view div
          $("#city-drop").prepend(a);
        }
      }

      // This function handles events where one button is clicked
      $("#run-search").on("click", function(event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var city = $("#search-city").val().trim();

        // Adding the movie from the textbox to our array
        cities.push(city);
        console.log(cities);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Function for displaying the movie info
      // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
      $(document).on("click", ".city", displayWeatherInfo);

      // Calling the renderButtons function to display the initial buttons
      renderButtons();
  
  