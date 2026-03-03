import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaGithub, FaWhatsapp, FaPhone } from "react-icons/fa";
import { toast } from "sonner";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xreawrvb");

  // Show toast when form succeeds
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out. I'll get back to you soon!",
        duration: 5000,
      });
    }
  }, [state.succeeded]);

  // Show toast when there are errors
  useEffect(() => {
    if (state.errors) {
      // Check if there are any field-specific errors
      const hasErrors = Object.keys(state.errors).length > 0;
      if (hasErrors) {
        toast.error("Failed to send message", {
          description: "Please check the form for errors and try again.",
          duration: 5000,
        });
      }
    }
  }, [state.errors]);

  // Custom submit handler with loading toast
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    try {
      await handleSubmit(e);
      toast.dismiss(loadingToast);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong", {
        description: "Please try again or use direct contact methods.",
      });
    }
  };

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 border-t border-border/40"
      >
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="bg-card p-8 rounded-2xl shadow-concave">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Message Sent!
            </h3>
            <p className="text-muted-foreground">
              Thanks for reaching out! I'll get back to you as soon as possible.
            </p>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="mt-6"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 border-t border-border/40"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Contact Me
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to reach out? Use the form or any of
            my direct contacts below.
          </p>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
          <a
            href="https://github.com/Kibetkipsang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl input-concave text-foreground hover:bg-accent-blue hover:text-white transition-colors"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://wa.me/254719165008"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl input-concave text-foreground hover:bg-green-500 hover:text-white transition-colors"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="tel:+254719165008"
            className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl input-concave text-foreground hover:bg-accent-red hover:text-white transition-colors"
          >
            <FaPhone /> Call Me
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="grid gap-6 mt-12 border border-border/40 rounded-2xl p-6 sm:p-8 shadow-concave bg-card"
          onSubmit={onSubmit}
        >
          <div>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="input-concave border border-border/40 placeholder:text-muted-foreground text-foreground"
              required
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-sm text-red-500 mt-1"
            />
          </div>

          <div>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="input-concave border border-border/40 placeholder:text-muted-foreground text-foreground"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-sm text-red-500 mt-1"
            />
          </div>

          <div>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="input-concave border border-border/40 placeholder:text-muted-foreground text-foreground min-h-30"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-sm text-red-500 mt-1"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto self-end button-concave"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        <p className="text-xs text-center text-muted-foreground">
          Your information will be sent securely via Formspree.
        </p>
      </div>
    </section>
  );
};
