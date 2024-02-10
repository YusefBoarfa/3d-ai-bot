export async function GET(request: Request) {
  return new Response("Chupala", {
    headers: {
      "content-type": "text/plain",
    },
  });
}
