import Card from '@/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlobe, 
  faHandsHelping, 
  faBullhorn, 
  faRocket,
  faUsers,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Impact | Syrilla Healthcare Helping Hands Foundation',
  description: 'See the difference we are making in communities across Nigeria and Africa through our programs and services.',
};

export default function Impact() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0F3F77] to-[#1E5AA6] dark:from-[#0A2D54] dark:to-[#0F3F77] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Impact</h1>
          <p className="text-lg md:text-xl animate-fade-in animate-delay-100">Creating lasting change in communities across Nigeria and Africa</p>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3F77] dark:text-white mb-10 animate-fade-in">Making a Difference</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in animate-delay-100">
              Since our establishment in 2025, Syrilla Healthcare Helping Hands Foundation has been committed to creating meaningful change in the lives of individuals and families affected by learning disabilities, special needs, and health conditions.
            </p>
          </div>

          {/* Impact Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-16">
            <Card className="animate-fade-in">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faGlobe} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-2">Community Reach</h3>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                Our programs extend across Nigeria with plans for wider African outreach, bringing essential services to underserved communities.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Urban and rural community engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Partnerships with local organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Grassroots awareness campaigns</span>
                </li>
              </ul>
            </Card>

            <Card className="animate-fade-in animate-delay-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandsHelping} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-2">Service Delivery</h3>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                We provide comprehensive support services guided by compassion, professionalism, and strong governance.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Direct care and support services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Educational and training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Medical outreach missions</span>
                </li>
              </ul>
            </Card>

            <Card className="animate-fade-in animate-delay-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faBullhorn} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-2">Advocacy Impact</h3>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                We advocate for systemic change and improved policies to benefit individuals with special needs.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Legislative advocacy initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Rights protection campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Policy development support</span>
                </li>
              </ul>
            </Card>

            <Card className="animate-fade-in animate-delay-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={faRocket} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-2">Empowerment Focus</h3>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                We empower individuals through skill development and access to essential resources.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Skill acquisition training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Distribution of assistive devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#138A4B] dark:text-[#1FA35C] mt-1">•</span>
                  <span>Employment support programs</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-[#131825]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F3F77] dark:text-white mb-16 animate-fade-in">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} className="text-white text-3xl" />
              </div>
              <div className="text-5xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-4">Inclusion</div>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Promoting inclusive communities where everyone belongs
              </p>
            </div>

            <div className="text-center animate-fade-in animate-delay-100">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHandshake} className="text-white text-3xl" />
              </div>
              <div className="text-5xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-4">Dignity</div>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Ensuring respectful and dignified care for all individuals
              </p>
            </div>

            <div className="text-center animate-fade-in animate-delay-200">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHandsHelping} className="text-white text-3xl" />
              </div>
              <div className="text-5xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-4">Access</div>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Providing access to essential services and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0F3F77] to-[#1E5AA6] dark:from-[#0A2D54] dark:to-[#0F3F77] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-fade-in">Be Part of Our Impact</h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Your support helps us expand our reach and deepen our impact in communities across Nigeria and Africa.
          </p>
          <a
            href="/get-involved"
            className="inline-block bg-[#138A4B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1FA35C] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animate-delay-200"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}
