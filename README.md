# investment-calculator

This project is a React-based web application designed to calculate investment returns over time. It allows users to input their initial investment, annual investment amount, expected return rate, and investment duration. The application then displays the results in a dynamic table.

## Features

- **User Input**: Users can input their investment details, including the initial investment amount, annual investment amount, expected return rate, and the duration of the investment.
- **Dynamic Results**: Based on the user input, the application calculates and displays the investment growth over time in a results table.
- **Input Validation**: The application ensures that the duration entered is greater than zero and provides feedback to the user if it's not.

## Installation

To get started with this project, you need to have Node.js installed on your system. After cloning the repository, navigate to the project directory and run:

```bash
npm install
```
This command installs all the necessary dependencies for the project.

## Usage

After installing the dependencies, you can start the development server by running:
```bash
npm run dev
```
This will start the application in development mode, and you can view it in your browser at http://localhost:5174.

## Components
The application is structured into several React components:

- **Header**: Displays the header of the application.
- **UserInput**: Collects input from the user. It utilizes the **InputField** component for each input.
- **InputField**: A reusable input component for numerical values.
- **ResultsTable**: Displays the calculated results in a tabular format.
