import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Product } from '../types';
import { CONTACT_INFO } from '../data/brand';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Product Information');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setMessage(
        `Hello, I would like more information regarding ${selectedProduct.name} (${selectedProduct.netQuantity}, ${selectedProduct.currency}${selectedProduct.price}).`
      );
    } else {
      setMessage('');
    }

    setSubmitted(false);
    setErrorMessage('');
    setIsSubmitting(false);
  }, [selectedProduct, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);

      const submissionData = {
        access_key: 'e8e27f6f-d2d4-4085-aa81-9d10087cf6ae',
        subject: `New Website Enquiry — ${inquiryType}`,
        from_name: 'The Vedic Universe Website',
        name,
        email,
        phone,
        inquiry_type: inquiryType,
        product: selectedProduct
          ? `${selectedProduct.name} (${selectedProduct.netQuantity})`
          : 'General Website Enquiry',
        message,
      };

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(submissionData),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.message ||
            'We could not send your enquiry right now. Please try again.'
        );
      }
    } catch (error) {
      console.error('Enquiry submission error:', error);

      setErrorMessage(
        'Something went wrong while sending your enquiry. Please try again or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="enquiry-modal-overlay"
      className="fixed inset-0 z-50 bg-[#4A1710]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div
        id="enquiry-modal-card"
        className="w-full max-w-lg bg-[#DDB477] border border-[#DCD5C6] shadow-2xl p-6 sm:p-8 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1 text-[#FFF5E5] hover:text-[#4A1710] transition-colors"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Success State */}
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EBF2EA] text-[#394838] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl text-[#4A1710]">
              Thank You for Reaching Out
            </h3>

            <p className="text-sm text-[#FFF5E5] font-light leading-relaxed max-w-sm mx-auto">
              Your enquiry has been successfully sent. We will get back to you
              shortly at{' '}
              <strong className="font-medium text-[#4A1710]">
                {email || 'your email'}
              </strong>
              .
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-[#5A170E] text-[#FFF5E5] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#3D372E] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
<span className="text-[10px] tracking-[0.22em] uppercase text-[#4A1710] font-medium block mb-1">
  Direct Inquiries &amp; Customer Care
</span>

            <h3
              id="enquiry-modal-title"
              className="font-serif text-2xl sm:text-3xl text-[#4A1710] font-normal mb-2"
            >
              {selectedProduct
                ? `Enquire About ${selectedProduct.name}`
                : 'Connect with The Vedic Universe'}
            </h3>

            <p className="text-xs text-[#FFF5E5] font-light mb-6">
              Have questions regarding our botanical products, traditional
              usage, or wholesale distribution? Send us a message.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="block text-[11px] tracking-[0.16em] uppercase text-[#FFF5E5] font-medium mb-1"
                >
                  Your Name
                </label>

                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ananya Sharma"
                  className="w-full px-3.5 py-2.5 bg-[#FFF8ED] border border-[#D5CDBF] text-sm text-[#62594E] placeholder:text-[#E8DCCB] font-light focus:outline-none focus:border-[#A9783F] focus:ring-1 focus:ring-[#A9783F]"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Email */}
                <div>
                  <label
                    htmlFor="enquiry-email"
                    className="block text-[11px] tracking-[0.16em] uppercase text-[#FFF5E5] font-medium mb-1"
                  >
                    Email Address
                  </label>

                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#FFF8ED] border border-[#D5CDBF] text-sm text-[#62594E] placeholder:text-[#E8DCCB] font-light focus:outline-none focus:border-[#A9783F] focus:ring-1 focus:ring-[#A9783F]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="block text-[11px] tracking-[0.16em] uppercase text-[#FFF5E5] font-medium mb-1"
                  >
                    Phone / WhatsApp (Optional)
                  </label>

                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-[#FFF8ED] border border-[#D5CDBF] text-sm text-[#62594E] placeholder:text-[#E8DCCB] font-light focus:outline-none focus:border-[#A9783F] focus:ring-1 focus:ring-[#A9783F]"
                  />
                </div>

              </div>

              {/* Inquiry Type */}
              <div>
                <label
                  htmlFor="enquiry-type"
                  className="block text-[11px] tracking-[0.16em] uppercase text-[#FFF5E5] font-medium mb-1"
                >
                  Inquiry Topic
                </label>

                <select
                  id="enquiry-type"
                  name="inquiry_type"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FFF8ED] border border-[#D5CDBF] text-sm text-[#62594E] font-light focus:outline-none focus:border-[#A9783F]"
                >
                  <option value="Product Information">
                    Product Information
                  </option>

                  <option value="Usage Guidance">
                    Ayurvedic Usage Guidance
                  </option>

                  <option value="Wholesale / Retail Inquiry">
                    Wholesale / Retail Inquiry
                  </option>

                  <option value="General Brand Inquiry">
                    General Brand Inquiry
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="block text-[11px] tracking-[0.16em] uppercase text-[#FFF5E5] font-medium mb-1"
                >
                  Your Message
                </label>

                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your question or request..."
                  className="w-full px-3.5 py-2.5 bg-[#FFF8ED] border border-[#D5CDBF] text-sm text-[#62594E] placeholder:text-[#E8DCCB] font-light focus:outline-none focus:border-[#A9783F] focus:ring-1 focus:ring-[#A9783F]"
                />
              </div>

              {/* Hidden Product Information */}
              {selectedProduct && (
                <input
                  type="hidden"
                  name="product"
                  value={`${selectedProduct.name} (${selectedProduct.netQuantity})`}
                />
              )}

              {/* Spam Protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Error Message */}
              {errorMessage && (
                <div className="flex items-start gap-2.5 p-3.5 bg-[#F7EAEA] border border-[#D9BABA] text-[11px] text-[#6B3E3E] leading-relaxed">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />

                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="enquiry-submit-btn"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#5A170E] hover:bg-[#3D372E] disabled:opacity-60 disabled:cursor-not-allowed text-[#FFF5E5] text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />

                  <span>
                    {isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}
                  </span>
                </button>
              </div>

              {/* Direct Email */}
              <p className="text-[10px] text-[#FFF5E5] text-center pt-1 font-light">
                Direct inquiries can also be sent to{' '}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};