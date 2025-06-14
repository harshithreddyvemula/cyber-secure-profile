
import { useCallback } from 'react'

export const useAnalytics = () => {
  const trackEvent = useCallback(async (eventType: string, eventData: Record<string, any> = {}) => {
    try {
      // For now, just log analytics events to console
      console.log('Analytics Event:', {
        event_type: eventType,
        event_data: eventData,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent
      })
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
