import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved | Syrilla Healthcare Helping Hands Foundation',
  description: 'Join us in making a difference. Volunteer, donate, or partner with us to support communities in need.',
};

export default function GetInvolved() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F3F77] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl">Join us in creating positive change in communities across Nigeria and Africa</p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0F3F77] mb-12">Ways to Make a Difference</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-[#0F3F77] mb-4">Volunteer</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Share your time, skills, and passion to support our programs and make a direct impact in the lives of those we serve.
              </p>
              <CTAButton href="/contact" variant="primary">
                Become a Volunteer
              </CTAButton>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-6">💝</div>
              <h3 className="text-2xl font-bold text-[#0F3F77] mb-4">Donate</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your financial support helps us expand our programs, reach more communities, and provide essential services.
              </p>
              <CTAButton href="/donate" variant="primary">
                Make a Donation
              </CTAButton>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-6">🤲</div>
              <h3 className="text-2xl font-bold text-[#0F3F77] mb-4">Request Support</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you or someone you know needs our services, reach out to us. We are here to help and support you.
              </p>
              <CTAButton href="/contact" variant="primary">
                Request Support
              </CTAButton>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0F3F77] mb-12">Volunteer Opportunities</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <h3 className="text-2xl font-bold text-[#138A4B] mb-3">Care Support Volunteers</h3>
              <p className="text-gray-700 leading-relaxed">
                Assist our professional care team in providing compassionate support to individuals with disabilities and special needs.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-[#138A4B] mb-3">Training Facilitators</h3>
              <p className="text-gray-700 leading-relaxed">
                Share your expertise by facilitating skill acquisition training, first aid courses, or health and wellbeing workshops.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-[#138A4B] mb-3">Outreach Volunteers</h3>
              <p className="text-gray-700 leading-relaxed">
                Join our medical outreach missions and community awareness programs to bring services directly to underserved areas.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-[#138A4B] mb-3">Administrative Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Help with administrative tasks, event planning, communications, or other behind-the-scenes work that keeps our foundation running.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#0F3F77] mb-8">Partnership Opportunities</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
              We welcome partnerships with organizations, businesses, and institutions that share our commitment to creating inclusive and supportive communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-xl font-bold text-[#138A4B] mb-3">Corporate Partnerships</h3>
                <p className="text-gray-700 leading-relaxed">
                  Collaborate with us through corporate social responsibility programs, employee volunteer initiatives, or financial sponsorship.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-[#138A4B] mb-3">Healthcare Providers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Partner with us to expand healthcare access through medical outreach programs and equipment distribution.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-[#138A4B] mb-3">Educational Institutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Work with us to develop training programs, research initiatives, and student volunteer opportunities.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-[#138A4B] mb-3">Community Organizations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Join forces to amplify our impact through collaborative programs and shared resources.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#138A4B] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about how you can get involved and support our mission.
          </p>
          <CTAButton href="/contact" variant="secondary">
            Contact Us
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
