import { z } from 'zod';

export const reportFormSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  reportingYear: z.string().regex(/^\d{4}$/, 'Reporting year is required'),
  logo: z
    .instanceof(FileList)
    .refine((files) => {
      return Array.from(files).every((file) =>
        ['image/jpeg', 'image/png', 'image/svg+xml'].includes(file.type),
      );
    }, 'Only JPEG, PNG, and SVG files are accepted')
    .optional(),
  region: z.string().min(1, 'Region is required'),
  module: z.string().min(1, 'Module is required'),
  basis: z.string().min(1, 'Basis is required'),
  subsidiaries: z.string().optional(),
  sustainabilityPractices: z
    .string()
    .min(10, 'Please provide more detailed information about your sustainability practices')
    .max(1000, 'Description is too long(max 1000 characters)'),
});

export type ReportFormData = z.infer<typeof reportFormSchema>;
