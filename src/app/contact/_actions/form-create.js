'use server';

import { API_URL } from '@/app/_constants/constants';
import { revalidatePath } from 'next/cache';

export default async function formCreateAction(_, formData) {
  const name_0 = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name_0 || !email || !message) {
    return {
      errorMessage: 'All fields required',
    };
  }

  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify([{ name_0, email, message }]),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  revalidatePath('/contact');

  return {
    successMessage: 'Message sent',
  };
}
