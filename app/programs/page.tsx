import Card from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Programs | Syrilla Healthcare Helping Hands Foundation',
  description: 'Discover our comprehensive programs supporting individuals with learning disabilities, special needs, and health conditions.',
};

export default function Programs() {
  const programs = [
    {
      title: 'Advocacy and Support',
      description: 'Comprehensive advocacy and support services for people with learning disabilities and vulnerable groups, ensuring their voices are heard and rights protected.',
    },
    {
      title: 'Care and Support Services',
      description: 'Professional care and support services for elderly individuals, children, and young people with permanent disabilities, delivered with dignity and compassion.',
    },
    {
      title: 'Learning Academy',
      description: 'Skill acquisition training programs designed to empower individuals with practical skills for independence and employment.',
    },
    {
      title: 'Community Awareness Programs',
      description: 'Prevention and awareness initiatives focused on long-term health conditions, promoting community health and wellbeing.',
    },
    {
      title: 'First Aid and Emergency Response',
      description: 'Training programs in first aid and emergency response, equipping community members with life-saving skills.',
    },
    {
      title: 'Health and Workplace Wellbeing',
      description: 'Comprehensive health and workplace wellbeing training to promote healthy lifestyles and safe work environments.',
    },
    {
      title: 'Medical Equipment Distribution',
      description: 'Distribution of medicines, assistive devices, and specialist equipment to those in need, improving quality of life and independence.',
    },
    {
      title: 'Medical Outreach Missions',
      description: 'Free medical outreach and treatment missions bringing healthcare services to underserved communities.',
    },
    {
      title: 'Legislative Advocacy',
      description: 'Advocacy for improved health and social care legislation, working to create systemic change and better policies.',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F3F77] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl">Comprehensive services supporting communities across Nigeria and Africa</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#0F3F77] mb-4">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#138A4B] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to find out how our programs can support you or your community.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#138A4B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
