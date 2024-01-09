"use server";
import { signIn } from '@/auth';

export async function authenticate (
  prevState,
  formData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if (error.type?.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}