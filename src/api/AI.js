import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "meta-llama-3.1-70b-instruct";

// export async function main() {

  const client = new ModelClient(endpoint, new AzureKeyCredential(token));

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role:"system", content: "You are a helpful assistant." },
        { role:"user", content: "Who is Alex Pereira" }
      ],
      temperature: 1.0, 
      top_p: 1.0,
      max_tokens: 1000,
      model: modelName
    }
  });

//   if (response.status !== "200") {
//     throw response.body.error;
//   }
//   console.log(response.body.choices[0].message.content);
// }

// main().catch((err) => {
//   console.error("The sample encountered an error:", err);
// });