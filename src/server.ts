import Fastify from "fastify";

const server = Fastify({
  logger: true,
});
const port = 3000;

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
