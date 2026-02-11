import Card from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Impact | Syrilla Healthcare Helping Hands Foundation',
  description: 'See the difference we are making in communities across Nigeria and Africa through our programs and services.',
};

export default function Impact() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F3F77] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-xl">Creating lasting change in communities across Nigeria and Africa</p>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F3F77] mb-6">Making a Difference</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since our establishment in 2025, Syrilla Healthcare Helping Hands Foundation has been committed to creating meaningful change in the lives of individuals and families affected by learning disabilities, special needs, and health conditions.
            </p>
          </div>

          {/* Impact Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <h3 className="text-2xl font-bold text-[#138A4B] mb-4">Community Reach</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our programs extend across Nigeria with plans for wider African outreach, bringing essential services to underserved communities.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Urban and rural community engagement</li>
                <li>Partnerships with local organizations</li>
                <li>Grassroots awareness campaigns</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-[#138A4B] mb-4">Service Delivery</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide comprehensive support services guided by compassion, professionalism, and strong governance.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Direct care and support services</li>
                <li>Educational and training programs</li>
                <li>Medical outreach missions</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-[#138A4B] mb-4">Advocacy Impact</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We advocate for systemic change and improved policies to benefit individuals with special needs.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Legislative advocacy initiatives</li>
                <li>Rights protection campaigns</li>
                <li>Policy development support</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-[#138A4B] mb-4">Empowerment Focus</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We empower individuals through skill development and access to essential resources.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Skill acquisition training</li>
                <li>Distribution of assistive devices</li>
                <li>Employment support programs</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0F3F77] mb-12">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#138A4B] mb-4">Inclusion</div>
              <p className="text-lg text-gray-700">
                Promoting inclusive communities where everyone belongs
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-[#138A4B] mb-4">Dignity</div>
              <p className="text-lg text-gray-700">
                Ensuring respectful and dignified care for all individuals
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-[#138A4B] mb-4">Access</div>
              <p className="text-lg text-gray-700">
                Providing access to essential services and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0F3F77] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Impact</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps us expand our reach and deepen our impact in communities across Nigeria and Africa.
          </p>
          <a
            href="/get-involved"
            className="inline-block bg-[#138A4B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1FA35C] transition-colors duration-300"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}
