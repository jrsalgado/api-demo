FROM node:6.9.4
MAINTAINER jayro salgado
ENV WORKDIR=/usr/src/app/
WORKDIR $WORKDIR
RUN git clone -b develop https://github.com/jrsalgado/api-demo.git . && \
    npm install
EXPOSE 3100
CMD ["npm", "start"]