import { z } from 'zod'

const schema = z.object({
  fullName: z.string().trim().min(2, "Ім'я має містити мінімум 2 символи"),
  email: z.email("Введіть коректну email-адресу"),
  topic: z.enum(["Лекція", "Майстер-клас", "Хакатон"], {
    error: "Оберіть тип події",
  }),
  details: z.string().trim().min(10, "Причина участі має містити мінімум 10 символів"),
});

export type FormState = {
    success: boolean;
    message: string;
    errors: {
        fullName?: string[];
        email?: string[];
        topic?: string[];
        details?: string[];
    };
};

export async function submitRequest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const result = schema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    details: formData.get("details"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "Виправте помилки у формі",
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  return {
    success: true,
    message: "Реєстраційні дані перевірено!",
    errors: {},
  };
}