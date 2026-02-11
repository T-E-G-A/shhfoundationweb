import CTAButton from '@/components/CTAButton';
import Card from '@/components/Card';
import { faHandHoldingHeart, faUsers, faGraduationCap, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F3F77] via-[#1E5AA6] to-[#0F3F77] dark:from-[#0A2D54] dark:via-[#0F3F77] dark:to-[#0A2D54] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMThjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnpNMTggMzZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
              Empowering Lives Through <span className="text-[#1FA35C]">Compassionate Care</span>
            </h1>
            <p className="text-lg md:text-xl mb-12 leading-relaxed text-gray-100 animate-fade-in animate-delay-100">
              Supporting children, young people, adults, and families affected by learning disabilities, special needs, and health conditions across Nigeria and Africa.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-200">
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
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3F77] dark:text-white mb-10 animate-fade-in">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in animate-delay-100">
              Our mission is to empower children, young people, adults, and families affected by learning disabilities, special needs, and health conditions by promoting inclusion, dignity, safety, and access to essential services, guided by compassion, professionalism, and strong governance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#131825]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F3F77] dark:text-white mb-16 animate-fade-in">
            Our Core Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            <Card className="text-center animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Advocacy & Support</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Supporting people with learning disabilities and vulnerable groups
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Care Services</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Professional care for elderly, children, and young people with disabilities
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Learning Academy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Skill acquisition training and educational programs
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHeartbeat} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3F77] dark:text-white mb-3">Health Outreach</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Medical outreach and free treatment missions
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#138A4B] to-[#1FA35C] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-fade-in">Make a Difference Today</h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Join us in our mission to create a more inclusive and compassionate society. Your support can change lives.
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
