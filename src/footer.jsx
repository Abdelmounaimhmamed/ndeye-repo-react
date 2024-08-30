import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">MyFood</h3>
            <p className="text-gray-400">
              Your favorite meals delivered to your door with the best quality and service.
            </p>
          </div>
          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Menu</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          {/* Column 3: Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul>
              <li>
                <span className="text-gray-400">Phone: +123 456 7890</span>
              </li>
              <li>
                <span className="text-gray-400">Email: info@myfood.com</span>
              </li>
              <li>
                <span className="text-gray-400">Address: 123 Food Street, City, Country</span>
              </li>
            </ul>
          </div>
          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M24 4.557a9.86 9.86 0 0 1-2.828.775 4.931 4.931 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482 13.93 13.93 0 0 1-10.118-5.138 4.915 4.915 0 0 0 1.523 6.573A4.897 4.897 0 0 1 .96 8.751v.063a4.917 4.917 0 0 0 3.946 4.815 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.59 3.414 9.867 9.867 0 0 1-6.102 2.105c-.397 0-.79-.023-1.177-.069a13.93 13.93 0 0 0 7.545 2.213c9.055 0 14.01-7.504 14.01-14.011 0-.213-.005-.426-.015-.637A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.975.244 2.725.512a5.385 5.385 0 0 1 1.924 1.1 5.385 5.385 0 0 1 1.1 1.924c.268.75.456 1.554.512 2.725.059 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.244 1.975-.512 2.725a5.385 5.385 0 0 1-1.1 1.924 5.385 5.385 0 0 1-1.924 1.1c-.75.268-1.554.456-2.725.512-1.267.059-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.975-.244-2.725-.512a5.385 5.385 0 0 1-1.924-1.1 5.385 5.385 0 0 1-1.1-1.924c-.268-.75-.456-1.554-.512-2.725-.059-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.056-1.17.244-1.975.512-2.725a5.385 5.385 0 0 1 1.1-1.924 5.385 5.385 0 0 1 1.924-1.1c.75-.268 1.554-.456 2.725-.512 1.267-.059 1.647-.07 4.85-.07zm0-2.163C8.756 0 8.342.013 7.053.07 5.736.128 4.615.307 3.55.607a7.507 7.507 0 0 0-2.711 1.547A7.507 7.507 0 0 0 .607 4.565c-.3 1.065-.479 2.186-.537 3.503-.057 1.289-.07 1.703-.07 4.932s.013 3.642.07 4.932c.058 1.317.237 2.438.537 3.503a7.507 7.507 0 0 0 1.547 2.711 7.507 7.507 0 0 0 2.711 1.547c1.065.3 2.186.479 3.503.537 1.289.057 1.703.07 4.932.07s3.642-.013 4.932-.07c1.317-.058 2.438-.237 3.503-.537a7.507 7.507 0 0 0 2.711-1.547 7.507 7.507 0 0 0 1.547-2.711c.3-1.065.479-2.186.537-3.503.057-1.289.07-1.703.07-4.932s-.013-3.642-.07-4.932c-.058-1.317-.237-2.438-.537-3.503a7.507 7.507 0 0 0-1.547-2.711 7.507 7.507 0 0 0-2.711-1.547c-1.065-.3-2.186-.479-3.503-.537C15.642.013 15.228 0 12 0z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M24 0v24h-24v-24h24zm-4.721 8.447h-1.911c-.224 0-.441.036-.648.109-.207.073-.398.179-.575.315-.176.137-.33.305-.458.502-.129.197-.194.426-.194.685v1.905h3.785v2.894h-3.785v8.007h-3.052v-8.007h-3.095v-2.894h3.095v-2.22c0-.699.123-1.313.367-1.842.246-.528.575-.984.988-1.369.414-.385.89-.673 1.43-.863.538-.191 1.096-.286 1.674-.286.374 0 .757.032 1.149.096.391.064.75.155 1.078.274v2.48z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} MyFood. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
