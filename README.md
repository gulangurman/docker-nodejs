# Sample Node.js server app on a Docker container

An simple Express.js server that runs on a Docker container.

You can download the built image from Docker Hub:

    docker pull gulangurman/docker-nodejs:latest

# Build

First build the image and tag it with a name.

    $ docker build -t gulangurman/docker-nodejs .
  

# Check

Check that your image is listed among other docker images on your system.    

    $ docker images   

# Run

Now run the image you've just built.
Docker will redirect public port 49000 to the container's private port 8080.
We'll use port 49000 to access the server running inside the container.

    $ docker run -d -p 49000:8080 --name nodejs-container gulangurman/docker-nodejs  

# View logs

You can see the output message in the container logs.
Browse http://localhost:49000 to access the server.

    $ docker logs nodejs-container   
  