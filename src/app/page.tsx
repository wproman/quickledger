import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  const services = [
    "Accounts payable",
    "Accounts receivable",
    "Account reconciliations",
    "Working with your CPA for tax planning & return preparation",
    "Month-end close",
    "Processing payroll",
    "Improved processes for more timely, accurate reporting",
    "Consistent, proven bookkeeping practices and internal controls",
    "Monthly and quarterly financials",
    "Neatly organized year-end financials",
    "Outsourced CFO review and meeting",
    "Chart of accounts tailored to your specific industry",
    "Connection of accounts to online banking",
    "US-Based account manager and team",
    "Sales tax and payroll tax reporting",
    "Streamlined and integrated financial systems",
    "1099 and 1096 filing",
    "Internal process manual creation",
    "Advanced technology and QuickBooks expertise",
    "Preferred pricing on all QuickBooks products",
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 font-sans">
        {/* Hero Section - Static with contact info on right */}
        <section className="relative bg-blue-800 text-white">
          <div className="container mx-auto px-6 py-16 md:py-20">
            <div className="flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="md:w-2/3 md:pr-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Professional Bookkeeping Services
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                  Accurate financial records and reporting to help your business
                  thrive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-4 text-lg font-semibold"
                  >
                    Get Started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Right Contact Card */}
              <div className="md:w-1/3 mt-10 md:mt-0">
                <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    Contact Us
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-1 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <p className="text-gray-600">(415) 555-0123</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-1 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600">
                          info@yourbookkeeping.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-1 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-gray-900">Location</h4>
                        <p className="text-gray-600">
                          123 Financial District, San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QuickBooks Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
                Custom Tailored QuickBooks Bookkeeping Services
              </h2>

              <div className="prose-lg text-gray-700 mb-12">
                <p className="text-lg leading-relaxed">
                  At YourCompany, we tailor our QuickBooks bookkeeping services
                  around your unique business, budget, goals, and processes;
                  and, all done in the software you already use QuickBooks. By
                  utilizing our unrivaled experience with QuickBooks, the
                  leading small business bookkeeping software, able to help your
                  business stay organized, focused, and prepared for the future.
                  dedicate a bookkeeping services team to your business, and
                  provide insightful solutions to your most important financial
                  system challenges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Explore Our QuickBooks Services
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 bg-gray-900 text-white">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              fill
              src="/cfo-background.jpg" // Replace with your actual image path
              alt="Business meeting background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                YourCompany Is Your Business CFO
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                YourCompany has years of experience implementing QuickBooks
                within thousands of businesses. All that experience brings
                expertise in these diverse areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                <Apple />
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  Future Focused Planning
                </h3>
                <p className="text-blue-100">
                  Every business needs a goal and a plan. We can help you get
                  through stumbling blocks to achieve success.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  Advice from Experts
                </h3>
                <p className="text-blue-100">
                  Our experts will help you make the best strategic business
                  decisions to reduce spending and let your company grow.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  Accessible and Easy Training
                </h3>
                <p className="text-blue-100">
                  Youl find that our employe many years of experience make them
                  the perfect teachers for your team.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  Managed Financial Relationships
                </h3>
                <p className="text-blue-100">
                  Our team knows your industry and acts as your CFO to negotiate
                  the best rates with insurance agents, attorneys, banks, and
                  vendors.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  Team Accountability
                </h3>
                <p className="text-blue-100">
                  Wbecome the compan figurative and take over managing goal
                  setting and discussing shortcomings.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  Implemented Best Practices
                </h3>
                <p className="text-blue-100">
                  Our team will use their experience to implement proven best
                  practices in your workspace.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-white text-blue-800 hover:bg-blue-100 px-10 py-5 text-lg font-semibold"
              >
                Talk To An Expert
              </Button>
            </div>
          </div>
        </section>

        {/* Additional sections would go here */}
      </main>
    </>
  );
};

export default HomePage;
