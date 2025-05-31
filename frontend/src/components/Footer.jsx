import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
          We are an leading independent educational consulting firm founded in 2008 that provides mentoring and admissions counseling to 
           international students seeking admission to the full spectrum of North American, European & Australian universities and colleges.
          </p>
          <a
            href="https://www.srcounselling.in/about.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm"
          >
            Read More →
          </a>
        </div>

        <div>
        <h2 className="text-xl font-bold mb-4">Quick links</h2>
        <ul className="space-y-2 text-sm">
          <li><Link to="/AboutGeorgia" className='hover:text-red-400'>- About Georgia</Link></li>
          <li><Link to="/HowToApply" className='hover:text-red-400'>- How to Apply</Link></li>
          <li><Link to="/FAQ" className='hover:text-red-400'>- FAQs</Link></li>
          <li><Link to="/ContactUs" className='hover:text-red-400'>- Contact Us</Link></li>
          <li><Link to="/Testimonials" className='hover:text-red-400'>- Student Testimonials</Link></li>
          <li><Link to="/Universities" className='hover:text-red-400'>- Universities</Link></li>
          <li><Link to="/NMCReg" className='hover:text-red-400'>- NMC Regulations</Link></li>
          <li><Link to="/privacyPolicy" className='hover:text-red-400'>- Privacy Policy</Link></li>
          <li><Link to="/termsAndConditions" className='hover:text-red-400'>- Terms & Conditions</Link></li>
        </ul>
        </div>


        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="text-sm space-y-3">
            <p className="flex items-start">
              <MdLocationOn className="mt-1 mr-2 text-lg" />
              523, Zest Business Spaces,<br />
              Next to Doshi Nursing Home,<br />
              M.G Road, Ghatkopar (E),<br />
              Mumbai - 400077
            </p>
            <p className="flex items-center">
              <MdPhone className="mr-2 text-lg" /> +91-9820545774 | +91-8655657557
            </p>
            <p className="flex items-center">
              <MdEmail className="mr-2 text-lg" /> nshah@srcounsellingind.com
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaXTwitter className="text-2xl hover:text-green-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
