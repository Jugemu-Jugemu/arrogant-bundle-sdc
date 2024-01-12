import React, { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv'

const SupabaseContext = createContext();

export const useSupabase = () => useContext(SupabaseContext);

export const SupabaseProvider = ({ children }) => {
  const supabaseUrl = 'https://db.ijstehjnjtwajpebvqvq.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqc3RlaGpuanR3YWpwZWJ2cXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MDg5OTEsImV4cCI6MjAyMDQ4NDk5MX0.b03aLmYaGb83IaePRHhoevIliUu0NSyoQFvYeqO7qTo'
  console.log('Supabase Key:', supabaseKey);
  console.log('logging dotenv:', import.meta.env.VITE_SUPABASE_KEY)
  const supabase = createClient(supabaseUrl, supabaseKey);
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};