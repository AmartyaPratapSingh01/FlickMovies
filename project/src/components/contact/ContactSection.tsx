import { Mail, Phone, User } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our public domain movies? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <User className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Amartya Pratap Singh</p>
                    <p className="text-gray-600">Primary Contact</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">contact@example.com</p>
                    <p className="text-gray-600">Email us anytime</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">+91-1234567890</p>
                    <p className="text-gray-600">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}