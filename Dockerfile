FROM node:6.9.4
MAINTAINER jayro salgado
RUN echo "building API from develop"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy package.json and install dependencies
COPY package.json /usr/src/app
RUN npm install

# copy source code
COPY . /usr/src/app

EXPOSE 3100
CMD ["npm", "run", "develop"]

# docker build command
# $ docker build -t api-demo:latest . --no-cache

# docker run command
# $ docker run -it --rm -v $PWD:/usr/src/app/ -v /usr/src/app/node_modules -P api-demo:latest

# install dependencies development
# $ docker exec -it [container id or name ] npm install --save lodash