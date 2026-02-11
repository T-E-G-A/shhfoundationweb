import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-[#0F3F77] text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              Empowering children, young people, adults, and families affected by learning disabilities, special needs, and health conditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#1FA35C] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#1FA35C] transition-colors">About</Link></li>
              <li><Link href="/programs" className="hover:text-[#1FA35C] transition-colors">Programs</Link></li>
              <li><Link href="/contact" className="hover:text-[#1FA35C] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm mb-2">Plot 784A Herbert Macaulay Way</p>
            <p className="text-sm mb-2">CBD Abuja, Nigeria</p>
            <p className="text-sm mb-2">info@shhhfoundation.org</p>
            <p className="text-sm mb-4">+234 903 754 2055</p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-2xl hover:text-[#1FA35C] transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Syrilla Healthcare Helping Hands Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
