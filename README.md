# PLANr
## Elevator Pitch
We all have too much to do an just not enough time. Thankfully technology has offered us the opportunity to accurately plan out our day to day. Just one small problem though, and that is the planners themselves. Planning is a very quick process that involves many decisions initially and many small adjustments as time passes, so why are so many planning applications so clunky and slow? That is where PLANr comes in. A simplistic planning app that aims to convey what you already had in mind and does it quickly and easily. Just add in the plan you have for your day event by event, shift it around as you please, and then execute your plan.

## Design
![Design Image](PLANrLayout.png)

## Key Features
- Secure login over HTTPS
- Ability to easily navigate between days
- Display of your current day's plan, the weather, up and coming events and to do items you have yet to plan
- Ability to easily resize and adjust each plan within the day, allowing for quick adaptability
- See where you are in your day in real time
- Ability to customize your event's color, time, and catagory easily
- See the weather to help plan more effectively for your day

## Technologies
I am going to use the required technologies in these ways.
- **HTML**: One HTML page for the application and one to log in. 
- **CSS**: General styling that allows for ease of use on different screen sizes. Simple yet contrasting colors for the utility so that users have the greatest freedom in how their own schedule looks with their own selected color schemes.
- **React**: There will be many UI elements because of the inherent customizability and interactivity between the user and their own plans, and react will help with all these aspects in helping provide a smooth experience for the user.
- **Service**: Live updating weather forcast so that the user will be able to plan accordingly. Endpoints for login as well.
- **DB/Login**: Register and log in users, securly store credentials in a database. 
- **WebSocket**: The time within the day as well as the current date will be displayed on the main page. If development time permits, additionally users will be able to see a breakdown of how they usually spend their time, which will use their data to display pie charts.

## Startup HTML
I deployed the Simon HTML to my production enviroment, and I added...
- My GitHub startup repository to the application's home page
- HTML pages for each component of my application
- Links between all the pages
- A little textual content
- A placeholder image for the icon
- A login placeholder and user name display
- And placeholders for database and WebSocket data

## Startup CSS
I deployed the Simon CSS to my production enviroment, and I added...
- CSS header, footer, and main content style
- CSS navigation elements in the form of buttons
- Responsiveness to window resizing
- CSS application elements in the form of panels
- Styled text elements through margins, spacing, and color
- CSS styled application images through margin adjustments and the usage of filters

## Startup React
I deployed the Simon React to my production enviroment, and I added...
- All of my previous code into stubbed components
- An App.jsx that includes React Routers to navigate between pages
- React components to allow for adding events into a calendar and dynamically display them in time order
- React components to make the calendar significantly easier to use and more user friendly
- React components to mock the functionality of a to do list and another section for future events
- React hooks such as useState to allow for much cleaner and less class based code, which is what I initially used
- A significant amount of formatting, styling, and development within every previous area of development
- All bundled using Vite

## Startup Service
I deployed the Simon Service to my production enviroment, and I added...
- An HTTP service using Node.js and Express
- My frontend served up using Express static middleware
- Frontend calls to a third party service for the date on the Calendar
- Frontend call to one of my service endpoints from the backend for the weather
- Backend providing an endpoint to that frontend call for the weather
<!-- end normal list -->
Other Additions:
- Handmade icon for banner to replace old temporary one
- Icon added as the favicon in the browser tab
- Name changed in browser tab as well
- Recovered from pretty much the entire website exploding while trying to debug node stuff
- Formatting adjustments, especially with the dialog box and buttons

## Startup Login
I deployed the Simon Login to my production enviroment, and I...
- Added MongoDB, which took an extremely long time
- Made it so users can create accounts, upon which that data is stored within MongoDB
- Made it so users can log in, making sure users cannot modify already existing accounts and so on with MongoDB
- Made it so the application data such as userid is stored in MongoDB (different from the _id object)
- Made it so the calendar is inaccessable unless the user logs in or creates a new account
- Made it so credentials such as the username and password are stored in MongoDB, with the password being encrypted

## Startup WebSocket
I deployed the Simon WebSocket to my production enviroment, and I...
- Made it so that my backend listens for a WebSocket connection
- Made it so the frontend makes a WebSocket connection
- Made it so data is sent over the WebSocket connection
- Got all the visible elements working, which I will list below
- By my own admission, I did not have the time due to finals to make it so the WebSocket data display
in the application interface, and I decided it would be better for my program to be more functional
and polished rather than have one extra WebSocket feature. I should get 0/20 in this reguard.
<!-- end normal list -->
Finishing Touches:
- Many adjustments to features that weren't always working to work more consistently
- Removal of at least one feature that just refused to work consistently (current date)
- Addition of panel for to do items
- To do panel functionality, including sorting by time and storing to do items separately from other panels
- Addition of panel for future events
- Future event panel functionality, including sorting by time and storing future events separately from other panels
