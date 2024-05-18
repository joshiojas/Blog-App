<!-- # Blog-App

This is a simple blog app built using fastify and prisma along with posgres database for the backend
the frontend is built using next

## Description

Blog-App is a full-stack web application for blogging. The backend is built with Fastify, a high-performance web framework for Node.js, and Prisma, an open-source database toolkit. It uses PostgreSQL as the database system. The frontend is built with Next.js, a React framework that enables features such as server-side rendering and generating static websites.

## Features

- User authentication
- Create, read, update, and delete blog posts
- Comment on blog posts
- Like blog posts

##

Before you start, make sure you have Node.js and npm installed on your machine. -->

# Blog-App

Blog-App is a full-stack web application designed for blogging. It's built with modern technologies to provide a seamless experience for both developers and end-users.

## Technologies Used

- **Frontend**: Next.js, a powerful React framework that supports features like server-side rendering and static site generation.
- **Backend**: Fastify, a high-performance web framework for Node.js, and Prisma, an open-source database toolkit.
- **Database**: PostgreSQL, a robust and scalable relational database system.

## Features

- **User Authentication**: Secure sign-in functionality to protect user data and personalize the user experience.
- **Blog Post Management**: Users can create, read, update, and delete their blog posts.

## Getting Started

Before you start, ensure you bun installed on your machine.

### Set Environment Variables

For frontend:

- BACKEND_URL= \<location of backend\>
- NEXTAUTH_SECRET= \<generate a random secret using openssl\>

For Backend:

- DATABASE_URL= \<database url\>

**We recommend using hosting the app on vercel and database on aws**
nevertheless, you can use any other hosting service or if you want to run it locally you can use docker to run the database and run the app using the steps below

1. Clone the repository.
2. Navigate to the `backend` directory and run `bun install` to install the necessary dependencies.
3. Start the backend server by running `bun api/app.ts`.
4. Navigate to the `frontend` directory and run `bun install`.
5. Start the frontend server by running `bun run dev`.
6. Open your browser and navigate to `localhost:3000` to see the application in action.

## Contributing

Contributions are welcome! Please read the contributing guidelines before making any changes.

## License

This project is licensed under the terms of the MIT license.

## Contact

If you have any questions or feedback, please reach out to us.

Enjoy blogging with Blog-App!
