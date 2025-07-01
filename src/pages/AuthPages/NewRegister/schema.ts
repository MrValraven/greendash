import { z } from 'zod';

export const personalSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  mobileNumber: z.string().min(1, 'Mobile number is required'),
  positionInCompany: z.string().min(1, 'Position in company is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export const companySchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  businessSector: z.string().min(1, 'Business sector is required'),
  companyLogo: z
    .instanceof(FileList)
    .refine((files) => {
      return Array.from(files).every((file) =>
        ['image/jpeg', 'image/png', 'image/svg+xml'].includes(file.type),
      );
    }, 'Only JPEG, PNG, and SVG files are accepted')
    .optional(),
  taxId: z.string().min(1, 'Tax ID is required'),
  companySize: z.string().min(1, 'Company size is required'),
  contactNumber: z.string().min(1, 'Contact number is required'),
  companyPincode: z.string().min(1, 'Postal code is required'),
  companyAddress: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
  companyWebsite: z.string().optional(),
});

export type PersonalFormData = z.infer<typeof personalSchema>;
export type CompanyFormData = z.infer<typeof companySchema>;
