# Norebase Frontend Developer Test

This project is a simple web application that displays information on cryptocurrency coin prices using the CoinLore API. The app allows users to view and paginate through a list of coins with real-time price updates.

## Features
- **Fetch Cryptocurrency Prices:** Uses the `/tickers` endpoint from the CoinLore API to fetch and display a list of cryptocurrency prices.
- **Table Display:** Coins are displayed in a paginated table format, allowing for easy navigation.
- **Pagination:** Each page displays 10 items, and users can navigate between pages.
- **Auto-Refresh:** Data refreshes automatically every minute for real-time updates.

## Demo Video
Check out this video that demonstrates the desired look and behavior of the table:
[CoinLore API Table Sample](#)

## Requirements

This task is a real-world simulation, with a focus on creating a UI that could evolve over time. The primary goal is to recreate the UI shown in the video as accurately as possible while considering both developer experience (DX) and user experience (UX).

### Key Considerations
1. **Basic Tech Stack**: The task requires HTML, CSS, and JavaScript, but you are free to use any frameworks or libraries if desired.
2. **Code Structure**: Structure the project to make it scalable for future development.
3. **Public Repository**: Host the code in a public GitHub repository (or another public Git platform).
4. **Deployment**: Deploy the app to GitHub Pages or any other free hosting platform.

## Getting Started

### Prerequisites
- Node.js
- Git

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/norebase-frontend-test.git
    ```
2. Navigate to the project directory:
    ```bash
    cd norebase-frontend-test
    ```
3. Install dependencies (if using a framework or package manager like React or Next.js):
    ```bash
    npm install
    ```

### Running the App
- To start the development server:
    ```bash
    npm start
    ```
- Open your browser and navigate to `http://localhost:3000` to view the app.

## Project Structure
- **`App.js`**: Contains the main logic for fetching and displaying the coin data.
- **`CoinTable.js`**: Component for rendering the table of coins.
- **`CoinModal.js`**: Modal component for displaying additional details of a selected coin.
- **`types.js`**: Defines types for better type-checking and code readability.

## API Reference
This project uses the [CoinLore API](https://www.coinlore.com/cryptocurrency-api) to fetch cryptocurrency data.

- **Endpoint**: `/tickers`
- **Method**: `GET`
- **Response**: Array of coin objects containing properties like `id`, `name`, `price_usd`, `symbol`, and more.

## Deployment
To deploy the app to GitHub Pages:
1. Run the build command:
    ```bash
    npm run build
    ```
2. Follow [GitHub Pages deployment instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) to deploy the build.

## Technologies Used
- **JavaScript/React**: For dynamic UI rendering.
- **Tailwind CSS**: For styling.
- **CoinLore API**: For cryptocurrency data.

## License
This project is open-source and available under the [MIT License](LICENSE).
