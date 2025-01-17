# GitaPro

GitaPro is a web application designed to help users learn and understand the Bhagavad Gita in an engaging and personalized way. The app offers various features such as personalized learning paths, progress tracking, and community collaboration.

## Features

- **Personalized Learning**: Lessons tailored to your personality and preferences.
- **Progress Tracking**: Track your spiritual progress with interactive learning modules.
- **Community Collaboration**: Join study groups and participate in guided discussions.
- **Verse of the Day**: Get a daily verse from the Bhagavad Gita to reflect upon.


## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/gita-app.git
    cd gita-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```


3. Set up environment variables:
    Create a `.env` file in the root directory and add the necessary environment variables. Below are the required variables:

    ```env
    AUTH0_DOMAIN=your-auth0-domain
    AUTH0_CLIENT_ID=your-auth0-client-id
    AUTH0_CLIENT_SECRET=your-auth0-client-secret
    NEXT_PUBLIC_XATA_API_KEY=your-xata-api-key
    ```

4. Run the development server:
    ```sh
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `npm run dev`: Runs the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for linting errors.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Auth0
- Xata
