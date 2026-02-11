import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'Privacy Policy | Syrilla Healthcare Helping Hands Foundation',
  description: 'Privacy Policy explaining how Syrilla Healthcare Helping Hands Foundation collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-[#0F3F77] dark:prose-headings:text-[#1FA35C] prose-a:text-[#138A4B] dark:prose-a:text-[#1FA35C]">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12"><strong>Last Updated:</strong> February 11, 2026</p>

            <h2>Introduction</h2>
            <p>Syrilla Healthcare Helping Hands Foundation ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully to understand our practices regarding your personal data.</p>
            <p>By using our website or services, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our website.</p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personally identifiable information that you voluntarily provide to us when you register for our programs or services, submit a volunteer application, make a donation or financial contribution, contact us through our website or email, subscribe to our newsletter or communications, participate in surveys or feedback forms, or attend our events or programs.</p>
            <p>The personal information we collect may include full name, email address, phone number, mailing address, date of birth, emergency contact information, medical or health information (when relevant to program participation), employment or professional information (for volunteers), financial information (for donation processing), and any other information you choose to provide.</p>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device and browsing behavior, including IP address, browser type and version, operating system, referring website addresses, pages viewed and time spent on pages, date and time of visits, device identifiers, and geographic location data. This information is collected through cookies, web beacons, and similar tracking technologies. Please see our <a href="/cookies">Cookie Policy</a> for more details.</p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services and programs; communicate with you about updates, volunteer opportunities, and events; process and acknowledge donations; analyze website usage and performance; comply with applicable laws and regulations; and protect our rights, property, and safety.</p>

            <h2>How We Share Your Information</h2>
            <p>We respect your privacy and do not sell, rent, or trade your personal information to third parties for their marketing purposes. However, we may share your information with trusted third-party service providers who assist us in operating our website and conducting our programs, when required by law or to protect our rights, in the event of a business transfer, or with your explicit consent.</p>

            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of sensitive data during transmission, secure storage systems with access controls, regular security assessments and audits, employee training on data protection practices, and incident response procedures.</p>
            <p>However, no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>

            <h2>Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When personal information is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.</p>

            <h2>Your Rights and Choices</h2>
            <p>Depending on your location and applicable laws, you may have rights regarding your personal information, including the right to access and correct your information, request deletion of your information, opt out of promotional communications, manage cookie preferences, and request data portability.</p>
            <p>To exercise any of these rights, please contact us at info@shhhfoundation.org. We will respond to your request within a reasonable timeframe and in accordance with applicable law.</p>

            <h2>Children's Privacy</h2>
            <p>Our website and services are not directed to children under the age of 18. We do not knowingly collect personal information from children under 18 without parental consent. If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us immediately, and we will take steps to remove such information from our systems.</p>

            <h2>International Data Transfers</h2>
            <p>Syrilla Healthcare Helping Hands Foundation operates primarily in Nigeria. If you are accessing our website or services from outside Nigeria, please be aware that your information may be transferred to, stored, and processed in Nigeria or other countries where our service providers operate. By using our website or services, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will notify you by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our website or services after the effective date of the updated Privacy Policy constitutes your acceptance of the changes.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <p><strong>Syrilla Healthcare Helping Hands Foundation</strong><br />
            Plot 784A Herbert Macaulay Way<br />
            Central Business District (CBD)<br />
            Abuja, Nigeria</p>
            <p><strong>Email:</strong> info@shhhfoundation.org<br />
            <strong>Phone:</strong> +234 903 754 2055</p>

            <hr className="my-12" />
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2026 Syrilla Healthcare Helping Hands Foundation. All rights reserved.</p>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
