import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, message });
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-6 sm:py-8">
      <div className="relative w-full h-[448px] md:h-[448px] rounded-3xl bg-white shadow-[0_1px_1px_0_rgba(9,13,20,0.06),-4px_-4px_8px_0_rgba(255,255,255,0.40),8px_8px_24px_0_rgba(9,13,20,0.06)] backdrop-blur-[54px] overflow-hidden">
        {/* Content Section */}
        <div className="absolute left-4 sm:left-6 md:left-10 top-6 sm:top-8 md:top-10 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[277px] flex flex-col justify-center items-start gap-3 md:gap-4">
          <h2 className="text-dark-text font-bold text-2xl sm:text-3xl md:text-[32px] leading-8 sm:leading-9 md:leading-10 tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-2.24px]">
            Get in touch
          </h2>
          <p className="text-dark-text/[0.68] font-normal text-sm leading-5">
            Want to partner with us or get in touch?
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="absolute left-4 sm:left-6 md:left-10 top-[120px] sm:top-[140px] md:top-[148px] w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[516px] max-w-[516px]">
          <div className="flex flex-col items-start gap-4">
            {/* Email Input */}
            <div className="flex w-full p-3 sm:p-4 items-center gap-2.5 rounded-2xl bg-dark-text/[0.04]">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-dark-text/[0.60] font-normal text-sm leading-5 placeholder:text-dark-text/[0.60] border-none outline-none"
                required
              />
            </div>

            {/* Message Input */}
            <div className="flex w-full h-[80px] sm:h-[100px] p-3 sm:p-4 items-start gap-2.5 rounded-2xl bg-dark-text/[0.04]">
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 h-full bg-transparent text-dark-text/[0.60] font-normal text-sm leading-5 placeholder:text-dark-text/[0.60] border-none outline-none resize-none"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-6 sm:mt-8 inline-flex px-8 sm:px-12 py-4 sm:py-5 justify-center items-center gap-2.5 rounded-[20px] bg-brand-blue text-white text-center font-medium text-sm leading-5 tracking-[-0.14px] h-[50px] sm:h-[60px] w-[140px] sm:w-[159px] hover:bg-brand-blue/90 transition-colors"
          >
            Let's Talk
          </Button>
        </form>

        {/* Background Image Section */}
        <div className="absolute right-0 top-0 w-[50%] sm:w-[55%] md:w-[622px] h-full md:h-[447px] overflow-hidden">
          <img
            src="/contact-form-background.png"
            alt="Contact form background"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
