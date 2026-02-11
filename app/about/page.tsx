import Image from 'next/image';
import Card from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Syrilla Healthcare Helping Hands Foundation',
  description: 'Learn about our foundation, our story, and the dedicated founders working to empower communities across Nigeria and Africa.',
};

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F3F77] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Our story, mission, and the people behind our work</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0F3F77] mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Syrilla Healthcare Helping Hands Foundation was established in 2025 from the lived experience of the Founder and Co-Founder while raising a child diagnosed with cerebral palsy in Nigeria.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Foundation was created to provide meaningful support, advocacy, and care to individuals and communities with additional needs. It is rooted in compassion, direct experience, and a desire to bridge healthcare and social support gaps.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a registered foundation operating across Nigeria with a vision for wider African outreach, we are committed to promoting inclusion, dignity, safety, and access to essential services for all.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0F3F77] mb-12">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Cyril */}
            <Card className="text-center">
              <div className="mb-6">
                <Image
                  src="/cyril.jpeg"
                  alt="Cyril Idoko Akubo"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0F3F77] mb-2">Cyril Idoko Akubo</h3>
              <p className="text-[#138A4B] font-semibold mb-4">Founder / Chairman</p>
              <p className="text-gray-700 leading-relaxed">
                Parent and professional carer with trained information technology expertise and over 10 years working experience in both public and private sectors in Nigeria and the United Kingdom.
              </p>
            </Card>

            {/* Joy */}
            <Card className="text-center">
              <div className="mb-6">
                <Image
                  src="/joy.jpeg"
                  alt="Joy Urah Akubo"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0F3F77] mb-2">Joy Urah Akubo</h3>
              <p className="text-[#138A4B] font-semibold mb-4">Co-Founder / Pioneer Secretary</p>
              <p className="text-gray-700 leading-relaxed">
                Parent and professional carer with over 8 years experience as an unpaid parent carer and paid carer in the United Kingdom. Trained geography and planning specialist and passionate advocate for children and young people with special needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0F3F77] mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <h3 className="text-2xl font-bold text-[#138A4B] mb-4">Compassion</h3>
              <p className="text-gray-700">
                We approach every individual with empathy, understanding, and genuine care.
              </p>
            </Card>

            <Card className="text-center">
              <h3 className="text-2xl font-bold text-[#138A4B] mb-4">Professionalism</h3>
              <p className="text-gray-700">
                We maintain the highest standards in all our services and operations.
              </p>
            </Card>

            <Card className="text-center">
              <h3 className="text-2xl font-bold text-[#138A4B] mb-4">Strong Governance</h3>
              <p className="text-gray-700">
                We operate with transparency, accountability, and ethical integrity.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
