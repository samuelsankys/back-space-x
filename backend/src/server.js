const app = require("./app");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App SPACE-X listening on port ${PORT}`);
});
