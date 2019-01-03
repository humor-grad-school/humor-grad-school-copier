const fs = require('fs');
const path = require('path');
const ws = require('ws');

const webSocketServer = new ws.Server({
  port: 12333,
});

fs.watch(path.resolve(__dirname, 'dist'), (event) => {
  console.log('refresh ', webSocketServer.clients.size)
  webSocketServer.clients.forEach(client => {
    client.send('refresh');
  });
});

webSocketServer.on('connection', () => {
  console.log('client connected');
})