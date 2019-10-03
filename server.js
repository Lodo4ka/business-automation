const http = require("http");
const PORT = process.env.PORT || 3001;

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  req.on("error", err => {
    console.error(err);
    res.statusCode = 400;
    res.end("400: Bad Request");
    return;
  });

  res.on("error", err => {
    console.error(err);
  });

  if (req.url === "/" && req.method === "GET") {
    setTimeout(() => {
      res.end(
        JSON.stringify({
          job: "Разработчик",
          fullName: "Иванов Иван Иваныч",
          email: "test@mail.com",
          tel: "+7-999-123-45-67"
        })
      );
    }, 3000);
  }
});
app.listen(PORT, () => {
  console.log(`Servber is running ${PORT}`);
});
