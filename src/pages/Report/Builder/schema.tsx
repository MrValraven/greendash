import { z } from 'zod';

export const reportFormSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  reportingYear: z.string().regex(/^\d{4}$/, 'Reporting year is required'),
  logo: z.any(), // still don't know how to validate file types in zod - to see after
  region: z.string().min(2, 'Region is required'),
  module: z.string().min(2, 'Module is required'),
  basis: z.string().min(2, 'Basis is required'),
  subsidiaries: z.string(), // need to make it optional according to basis
  sustainabilityPractices: z
    .string()
    .min(10, 'Please provide more detailed information about your sustainability practices')
    .max(1000, 'Description is too long(max 1000 characters)'),
});

export type ReportFormData = z.infer<typeof reportFormSchema>;
