
const http = require("http");

const PORT = 4000;
const server = http.createServer((req, res) => {
  // Error handling function
  const errorResponse = (statusCode) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        data: ` ${statusCode} | NOT_IMPLEMENTED`,
      })
    );
  };

  // Books route
  if (req.url === "/books") {
    if (req.method === "GET") {
      // GET books
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: "GET /books",
        })
      );
    } else if (req.method === "PUT") {
      // PUT books
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: "PUT /books",
        })
      );
    } else if (req.method === "DELETE") {
      // DELETE books
      res.writeHead(204, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: "DELETE /books",
        })
      );
    } else {
      errorResponse(404);
    }

    // Books/Author route
  } else if (req.url === "/books/author") {
    if (req.method === "GET") {
      // GET /books/author
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: "GET /books/author",
        })
      );
    } else if (req.method === "POST") {
      // POST books/author
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: "POST /books/author",
        })
      );
    } else if (req.method === "PUT") {
      // PUT books/author
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: "PUT /books/author",
        })
      );
    } else {
      errorResponse(404);
    }

    // Unknown routes
  } else {
    errorResponse(404);
  }
});

server.listen(PORT);
console.log("Server listening on port", PORT);