export const trackEvent = () => {
  window.gtag('event', 'contact_us_click', { event_category: 'engagement', event_label: 'Contact Button' })
}