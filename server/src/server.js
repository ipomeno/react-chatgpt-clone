const app = require('./app');
const { port } = require('./config/app');

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});