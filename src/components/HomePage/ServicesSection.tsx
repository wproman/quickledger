import {
  BarChart2,
  BookOpen,
  Building,
  Calculator,
  CalendarDays,
  FileText,
  Receipt,
  Wallet,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Catch-up Bookkeeping",
      description:
        "Get your financial records up to date with our expert catch-up services",
    },
    {
      icon: <Receipt className="w-8 h-8 text-blue-600" />,
      title: "Accounts Payable",
      description:
        "Efficient management of your outgoing payments and vendor relationships",
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-blue-600" />,
      title: "Monthly Bookkeeping",
      description:
        "Regular, accurate financial record keeping tailored to your business",
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Tax Services",
      description:
        "Comprehensive tax preparation and planning to maximize your returns",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      title: "Financial Diagnosis",
      description:
        "In-depth analysis of your financial health with actionable insights",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Sage Solutions",
      description:
        "Expert implementation and support for Sage accounting software",
    },
    {
      icon: <Wallet className="w-8 h-8 text-blue-600" />,
      title: "Accounts Receivable",
      description:
        "Professional management of your incoming payments and client invoices",
    },
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Industry Specialization",
      description: "Tailored solutions for your specific industry requirements",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Other Services We Offer
          </h2>
          <p className="text-xl text-gray-600">
            We cover all financial worries. All-in-one for client convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
