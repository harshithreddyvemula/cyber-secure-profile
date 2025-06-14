
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Environment check:', {
  hasUrl: !!supabaseUrl,
  hasKey: !!supabaseAnonKey,
  url: supabaseUrl ? 'Present' : 'Missing',
  key: supabaseAnonKey ? 'Present' : 'Missing'
})

// Create either real client or mock client
let supabaseClient: any

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables missing:', {
    VITE_SUPABASE_URL: supabaseUrl || 'NOT SET',
    VITE_SUPABASE_ANON_KEY: supabaseAnonKey || 'NOT SET'
  })
  
  // Create a mock client to prevent app crashes during development
  supabaseClient = {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
      select: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
      update: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
      delete: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
    })
  }
  
  console.warn('Using mock Supabase client - please configure your environment variables')
} else {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  console.log('Supabase client initialized successfully')
}

export const supabase = supabaseClient

// Database types
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  company?: string
  role?: string
  inquiry_type: string
  message: string
  created_at?: string
  status?: 'new' | 'read' | 'responded'
}

export interface AnalyticsEvent {
  id?: string
  event_type: string
  event_data: Record<string, any>
  user_agent?: string
  ip_address?: string
  created_at?: string
}
