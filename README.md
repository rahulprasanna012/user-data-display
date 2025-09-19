# User Data Display

A React/Vite application that fetches data of 10 users from a REST API, displays their profiles (with avatars) in a responsive UI. Built to demonstrate skills with data fetching, component design, state management, and UI libraries.

---

## Features

- Fetches user data (name, email, phone, address, website, company) from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)  
- Generates unique avatars using [DiceBear Avatars API](https://avatars.dicebear.com) based on each user’s username  
- Shows a loading indicator while fetching data  
- Responsive layout (mobile / tablet / desktop)  
- Clean component structure and styles

---

## Technologies Used

| Tool / Library | Purpose |
|----------------|---------|
| React + Vite | App framework & build tool |
| Axios / Fetch API | Getting data from endpoints |
| Tailwindcss/ antdesign | Styling & responsive design |
| DiceBear Avatars API | Avatar images generation |
| JSONPlaceholder | Fake user data API |

---

## Setup / Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/rahulprasanna012/user-data-display.git
Navigate into project folder:

cd user-data-display
Install dependencies:

bash
Copy code
npm install
Run the development server:


npm run dev
View in browser: usually at http://localhost:5173 (Vite default) or whatever address shown in the terminal.

Build / Deployment
To build for production:


npm run build
This generates output in the dist
