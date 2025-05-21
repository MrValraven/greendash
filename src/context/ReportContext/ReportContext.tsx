import { ReportFormData } from '@pages/Report/ReportBuilder/schema';
import { createContext, useState, ReactNode, useContext } from 'react';

interface ReportContextType {
  reportData: Partial<ReportFormData> | null;
  setReportData: (data: Partial<ReportFormData>) => void;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export const ReportContextProvider = ({ children }: { children: ReactNode }) => {
  const [reportData, setReportData] = useState<Partial<ReportFormData> | null>(null);

  return (
    <ReportContext.Provider value={{ reportData, setReportData }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (context === undefined) {
    throw new Error('useReportContext must be used within a ReportProvider');
  }
  return context;
};
