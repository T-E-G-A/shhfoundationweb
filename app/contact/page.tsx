import Card from '@/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faExternalLinkAlt, faHandHoldingHeart, faUserPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Syrilla Healthcare Helping Hands Foundation',
  description: 'Get in touch with us to request support, volunteer, or make a donation inquiry.',
};

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0F3F77] to-[#1E5AA6] dark:from-[#0A2D54] dark:to-[#0F3F77] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-lg md:text-xl animate-fade-in animate-delay-100">We are here to help and support you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <div className="animate-fade-in">
              <Card hover={false}>
                <h2 className="text-3xl font-bold text-[#0F3F77] dark:text-white mb-10">Contact Information</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-[#1A2030] transition-all duration-300 hover:shadow-md">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-[#0F3F77] dark:text-white">Email</h3>
                      <a href="mailto:info@shhhfoundation.org" className="text-[#1E5AA6] dark:text-[#1FA35C] hover:underline text-sm">
                        info@shhhfoundation.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-[#1A2030] transition-all duration-300 hover:shadow-md">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-[#0F3F77] dark:text-white">Phone / WhatsApp</h3>
                      <a href="tel:+2349037542055" className="text-[#1E5AA6] dark:text-[#1FA35C] hover:underline text-sm">
                        +234 903 754 2055
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-[#1A2030] transition-all duration-300 hover:shadow-md">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-[#0F3F77] dark:text-white">Address</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Plot 784A Herbert Macaulay Way<br />
                        CBD Abuja<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-[#2A3447] pt-6 mb-12">
                  <h3 className="font-semibold text-lg mb-4 text-[#0F3F77] dark:text-white">Follow Us</h3>
                  <a
                    href="https://www.facebook.com/people/Syrilla-HealthCare-Helping-Hands-Foundation/61556988760462/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1E5AA6] dark:text-[#1FA35C] hover:text-[#138A4B] dark:hover:text-[#1FA35C] text-lg transition-colors"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                    <span>Facebook</span>
                  </a>
                </div>

                <div className="border-t border-gray-200 dark:border-[#2A3447] pt-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-10 text-sm">
                    To request support, volunteer, or make a donation inquiry, please complete our secure contact form.
                  </p>
                  <a
                    href="https://youform-link-placeholder.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#138A4B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1FA35C] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    View Contact Form
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </Card>
            </div>

            {/* Google Map */}
            <div className="animate-fade-in animate-delay-100">
              <Card hover={false} className="h-full">
                <h2 className="text-3xl font-bold text-[#0F3F77] dark:text-white mb-10">Find Us</h2>
                <div className="w-full h-[500px] rounded-xl overflow-hidden">
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

      {/* We Are Here for You */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-[#131825]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3F77] dark:text-white mb-10 animate-fade-in">We Are Here for You</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-16 animate-fade-in animate-delay-100">
              Whether you need support, want to volunteer, or have questions about our programs, we welcome your inquiry. Our team is committed to responding promptly and providing the assistance you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-[#138A4B] dark:text-[#1FA35C] mb-2">Request Support</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Reach out if you or someone you know needs our services
                </p>
              </Card>
              
              <Card className="text-center animate-fade-in animate-delay-100">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faUserPlus} className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-[#138A4B] dark:text-[#1FA35C] mb-2">Volunteer</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Join our team and make a direct impact in communities
                </p>
              </Card>
              
              <Card className="text-center animate-fade-in animate-delay-200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faHeart} className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-[#138A4B] dark:text-[#1FA35C] mb-2">Donate</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Support our mission through financial or in-kind contributions
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
