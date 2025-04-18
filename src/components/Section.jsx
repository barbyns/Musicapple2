const Section = ({ title, children }) => (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto">
        {children}
      </div>
    </section>
  );
  
  export default Section;
  