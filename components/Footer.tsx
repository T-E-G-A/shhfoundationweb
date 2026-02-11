import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2D54] dark:bg-[#0A0E1A] text-white py-12 border-t border-[#1E5AA6]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Syrilla Healthcare"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <h3 className="text-lg font-bold mb-3">Syrilla Healthcare Helping Hands Foundation</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Empowering children, young people, adults, and families affected by learning disabilities, special needs, and health conditions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#1FA35C] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#1FA35C] flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#1FA35C] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#1FA35C] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#1FA35C] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-[#1FA35C] transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-[#1FA35C] transition-colors text-sm">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get Involved</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-[#1FA35C] transition-colors text-sm">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-[#1FA35C] transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#1FA35C] transition-colors text-sm">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#1FA35C] transition-colors text-sm">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#1FA35C] mt-1 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-300">
                  Plot 784A Herbert Macaulay Way, CBD Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#1FA35C] w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@shhhfoundation.org" className="text-gray-300 hover:text-[#1FA35C] transition-colors">
                  info@shhhfoundation.org
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FontAwesomeIcon icon={faPhone} className="text-[#1FA35C] w-4 h-4 flex-shrink-0" />
                <a href="tel:+2349037542055" className="text-gray-300 hover:text-[#1FA35C] transition-colors">
                  +234 903 754 2055
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Syrilla Healthcare Helping Hands Foundation. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-[#1FA35C] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-[#1FA35C] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-[#1FA35C] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
