# Moiroi

![Responsive website](https://github.com/benjaminong97/tgc18-project2-react/blob/main/project_2/public/mockup.PNG)

The live demo of the React frontend web application can be accessed [here](https://moiroi.netlify.app/).

The backend API implementation can be accessed [here](https://github.com/benjaminong97/tgc18-project2-express).

## Project Summary

### Project Context

Moiroi is a mobile responsive web application that allows users to find and share outfits by implementing CRUD (Create, Read, Update, Delete).

Anyone can make use of the platform by sharing their OOTDs (outfits of the day) or their favourite outfits. People who are stuck trying to find an outfit to wear for their next date, or just to go out can find outfits for every occasion. Moiroi has a search functionality which allows users to filter and search for outfits by name, price, categories, and tags. 

It is developed using the MERN (MongoDB, ExpressJS, React, NodeJS) stack.

### Target Audience

It is targeted at people who wish to share their favourite outfits or people who wish to get an idea of what to wear next. 


### Justification for the App

Currently, people typically share their outfits on various platforms of social media such as instagram or facebook. However, the issue in using a more general purpose social media is that their search functionality is more limited. For example, a student on a budget may wish to find entire outfits for less than a certain price. Such a user would be aided greatly by Moiroi due to its search functionality. In addition, Moiroi provides most relevant fields for users to create an outfit, a user can easily identify the components making up the entire outfit within the app.

## UX / UI

### Strategy

#### Organisation Goal

This web application serves as a platform to connect users seeking fashion ideas and ideas with people or influencers who wish to share their style. 

#### User Goals

| User Story | Acceptance Criteria |
| ----------- | ----------- |
| Someone wishes to share his outfit | He wants to be able to create an outfit on the web application |
| An outfit owner has entered the wrong details for his outfit | He wants to be able to edit the outfit listing so that the information is up-to-date and accurate |
| Someone wishes to find an outfit appropriate for a certain occasion (such as a beach day) or an outfit within a certain budget | Search bar to filter outfit listing based on tags or price |
| An outfit owner no longer wishes to share his outfit | He wants to be able to delete the outfit listing |

### Scope

#### Functional Requirements

- Browse all the outfit listings
- Search and filter outfit listings based on certain criterias
- View details of outfit listing
- Create outfit listing
- Edit outfit listing
- Delete outfit listing

#### Non-functional Requirements

- Performance criteria
- Mobile responsiveness

### Structure

All main pages of the web application can be accessed via the navigation bar. Outfit cards can be clicked to reveal more details. Update and Delete functions are accessed via the "My Contributions" page. 

### Surface

**Colours**: Light beige is used as background to keep the website aesthetic clean.

**Fonts**: Josefin Sans is used as it gives off an artsy and clean aesthetic.

## Features

| Feature | Description |
| ----------- | ----------- |
| Dynamic search and filter | The results are displayed instantaneously as the users search and filter dog listings by different criterias. |
| View full details of dog listings | User can click on each card and it will expand out to a modal that displays all the details of the dog. |
| Create new dog listing | A form with validation to enter required information to create a dog listing in the database |
| Edit dog listing | A form with validation to edit changes so that the information is up-to-date and accurate   |
| Delete dog listing | Allows current dog owners to delete their dog listings from the database after their dogs are adopted. |

## Limitations & Future Implementations

| Limitation | Future Implementation |
| ----------- | ----------- |
| Users are unable to add their own tags for filtering | Update creation and update pages to allow tags to be added to the database and retrieved when users wish to search for them |
| Other users can edit or delete any outfit listing | Implement user authentication such that only the creator of the outfit can edit and delete his own listing |
| Browse page will become longer as more listings are created | Implement pagination to limit the number of outfit listings per page |

## Technologies Used

### Frontend Framework

1. HTML5
2. CSS3
3. Javascript
4. [React](https://reactjs.org/) for frontend framework
5. [React Bootstrap](https://react-bootstrap.github.io/) for styling website
6. [Boostrap 5](https://getbootstrap.com/) for icons
7. [Axios](https://github.com/axios/axios) to communicate with ExpressJS server for CRUD (Create, Read, Update, Delete) in database


### Backend Framework

1. [ExpressJS](https://expressjs.com/) & [NodeJS](https://nodejs.org/en/) - minimalist web application framework to help manage servers and routes
2. [MongoDB & MongoDB Atlas](https://www.mongodb.com/) - manage document-oriented information, store or retrieve information
3. [Heroku](https://id.heroku.com/login) - cloud platform server for API
4. [Yup](https://github.com/jquense/yup) - library for validation

## Testing

Detailed test cases for the web application can be found [here](<url>).

## Deployment

The web application is hosted using [Netlify](https://www.netlify.com/), deployed directly from the main branch of this GitHub repository. For the detailed deployment steps, you may refer [here](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

## Credits & Acknowledgement

- [Canva](https://www.canva.com/) for the brand logo
- [Google Fonts](https://fonts.google.com/) for the font
- [StackOverflow](https://stackoverflow.com/) for RegEx in form validation
- [CreateMockup.com](https://www.createmockup.com/generate/) to generate responsive website mockup for README file
