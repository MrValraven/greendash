import { z } from 'zod';

export const accountSchema = z
  .object({
    username: z.string().min(2, 'Username is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export const companySchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  businessSector: z.string().min(1, 'Business sector is required'),
  companyNIF: z
    .string()
    .min(9, 'NIF must be at least 9 characters')
    .max(9, 'NIF must be at most 9 characters'),
  dateOfEstablishment: z.string().min(1, 'Date of establishment is required'),
  contactNumber: z.string().min(1, 'Contact number is required'),
  pincode: z.string().min(1, 'Postal code is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
  netTurnover: z.string().min(1, 'Net turnover is required'),
  assetsValue: z.string().min(1, 'Assets value is required'),
});

export type AccountFormData = z.infer<typeof accountSchema>;
export type CompanyFormData = z.infer<typeof companySchema>;
