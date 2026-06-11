This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Docker Setup

This project can be run in a Docker container using Docker Compose.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed

### Running with Docker

1. **Build and start the container:**

```bash
docker-compose up -d
```

The application will be available at [http://localhost:3000](http://localhost:3000)

2. **View logs:**

```bash
docker-compose logs -f
```

3. **Stop the container:**

```bash
docker-compose down
```

### Docker Commands

- **Build the image:**
  ```bash
  docker build -t portifolio-fullstack .
  ```

- **Run the container directly:**
  ```bash
  docker run -p 3000:3000 portifolio-fullstack
  ```

- **View running containers:**
  ```bash
  docker ps
  ```

- **Remove container and image:**
  ```bash
  docker-compose down -v
  docker rmi portifolio-fullstack
  ```

### Development with Docker

To enable hot reload during development, uncomment the volumes section in `docker-compose.yml`:

```yaml
volumes:
  - .:/app
  - /app/node_modules
  - /app/.next
```

Then run:
```bash
docker-compose up
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
