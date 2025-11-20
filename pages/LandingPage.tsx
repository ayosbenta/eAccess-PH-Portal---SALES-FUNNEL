import React, { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import VideoModal from '../components/VideoModal';
import ImageModal from '../components/ImageModal'; // Import ImageModal
import { Testimonial } from '../types';
import { 
    BoltIcon, GraduationCapIcon, GreenCheckIcon, InsuranceIcon, PackageBriefcaseIcon, PlayIcon, 
    ServicesAirplaneIcon, SparklesIcon, StarIcon, StorefrontIcon, TargetIcon, WalletIcon 
} from '../components/icons';

// --- Hero Section --- //
const HeroSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 24);

  return (
    <section className="bg-brand-primary text-white text-center py-20 px-4" style={{backgroundImage: `url('https://images.unsplash.com/photo-1551293366-4f8a0113881c?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.8)'}}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-in-down">
          Discover How You Can Start Your Own Travel Business and Earn from Every Booking.
          <span className="block mt-4 text-3xl md:text-4xl">
            <span className="bg-brand-secondary text-brand-dark px-4 py-2 rounded-md inline-block font-semibold tracking-wide transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                Kahit Baguhan Ka Pa!
            </span>
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg md:text-xl mb-8 animate-fade-in-up">
          Ang eAccess PH ang all-in-one travel system na tutulong sa’yo makapagsimula agad. Gamitin ang platform, i-build ang sarili mong brand, at kumita nang hindi nagbabayad ng mahal na franchise fee.
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
const VideoPreviewSection: React.FC<{ onPlayClick: () => void; videoId: string }> = ({ onPlayClick, videoId }) => (
  <section className="py-16 bg-white text-center">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Panoorin ang Kumpletong Presentasyon</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Alamin kung paano gumagana ang eAccess PH Portal at kung paano ka pwedeng kumita gamit ang aming system.</p>
      <div 
        onClick={onPlayClick}
        className="relative max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
      >
        <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="Video Presentation Thumbnail" className="w-full h-auto transition-transform duration-300 group-hover:scale-105"/>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
          <PlayIcon />
        </div>
      </div>
    </div>
  </section>
);

// --- About Section --- //
const AboutSection = () => {
    const infoCards = [
        {
            icon: <PackageBriefcaseIcon />,
            title: "All-In-One System",
            description: "Isang portal para sa lahat ng travel at services needs mo."
        },
        {
            icon: <StorefrontIcon />,
            title: "Your Own Brand",
            description: "Operate under your own business name and logo. Ikaw ang boss!"
        },
        {
            icon: <WalletIcon />,
            title: "Maximize Your Earning",
            description: "Earn from commissions, service fees, and markups. You control your pricing."
        },
        {
            icon: <SparklesIcon />,
            title: "User-Friendly",
            description: "Simple at modern ang design, madaling gamitin kahit sa mga beginners."
        }
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">About eAccess PH Portal</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infoCards.map(card => (
                        <InfoCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
    <div className="h-12 w-12 text-brand-primary mx-auto mb-4">{icon}</div>
    <h3 className="font-bold text-xl mb-2 text-brand-primary">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// --- Package Details Section --- //
const PackageDetailsSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  const services = [
    "Flight Booking", "Hotel Booking", "Ferry Booking",
    "Tours and Packages", "Bills Payment", "E-Loading",
    "Insurance", "Visa Application"
  ];

  const inclusions = [
    "One-Time Payment", "No Networking", "Operate Under Your Own Business Name",
    "Custom Logo and Branding", "Free Recorded Video Trainings", "Downloadable Manual",
    "Printable Tarpaulin", "Marketing Materials"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-blue-800">
            Ang eAccess PH Portal <span className="text-amber-600">Business Package</span>
        </h2>
        
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl shadow-2xl p-6 md:p-8 text-center my-12">
            <p className="text-xl md:text-2xl font-bold tracking-widest uppercase">Lifetime Business Access</p>
            <p className="text-sm font-light mt-1">Original Price: <span className="line-through">₱9,998</span></p>
            <p className="font-extrabold my-2 text-6xl sm:text-7xl md:text-8xl">
                ₱4,998
            </p>
            <p className="text-base md:text-lg font-semibold tracking-wide">PROMO PRICE - One-Time Payment!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-blue-50 rounded-xl shadow-lg border-l-8 border-blue-400 p-6 h-full">
            <div className="flex items-center mb-4">
              <ServicesAirplaneIcon />
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 ml-3">Services Offered</h3>
            </div>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service} className="flex items-center font-medium text-gray-800">
                  <GreenCheckIcon />
                  <span className="ml-3">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 rounded-xl shadow-lg border-l-8 border-amber-400 p-6 h-full">
            <div className="flex items-center mb-4">
              <PackageBriefcaseIcon />
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 ml-3">Package Inclusions</h3>
            </div>
            <ul className="space-y-3">
              {inclusions.map(inclusion => (
                <li key={inclusion} className="flex items-start font-medium text-gray-800">
                  <StarIcon />
                  <span className="ml-3">{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
            <button
                onClick={onCTAClick}
                className="bg-red-600 text-white font-extrabold text-xl sm:text-2xl md:text-3xl py-4 sm:py-5 px-10 sm:px-12 rounded-full shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out animate-blink"
            >
                GRAB THE ₱4,998 PROMO NOW!
            </button>
        </div>

      </div>
    </section>
  );
};

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
            <div className="mt-8 bg-blue-100 border-l-4 border-brand-accent text-brand-dark p-4 rounded">
              <h4 className="font-bold">Sample Income Computation</h4>
              <p className="text-3xl font-bold text-brand-primary">₱24,900<span className="text-lg font-normal">/month*</span></p>
              <p className="text-sm">*Estimated based on ₱830 average daily earnings. Results may vary.</p>
            </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Why Choose Us Section --- //
const WhyChooseUsSection = () => {
    const benefits = [
        { icon: <WalletIcon />, title: "Low Capital, Lifetime Access", description: "Isang beses na bayad lang, panghabangbuhay na business na." },
        { icon: <TargetIcon />, title: "No Networking / No Quota", description: "Focus ka lang sa business mo, walang pressure sa sales." },
        { icon: <BoltIcon />, title: "Ready-To-Use Platform", description: "Pagka-sign up mo, pwede ka na magsimula agad." },
        { icon: <GraduationCapIcon />, title: "Comprehensive Trainings", description: "May step-by-step video tutorials para sa'yo." },
        { icon: <InsuranceIcon />, title: "Trusted & Reliable", description: "Legit at DTI-registered na kumpanya." },
        { icon: <StorefrontIcon />, title: "Operate Under Your Own Name", description: "Ikaw ang bida. Build your own brand." }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Bakit eAccess PH?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map(benefit => (
                        <div key={benefit.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                            <div className="mb-4 h-10 w-10 text-brand-primary">{benefit.icon}</div>
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
const TestimonialsSection: React.FC<{ onImageClick: (url: string) => void }> = ({ onImageClick }) => {
    const testimonials: Testimonial[] = [
        { 
            id: 1, 
            image: 'https://i.imgur.com/K6oWS6b.jpeg', 
            name: 'Julie May C. Azucena', 
            business: 'Mekmek Travel and Tours',
            text: "Ako po si Julie May Cabalo Azucena isang OFW sa Dubai bukod po sa sahod ko kumikita po ako nang extra income malaking tulong talga siya lalo na sa katulad kong isang widow at may anak na pinapaaral sa Pinas buti nalang sinubukan ko, salamat Lord, salamat eAccess 100% legit travel Company. Very fast and easy to use." 
        },
        { 
            id: 2, 
            image: 'https://i.imgur.com/wG4O4JH.jpeg', 
            name: 'Rachel Dalino', 
            business: 'Dalino Travel and Tours Services',
            text: "Ako po si RACHEL DALINO isang OFW sa HONGKONG bukod sa sahod ko as OFW Kumikita din po ako sa FLIGHT BOOKINGS. When i first met EACCESS nagustohan ko po agad ito dahil mas mababa po ang pamasahe nya kysa sa ibang company nag-avail po ako dahil napakababa po ang mga fare lalo na ang PROMOS & INTERNATIONAL FARE. Pero para sa isang OFW na katulad ko all of this is not easy maraming ups and downs pero ONCE YOU BUILD A BUSINESS WITH A HEART AND DETERMINATION WALANG IMPOSSIBLE SA LAHAT. DO THIS BUSINESS, STUDY, WORK HARD and ONE DAY makikita mo ang lahat ng pinaghihirapan mo." 
        },
        { 
            id: 3, 
            image: 'https://i.imgur.com/qONwVfi.jpeg', 
            name: 'Riza Tejano', 
            business: 'RizBartz Travel and Tours',
            text: "My name is Riza May Tejano OFW and currently working in Hong Kong since 2013. When eAccess was introduced to me by a friend, i didn't hesitate to be part of the company because I know that if you work hard and be positive you will get a reward for your self, when I joined the business at the first time. I was able to earned some extra income by booking online airline tickets and other products offered by the company like bills payment, passport and Psa assistance and also inviting other friends to have travel and tour business by receiving a commission. I'm so thankful and proud to be an eaccess travel agent because I was able to learn more knowledge and broaden my ability to spread about this business opportunity to others and for my self. With the help of the company they are offering a business online presentations and meetings to everyone who are willing to learn and be a part of the company. “To all my Co-Ofw never underestimate our selves that we can only work from our employers and depend from our salary but we can do much more through this part time job offering a business opportunity for everyone. Join now our growing business opportunity to experience your future unlimited sales”."
        },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map(t => (
                        <div key={t.id} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-transform duration-300" onClick={() => onImageClick(t.image)}>
                            <img 
                                src={t.image} 
                                alt={`Testimonial from ${t.name}`} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Join Now Section --- //
const JoinNowSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => (
    <section className="py-20 bg-brand-primary text-white text-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1528698827591-e19ccd7e23ec?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.8)'}}>
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
    const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
    const presentationVideoId = "FvOz70rWHXM";

    const handleCTAClick = () => {
        window.open('https://eaccessph.com/register/100000799', '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <HeroSection onCTAClick={handleCTAClick} />
            <VideoPreviewSection 
                onPlayClick={() => setVideoModalOpen(true)} 
                videoId={presentationVideoId}
            />
            <AboutSection />
            <PackageDetailsSection onCTAClick={handleCTAClick} />
            <IncomePotentialSection />
            <WhyChooseUsSection />
            <TestimonialsSection onImageClick={setSelectedImageUrl} />
            <JoinNowSection onCTAClick={handleCTAClick} />
            <NoticeSection />
            <VideoModal 
                isOpen={isVideoModalOpen} 
                onClose={() => setVideoModalOpen(false)} 
                videoId={presentationVideoId} 
            />
            <ImageModal 
                isOpen={!!selectedImageUrl} 
                onClose={() => setSelectedImageUrl(null)} 
                imageUrl={selectedImageUrl} 
            />
        </div>
    );
};

export default LandingPage;