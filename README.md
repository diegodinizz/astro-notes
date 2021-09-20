## Astro Notes

https://astro-notes.herokuapp.com

The Astro Notes is an application built with React, Redux, Styled Components, Moment.js and hosted on GitHub Pages. The project is hosted on Heroku.

<img width="1680" alt="Screenshot 2021-09-20 at 15 34 43" src="https://user-images.githubusercontent.com/47988806/134020903-5c36926c-51aa-4107-a486-915cf87b2b2c.png">

## Description

The application allows users to create, edit and delete quick notes.

## Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

## Project structure

To get started:

```
npm install
```

## Start Server:

```
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Production:

```
npm run build
```

## Framework used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Redux](https://github.com/reduxjs/react-redux), [Styled Components](https://github.com/styled-components/styled-components) and [MomentJS](https://momentjs.com). 

## Hosted

The project is hosted on [Heroku](https://www.heroku.com/) at https://astro-notes.herokuapp.com

## Reflection

This was a weekend-long project built as a short technical exercise. The project goal included is to implement an application that allows users to add and edit notes. Each note should have its URL. Also, store persisting notes only locally.

Originally I wanted to build an application that allowed users to create new notes, list the existing ones, edit and delete notes. I started using the `create-react-app` boilerplate, then adding `Redux` to manage the state flow in the App, and `styled-components` to write actual CSS in JS code to style the components. After this, I spend time thinking and working on the store logic.

One of the main challenges I ran into was to find a better way to store the notes data. This leads me to spend a few hours working on building the Redux structure to store data. Due to project time constraints, I had to decide on a simplified design to demonstrate a better visualisation of the notes.

At the end of the day, the technologies implemented in this project are React, Redux, MomentJS, UUID, Styled Components and Heroku to deploy. I choose to use few frameworks to minimize initial setup and invest more time diving into logic technological rabbit holes. In the next iteration, with more time, I would like to implement a function to sort and filter the notes, user authentication, database to store the notes, type safety method, and possibly unit tests.
