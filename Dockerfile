FROM node:8
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

ENV NODE_ROOT /usr/app/

RUN mkdir -p $NODE_ROOT

WORKDIR $NODE_ROOT

COPY . .

RUN npm install -g @angular/cli@6.0.7
RUN yarn install

EXPOSE 4200 49153