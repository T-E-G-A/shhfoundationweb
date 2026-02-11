import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate | Syrilla Healthcare Helping Hands Foundation',
  description: 'Support our mission to empower individuals and families affected by learning disabilities and special needs.',
};

export default function Donate() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F3F77] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl">Your generosity helps us create lasting change in communities across Nigeria and Africa</p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F3F77] mb-6">Why Your Support Matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every donation to Syrilla Healthcare Helping Hands Foundation directly supports individuals and families affected by learning disabilities, special needs, and health conditions. Your contribution helps us provide essential services, expand our reach, and create more inclusive communities.
            </p>
          </div>

          {/* Impact Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Healthcare Access</h3>
              <p className="text-gray-700">
                Fund medical outreach missions and provide essential medicines and equipment
              </p>
            </Card>

            <Card className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Education & Training</h3>
              <p className="text-gray-700">
                Support skill acquisition programs and learning opportunities
              </p>
            </Card>

            <Card className="text-center">
              <div className="text-5xl mb-4">🤲</div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Care Services</h3>
              <p className="text-gray-700">
                Enable professional care and support for vulnerable individuals
              </p>
            </Card>

            <Card className="text-center">
              <div className="text-5xl mb-4">♿</div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Assistive Devices</h3>
              <p className="text-gray-700">
                Provide wheelchairs, mobility aids, and specialist equipment
              </p>
            </Card>

            <Card className="text-center">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Advocacy</h3>
              <p className="text-gray-700">
                Support legislative advocacy and rights protection initiatives
              </p>
            </Card>

            <Card className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Community Outreach</h3>
              <p className="text-gray-700">
                Expand awareness programs and community engagement
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#0F3F77] mb-8">How to Donate</h2>
            
            <Card className="mb-8">
              <h3 className="text-2xl font-bold text-[#138A4B] mb-4">Make a Donation Inquiry</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We currently process donations through direct contact to ensure transparency and provide personalized acknowledgment of your generous support. Our team will work with you to facilitate your donation and provide any information you need about how your contribution will be used.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                To make a donation or discuss partnership opportunities, please contact us using the button below. We accept various forms of contributions including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>One-time financial donations</li>
                <li>Monthly recurring support</li>
                <li>In-kind donations (medical equipment, assistive devices)</li>
                <li>Corporate sponsorships</li>
                <li>Memorial or honor donations</li>
              </ul>
              <div className="text-center">
                <CTAButton href="/contact" variant="primary">
                  Contact Us to Donate
                </CTAButton>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-[#138A4B] mb-4">Other Ways to Give</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beyond financial contributions, there are many ways to support our mission:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Volunteer your time and skills</li>
                <li>Organize fundraising events</li>
                <li>Donate medical equipment or assistive devices</li>
                <li>Sponsor specific programs or initiatives</li>
                <li>Share our mission with your network</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0F3F77] mb-6">Our Commitment to Transparency</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We are committed to strong governance and accountability. Every donation is used responsibly to support our programs and services. We maintain transparent financial practices and are happy to provide information about how your contribution makes a difference.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For questions about donations, financial reporting, or our governance practices, please contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#138A4B] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Every Contribution Counts</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether large or small, your donation helps us empower individuals and create more inclusive communities.
          </p>
          <CTAButton href="/contact" variant="secondary">
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
