# Docker Setup Guide

This guide explains how to run the Truhlarstvi Gryc Next.js application using Docker.

## Prerequisites

- Docker installed on your system ([Download Docker](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)

## Quick Start

### Using Docker Compose (Recommended)

1. Build and start the container:
```bash
docker-compose up -d
```

2. Access the application at `http://localhost:3000`

3. View logs:
```bash
docker-compose logs -f
```

4. Stop the container:
```bash
docker-compose down
```

### Using Docker CLI

1. Build the Docker image:
```bash
docker build -t truhlarstvi-gryc .
```

2. Run the container:
```bash
docker run -p 3000:3000 truhlarstvi-gryc
```

3. Access the application at `http://localhost:3000`

## Docker Configuration

### Dockerfile

The [`Dockerfile`](Dockerfile) uses a multi-stage build process:

- **Stage 1 (deps)**: Installs dependencies
- **Stage 2 (builder)**: Builds the Next.js application
- **Stage 3 (runner)**: Creates a minimal production image

This approach results in a smaller final image size and better security.

### Environment Variables

To add environment variables:

1. Create a `.env.production` file in the project root
2. Uncomment the `env_file` section in [`docker-compose.yml`](docker-compose.yml)
3. Add your variables to the `.env.production` file

Example `.env.production`:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Port Configuration

By default, the application runs on port 3000. To change this:

1. In [`docker-compose.yml`](docker-compose.yml), modify the ports mapping:
```yaml
ports:
  - "8080:3000"  # Maps host port 8080 to container port 3000
```

## Production Deployment

### Building for Production

```bash
docker build -t truhlarstvi-gryc:latest .
```

### Running in Production

```bash
docker run -d \
  --name truhlarstvi-gryc \
  -p 3000:3000 \
  --restart unless-stopped \
  truhlarstvi-gryc:latest
```

### Using Docker Compose in Production

```bash
docker-compose up -d --build
```

## Troubleshooting

### Container won't start

Check the logs:
```bash
docker-compose logs
```

### Port already in use

Change the port mapping in [`docker-compose.yml`](docker-compose.yml) or stop the conflicting service.

### Build fails

1. Clear Docker cache:
```bash
docker builder prune
```

2. Rebuild without cache:
```bash
docker-compose build --no-cache
```

### Permission issues (Linux/Mac)

If you encounter permission issues, ensure the Docker daemon is running and your user is in the docker group:
```bash
sudo usermod -aG docker $USER
```

## Useful Commands

### View running containers
```bash
docker ps
```

### Stop all containers
```bash
docker-compose down
```

### Remove all containers and images
```bash
docker-compose down --rmi all
```

### Access container shell
```bash
docker exec -it truhlarstvi-gryc sh
```

### View container resource usage
```bash
docker stats truhlarstvi-gryc
```

## Image Optimization

The Docker image is optimized for production:

- Uses Alpine Linux (minimal base image)
- Multi-stage build reduces final image size
- Only production dependencies are included
- Runs as non-root user for security
- Next.js standalone output for minimal runtime

## Next Steps

- Set up a reverse proxy (nginx, Traefik) for HTTPS
- Configure a CI/CD pipeline for automated deployments
- Set up monitoring and logging
- Consider using Docker Swarm or Kubernetes for orchestration
