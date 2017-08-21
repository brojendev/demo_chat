## Install and Run Node server

cd ./server

npm install

node chat.js --host <your-ip>

## Install and Run Angular app

change chat.component.ts

this.socket = io('http://192.168.1.7:5000') to this.socket = io('\<your-ip\>');

cd ./client

npm install

ng serve
