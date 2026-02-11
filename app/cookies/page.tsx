import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'Cookie Policy | Syrilla Healthcare Helping Hands Foundation',
  description: 'Cookie Policy explaining how Syrilla Healthcare Helping Hands Foundation uses cookies and similar tracking technologies.',
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-[#0A0E1A]">
        <div className="container mx-auto px-4 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-[#0F3F77] dark:prose-headings:text-[#1FA35C] prose-a:text-[#138A4B] dark:prose-a:text-[#1FA35C]">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12"><strong>Last Updated:</strong> February 11, 2026</p>

            <h2>Introduction</h2>
            <p>This Cookie Policy explains how Syrilla Healthcare Helping Hands Foundation ("we," "us," or "our") uses cookies and similar tracking technologies on our website. This policy provides information about what cookies are, how we use them, the types of cookies we use, and how you can control or delete cookies.</p>
            <p>By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you should adjust your browser settings accordingly or refrain from using our website.</p>

            <h2>What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet, or other electronic device) when you visit a website. Cookies are widely used by website owners to make their websites function more efficiently and to provide useful information to improve the user experience.</p>
            <p>Cookies set by the website owner are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website, such as analytics, advertising, and social media integration.</p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies and similar tracking technologies for several purposes, including to enhance your browsing experience, analyze website traffic and performance, remember your preferences, and provide personalized content. The specific purposes for which we use cookies are described in detail in the sections below.</p>

            <h2>Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>Essential cookies are necessary for the basic functionality of our website and cannot be disabled in our systems. These cookies are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling out forms. Without these cookies, some parts of our website may not function properly.</p>
            <p>Examples of essential cookies include: Cookies that remember your cookie consent preferences, session cookies that maintain your login state during your visit, and cookies that enable core website features such as navigation and access to secure areas.</p>

            <h3>Performance and Analytics Cookies</h3>
            <p>Performance and analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. These cookies allow us to count visits, identify traffic sources, measure website performance, and understand which pages are most and least popular. All information collected by these cookies is aggregated and therefore anonymous.</p>
            <p>We use these cookies to improve the way our website works, optimize content, and enhance user experience. If you do not allow these cookies, we will not be able to monitor the performance of our website or know when you have visited.</p>

            <h3>Functional Cookies</h3>
            <p>Functional cookies enable our website to provide enhanced functionality and personalization. These cookies may be set by us or by third-party providers whose services we have added to our pages. They allow the website to remember choices you make (such as your language preference, region, or theme settings) and provide enhanced, more personalized features.</p>
            <p>If you do not allow these cookies, some or all of these services may not function properly, and your experience on our website may be less tailored to your preferences.</p>

            <h3>Targeting and Advertising Cookies</h3>
            <p>Targeting and advertising cookies may be set through our website by our advertising partners or social media platforms. These cookies are used to build a profile of your interests and show you relevant advertisements on other websites. They work by uniquely identifying your browser and device.</p>
            <p>If you do not allow these cookies, you will experience less targeted advertising. Please note that disabling these cookies does not mean you will stop seeing advertisements; it means the advertisements you see will be less relevant to your interests.</p>

            <h2>Third-Party Cookies</h2>
            <p>We may use third-party services on our website that set their own cookies. These third parties may include analytics providers, social media platforms, payment processors, and advertising networks. We do not control these third-party cookies, and their use is governed by the privacy policies of the respective third parties.</p>
            <p>Common third-party services we may use include: Analytics services such as Google Analytics, which help us understand website traffic and user behavior. Social media platforms such as Facebook, Twitter, and LinkedIn, which enable social sharing and integration features. Payment processors that facilitate secure donation transactions. Advertising networks that deliver relevant advertisements based on your browsing behavior.</p>
            <p>We recommend that you review the privacy and cookie policies of these third-party services to understand how they collect and use your information.</p>

            <h2>How Long Do Cookies Last</h2>
            <p>Cookies can be either session cookies or persistent cookies. Session cookies are temporary cookies that are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you manually delete them.</p>
            <p>The duration of cookies varies depending on their purpose. Essential cookies typically last for the duration of your browsing session. Performance and functional cookies may persist for several months to remember your preferences across visits. Advertising cookies may last for up to one year or longer to track your browsing behavior across multiple websites.</p>

            <h2>Managing Your Cookie Preferences</h2>
            <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through your browser settings or through cookie consent tools provided on our website.</p>

            <h3>Browser Settings</h3>
            <p>Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.</p>
            <p><strong>To manage cookies in popular browsers:</strong></p>
            <p><strong>Google Chrome:</strong> Open Chrome, click the three-dot menu in the top right corner, select "Settings," then "Privacy and security," then "Cookies and other site data." From here, you can block all cookies, block third-party cookies, or clear cookies and site data.</p>
            <p><strong>Mozilla Firefox:</strong> Open Firefox, click the three-line menu in the top right corner, select "Settings," then "Privacy & Security." Under "Cookies and Site Data," you can manage your cookie preferences and clear stored data.</p>
            <p><strong>Safari:</strong> Open Safari, click "Safari" in the top menu, select "Preferences," then "Privacy." You can manage cookies and website data, including blocking all cookies or only third-party cookies.</p>
            <p><strong>Microsoft Edge:</strong> Open Edge, click the three-dot menu in the top right corner, select "Settings," then "Cookies and site permissions," then "Cookies and site data." You can manage your cookie settings and clear browsing data.</p>
            <p>For more information about managing cookies in other browsers, please refer to your browser's help documentation or visit the browser developer's website.</p>

            <h2>Do Not Track Signals</h2>
            <p>Some web browsers have a "Do Not Track" (DNT) feature that signals to websites that you do not want to have your online activity tracked. Our website does not currently respond to DNT signals because there is no universally accepted standard for how to interpret and respond to these signals. However, you can still manage your cookie preferences through your browser settings as described above.</p>

            <h2>Updates to This Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in our use of cookies, changes in technology, or changes in legal requirements. When we make updates, we will revise the "Last Updated" date at the top of this policy and post the updated policy on our website.</p>
            <p>We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies and how you can manage your cookie preferences. Your continued use of our website after any changes to this Cookie Policy will constitute your acceptance of the updated policy.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us:</p>
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
