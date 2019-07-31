Small pet project for front-end position at Drawbotics. 

Heroku link: https://react-groceries-drawbotics.herokuapp.com/

The app use React, React-bootstrap, and was made with create-react-app. It also uses hooks to handle state.

The components which use hooks are List.js, ButtonModal.js and Input.js. Those components contains more documentation in the source code if needed.

A small express server is used for deployment.


## Launch the app locally

yarn build to build the app, then yarn start to launch the app on port 8080.


## Differences with vanilla JS version

This version doesn't use Firebase but localStorage to store the items and lists.

Due to lack of time, this version is much simpler than the original. There is no multi-user authentication for example, even though there is a login page to mimic it. There is also no 'All' list, but you can still add lists and items (but not delete it, as you could in previous version).

The input use onBlur, so you can add a new item in the list just by clicking outside the input (after having entered an item name). To save a new list, open the modal (by clicking on the '+' button), enter the new list name and click on the 'Save' button.


## Structure

The main file (app.js) creates some data in the localStorage and handle the layout of the app. The components are divided in 4 folders:


### `Layout`

This folder defines the layout of the app. There are 3 components : Layout, Header and Footer.


### `Routes`

This folder contains the differents routes of the app. There are two different routes: Login and List. Note that The login route is just a mock-up and not fully functionnal due to time restrictions. The lists component handles much of the features of the app. You can check the code for more documentation about the list component.


### `components`

Contains the components related to the logic of the app. There are two components: Item (which, as the name implies, handles the different items of the app), and buttonModal (which handles the creation of new lists through a modal).


### `Utils`

Contains the generic components. It contains ButtonCompleted (which handles the 'completed' button to show or hide the completed items), ButtonLink (which redirect to different routes when clicked), Input (the input elements, for the names of lists and items) and Dropdown (which display the different list in the localStorage).
