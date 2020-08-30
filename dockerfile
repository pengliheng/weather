FROM node

COPY . /root/react

WORKDIR /root/react

RUN yarn

RUN yarn run build
