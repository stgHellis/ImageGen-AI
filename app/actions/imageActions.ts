"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateImage(prompt: string, model: string) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    return {
      success: true,
      imageUrl: response.data[0].url,
    };
  } catch (error) {
    console.error("Erreur lors de la génération de l'image:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de la génération de l'image.",
    };
  }
}
