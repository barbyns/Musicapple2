const Footer = () => (
    <footer className="bg-[#1c1c1e] text-gray-400 text-sm p-8 mt-8">
      {/* Lingua */}
      <div className="flex flex-wrap gap-2 items-center mb-6">
        <span className="hover:underline cursor-pointer">Italia</span>
        <span>|</span>
        <span className="hover:underline cursor-pointer">English (UK)</span>
      </div>
  
      {/* Copyright */}
      <div className="mb-6">
        <span>Copyright © 2024 <span className="font-semibold text-white">Apple Inc.</span> Tutti i diritti riservati.</span>
      </div>
  
      {/* Link in basso */}
      <div className="flex flex-wrap gap-6">
        <a href="#" className="hover:underline">Condizioni dei servizi internet</a>
        <a href="#" className="hover:underline">Apple Music e privacy</a>
        <a href="#" className="hover:underline">Avviso sui cookie</a>
        <a href="#" className="hover:underline">Supporto</a>
        <a href="#" className="hover:underline">Feedback</a>
      </div>
    </footer>
  );
  
  export default Footer;
  