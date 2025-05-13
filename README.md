# E-commerce App with Next.js

A modern, fullstack e-commerce application built with Next.js.

## Features

- User authentication
- Product listing with pagination
- Product details and related items
- Personalized recommendations
- User review history
- Responsive design

## Development

This application uses mock data for development and preview environments. When you're ready to deploy to production, you'll need to implement MongoDB integration.

### Available Mock Users

For testing with mock data, you can use the following user IDs to log in:

- User ID: 101
- User ID: 102
- User ID: 103
- User ID: 104
- User ID: 105

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Run the development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Transitioning to MongoDB for Production

When you're ready to deploy to production with MongoDB:

1. Create a MongoDB connection utility in `lib/mongodb.ts`
2. Update the data service functions in `lib/data-service.ts` to use MongoDB
3. Add your MongoDB connection string to your environment variables

Example MongoDB connection utility:

\`\`\`typescript
import { MongoClient } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local")
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export async function connectToDatabase() {
  const client = await clientPromise
  const db = client.db()
  return { client, db }
}
