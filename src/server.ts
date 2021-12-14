import fastify from "fastify";

const server = fastify();
const port = 3000;

server.listen(port, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
