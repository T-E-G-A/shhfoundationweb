import CTAButton from '@/components/CTAButton';
import Card from '@/components/Card';
import { faHandHoldingHeart, faUsers, faGraduationCap, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0F3F77] to-[#1E5AA6] text-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Empowering Lives Through Compassionate Care
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Supporting children, young people, adults, and families affected by learning disabilities, special needs, and health conditions across Nigeria and Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/get-involved" variant="primary">
                Get Involved
              </CTAButton>
              <CTAButton href="/donate" variant="secondary">
                Donate Now
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-[#0F3F77] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower children, young people, adults, and families affected by learning disabilities, special needs, and health conditions by promoting inclusion, dignity, safety, and access to essential services, guided by compassion, professionalism, and strong governance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0F3F77] mb-12">Our Core Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#138A4B] text-5xl mb-4">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Advocacy & Support</h3>
              <p className="text-gray-600">
                Supporting people with learning disabilities and vulnerable groups
              </p>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#138A4B] text-5xl mb-4">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Care Services</h3>
              <p className="text-gray-600">
                Professional care for elderly, children, and young people with disabilities
              </p>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#138A4B] text-5xl mb-4">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Learning Academy</h3>
              <p className="text-gray-600">
                Skill acquisition training and educational programs
              </p>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#138A4B] text-5xl mb-4">
                <FontAwesomeIcon icon={faHeartbeat} />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] mb-3">Health Outreach</h3>
              <p className="text-gray-600">
                Medical outreach and free treatment missions
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#138A4B] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to create a more inclusive and compassionate society. Your support can change lives.
          </p>
          <CTAButton href="/contact" variant="secondary">
            Contact Us
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
