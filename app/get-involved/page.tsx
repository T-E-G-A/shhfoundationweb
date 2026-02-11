import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faHeart, 
  faHandHoldingHeart,
  faUserNurse,
  faChalkboardTeacher,
  faTruckMedical,
  faFileAlt,
  faBuilding,
  faHospital,
  faUniversity,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved | Syrilla Healthcare Helping Hands Foundation',
  description: 'Join us in making a difference. Volunteer, donate, or partner with us to support communities in need.',
};

export default function GetInvolved() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0F3F77] to-[#1E5AA6] dark:from-[#0A2D54] dark:to-[#0F3F77] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Get Involved</h1>
          <p className="text-lg md:text-xl animate-fade-in animate-delay-100">Join us in creating positive change in communities across Nigeria and Africa</p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F3F77] dark:text-white mb-16 animate-fade-in">Ways to Make a Difference</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16">
            <Card className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-10 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHandshake} className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F3F77] dark:text-white mb-4">Volunteer</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10 text-sm">
                Share your time, skills, and passion to support our programs and make a direct impact in the lives of those we serve.
              </p>
              <CTAButton href="/contact" variant="primary">
                Become a Volunteer
              </CTAButton>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-100">
              <div className="w-20 h-20 mx-auto mb-10 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F3F77] dark:text-white mb-4">Donate</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10 text-sm">
                Your financial support helps us expand our programs, reach more communities, and provide essential services.
              </p>
              <CTAButton href="/donate" variant="primary">
                Make a Donation
              </CTAButton>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-200">
              <div className="w-20 h-20 mx-auto mb-10 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F3F77] dark:text-white mb-4">Request Support</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10 text-sm">
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
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-[#131825]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F3F77] dark:text-white mb-16 animate-fade-in">Volunteer Opportunities</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faUserNurse} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-3">Care Support Volunteers</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Assist our professional care team in providing compassionate support to individuals with disabilities and special needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="animate-fade-in animate-delay-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-3">Training Facilitators</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Share your expertise by facilitating skill acquisition training, first aid courses, or health and wellbeing workshops.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="animate-fade-in animate-delay-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faTruckMedical} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-3">Outreach Volunteers</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Join our medical outreach missions and community awareness programs to bring services directly to underserved areas.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="animate-fade-in animate-delay-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faFileAlt} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-3">Administrative Support</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Help with administrative tasks, event planning, communications, or other behind-the-scenes work that keeps our foundation running.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F3F77] dark:text-white mb-12 animate-fade-in">Partnership Opportunities</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-16 animate-fade-in animate-delay-100">
              We welcome partnerships with organizations, businesses, and institutions that share our commitment to creating inclusive and supportive communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <Card className="animate-fade-in">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                    <FontAwesomeIcon icon={faBuilding} className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#138A4B] dark:text-[#1FA35C] mt-2">Corporate Partnerships</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  Collaborate with us through corporate social responsibility programs, employee volunteer initiatives, or financial sponsorship.
                </p>
              </Card>

              <Card className="animate-fade-in animate-delay-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                    <FontAwesomeIcon icon={faHospital} className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#138A4B] dark:text-[#1FA35C] mt-2">Healthcare Providers</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  Partner with us to expand healthcare access through medical outreach programs and equipment distribution.
                </p>
              </Card>

              <Card className="animate-fade-in animate-delay-200">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                    <FontAwesomeIcon icon={faUniversity} className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#138A4B] dark:text-[#1FA35C] mt-2">Educational Institutions</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  Work with us to develop training programs, research initiatives, and student volunteer opportunities.
                </p>
              </Card>

              <Card className="animate-fade-in animate-delay-300">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                    <FontAwesomeIcon icon={faUsers} className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#138A4B] dark:text-[#1FA35C] mt-2">Community Organizations</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  Join forces to amplify our impact through collaborative programs and shared resources.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#138A4B] to-[#1FA35C] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-fade-in">Ready to Make a Difference?</h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Contact us today to learn more about how you can get involved and support our mission.
          </p>
          <div className="animate-fade-in animate-delay-200">
            <CTAButton href="/contact" variant="secondary">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
