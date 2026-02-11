import Card from '@/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Syrilla Healthcare Helping Hands Foundation',
  description: 'Get in touch with us to request support, volunteer, or make a donation inquiry.',
};

export default function Contact() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F3F77] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We are here to help and support you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <div>
              <Card>
                <h2 className="text-3xl font-bold text-[#0F3F77] mb-6">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="text-[#138A4B] text-2xl mt-1">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:info@shhhfoundation.org" className="text-[#1E5AA6] hover:underline">
                        info@shhhfoundation.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#138A4B] text-2xl mt-1">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone / WhatsApp</h3>
                      <a href="tel:+2349037542055" className="text-[#1E5AA6] hover:underline">
                        +234 903 754 2055
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#138A4B] text-2xl mt-1">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <p className="text-gray-700">
                        Plot 784A Herbert Macaulay Way<br />
                        CBD Abuja<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mb-8">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1E5AA6] hover:text-[#138A4B] text-xl"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                    <span>Facebook</span>
                  </a>
                </div>

                <div className="border-t pt-6">
                  <p className="text-gray-700 mb-6">
                    To request support, volunteer, or make a donation inquiry, please complete our secure contact form.
                  </p>
                  <a
                    href="https://typeform-link-placeholder.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#138A4B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1FA35C] transition-all duration-300 hover:shadow-lg"
                  >
                    View Contact Form
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </Card>
            </div>

            {/* Google Map */}
            <div>
              <Card className="h-full">
                <h2 className="text-3xl font-bold text-[#0F3F77] mb-6">Find Us</h2>
                <div className="w-full h-[500px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.143461637115!2d7.48496157490949!3d9.050675991011543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba3c4c0a7e1%3A0x250b55b34f243f4!2s784A%20Herbert%20Macaulay%20Wy%2C%20Central%20Business%20Dis%2C%20Abuja%20900103%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1770820688139!5m2!1sen!2suk"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Syrilla Healthcare Helping Hands Foundation Location"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0F3F77] mb-6">We Are Here for You</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether you need support, want to volunteer, or have questions about our programs, we welcome your inquiry. Our team is committed to responding promptly and providing the assistance you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-[#138A4B] mb-2">Request Support</h3>
                <p className="text-gray-700 text-sm">
                  Reach out if you or someone you know needs our services
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-[#138A4B] mb-2">Volunteer</h3>
                <p className="text-gray-700 text-sm">
                  Join our team and make a direct impact in communities
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-[#138A4B] mb-2">Donate</h3>
                <p className="text-gray-700 text-sm">
                  Support our mission through financial or in-kind contributions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
