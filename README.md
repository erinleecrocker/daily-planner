# daily-planner

![Screen Shot 2020-09-18 at 11 09 22 AM](https://user-images.githubusercontent.com/69767328/93613902-7538e280-f99f-11ea-8571-dcb0fc487ca6.png)

The goal of this project is to create a simple calendar application that runs in the browser, and allows the user to save events for each hour of the work day. When the planner is opened the current date can be viewed at the top of the calandar and below are timeblocks for the 9-5 standard buisness hours. Each timeblock is color-coded according to past, present, and future hours.  The user is able to input text for that event and when they click save,  it is saved in the local storage so their entry will persist even when the page is refreshed

I used the html, css, javascript (jquery, and moment.js) to accomplish this project.

When i started this project, I first put all my elements in the HTML document, however this created a problem. While still possible I would have many repeating elements in my code so I looked for a cleaner option.  I decided to make an array of objects that contained all the information for my time blocks. I used a for loop to itterate through this array to create elements, add their context, and append them to the container in my html document.

<img width="590" alt="Screen Shot 2020-09-12 at 11 19 51 PM" src="https://user-images.githubusercontent.com/69767328/93009631-4a8afc00-f551-11ea-83a1-c4b1102bbcd5.png">

after this all I needed was a way to identify which buttons were being clicked when I added my evemtListener to the submit button. I had a difficult time figuring this out until I added an ID key and corresponding value to the object containing my information. 

<img width="234" alt="Screen Shot 2020-09-12 at 11 37 23 PM" src="https://user-images.githubusercontent.com/69767328/93009652-92118800-f551-11ea-96a1-9e691201cc35.png">

<img width="581" alt="Screen Shot 2020-09-12 at 11 20 18 PM" src="https://user-images.githubusercontent.com/69767328/93009646-7efeb800-f551-11ea-953f-200fe423a518.png">

From there I used JSON.stringify to store the array of objects in the browser, and JSON.parse to return it to the array to object form and use it to update the information being displayed. 

The color coded times are based on military time so i was able to use the current time (given by moment.js) and create an if then statment for = to current time < current time or > current time. 

oh and of corse the current time used at the top was formated from moment.js documentation to show the day of the week, month, day of the month, and year.
