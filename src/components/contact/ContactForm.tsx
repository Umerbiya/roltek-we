"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.enum([
    "General Inquiry",
    "Parts Request/Quote",
    "Technical Support",
    "Partnership Opportunity",
    "Other",
  ], { message: "Please select a subject" }),
  message: z.string().min(20, "Message must be at least 20 characters long").max(1000, "Message is too long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // TODO: Integrate actual backend API mapping (Resend/SendGrid/SMTP)
    console.log("Contact Form Submitted Data:", data);
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
        <p className="text-muted-foreground">Fill out the form below and our team will get back to you promptly.</p>
      </div>

      {isSuccess && (
        <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 rounded-xl flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <p>Thank you for reaching out! Your message has been successfully sent. We will contact you shortly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot for spam protection */}
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Full Name *
            </label>
            <input
              {...register("fullName")}
              type="text"
              id="fullName"
              placeholder="John Doe"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            {errors.fullName && <p className="text-sm text-destructive font-medium">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email Address *
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="john@example.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            {errors.email && <p className="text-sm text-destructive font-medium">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none">
              Phone Number
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="+251 9... (Optional)"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium leading-none">
              Company Name
            </label>
            <input
              {...register("company")}
              type="text"
              id="company"
              placeholder="Fleet Corp PLC (Optional)"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium leading-none">
            Subject *
          </label>
          <select
            {...register("subject")}
            id="subject"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="" disabled selected>Select a topic</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Parts Request/Quote">Parts Request/Quote</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Partnership Opportunity">Partnership Opportunity</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <p className="text-sm text-destructive font-medium">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium leading-none">
            Message *
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            placeholder="Please detail your request or parts specifications..."
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          {errors.message && <p className="text-sm text-destructive font-medium">{errors.message.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Request...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
