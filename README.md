# Unit #3 Project: Final Project - Rebecca Kimball

*** When searching, the DOM manipulation takes a little bit to change and load due to the amount of information being loaded onto the page.

### 3 Technical Hurdles
1. Originally started out wanting to utilize a music API but had difficulty finding one that would allow me to pull the data, as well as pull more data than just a few different pieces of information which wouldnt give me a whole lot for my SPA.

2. I didnt realize after building and designing out some of my SPA that it had a limit on how many times you can pull the API per day, which of course really limited how many times I could test my data a day. I had to work with the data and ensure that either I would use test data or when making css changes, I would inspect my page in the web and change the styling there to see how it looked in real time before utilizing in my css page, in order to not refresh my SPA so many times.

3. When I finally got the data to pull, I wanted to ensure each piece of information for each tv show or movie was grouped together with its photo and was listed in block style. However, I struggled, using DOM manipulation in my js file, to get all the information per tv show or movie to be grouped together. I had the general idea down but the way I had it coded was causing all the information to be just dropped in the main content section of my SPA, rather than creating a div element per item/tv show or movie and appending each piece of information to the div element, in order to group each section of information together. I also using the flexbox css layout so that the list of tv shows or movies could be listed evenly apart and down the webpage in a neat and orderly fashion. This particular layout was suggested to me by the class instructor. Thank you!

4. The CSS manipulation when clicking the like and dislike buttons were also a struggle. I was able to get the background colors to change the icons were clicked but not the actual icon. I researched a few different ways, but ultimately was unable to get it to work any other way and decided to be happy with getting at least the background color to change. If more time was available, I would have figured out a way for the icon to change back to black if the user clicks on the icon again, but was unsuccessful at this time. These are a few improvements I will work on for the future to enhance my site's functionality. But overall, I am pretty happy with what I have created.
---

### 2 New Things I Learned
1. I learned about the CSS flexbox layout, which focuses on different possible properties for the parent element, also known as the flex container, and the child elements, also known as the flex items. This layout was super helpful in ensuring my list was laid out and space evenly in an orderly fashion. It also ensured the same margin, padding, font-size, etc, was applied to every item to create a cohesive look to my list.

2. I learned that I can display multiple html and css elements together utilizing DOM manipulation in my js file. Coming from a big background of html and css, I have always known how code those elements in my html and css files, but I have learned how I can manipulation those files to display real time data or data from other API's and change it for the user, providing a less complex html and css file with an infinite amount of lines of code, hopefully causing less human error in my code.
---
### About my SPA

I built and designed a single page web application utilizing a few different APIs from IMDb, showcasing the current top 100 tv shows and some details about each one. I also implemented a search bar and dropdown, as well as a search button, so that users on my web application can search for their favorite tv show or movie or search for a tv show or movie containing a word or words in the title, a year the tv show or movie was made or released, or a rating the tv show or movie received by IMDb. Using DOM manipulation and JavaScript functions, I implemented a feature where a user can like or dislike each tv show or movie and also made sure the title at the top of the page displays the proper wording based on the search made.

Please feel free to explore my SPA a little more through this link: https://github.com/rekimball/final_project.

Thank you for taking the time to go on an adventure with me through my SPA.

---
### Useful Resources
www.w3schools.com- used many different pages to implement different elements/code into my project correctly 
www.stackoverflow.com
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---
### Overview

For the final project, you'll be designing and building a web app of your choice. This project will test your knowledge of JavaScript and ask you to apply everything you've learned in this course. The result will be a web app that you can add to your portfolio. You could create anything from: a blog users can comment on; an app that allows users to search for social media posts; or even an application that logs users geolocations. Work with your instructor to create project goals that are realistic given the scope and timing of the class.

---
### Technical Requirements

-Use JavaScript to correctly structure the code for a web application:
    -Structure your application to be a SPA (single page application)
    -Make at least one HTTP request to a third-party server
    -Use either vanilla JS or jQuery to perform DOM manipulation
    -Listen for events and add interactivity based on user input

-Hosting
    -App must be hosted on either GitHub Pages or Heroku

---
#### Bonus/Best Practices

1. Make HTTP requests to your own Firebase URL
2. CRUD functionality should be present
3. Clean And Readable Code. The instructor should be able to read and follow your code easily. Maintain clean and readable code including: consistent indentation, code commenting and use of proper and consistent naming conventions.
4. Object Oriented and/or Functional. Implement function closures, keep code modular, maintain a separation of concerns, only put code on the global scope when absolutely necessary, use prototypical inheritance.

---
### SPA Architecture

Single Page Applications (SPA) are all the rage today. The single page aspect of a SPA refers to a single page coming from the server, such as our index.html page. Once loaded, the SPA changes views by using client-side routing, which loads partial HTML snippets called templates. Think back to our Advanced APIs lesson where we showed specific views based off the login state of a user. The goal for you implementing a SPA is to not make users have to refresh the entire DOM every time they need a new piece of data to be represented in the UI.

---
### Necessary Deliverables
-A production ready web application, SPA, hosted live on the web.
-A new git repository hosted on Github where codebase is maintained.
-A 5-10 minute presentation including 3 technical hurdles, 2 new things you learned, Q&A.

---
### Suggested Ways to Get Started

-Think of a problem in the world, or even in your personal life, and apply what you've learned to build an application that can help solve the issue.
-Research different social media APIs (i.e. twitter) and see what kind of information you can use from them.
-Look at different online video games for inspiration.

---
### Project Feedback + Evaluation

-Technical Requirements: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

-Creativity: Did you added a personal spin or creative element into your project submission?

-Code Quality: Did you follow code style guidance and best practices covered in class, such as tab indentation, DRYness, and semantic naming? Did you comment your code?

-Problem Solving: Are you able to defend why you implemented your solution in a certain way?

-Total: Your instructor will give you a total score on your project between:

Score	Expectations
0	    Does not meet expectations.
1	    Meets expectactions, good job!
2	    Exceeds expectations, you wonderful creature, you!