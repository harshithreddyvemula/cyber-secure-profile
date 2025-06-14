
import { useCallback } from 'react'
import { supabase } from '@/lib/supabase'

export const useAnalytics = () => {
  const trackEvent = useCallback(async (eventType: string, eventData: Record<string, any> = {}) => {
    try {
      const { error } = await supabase
        .from('analytics_events')
        .insert([{
          event_type: eventType,
          event_data: eventData,
          user_agent: navigator.userAgent,
          created_at: new Date().toISOString()
        }])

      if (error) {
        console.error('Analytics tracking error:', error)
      }
    } catch (error) {
      console.error('Analytics tracking failed:', error)
    }
  }, [])

  const trackPageView = useCallback((page: string) => {
    trackEvent('page_view', { page })
  }, [trackEvent])

  const trackButtonClick = useCallback((buttonName: string, section: string) => {
    trackEvent('button_click', { button_name: buttonName, section })
  }, [trackEvent])

  const trackSectionView = useCallback((section: string) => {
    trackEvent('section_view', { section })
  }, [trackEvent])

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackSectionView
  }
}
