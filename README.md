# MERN Note List Application Development Report

In this project, I developed a simple note list application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The goal was to create a maintainable, reusable, testable, flexible, and efficient application that allows users to add, view, and delete items from a to-do list

### Link to deployed website
(https://my-note-app-38wr.onrender.com/)

<img width="1638" alt="image" src="https://github.com/niecey0123/my-note-app/assets/47402849/67d2b4af-e992-4dde-8d1c-0ec5ec51f1f8">


# Approach to Application Development

## Planning: 
Before starting the development process, I outlined the basic features and functionalities of the application. This included user stories, wireframes, and database schema design.
Setting Up the Project: I initialized a new MERN stack project using create-react-app for the frontend and set up a basic Express.js server for the backend. MongoDB was chosen as the database to store to-do list data.
## Backend Development:
I implemented the backend logic using Express.js and Node.js. This included setting up routes for handling CRUD operations (Create, Read, Update, Delete) for to-do list items.
Database Integration: I connected the Express.js server to the MongoDB database using the Mongoose ODM (Object Data Modeling). This allowed seamless interaction with the database to store and retrieve to-do list data.
## Frontend Development:
I implemented the frontend features using React.js. This included creating components for adding, viewing, and deleting to-do list items. I utilized React hooks such as useState and useEffect for managing state and side effects.
## Styling:
I used CSS for styling the frontend components to ensure a visually appealing user interface. 


# Software Engineering Principles Applied

## Modularity: 
I organized the codebase into separate modules and components to promote reusability and maintainability. Each component focused on a specific task, making it easier to understand and update in the future.
Separation of Concerns: I separated the frontend and backend logic to ensure clear separation of concerns. The frontend handled user interface interactions, while the backend handled data processing and storage.
## Scalability: 
I designed the application architecture with scalability in mind, allowing for easy scaling of both frontend and backend components as the user base grows. This involved using technologies like MongoDB Atlas for cloud-based database hosting and deploying the application on scalable cloud platforms.
## Code Documentation: 
I thoroughly documented the codebase using comments and README files to provide clear instructions and explanations for other developers who may work on the project in the future.

# `Challenges Faced

## Asynchronous Operations:
Managing asynchronous operations in both frontend and backend code was challenging, especially when handling database operations and API requests. I addressed this by using asynchronous programming techniques like Promises and async/await.
## State Management: 
Managing state in a complex React.js application posed some challenges, especially when dealing with multiple components and shared state. I mitigated this by using state management libraries like Redux or context API for more complex state management scenarios.
## Deployment Configuration: 
Configuring the deployment environment and ensuring compatibility with different hosting platforms required some experimentation and troubleshooting. I overcame this challenge by carefully following deployment guides and seeking assistance from online communities.


