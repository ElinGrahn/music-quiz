# Do you know modern music culture?

The purpose of this game is to test the players knowledge about moments and songs in the modern music culture. With platforms like tiktok and instagram, viral and well known moments are shared in a completely different way than it was before. You don't have to be a fan or even know an artist to keep up with everything that happens in the musical world, that information will be brought to you. Therfore it would be fun to test how aware people are.

![Am I Responsive](screenshots/pp2_amIResponsive.png)

The live website: [Music Quiz](https://elingrahn.github.io/music-quiz/)

## User stories

* As a visiting user I want to play a quiz game
* As a visiting user I want to have options to choose from
* As a visiting user I want it to be easy to move on to the next question
* As a visiting user I want to see how many questions I have done and how many I have left
* As a visiting user I want to know which answer is correct
* As a visiting user I want to see my score at the end
* As a visiting user I want to be able to try the quiz again

## Features

### Start page

A small introduction to the game and what the visitor can expect
![Start page](screenshots/pp2_startPage.png)

### Buttons

There is a start button and a restart button

![Start button](screenshots/pp2_startBtn.png)
![Restart button](screenshots/pp2_restartBtn.png)

### The options

You can press the option you think is right and it will turn red or green depending on if the answer is correct or not
![Wrong option](screenshots/pp2_wrong.png)
![correct option](screenshots/pp2_right.png)

### Score

At the end of the game you will be able to see your score
![Score](screenshots/pp2_score.png)

## Typography and color scheeme

I wanted the game to have a youthful feel, since it is about the modern day music culture. The font family is Kalam from [Google fonts](https://fonts.google.com/).
The colors are in a soft neutral palette. I chose the colors from [Color hex](www.color-hex.com) and [HTML color codes](htmlcolorcodes.com)
![Color palette](screenshots/pp2_colorPalette.png)

## Future features

In the future I would like to add some more styling like images or questions where the user will hear a snippet of a song and then has to guess what it is.

I would also like to make the page more interactive by having a sign up page or a form where the user can send feedback.

## Technology

* HTML
  * For  the structure
* CSS
  * For styling
* JavaScript
  * For the interaction
* Codeanywhere
  * For writing and editing the code
* Github
  * To store all the files and changes made

## Testing

### Code Validation

The code has been validated and found no errors by using these validators:

* W3C Markup Validator
  * Validation of the HTML
* Jigsaw (Validator)
  * Validation of the CSS
* JSHint
  * Validation of the JavaScript

Testing accessability using Lighthouse
![Lighthouse](screenshots/pp2_accessability.png)

### Fixed bugs

* Random Questions
  * I knew I was supposed to use the math object but there seem to be many different ways to use it. In the end by following W3schools code I got there.
* Restarting the game
  * The game went back to the last question asked instead of really starting over, so I realised I had to set the number index to 0 again as well as the score.
* Getting the correct answer to show up.
  * When the correct answer was clicked it did not turn green. By creating a new global variable, correctAnswer, and setting it to null so later I could set it to answer.text and then use it in the funtion selectAnswer where the variable correct would have the value of correctAnswer. And if correct is true it the answer button now turns green.

### Supported screens and browsers

The project has been made using Microsoft Edge and has been tested and used on safari and samsung.

## Deployment

### Github

The website was pushed from Codeanywhere workspace to a Github repository

### Github Pages

The website was deployed to GitHub pages using the following steps:

Selecting the settings in your chosen repository

Scroll down and select main as your source

This will give you a deployed link

Here is the link to the live website: [Github repository](https://elingrahn.github.io/music-quiz/)

## Credits

### Content

* [Web Dev Sipmpified](https://www.youtube.com/watch?v=riDzcEQbX6k) and
[GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=863s) youtube videos to help me get started on the project.

* [W3schools](https://www.w3schools.com/) to help me with the randomization of the questions array

* For the [DOMcontentloaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

* Code Institute [JavaScript Essentials](https://codeinstitute.net/se/)

* Mentor Rohit Sharma for feedback

### Media

* [Favicon](https://favicon.io/emoji-favicons/musical-notes)

* Picture of the color palette from [coolors](https://coolors.co/ffd2c6-dbc1ac-fff4e6-f0f8ff-d1e3dd)
