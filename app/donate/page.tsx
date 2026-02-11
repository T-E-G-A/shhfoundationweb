import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHospital, 
  faBook, 
  faHandHoldingHeart,
  faWheelchair,
  faBullhorn,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate | Syrilla Healthcare Helping Hands Foundation',
  description: 'Support our mission to empower individuals and families affected by learning disabilities and special needs.',
};

export default function Donate() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0F3F77] to-[#1E5AA6] dark:from-[#0A2D54] dark:to-[#0F3F77] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Support Our Mission</h1>
          <p className="text-lg md:text-xl animate-fade-in animate-delay-100">Your generosity helps us create lasting change in communities across Nigeria and Africa</p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3F77] dark:text-white mb-10 animate-fade-in">Why Your Support Matters</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in animate-delay-100">
              Every donation to Syrilla Healthcare Helping Hands Foundation directly supports individuals and families affected by learning disabilities, special needs, and health conditions. Your contribution helps us provide essential services, expand our reach, and create more inclusive communities.
            </p>
          </div>

          {/* Impact Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-16">
            <Card className="text-center animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHospital} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Healthcare Access</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Fund medical outreach missions and provide essential medicines and equipment
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faBook} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Education & Training</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Support skill acquisition programs and learning opportunities
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Care Services</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Enable professional care and support for vulnerable individuals
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faWheelchair} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Assistive Devices</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Provide wheelchairs, mobility aids, and specialist equipment
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-400">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faBullhorn} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Advocacy</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Support legislative advocacy and rights protection initiatives
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-500">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faGlobe} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Community Outreach</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Expand awareness programs and community engagement
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-[#131825]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F3F77] dark:text-white mb-12 animate-fade-in">How to Donate</h2>
            
            <Card className="mb-12 animate-fade-in animate-delay-100">
              <h3 className="text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-4">Make a Donation Inquiry</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10 text-sm">
                We currently process donations through direct contact to ensure transparency and provide personalized acknowledgment of your generous support. Our team will work with you to facilitate your donation and provide any information you need about how your contribution will be used.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10 text-sm">
                To make a donation or discuss partnership opportunities, please contact us using the button below. We accept various forms of contributions including:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-10 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>One-time financial donations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Monthly recurring support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>In-kind donations (medical equipment, assistive devices)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Corporate sponsorships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Memorial or honor donations</span>
                </li>
              </ul>
              <div className="text-center">
                <CTAButton href="/contact" variant="primary">
                  Contact Us to Donate
                </CTAButton>
              </div>
            </Card>

            <Card className="animate-fade-in animate-delay-200">
              <h3 className="text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-4">Other Ways to Give</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                Beyond financial contributions, there are many ways to support our mission:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Volunteer your time and skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Organize fundraising events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Donate medical equipment or assistive devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Sponsor specific programs or initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Share our mission with your network</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3F77] dark:text-white mb-10 animate-fade-in">Our Commitment to Transparency</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12 animate-fade-in animate-delay-100">
              We are committed to strong governance and accountability. Every donation is used responsibly to support our programs and services. We maintain transparent financial practices and are happy to provide information about how your contribution makes a difference.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in animate-delay-200">
              For questions about donations, financial reporting, or our governance practices, please contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#138A4B] to-[#1FA35C] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-fade-in">Every Contribution Counts</h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Whether large or small, your donation helps us empower individuals and create more inclusive communities.
          </p>
          <div className="animate-fade-in animate-delay-200">
            <CTAButton href="/contact" variant="secondary">
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
