'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instruction: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  };

  function isInvalidText(text) {
    return !text || text.trim() === '';
  };

  if (isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instruction) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0) {
    return {

    };
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
};
