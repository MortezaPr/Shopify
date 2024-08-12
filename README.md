# Shopify

## Introduction

This repository contains a simple sample e-commerce website built using Next.js. The project demonstrates a basic yet fully functional e-commerce platform where users can browse products, view detailed information, manage a shopping cart, and complete purchases. 

## Features

- **User Authentication**: Users can log in with a provided test account.
- **Product Listing and Details**: Browse available products and view detailed descriptions, including pricing and images.
- **Shopping Cart Management**: Add products to your shopping cart, adjust quantities, or remove items as needed.
- **Order Submission**: Complete your purchase by providing necessary details, such as:
  - Name
  - Last Name
  - Phone Number
  - Postal Code
  - Province
  - City
  - Address
  
  The address can be conveniently selected using an integrated map feature in the submission form.

## Technologies Used

- **Next.js**: A powerful React framework for server-rendered and statically generated web applications.
- **TypeScript**: Ensures strong typing, making the code more predictable and easier to debug.
- **MUI (Material-UI)**: Provides a comprehensive set of UI components with a modern look and feel.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Redux**: State management for consistent and predictable application behavior.
- **React-Hook-Form**: Simplifies form management with minimal re-renders.
- **PWA (Progressive Web App)**: Ensures the application is accessible offline and behaves like a native app.

## API Integration

This project uses the [Fake Store API](https://fakestoreapi.com) to simulate product data and user authentication. 

- **Test Login Credentials**:
  - **Username**: mor_2314
  - **Password**: 83r5^_

## How to Run the Project

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone https://github.com/MortezaPr/Shopify.git
   cd Shopify

2. Install the dependencies using your preferred package manager:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
4. The application will be accessible at http://localhost:3000.

## Docker and Docker Compose

The project is containerized using Docker, making it easy to set up and run in any environment. To start the application using Docker:

1. Ensure Docker and Docker Compose are installed on your machine.
2. Clone the repository and navigate to the project directory.
3. Build and run the containers:

   ```bash
   docker compose up --build

4. The application will be accessible at http://localhost:3000.

