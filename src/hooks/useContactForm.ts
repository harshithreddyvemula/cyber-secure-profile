
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import type { ContactSubmission } from '@/lib/supabase'

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const submitContact = async (formData: Omit<ContactSubmission, 'id' | 'created_at' | 'status'>) => {
    setIsSubmitting(true)
    
    try {
      // Insert into database
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{
          ...formData,
          status: 'new'
        }])
        .select()
        .single()

      if (error) {
        throw error
      }

      // Still send email as backup
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

This submission has been automatically saved to the database with ID: ${data.id}

Best regards,
Portfolio Contact System
      `

      const mailtoLink = `mailto:harshithvamshi1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(mailtoLink)

      toast({
        title: "Message Sent Successfully!",
        description: "Your message has been saved and an email notification has been sent.",
      })

      return { success: true, data }
    } catch (error) {
      console.error('Contact form submission error:', error)
      
      toast({
        title: "Submission Failed",
        description: "There was an error saving your message. Please try again or email directly.",
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
