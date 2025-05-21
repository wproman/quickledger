import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  CheckCircle,
  DollarSign,
  GraduationCap,
  Handshake,
  Lightbulb,
  MapPin,
  Phone,
  Quote,
  Users as TeamIcon,
  Telescope,
  Users,
} from "lucide-react";
import Image from "next/image";

const HomePage = () => {
   const clientImages = {
     gemma: "/clients/gemma-goeas.jpg",
     jonathan: "/clients/jonathan-miller.jpg",
     john: "/clients/john-costelli.jpg",
     jim: "/clients/jim-roundtree.jpg",
   };
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
                   Accurate financial records and reporting to help your
                   business thrive.
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
                   At QuickLedger, we tailor our QuickBooks bookkeeping services
                   around your unique business, budget, goals, and processes;
                   and, all done in the software you already use QuickBooks. By
                   utilizing our unrivaled experience with QuickBooks, the
                   leading small business bookkeeping software, able to help
                   your business stay organized, focused, and prepared for the
                   future. dedicate a bookkeeping services team to your
                   business, and provide insightful solutions to your most
                   important financial system challenges.
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
               src="/cfo-background.jpg"
               alt="Business meeting background"
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-blue-900/60"></div>
           </div>

           <div className="container mx-auto px-6 relative z-10">
             <div className="max-w-4xl mx-auto text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 QuickLedger Is Your Business CFO
               </h2>
               <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                 QuickLedger has years of experience implementing QuickBooks
                 within thousands of businesses. All that experience brings
                 expertise in these diverse areas.
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Feature 1 with Icon */}
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                 <div className="flex items-center mb-4">
                   <Telescope className="w-8 h-8 text-blue-300 mr-3" />
                   <h3 className="text-2xl font-semibold text-blue-300">
                     Future Focused Planning
                   </h3>
                 </div>
                 <p className="text-blue-100">
                   Every business needs a goal and a plan. We can help you get
                   through stumbling blocks to achieve success.
                 </p>
               </div>

               {/* Feature 2 with Icon */}
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                 <div className="flex items-center mb-4">
                   <Lightbulb className="w-8 h-8 text-blue-300 mr-3" />
                   <h3 className="text-2xl font-semibold text-blue-300">
                     Advice from Experts
                   </h3>
                 </div>
                 <p className="text-blue-100">
                   Our experts will help you make the best strategic business
                   decisions to reduce spending and let your company grow.
                 </p>
               </div>

               {/* Feature 3 with Icon */}
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                 <div className="flex items-center mb-4">
                   <GraduationCap className="w-8 h-8 text-blue-300 mr-3" />
                   <h3 className="text-2xl font-semibold text-blue-300">
                     Accessible Training
                   </h3>
                 </div>
                 <p className="text-blue-100">
                   Our experienced employees make perfect teachers for your team
                   to learn best practices.
                 </p>
               </div>

               {/* Feature 4 with Icon */}
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                 <div className="flex items-center mb-4">
                   <Handshake className="w-8 h-8 text-blue-300 mr-3" />
                   <h3 className="text-2xl font-semibold text-blue-300">
                     Managed Relationships
                   </h3>
                 </div>
                 <p className="text-blue-100">
                   We act as your CFO to negotiate the best rates with banks,
                   vendors, and service providers.
                 </p>
               </div>

               {/* Feature 5 with Icon */}
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                 <div className="flex items-center mb-4">
                   <Users className="w-8 h-8 text-blue-300 mr-3" />
                   <h3 className="text-2xl font-semibold text-blue-300">
                     Team Accountability
                   </h3>
                 </div>
                 <p className="text-blue-100">
                   Well manage goal setting and performance discussions as your
                   neutral third-party.
                 </p>
               </div>

               {/* Feature 6 with Icon */}
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-blue-400 transition-all">
                 <div className="flex items-center mb-4">
                   <CheckCircle className="w-8 h-8 text-blue-300 mr-3" />
                   <h3 className="text-2xl font-semibold text-blue-300">
                     Best Practices
                   </h3>
                 </div>
                 <p className="text-blue-100">
                   We implement proven best practices used by top companies in
                   your industry.
                 </p>
               </div>
             </div>

             <div className="text-center mt-16">
               <Button
                 size="lg"
                 className="bg-white text-blue-800 hover:bg-blue-100 px-10 py-5 text-lg font-semibold flex items-center justify-center mx-auto"
               >
                 <Phone className="w-5 h-5 mr-2" />
                 Talk To An Expert
               </Button>
             </div>
           </div>
         </section>

         {/* The Fourlane Advantage Section */}
         <section className="py-20 bg-white">
           <div className="container mx-auto px-6">
             <div className="max-w-4xl mx-auto text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                 The QuickLedger Advantage
               </h2>
               <p className="text-xl text-gray-600">
                 Why thousands of businesses trust us with their bookkeeping
                 needs
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Advantage 1 - US-Based Experts */}
               <div className="flex">
                 <div className="mr-6">
                   <div className="bg-blue-100 p-4 rounded-full">
                     <MapPin className="w-8 h-8 text-blue-600" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                     US-Based Experts
                   </h3>
                   <p className="text-gray-600">
                     Our expert consultants are spread across the US, ready to
                     help you. As English-speaking employees, they know the
                     nuances of American taxes, economics, and supply chains to
                     support your business best.
                   </p>
                 </div>
               </div>

               {/* Advantage 2 - Customized Pricing */}
               <div className="flex">
                 <div className="mr-6">
                   <div className="bg-blue-100 p-4 rounded-full">
                     <DollarSign className="w-8 h-8 text-blue-600" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                     Customized Pricing
                   </h3>
                   <p className="text-gray-600">
                     Our bookkeeping services are more cost effective than
                     hiring in-house. Your business size offer a custom price
                     without pressure to commit immediately or sign long-term
                     contracts.
                   </p>
                 </div>
               </div>

               {/* Advantage 3 - Professional Experience */}
               <div className="flex">
                 <div className="mr-6">
                   <div className="bg-blue-100 p-4 rounded-full">
                     <BadgeCheck className="w-8 h-8 text-blue-600" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                     Professional Experience
                   </h3>
                   <p className="text-gray-600">
                     We ensure our team has the necessary experience by only
                     hiring consultants who have worked in-house at private
                     companies, have advanced QuickBooks ProAdvisor
                     certifications, and undergo extensive training.
                   </p>
                 </div>
               </div>

               {/* Advantage 4 - Full-Service Team */}
               <div className="flex">
                 <div className="mr-6">
                   <div className="bg-blue-100 p-4 rounded-full">
                     <TeamIcon className="w-8 h-8 text-blue-600" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                     Full-Service Team
                   </h3>
                   <p className="text-gray-600">
                     Our team can focus on bookkeeping and any other aspect of
                     QuickBooks, including payroll, integrations, or
                     customizations. Regardless of how your business runs or
                     grows, we are here for you.
                   </p>
                 </div>
               </div>
             </div>

             {/* CTA Button */}
             <div className="text-center mt-16">
               <Button
                 size="lg"
                 className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-lg font-semibold"
               >
                 <Phone className="w-5 h-5 mr-2" />
                 Talk To An Expert
               </Button>
             </div>

             {/* Logo */}
           </div>
         </section>

         {/* Additional sections would go here */}
         {/* Testimonials Section */}
         {/* Testimonials Section */}
         <section className="py-20 bg-gray-50">
           <div className="container mx-auto px-6">
             <div className="max-w-4xl mx-auto text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                 What Our Clients Are Saying
               </h2>
               <p className="text-xl text-gray-600">
                 Hear from businesses that transformed their financial
                 operations with us
               </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Testimonial 1 */}
               <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                 <Quote className="w-8 h-8 text-blue-600 mb-4 rotate-180" />
                 <p className="text-lg text-gray-700 italic mb-6">
                   ourlane is a stellar organization as a whole. They are in it
                   for the long haul and it shows. They positively
                   revolutionized our entire accounting process. ve been very
                   patient in the planning phase of our new ERP system.
                   entrusted Fourlane with the future of our business and been
                   the best move ve made to date{" "}
                 </p>
                 <div className="flex  justify-center items-center">
                   <div className="rounded-full w-12 h-12 overflow-hidden mr-4 border-2 border-blue-200">
                     <Image
                       width={48}
                       height={48}
                       src={clientImages.gemma}
                       alt="Gemma Goeas"
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900">
                       Gemma Goeas
                     </h4>
                     <p className="text-gray-600">
                       Accounting Director, KniTec
                     </p>
                   </div>
                 </div>
               </div>

               {/* Testimonial 2 */}
               <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                 <Quote className="w-8 h-8 text-blue-600 mb-4 rotate-180" />
                 <p className="text-lg text-gray-700 italic mb-6">
                   e have been working with Fourlane for over three years now.
                   They are wonderful and a pleasure to work with. They have
                   improved our inventory management and month-end process
                   tremendousl
                 </p>
                 <div className="flex items-cente justify-center">
                   <div className="rounded-full w-12 h-12 overflow-hidden mr-4 border-2 border-blue-200">
                     <Image
                       width={48}
                       height={48}
                       src={clientImages.jonathan}
                       alt="Jonathan Miller"
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900">
                       Jonathan Miller
                     </h4>
                     <p className="text-gray-600">CFO, Earth Animal Ventures</p>
                   </div>
                 </div>
               </div>

               {/* Testimonial 3 */}
               <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                 <Quote className="w-8 h-8 text-blue-600 mb-4 rotate-180" />
                 <p className="text-lg text-gray-700 italic mb-6">
                   Quickbooks company file was enormous, with some data
                   corruption, so we needed to migrate to a new file. Fourlane
                   had the expertise, tools, and friendly staff to get us set up
                   with a new file, keeping important daand purging the old
                   data, all with minimal downtim
                 </p>
                 <div className="flex items-center justify-center">
                   <div className="rounded-full w-12 h-12 overflow-hidden mr-4 border-2 border-blue-200">
                     <Image
                       width={40}
                       height={40}
                       src={clientImages.john}
                       alt="John Costelli"
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900">
                       John Costelli
                     </h4>
                     <p className="text-gray-600">
                       President, Castle Merchandising
                     </p>
                   </div>
                 </div>
               </div>

               {/* Testimonial 4 */}
               <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                 <Quote className="w-8 h-8 text-blue-600 mb-4 rotate-180" />
                 <p className="text-lg text-gray-700 italic mb-6">
                   urlane helped us convert from NetSuite to Quickbook very
                   impressed with the professionalism and competency of everyone
                   at Fourlane, without exception. We had a short deadline and
                   Fourlane helped us meet it while patiently explaining the
                   proces
                 </p>
                 <div className="flex items-center justify-center">
                   <div className="rounded-full w-12 h-12 overflow-hidden mr-4 border-2 border-blue-200">
                     <Image
                       width={48}
                       height={48}
                       src={clientImages.jim}
                       alt="Jim Roundtree"
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900">
                       Jim Roundtree
                     </h4>
                     <p className="text-gray-600">CFO, Cinsay</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="text-center mt-16">
               <Button
                 variant="outline"
                 className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
               >
                 More Client Stories
               </Button>
             </div>
           </div>
         </section>
       </main>
     </>
   );
};

export default HomePage;
