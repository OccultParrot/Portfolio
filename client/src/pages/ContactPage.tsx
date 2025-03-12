import { ChangeEvent, FormEvent, useState } from 'react';

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<IContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log the form information TODO: remove this once we are sending form data to backend
    console.log(formData);
  };
  console.log(isSubmitting);
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center text-gray-800 pb-4">
        Contact Me
      </h2>
      <p className="text-gray-600 text-lg text-center mb-12">
        Feel free to reach out! I'm always open to new opportunities and
        collaborations.
      </p>

      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* The name input */}
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

          {/* The email input */}
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

          {/* The message text area */}
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
              className={`inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors `}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}