import Card from '@/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullhorn, 
  faHandHoldingHeart, 
  faGraduationCap, 
  faLightbulb,
  faBriefcaseMedical,
  faHeartPulse,
  faBoxOpen,
  faStethoscope,
  faScaleBalanced
} from '@fortawesome/free-solid-svg-icons';
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
      icon: faBullhorn,
    },
    {
      title: 'Care and Support Services',
      description: 'Professional care and support services for elderly individuals, children, and young people with permanent disabilities, delivered with dignity and compassion.',
      icon: faHandHoldingHeart,
    },
    {
      title: 'Learning Academy',
      description: 'Skill acquisition training programs designed to empower individuals with practical skills for independence and employment.',
      icon: faGraduationCap,
    },
    {
      title: 'Community Awareness Programs',
      description: 'Prevention and awareness initiatives focused on long-term health conditions, promoting community health and wellbeing.',
      icon: faLightbulb,
    },
    {
      title: 'First Aid and Emergency Response',
      description: 'Training programs in first aid and emergency response, equipping community members with life-saving skills.',
      icon: faBriefcaseMedical,
    },
    {
      title: 'Health and Workplace Wellbeing',
      description: 'Comprehensive health and workplace wellbeing training to promote healthy lifestyles and safe work environments.',
      icon: faHeartPulse,
    },
    {
      title: 'Medical Equipment Distribution',
      description: 'Distribution of medicines, assistive devices, and specialist equipment to those in need, improving quality of life and independence.',
      icon: faBoxOpen,
    },
    {
      title: 'Medical Outreach Missions',
      description: 'Free medical outreach and treatment missions bringing healthcare services to underserved communities.',
      icon: faStethoscope,
    },
    {
      title: 'Legislative Advocacy',
      description: 'Advocacy for improved health and social care legislation, working to create systemic change and better policies.',
      icon: faScaleBalanced,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0F3F77] to-[#1E5AA6] dark:from-[#0A2D54] dark:to-[#0F3F77] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Programs</h1>
          <p className="text-lg md:text-xl animate-fade-in animate-delay-100">Comprehensive services supporting communities across Nigeria and Africa</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {programs.map((program, index) => (
              <Card key={index} className={`animate-fade-in animate-delay-${Math.min(index, 5)}00`}>
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#138A4B] to-[#1FA35C] flex items-center justify-center">
                  <FontAwesomeIcon icon={program.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0F3F77] dark:text-white mb-4">{program.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#138A4B] to-[#1FA35C] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-fade-in">Want to Learn More?</h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Contact us to find out how our programs can support you or your community.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#138A4B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in animate-delay-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
