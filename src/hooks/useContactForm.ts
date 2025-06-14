
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export interface ContactSubmission {
  name: string
  email: string
  company?: string
  role?: string
  inquiry_type: string
  message: string
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const submitContact = async (formData: ContactSubmission) => {
    setIsSubmitting(true)
    
    try {
      // For now, just handle the email functionality
      const subject = formData.inquiry_type === 'resume' 
        ? 'Resume Request - Harshith Reddy Vemula'
        : `${formData.inquiry_type.charAt(0).toUpperCase() + formData.inquiry_type.slice(1)} Inquiry - ${formData.name}`
      
      const body = `
Hello Harshith,

A new contact form submission has been received:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Role: ${formData.role || 'Not provided'}
Inquiry Type: ${formData.inquiry_type}

Message:
${formData.message}

Best regards,
Portfolio Contact System
      `

      const mailtoLink = `mailto:harshithvamshi1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(mailtoLink)

      toast({
        title: "Message Sent Successfully!",
        description: "An email has been opened with your message. Please send it to complete your inquiry.",
      })

      return { success: true }
    } catch (error) {
      console.error('Contact form submission error:', error)
      
      toast({
        title: "Error",
        description: "There was an error processing your message. Please try again.",
        variant: "destructive"
      })

      return { success: false, error }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submitContact,
    isSubmitting
  }
}
