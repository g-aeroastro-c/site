import React from 'react';
import { ArrowUpRight } from "lucide-react";

const contactInfo = {
  generalEmail: "aeroastro_vzg@gitam.in",
  generalPhone1: "+917019246482",
  generalPhone2: "+919632512877",

  technicalEmail: "aeroastro_vzg@gitam.in",
  technicalPhone1: "+917019246484",
  technicalPhone2: "+919632512877",

  officeAddress: `The Gitam Aero Astro Club,
Student Life, GITAM University,
Rushikonda - 530045`,
  officeDirectionsLink: "https://maps.app.goo.gl/eoNHMjdQtntrh9ua8?g_st=aw", 

  socialLinks: {
    instagram: "https://www.instagram.com/gitam.aeroastro?igsh=MW9vYW1ydDkwMjRvNA==",
    linkedin: "https://in.linkedin.com/company/gitam-aero-astro-club",
    GitHub: "https://github.com/g-aeroastro-c",
    
  }
};

const ContactUs: React.FC = () => {
  return (
    <section className="text-white py-12 px-6 md:px-20">
      <h2 className="text-4xl font-semibold mb-10 text-center">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 max-w-[1600px] mx-auto">

        {/* General Inquiries */}
        <div className="p-10 px-4 rounded-lg shadow-lg relative with-divider">
          <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
          <div className="flex flex-col space-y-2">
          <a
            href={`mailto:${contactInfo.generalEmail}`}
            className="inline-flex items-center bg-[#1C1C1C] text-sm text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition hover:underline"
            
            title="Send Email"
          >
            {contactInfo.generalEmail}<ArrowUpRight className="w-6 h-6 text-[#18B9EA] rounded-full" />
          </a>
          <a
            href={`tel:${contactInfo.generalPhone1}`}
            className="inline-flex items-center bg-[#1C1C1C] text-sm text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition hover:text-blue-400"
            
            title="Call"
          >
            {contactInfo.generalPhone1}<ArrowUpRight className="w-6 h-6 text-[#18B9EA] rounded-full" />
          </a>
          <a
            href={`tel:${contactInfo.generalPhone2}`}
            className="inline-flex items-center bg-[#1C1C1C] text-sm text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition hover:text-blue-400"
            title="Call"
          >
            
            {contactInfo.generalPhone2}<ArrowUpRight className="w-6 h-6 text-[#18B9EA] rounded-full" />
          </a>
          </div>
        </div>

        {/* Technical Support */}
        <div className="p-10 px-4 rounded-lg shadow-lg relative with-divider">
          <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
          <div className="flex flex-col space-y-2">
          <a
            href={`mailto:${contactInfo.technicalEmail}`}
            className="inline-flex items-center bg-[#1C1C1C] text-sm text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition hover:underline"
            title="Send Email"
          >
            
            {contactInfo.technicalEmail}<ArrowUpRight className="w-6 h-6 text-[#18B9EA] rounded-full" />
          </a>
          <a
            href={`tel:${contactInfo.technicalPhone1}`}
            className="inline-flex items-center bg-[#1C1C1C] text-sm text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition hover:text-blue-400"
            title="Call"
          >
            
            {contactInfo.technicalPhone1}<ArrowUpRight className="w-6 h-6 text-[#18B9EA] rounded-full" />
          </a>
          <a
            href={`tel:${contactInfo.technicalPhone2}`}
            className="inline-flex items-center bg-[#1C1C1C] text-sm text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition hover:text-blue-400"
            title="Call"
          >
            
            {contactInfo.technicalPhone2}<ArrowUpRight className="w-6 h-6 text-[#18B9EA] rounded-full" />
          </a>
          </div>
        </div>

        {/* Our Office */}
        <div className="p-10 px-4 rounded-lg shadow-lg relative with-divider">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Office</h3>
            <p className="whitespace-pre-line mb-4">{contactInfo.officeAddress}</p>
          </div>
          <a
            href={contactInfo.officeDirectionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#1C1C1C] text-sm text-white px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition hover:underline"
          >
            Get Directions<ArrowUpRight className="w-6 h-6 text-[#18B9EA] rounded-full" />
          </a>
        </div>

        {/* Connect with Us */}
        <div className=" p-10 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-3 text-gray-400">
            <a href={contactInfo.socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            className="inline-flex items-center justify-center bg-[#1C1C1C] text-white px-8 py-3 rounded-md hover:bg-[#2a2a2a] transition hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5-1.75a1 1 0 110 2 1 1 0 010-2z"/></svg>
            </a>
            <a href={contactInfo.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="inline-flex items-center justify-center bg-[#1C1C1C] text-white px-8 py-3 rounded-md hover:bg-[#2a2a2a] transition hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 8.25h4v12h-4v-12zm6 0h3.675v1.638h.05a4.04 4.04 0 013.65-2.004c3.9 0 4.615 2.568 4.615 5.904v6.462h-4v-5.725c0-1.367-.027-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03v5.825h-4v-12z"/></svg>
            </a>
            <a href={contactInfo.socialLinks.GitHub} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            className="inline-flex items-center justify-center bg-[#1C1C1C] text-white px-8 py-3 rounded-md hover:bg-[#2a2a2a] transition hover:text-blue-400">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.419 2.865 8.167 6.839 9.489.5.091.682-.217.682-.483 0-.238-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.094.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025a9.564 9.564 0 012.5-.336c.85.004 1.705.115 2.5.336 1.909-1.295 2.748-1.025 2.748-1.025.545 1.378.202 2.397.1 2.65.64.7 1.027 1.594 1.027 2.688 0 3.847-2.337 4.695-4.566 4.944.36.309.682.918.682 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.481A10.014 10.014 0 0022 12.012C22 6.484 17.523 2 12 2z" />
               </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
