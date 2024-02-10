export const sendTextToOpenAI = async (
  userText: string
): Promise<string | undefined> => {
  try {
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userText }),
    });
    const { message } = await res.json();
    return message;
  } catch (err) {
    console.log(err);
  }
  return undefined;
};
