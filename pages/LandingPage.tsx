
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import VideoModal from '../components/VideoModal';
import { Testimonial } from '../types';
import { 
    BillsIcon, CheckCircleIcon, EloadIcon, FerryIcon, FlightIcon, HotelIcon, 
    InsuranceIcon, PlayIcon, TourIcon, VisaIcon 
} from '../components/icons';

// --- Hero Section --- //
const HeroSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 24);

  return (
    <section className="bg-brand-primary text-white text-center py-20 px-4" style={{backgroundImage: `url('https://picsum.photos/1600/900?blur=5&random=1')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.8)'}}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-down">
          Simulan ang Iyong <span className="text-brand-secondary">Travel Business</span> Ngayon!
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6 animate-fade-in-up">
          Walang experience? No problem!
        </p>
        <p className="max-w-2xl mx-auto text-gray-200 mb-8">
          Ang eAccess PH Portal ay ang iyong all-in-one solution para magtayo ng sarili mong travel and services business. Kumita sa bawat booking, sa ilalim ng iyong sariling brand name.
        </p>
        
        <CountdownTimer targetDate={targetDate} />

        <div className="my-8 animate-pulse">
            <p className="text-lg">PROMO PRICE</p>
            <p className="text-5xl font-bold text-brand-secondary">₱4,998</p>
            <p className="line-through text-gray-300">Original Price: ₱9,998</p>
            <p className="text-sm font-semibold uppercase tracking-wider mt-1">Limited Slots!</p>
        </div>

        <button 
          onClick={onCTAClick}
          className="bg-brand-secondary text-brand-dark font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          SIMULAN ANG BUSINESS MO NGAYON!
        </button>
      </div>
    </section>
  );
};

// --- Video Preview Section --- //
const VideoPreviewSection: React.FC<{ onPlayClick: () => void }> = ({ onPlayClick }) => (
  <section className="py-16 bg-white text-center">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Panoorin ang Kumpletong Presentasyon</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Alamin kung paano gumagana ang eAccess PH Portal at kung paano ka pwedeng kumita gamit ang aming system.</p>
      <div 
        onClick={onPlayClick}
        className="relative max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
      >
        <img src="https://picsum.photos/800/450?random=2" alt="Video Presentation Thumbnail" className="w-full h-auto transition-transform duration-300 group-hover:scale-105"/>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
          <PlayIcon />
        </div>
      </div>
    </div>
  </section>
);

// --- About Section --- //
const AboutSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">About eAccess PH Portal</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <InfoCard title="All-In-One System" description="Isang portal para sa lahat ng travel at services needs mo." />
        <InfoCard title="Your Own Brand" description="Operate under your own business name and logo. Ikaw ang boss!" />
        <InfoCard title="No Networking" description="Purely business. Walang hidden fees, walang recruitment na kailangan." />
        <InfoCard title="User-Friendly" description="Simple at modern ang design, madaling gamitin kahit sa mga beginners." />
      </div>
    </div>
  </section>
);

const InfoCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="font-bold text-xl mb-2 text-brand-primary">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// --- Package Details Section --- //
const PackageDetailsSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Package Details & Inclusions</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Services Offered</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <ServiceItem icon={<FlightIcon />} name="Flights" />
            <ServiceItem icon={<HotelIcon />} name="Hotels" />
            <ServiceItem icon={<FerryIcon />} name="Ferry" />
            <ServiceItem icon={<TourIcon />} name="Tours" />
            <ServiceItem icon={<BillsIcon />} name="Bills Payment" />
            <ServiceItem icon={<EloadIcon />} name="E-Loading" />
            <ServiceItem icon={<InsuranceIcon />} name="Insurance" />
            <ServiceItem icon={<VisaIcon />} name="Visa Application" />
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Package Inclusions</h3>
          <ul className="space-y-4">
            <InclusionItem text="One-Time Payment" />
            <InclusionItem text="Lifetime Access" />
            <InclusionItem text="No Networking / No Quota" />
            <InclusionItem text="Operate Under Your Own Name" />
            <InclusionItem text="Custom Branding" />
            <InclusionItem text="Training Videos & Manual" />
            <InclusionItem text="Printable Tarpaulin Design" />
            <InclusionItem text="Marketing Materials" />
          </ul>
           <button 
            onClick={onCTAClick}
            className="mt-8 w-full bg-brand-secondary text-brand-dark font-bold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300"
          >
            GRAB THE ₱4,998 PROMO NOW!
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ServiceItem: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
    <div className="flex flex-col items-center">
        {icon}
        <p className="mt-2 font-medium text-gray-700">{name}</p>
    </div>
);

const InclusionItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-center">
        <CheckCircleIcon />
        <span className="ml-3 text-gray-700">{text}</span>
    </li>
);


// --- Income Potential Section --- //
const IncomePotentialSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Income Potential</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Paano Ka Kikita?</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-brand-secondary font-bold mr-2">✔</span><span><strong className="text-brand-primary">Commissions:</strong> Kumita sa bawat flight, hotel, at tour package na mabook mo.</span></li>
            <li className="flex items-start"><span className="text-brand-secondary font-bold mr-2">✔</span><span><strong className="text-brand-primary">Service Fees:</strong> Magpatong ng sarili mong service fee sa bawat transaction.</span></li>
            <li className="flex items-start"><span className="text-brand-secondary font-bold mr-2">✔</span><span><strong className="text-brand-primary">Optional Referrals:</strong> May extra income sa pag-refer ng iba (pero hindi sapilitan).</span></li>
          </ul>
           <div className="mt-8 bg-blue-100 border-l-4 border-brand-accent text-brand-dark p-4 rounded">
            <h4 className="font-bold">Sample Income Computation</h4>
            <p className="text-3xl font-bold text-brand-primary">₱24,900<span className="text-lg font-normal">/month*</span></p>
            <p className="text-sm">*Estimated based on ₱830 average daily earnings. Results may vary.</p>
          </div>
        </div>
        <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Earnings per Transaction</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left bg-white rounded-lg shadow-md">
                    <thead className="bg-brand-primary text-white">
                        <tr>
                            <th className="p-3">Service</th>
                            <th className="p-3">Potential Earning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b"><td className="p-3 font-medium">Domestic Ticket</td><td className="p-3">₱150 – ₱500</td></tr>
                        <tr className="border-b bg-gray-50"><td className="p-3 font-medium">International Ticket</td><td className="p-3">₱500 – ₱1,500</td></tr>
                        <tr className="border-b"><td className="p-3 font-medium">Ferry</td><td className="p-3">₱50 – ₱100</td></tr>
                        <tr className="border-b bg-gray-50"><td className="p-3 font-medium">Hotel / Tours</td><td className="p-3">₱200 – ₱850</td></tr>
                        <tr className="border-b"><td className="p-3 font-medium">Visa Assistance</td><td className="p-3">₱350 – ₱500</td></tr>
                        <tr className="bg-gray-50"><td className="p-3 font-medium">Bills Payment</td><td className="p-3">₱10 – ₱20</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Why Choose Us Section --- //
const WhyChooseUsSection = () => {
    const benefits = [
        { title: "Low Capital, Lifetime Access", description: "Isang beses na bayad lang, panghabangbuhay na business na." },
        { title: "No Networking / No Quota", description: "Focus ka lang sa business mo, walang pressure sa sales." },
        { title: "Ready-To-Use Platform", description: "Pagka-sign up mo, pwede ka na magsimula agad." },
        { title: "Comprehensive Trainings", description: "May step-by-step video tutorials para sa'yo." },
        { title: "Trusted & Reliable", description: "Legit at DTI-registered na kumpanya." },
        { title: "Operate Under Your Own Name", description: "Ikaw ang bida. Build your own brand." }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Bakit eAccess PH?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map(benefit => (
                        <div key={benefit.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <h3 className="font-bold text-xl mb-2 text-brand-primary">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- Testimonials Section --- //
const TestimonialsSection = () => {
    const testimonials: Testimonial[] = [
        { id: 1, image: 'https://picsum.photos/100/100?random=3', name: 'Juan Dela Cruz', text: 'Sobrang laking tulong ng eAccess! Kahit nasa bahay lang ako, kumikita ako. Madali lang gamitin yung system.' },
        { id: 2, image: 'https://picsum.photos/100/100?random=4', name: 'Maria Santos', text: 'Dati, pangarap ko lang magkaroon ng travel agency. Ngayon, totoo na! Salamat eAccess PH!' },
        { id: 3, image: 'https://picsum.photos/100/100?random=5', name: 'Peter Tan', text: 'Highly recommended! Ang ganda ng support system nila at laging may training para sa aming mga partners.' },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map(t => (
                        <div key={t.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-secondary"/>
                            <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                            <p className="font-bold text-brand-primary">{t.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Join Now Section --- //
const JoinNowSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => (
    <section className="py-20 bg-brand-primary text-white text-center" style={{backgroundImage: `url('https://picsum.photos/1600/900?blur=5&random=6')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.8)'}}>
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready ka na bang maging next success story?</h2>
            <p className="text-gray-200 mb-8 text-lg">Huwag palampasin ang pagkakataon. Ang promo ay para sa limited slots lang!</p>
            <button 
                onClick={onCTAClick}
                className="bg-brand-secondary text-brand-dark font-bold text-2xl py-5 px-12 rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
                JOIN NOW TODAY!
            </button>
        </div>
    </section>
);

// --- Important Notice Section --- //
const NoticeSection = () => (
    <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h3 className="font-bold text-white text-xl mb-4">Important Notice</h3>
            <div className="text-sm space-y-2 max-w-3xl mx-auto">
                <p>This is a business opportunity, not an investment scheme or a security. It is not a Multi-Level Marketing (MLM) program.</p>
                <p>We do not guarantee any passive income. Earnings are based on individual effort, performance, and sales.</p>
                <p>eAccess PH provides a software platform (portal) for users to operate their own travel and services business.</p>
            </div>
            <p className="mt-8 text-xs">&copy; {new Date().getFullYear()} eAccess PH. All Rights Reserved.</p>
        </div>
    </footer>
);

// --- Landing Page --- //
const LandingPage: React.FC = () => {
    const [isVideoModalOpen, setVideoModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleCTAClick = () => {
        navigate('/signup');
    };

    return (
        <div>
            <HeroSection onCTAClick={handleCTAClick} />
            <VideoPreviewSection onPlayClick={() => setVideoModalOpen(true)} />
            <AboutSection />
            <PackageDetailsSection onCTAClick={handleCTAClick} />
            <IncomePotentialSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <JoinNowSection onCTAClick={handleCTAClick} />
            <NoticeSection />
            <VideoModal isOpen={isVideoModalOpen} onClose={() => setVideoModalOpen(false)} videoId="FvOz70rWHXM" />
        </div>
    );
};

export default LandingPage;
