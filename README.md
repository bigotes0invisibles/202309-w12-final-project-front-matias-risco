# VALVEPIPE

**ValvePipe** is a Single Page Application developed with **React** and **Redux** that allows you to manage a game's collection. With this application, users can perform **CRUD** operations (Create, Read, Update, Delete) on their game's collection in a simple and efficient way.

Firstly, the page was designed in **Figma** to outline all the interface styles that would be later implemented using **Styled Components** in each of the created components, always with a strong focus on **accessibility** for all users. Thus, ensuring suitable color contrast, adding alternative text to images and more.

Throughout the application development, **version control** was managed via **GIT**, following a **CI/CD** workflow in the pipeline, such as trunk-based development, overseeing all the code that was committed to the master branch using **husky** hooks, among others. For maintaining code quality practices, tools like **Eslint** and **Prettier** were utilized. **Lighthouse** was employed to monitor **accessibility**, **best practices**, **SEO**, and performance aspects.

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=bigotes0invisibles_202309-w12-final-project-front-matias-risco)](https://sonarcloud.io/summary/overall?id=bigotes0invisibles_202309-w12-final-project-front-matias-risco)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bigotes0invisibles_202309-w12-final-project-front-matias-risco&metric=alert_status)](https://sonarcloud.io/summary/overall?id=bigotes0invisibles_202309-w12-final-project-front-matias-risco)

## Features

- Browse the list of visited games.
- Add new games to the collection.
- Remove games from the collection.
- Update the information of the games.

## Technologies Used

- **TypeScript**: programming language that extends JavaScript by adding static types.

- **React**: open-source JavaScript library for building user interfaces.

- **Redux**: JavaScript library for state management in applications.

- **React Router**: library that enables navigation between different views in a React application.

- **Axios**: promise-based HTTP client for making requests to a server.

- **React Testing Library**: testing utility for React applications that allows unit and integration testing.

- **Vite**: fast build tool for modern web applications.

- **Vitest**: set of testing utilities for Vite applications.

- **Jest**: JavaScript testing framework with a focus on simplicity and ease of use.

- **MSW**: testing library enabling the interception and simulation of network requests in web applications for integration and unit testing. This helps simulate responses and conduct tests without relying on a live server.

- **Styled Components**: library that allows writing CSS styles in React components.

<br/>

<div align="center">  
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://vitejs.dev/" target="_blank"><img style="margin: 10px" src="https://vitejs.dev/logo-with-shadow.png" alt="Vite" height="50" /></a>  
<a href="https://vitest.dev/" target="_blank"><img style="margin: 10px" src="https://user-images.githubusercontent.com/11247099/145112184-a9ff6727-661c-439d-9ada-963124a281f7.png" alt="Vitest" height="50" /></a>  
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a> 
<a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>  
<a href="https://redux-toolkit.js.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux Toolkit" height="50" /></a>  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
<a href="https://styled-components.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/styled-components.png" alt="Styled Components" height="50" /></a>  
<a href="http://getbem.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bem.svg" alt="BEM" height="50" /></a>  
<a href="https://www.figma.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" /></a>  
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
<a href="https://reactrouter.com/en/main" target="_blank"><img style="margin: 10px" src="https://reactrouter.com/_brand/react-router-mark-color.png" alt="react-router-dom" height="50" /></a>  
<a href="https://reactrouter.com/en/main" target="_blank"><img style="margin: 10px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/1280px-Axios_%28computer_library%29_logo.svg.png" alt="Axios" height="20" /></a>  
</div>

## Additional Tools

- **ESLint**: static code analysis tool to identify and report problematic patterns in JavaScript code.

- **Git Hooks Workflows**: development strategy based on working directly on the main branch (trunk) and using Git hooks for quality control and code reviews.

- **Prettier**: code formatting tool that helps maintain consistent code style in the project.

- **SonarCloud**: analysis service that provides continuous inspection and analysis of code quality and overall maintainability of projects. It helps to identify bugs, code smells, security vulnerabilities, and other code issues by automatically analyzing code on every commit or pull request, offering detailed reports, and providing insights for improvements.

- **Netlify**: web hosting and infrastructure services platform offering comprehensive tools for web development, deployment, and management.

- **Figma**: cloud-based design and prototyping tool used for interface design, prototyping, collaboration, and design systems.

- **Trello**: web-based project management application that allows users to create boards, lists, and cards to organize tasks and projects in a visual and flexible way.

## Setup

1. Clone this repository and install its dependencies using the command `npm i`

2. Start a developmet server using the command `npm run dev`

3. Navigate to the appropriate link of your localhost

## Available scripts

`npm run dev`: starts a development server

`npm run build`: builds the app.

`npm run preview`: runs the built app.

`npm run lint`: runs ESLint.

`npm run test`: runs the unit test for the application.

`npm run test:coverage`: shows application's test coverage.
