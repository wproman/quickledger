const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800">
            About Our Firm
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 text-center leading-relaxed">
            Founded in 2010, weve been helping businesses navigate their
            financial journeys with precision and care.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional bookkeeping services that empower
                business owners to make informed financial decisions with
                confidence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                Our Team
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Certified professionals with an average of 12 years experience
                in accounting, bookkeeping, and financial consulting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
