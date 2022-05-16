import { useState, useContext, createContext, useMemo } from 'react';

import { FormValues } from '../components/QRSettings/types';

interface SettingsContextProps {
  settings: FormValues;
  updateSettings: (newSettings: FormValues) => void;
}

const SettingsContext = createContext<SettingsContextProps>(null!);

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState<FormValues>({
    errorCorrectionLevel: 'M',
    margin: 4,
    width: 256,
    color: {
      light: '#FFFFFF',
      dark: '#000000',
    },
  });

  const contextValue: SettingsContextProps = useMemo(
    () => ({
      settings,
      updateSettings: setSettings,
    }),
    [settings],
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
