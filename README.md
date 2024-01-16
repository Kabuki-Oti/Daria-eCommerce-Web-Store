# Daria eCommerce Web Store

Daria is an eCommerce Web Store built using Redux toolkit.

![Full Web Store](./src/README%20previews/full%20site.png)
![Suits](./src/README%20previews/suits.png)
![Single Item](./src/README%20previews/single%20item.png)
![Cart](./src/README%20previews/cart.png)
![Sign in](./src/README%20previews/sign%20in.png)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Usage](#usage)

## Features

- **Individual pages for each product type:** ......

- **Add items to and remove items from cart** ......

- **Filter items by size, colour and price:** ......

- **Login into account and add profile photo:** ......

## Project Structure

- `src/assets` -  All data for the items (colour, size, price, and images).
- `components` - Logic for all individual components.
- `features/Slices`: Logic for all slices and their reducers.
- `App.js`: React Router for client-side navigation, incorporates Redux for state management (specifically for shopping cart and user authentication).
- `index.js` - Set up for the website by rendering the App component within a strict mode using the react-dom library, with integration of Redux for state management.
- `Main.js`-  Main page of the application.
- `Store.js` -  Sets up the Redux store.

## Getting Started

These instructions will help you set up and run the Daria eCommerce Web Store on your local machine.

### Prerequisites

You need to have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd motivation-station
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the server:

   ```bash
   npm run dev
   ```

   This will run the server on [http://localhost:3000](http://localhost:3000).

2. Open with Live Server to use the Daria eCommerce Web Store.

## Usage

- Click through the product categories, add items to your cart, filter items and log in using your unique name and password, and customise with your our profile image.

---

Enjoy using the Daria eCommerce Web Store and stay shopping!
