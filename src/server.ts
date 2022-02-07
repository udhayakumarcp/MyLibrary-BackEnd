import fastify from "fastify";

const server = fastify({
  logger: true,
});
const port = 3000;

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
