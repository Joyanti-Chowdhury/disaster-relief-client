import logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <div>
             
           <footer className="bg-black text-white py-12">
            <img  className="w-[100px] h-[100px] m-3" src={logo} alt="" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@disasterrelief.org</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-400">Volunteer Opportunities</a></li>
              <li><a href="#" className="hover:text-gray-400">Donate Now</a></li>
              <li><a href="#" className="hover:text-gray-400">Emergency Contacts</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p>Subscribe to our newsletter for updates and news.</p>
            <form className="mt-4">
              <input type="email" placeholder="Your Email Address" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;