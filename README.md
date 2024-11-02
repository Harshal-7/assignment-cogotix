# Rick and Morty Episode Image Feed

A Next.js project that implements an image feed using the [Rick and Morty public API](https://rickandmortyapi.com/documentation/#rest).

## Features

- **Episode List**: Displays a list of episodes in a side navigation panel using `/api/episode` from the Rick and Morty API.
- **Character Display**: Shows the first page of characters using `/api/character` on initial load.
- **Episode Selection**:
  - Highlights the selected episode in the side navigation panel.
  - Updates the main view to display characters from the selected episode.
  - Automatically unhighlights the previous episode when a new one is selected.
  - Reverts to the initial character view when no episode is selected.

## Screenshots

### Initial Load

![Screenshot-1](./public/homepage.png)

### Episode Selected

![Screenshot-2](./public/episode-page.png)

## Technology Stack

- **Framework**: Next.js 15, React.js, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js 18+
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Harshal-7/cogitix-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cogitix-assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Running the Application

   Start the development server:

   ```bash
   npm run dev
   ```

   Open http://localhost:3000 in your browser to view the app.

5. Build for Production

   To create a production build, run:

   ```bash
   npm run build
   ```
