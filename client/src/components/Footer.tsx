export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="text-sm">
          Web Developed and Designed by Tasha Mitchell, 2018. All Rights Reserved.
          {' '}
          <a 
            href="https://tamitchell.github.io/" 
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact the Developer
          </a>
        </div>
      </div>
    </footer>
  );
}
