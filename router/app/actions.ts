'use server';

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitRequest(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const book = String(formData.get('book') || '').trim();

  if (!name || !email || !book) {
    return {
      success: false,
      message: 'Заповніть усі поля!',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Введіть правильну email-адресу!',
    };
  }

  return {
    success: true,
    message: `Дякуємо, ${name}! Заявку на книгу "${book}" прийнято.`,
  };
}