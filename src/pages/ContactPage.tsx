import {ChangeEvent, FormEvent, useState} from 'react';
// import { BackendUrl } from '../config.tsx';
import {IMessage} from '../types.ts';

import emailjs from '@emailjs/browser';


export default function ContactPage() {
  const [formData, setFormData] = useState<IMessage>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isOperationFinished, setIsOperationFinished] = useState(false);
  const [operationState, setOperationState] = useState<"success" | "error">("error");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Setting the operation state
      setOperationState("success");

      emailjs.init({
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        blockHeadless: true,
        limitRate: {
          id: 'app',
          throttle: 1000,
        }
      })

      const templateParams = {
        name: formData.name,
        email: formData.email,
        time: new Date().toLocaleString(),
        message: formData.message,
      }

      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams);
      console.log('SUCCESS!');

      // Add a fake delay to mke the "Sending..." message visible longer
      await new Promise(resolve => setTimeout(resolve, 500));

      // Set success state to true
      setIsOperationFinished(true);
      setTimeout(() => setIsOperationFinished(false), 3000); // Hide message after 3 seconds

      // Reset form state after successful submission and delay
      setIsSubmitting(false);

      // Clear form data
      setFormData({
        name: '',
        email: '',
        message: '',
      });

    } catch (err) {
      // Setting the operation state
      setOperationState("error");
      console.error('Error sending email:', err);

      // Add a fake delay even on error to keep the "Sending..." message visible longer
      await new Promise(resolve => setTimeout(resolve, 500));

      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center text-gray-800 pb-4">
        Contact Me
      </h2>
      <p className="text-gray-600 text-lg text-center mb-12">
        Feel free to reach out! I'm always open to new opportunities and
        collaborations.
      </p>

      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Name input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:ring-blue-500 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition-all duration-300 ease-in-out outline-none"
              required
            />
          </div>

          {/* Email input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:ring-blue-500 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition-all duration-300 ease-in-out outline-none"
              required
            />
          </div>

          {/* Message textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message"
              className="w-full resize-none px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:ring-blue-500 hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition-all duration-300 ease-in-out outline-none"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>


          <div
            className={`mb-4 p-3 ${operationState == "success" ? "text-green-800 bg-green-200 border border-green-400" : "text-red-800 bg-red-200 border border-red-400"}  rounded-md text-center transition opacity-${isOperationFinished ? '100' : '0'} ease-in-out duration-400`}>
            {operationState == "success" ? (<span>Message Successfully Sent!</span>) : (
              <span>Error Occurred While Sending Message!</span>)}
          </div>
        </div>
      </form>
    </section>
  );
}