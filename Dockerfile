# Use the official Deno image
FROM denoland/deno:alpine

# Set the working directory
WORKDIR /app

# Copy your project files into the container
COPY . .

# Cache dependencies to speed up builds
RUN deno cache main.ts

# Define the command to run the app
CMD ["deno", "task", "dev"]
