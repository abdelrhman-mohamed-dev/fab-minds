/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({
        type: null,
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            // Here you would typically make an API call to your backend
            // For demo purposes, we'll simulate a successful submission
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubmitStatus({
                type: "success",
                message: "Thank you for your message. We'll get back to you soon!",
            });
            setEmail("");
            setMessage("");
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Something went wrong. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="w-full max-w-screen-xl mx-auto py-12 xs:py-20 px-6">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
                    Contact Us
                </h2>
                <p className="mt-4 text-center text-muted-foreground text-lg">
                    {` Have questions? We're here to help. Send us a message and we'll respond
                    as soon as possible.`}
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={cn(
                                "mt-2 block w-full rounded-lg border bg-background px-4 py-2.5",
                                "border-input focus:border-primary focus:ring-2 focus:ring-primary/20",
                                "text-foreground placeholder:text-muted-foreground",
                                "transition-colors duration-200"
                            )}
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-foreground"
                        >
                            How can we assist you?
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={4}
                            className={cn(
                                "mt-2 block w-full rounded-lg border bg-background px-4 py-2.5",
                                "border-input focus:border-primary focus:ring-2 focus:ring-primary/20",
                                "text-foreground placeholder:text-muted-foreground",
                                "transition-colors duration-200 resize-none"
                            )}
                            placeholder="Tell us about your freight needs..."
                        />
                    </div>

                    {submitStatus.type && (
                        <div
                            className={cn(
                                "p-4 rounded-lg",
                                submitStatus.type === "success"
                                    ? "bg-green-50 text-green-700"
                                    : "bg-red-50 text-red-700"
                            )}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-[#F15B22] text-black hover:bg-[#F15B22]/90"
                    >
                        {isSubmitting ? (
                            "Sending..."
                        ) : (
                            <>
                                Send Message
                                <Send className="ml-2" />
                            </>
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;