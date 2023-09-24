# Taskee - ReactJS Projects Manager

![Taskee](/public/print1.png)

Welcome to the **Taskee** repository, a project developed entirely in ReactJS using **Vite** as the project bootstrapper. Taskee was created for the purpose of practicing fundamental React concepts and showcasing various features. This project management tool is packed with resources to help organize tasks and personal projects.

## Key Features

Taskee offers a range of features and development techniques in React:

- Utilization of **React Hooks** for state and effect management.
- Styling with **CSS** for an attractive and responsive interface.
- Event handling, such as **onClick** and **onChange**, for user interactions.
- Use of **props** to pass data between components.
- Page navigation with **React Router**.
- Beautiful and intuitive icons provided by the **React Icons** library.

## Additional Features

In addition to the core features, Taskee provides advanced functionality:

- **Project Management** - Create, edit, and delete projects. The project's cost is automatically updated as you add or remove services.
- **Add Tasks** - Create tasks that must be completed within the project's deadline. The task's deadline must be within the project's timeframe.
- **Add Services** - Add services to the project, but only if the cost is within the available budget.
- **Automatic Cost Update** - The project's cost is automatically updated based on the services added and removed.

## Prerequisites

To run Taskee on your local machine, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - Version 14 or higher.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for package management.

## Installation

1. Clone this repository to your machine:

   ```bash
   git clone https://github.com/jorgeprj/taskee-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd taskee
   ```

3. Install project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## How to Use

To simulate the JSON Server and run the project, follow these steps:

1. Start the JSON Server to simulate the API:

   ```bash
   npm run backend
   # or
   yarn backend
   ```

   The server will be available at `http://localhost:5000`.

2. Start the React application:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173` by default.

## UI UX
The project was developed based on a model found on Behance. To view the actual project, [click here](https://www.behance.net/gallery/173460029/Project-Team-Management-SaaS-Product?tracking_source=search_projects_recommended|Project+Management&).


## Contribution

If you wish to contribute to the Taskee project, follow these steps:

1. Fork the repository.
2. Create your own development branch: `git checkout -b feature/feature-name`.
3. Make your changes and commit them: `git commit -m 'Add a new feature'`.
4. Push your branch: `git push origin feature/feature-name`.
5. Submit a Pull Request with your changes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it as needed.

## Contact

For questions or suggestions, please contact [@jorgeprj](https://github.com/jorgeprj).