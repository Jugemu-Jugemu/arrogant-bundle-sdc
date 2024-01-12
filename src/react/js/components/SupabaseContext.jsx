import React, { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';

const SupabaseContext = createContext();

export const useSupabase = () => useContext(SupabaseContext);

export const SupabaseProvider = ({ children }) => {
  const supabaseUrl = 'https://ijstehjnjtwajpebvqvq.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqc3RlaGpuanR3YWpwZWJ2cXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MDg5OTEsImV4cCI6MjAyMDQ4NDk5MX0.b03aLmYaGb83IaePRHhoevIliUu0NSyoQFvYeqO7qTo'

  const supabase = createClient(supabaseUrl, supabaseKey);
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};