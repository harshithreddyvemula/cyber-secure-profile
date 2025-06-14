
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Analytics = () => {
  useEffect(() => {
    // Track page views
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackButtonClick = (buttonName: string, section: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      section: section,
      page_title: document.title
    });
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', {
      section_name: sectionName,
      page_title: document.title
    });
  };

  const trackDownload = (fileName: string) => {
    trackEvent('file_download', {
      file_name: fileName,
      page_title: document.title
    });
  };

  const trackContactFormSubmit = () => {
    trackEvent('form_submit', {
      form_name: 'contact_form',
      page_title: document.title
    });
  };

  // Make tracking functions globally available
  useEffect(() => {
    (window as any).trackButtonClick = trackButtonClick;
    (window as any).trackSectionView = trackSectionView;
    (window as any).trackDownload = trackDownload;
    (window as any).trackContactFormSubmit = trackContactFormSubmit;
  }, []);

  return null;
};

export default Analytics;
