import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

import express from "express";
import cors from "cors";
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Listening to Port: ${port}`);
})

app.post('/chat', async (req, res)=>{

    const token = process.env["GITHUB_TOKEN"];
    const endpoint = "https://models.inference.ai.azure.com";
    const modelName = "meta-llama-3.1-70b-instruct";

    const client = new ModelClient(endpoint, new AzureKeyCredential(token));
    
    const response = await client.path("/chat/completions").post({
        body: {
        messages: [
            { role:"system", content: "Use your knowledge base to help the user" },
            { role:"user", content: req.body.content }
        ],
        temperature: 1.0, 
        top_p: 1.0,
        max_tokens: 1000,
        model: modelName
        }
  });
  res.send(response);

})