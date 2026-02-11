import Image from 'next/image';
import Card from '@/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBriefcase, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Syrilla Healthcare Helping Hands Foundation',
  description: 'Learn about our foundation, our story, and the dedicated founders working to empower communities across Nigeria and Africa.',
};

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0F3F77] to-[#1E5AA6] dark:from-[#0A2D54] dark:to-[#0F3F77] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">About Us</h1>
          <p className="text-lg md:text-xl animate-fade-in animate-delay-100">Our story, mission, and the people behind our work</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3F77] dark:text-white mb-6 animate-fade-in">Our Story</h2>
            <div className="space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="animate-fade-in animate-delay-100">
                Syrilla Healthcare Helping Hands Foundation was established in 2025 from the lived experience of the Founder and Co-Founder while raising a child diagnosed with cerebral palsy in Nigeria.
              </p>
              <p className="animate-fade-in animate-delay-200">
                The Foundation was created to provide meaningful support, advocacy, and care to individuals and communities with additional needs. It is rooted in compassion, direct experience, and a desire to bridge healthcare and social support gaps.
              </p>
              <p className="animate-fade-in animate-delay-300">
                As a registered foundation operating across Nigeria with a vision for wider African outreach, we are committed to promoting inclusion, dignity, safety, and access to essential services for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-[#131825]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F3F77] dark:text-white mb-12 animate-fade-in">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Cyril */}
            <Card className="text-center animate-fade-in">
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#138A4B] dark:border-[#1FA35C] shadow-lg">
                  <Image
                    src="/cyril.jpeg"
                    alt="Cyril Idoko Akubo"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0F3F77] dark:text-white mb-2">Cyril Idoko Akubo</h3>
              <p className="text-[#138A4B] dark:text-[#1FA35C] font-semibold mb-4">Founder / Chairman</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                Parent and professional carer with trained information technology expertise and over 10 years working experience in both public and private sectors in Nigeria and the United Kingdom.
              </p>
            </Card>

            {/* Joy */}
            <Card className="text-center animate-fade-in animate-delay-100">
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#138A4B] dark:border-[#1FA35C] shadow-lg">
                  <Image
                    src="/joy.jpeg"
                    alt="Joy Urah Akubo"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0F3F77] dark:text-white mb-2">Joy Urah Akubo</h3>
              <p className="text-[#138A4B] dark:text-[#1FA35C] font-semibold mb-4">Co-Founder / Pioneer Secretary</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                Parent and professional carer with over 8 years experience as an unpaid parent carer and paid carer in the United Kingdom. Trained geography and planning specialist and passionate advocate for children and young people with special needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F3F77] dark:text-white mb-12 animate-fade-in">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="text-center animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-4">Compassion</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                We approach every individual with empathy, understanding, and genuine care.
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faBriefcase} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-4">Professionalism</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                We maintain the highest standards in all our services and operations.
              </p>
            </Card>

            <Card className="text-center animate-fade-in animate-delay-200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#138A4B] dark:text-[#1FA35C] mb-4">Strong Governance</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                We operate with transparency, accountability, and ethical integrity.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
