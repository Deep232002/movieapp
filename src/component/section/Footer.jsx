import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: About Us */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-2">About Us</h3>
          <p className="text-gray-400">
            We bring you the best collection of movies, TV shows, and anime to
            stream directly to your device. Enjoy high-quality streaming anytime, anywhere.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/movies" className="text-gray-400 hover:text-white transition">
                Movies
              </a>
            </li>
            <li>
              <a href="/tv-shows" className="text-gray-400 hover:text-white transition">
                TV Shows
              </a>
            </li>
            <li>
              <a href="/anime" className="text-gray-400 hover:text-white transition">
                Anime
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Subscribe */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-2">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col md:flex-row items-center md:items-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto p-2 mb-2 md:mb-0 md:mr-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="w-full md:w-auto p-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-indigo-500 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-indigo-500 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-indigo-500 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-indigo-500 transition">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <p className="text-gray-500 mt-4">&copy; {new Date().getFullYear()} MovieSite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
