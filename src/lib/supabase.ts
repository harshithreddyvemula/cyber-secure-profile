
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
