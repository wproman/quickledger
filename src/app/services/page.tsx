// Contact Page

const ServicesPage = () => {
  const services = [
    {
      title: "Full-Service Bookkeeping",
      description:
        "Comprehensive recording of financial transactions, bank reconciliations, and financial statement preparation.",
      icon: "📊",
    },
    {
      title: "Tax Preparation & Filing",
      description:
        "Accurate tax return preparation and filing to ensure compliance and maximize deductions.",
      icon: "🧾",
    },
    {
      title: "Payroll Processing",
      description:
        "Timely payroll services including tax withholdings, direct deposits, and quarterly filings.",
      icon: "💵",
    },
    {
      title: "Financial Reporting",
      description:
        "Customized reports that give you clear insights into your business performance.",
      icon: "📈",
    },
    {
      title: "Accounts Management",
      description:
        "Professional management of accounts payable and receivable to keep your cash flow healthy.",
      icon: "⚖️",
    },
    {
      title: "Consulting Services",
      description:
        "Strategic financial advice to help you plan for growth and profitability.",
      icon: "💡",
    },
  ];
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
