# _Vacation Suggester_


#### _Vacation Suggester Website, {03.05.2018}_

#### By _**Isabella Vanillo**_

## Description

_This webpage demonstrates the use of html, git, bootstrap, javascript, and css._

## Setup/Installation Requirements

* _Clone this repository_
* _Open a simple HTTP server in the top level of the cloned directory. For a mac, run the following command in your terminal:_
* _cd vacation-suggester_
* _atom ._
* _Then open your web browser of choice to index.html_

## Known Bugs

_No known bugs_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns, please contact me at bellavanillo@gmail.com. Or feel free to make a contribution to the code._

## Technologies Used

_html, bootstrap, git, css, javascript_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2016 **_Isabella Vanillo_**

















<!DOCTYPE html>
<html>
  <head>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/styles.css" rel="stylesheet" type="text/css">
    <script src="js/jquery-3.2.1.js"></script>
    <script src="js/scripts.js"></script>
    <title>Vacation Suggester</title>
  </head>
  <body>
    <div class="container">
      <h1>Which Vacation Spot is Right For You?</h1>
      <h3>Take the quiz to find out now!</h3>
      <div class="well">
        <form class="survey">
          <ol>
            <div class="q1">
              <li>Which type of weather do you prefer?</li>
              <input type="radio" name="weather" value="hot"> hot<br>
              <input type="radio" name="weather" value="cold"> cold<br>
              <input type="radio" name="weather" value="mild"> mild
            </div>
            <div class="q2">
              <li>What kind of environment do you want to be in?</li>
              <input type="radio" name="environment" value="bigcity"> big city<br>
              <input type="radio" name="environment" value="rural"> rural<br>
              <input type="radio" name="environment" value="beach"> beach
            </div>
            <div class="q3">
              <li>Do you want to travel out of the country?</li>
              <input type="radio" name="international" value="yes"> yes<br>
              <input type="radio" name="international" value="no"> no<br>
            </div>
            <div class="q4">
              <li>Do you want to relax or go on excursions?</li>
              <input type="radio" name="activites" value="excusrions"> excursions<br>
              <input type="radio" name="activites" value="relax"> relax<br>
              <input type="radio" name="activites" value="both"> both
            </div>
            <div class="q5">
              <li>Pick the ones that looks the best:</li>
              <input type="radio" name="food" value="ice"> <img src="img/icel.jpg" alt="smoked salmon on rye bread"> <img src="img/iced.jpg" alt="pastries"> <img src="img/stew.jpg" alt="stew"><br>
              <input type="radio" name="food" value="rio"> <img src="img/prawn.jpg" alt="prawn soup"> <img src="img/riof.jpg" alt="spices"> <img src="img/rioflan.jpg" alt="flan"><br>
              <input type="radio" name="food" value="sb">  <img src="img/burger.jpg" alt="burger"> <img src="img/burrito.jpg" alt="burrito"> <img src="img/icecream.jpg" alt="icecream"><br>
            </div>
            <button type="button" class="btn btn-success" name="button">Get my results!</button>
          </form>
        </ol>
      </div>
      <div class="results">
        <div class="Iceland">
          <h2>You should visit Iceland!</h2>
          <p>Cold weather, northern lights, many outdoor activities, and beautiful sites to see.</p>
          <img src="img/iceland.jpg" alt="Iceland">
        </div>
        <div class="Riodejaneiro">
          <h2>You should visit Rio De Janeiro!</h2>
          <p>Big city sites, beautiful beaches, and culture everywhere.</p>
          <img src="img/rio.jpg" alt="Rio De Janeiro">
        </div>
        <div class="Santabarbara">
          <h2>You should visit Santa Barbara!</h2>
          <p>Beaches, mild weather, and relaxing activites.</p>
          <img src="img/santab.jpg" alt="Santa Barbara">
        </div>
      </div>
    </div>
  </body>
</html>
