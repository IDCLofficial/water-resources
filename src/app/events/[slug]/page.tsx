'use client'

import Image from "next/image";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const event = {
  title: "Imo State Mining Stakeholders Conference 2025",
  img: "/images/monsm-news1.jpg",
  date: "20 October 2025",
  time: "9:00 am - 4:00 pm",
  organizer: "Ministry of Industry, Mines, and Solid Minerals, Imo State",
  phone: "+234 803 123 4567",
  address: "Owerri Conference Center, Imo State",
  description:
    "The Imo State Mining Stakeholders Conference 2025 brings together miners, regulators, community leaders, and investors to discuss the future of mining in Imo State. The conference will feature keynote addresses from top government officials, technical sessions on mining regulations, and interactive workshops on sustainable mining practices. Attendees will have the opportunity to network with industry leaders, participate in breakout sessions focused on community engagement and environmental stewardship, and learn about the latest innovations in mining technology. The event aims to foster collaboration, promote best practices, and ensure that mining activities contribute positively to the state's economy while protecting the environment.",
};

const speakers = Array(4).fill({
  name: "JAPHET GILBERT",
  role: "Lead Speaker",
  img: "/images/commissioner2.png",
});

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({days: 0, hours: 0, minutes: 0, seconds: 0});

  useEffect(() => {
    function calculateTimeLeft() {
      const eventDate = new Date(targetDate);
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-green-700 text-white rounded-lg px-8 py-4 flex gap-6 items-center text-center w-max mt-4 mb-6 md:mb-0 md:absolute md:bottom-6 md:right-10 shadow-lg">
      <div>
        <div className="text-2xl font-bold">{timeLeft.days}</div>
        <div className="text-xs uppercase">Days</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div>
        <div className="text-2xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs uppercase">Hours</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div>
        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs uppercase">Minutes</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div>
        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs uppercase">Seconds</div>
      </div>
    </div>
  );
}

export default function EventDetailPage() {
  return (
    <div className="bg-white">
      {/* Hero Title */}
      <section className="relative w-full h-[220px] flex items-center justify-center bg-gradient-to-br from-green-900/80 to-black/80">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center z-10">{event.title}</h1>
      </section>
      {/* Event Image & Countdown */}
      <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center pt-10 pb-6 px-4">
        <div className="w-full max-w-4xl relative">
          <Image src={event.img} alt={event.title} width={1200} height={500} className="rounded-xl object-cover w-full h-[340px]" />
          <div className="md:absolute md:bottom-6 md:right-10">
            <Countdown targetDate={event.date} />
          </div>
        </div>
        <p className="text-gray-700 mt-8 mb-8 text-center max-w-3xl mx-auto">{event.description}</p>
      </section>
      {/* Event Details */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-xl font-bold mb-4">EVENT DETAILS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          <div><span className="font-semibold">DATE:</span> <span className="ml-2">{event.date}</span></div>
          <div><span className="font-semibold">ORGANIZER:</span> <span className="ml-2">{event.organizer}</span></div>
          <div><span className="font-semibold">ADDRESS:</span> <span className="ml-2">{event.address}</span></div>
          <div><span className="font-semibold">TIME:</span> <span className="ml-2">{event.time}</span></div>
          <div><span className="font-semibold">PHONE:</span> <span className="ml-2">{event.phone}</span></div>
        </div>
      </section>
      {/* Speakers */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-xl font-bold mb-6">SPEAKERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((sp, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow p-4">
              <div className="w-40 h-48 relative mb-3 rounded-lg overflow-hidden">
                <Image src={sp.img} alt={sp.name} fill className="object-cover" />
              </div>
              <span className="text-green-700 font-semibold text-xs mb-1">{sp.role}</span>
              <span className="font-bold text-lg text-center">{sp.name}</span>
            </div>
          ))}
        </div>
      </section>
      <CTASection
      heading="Ready to Experience the New Imo?"
      subtext="Discover our vision for an inclusive, empowered, and connected state."
      buttonLabel="Contact Us"
      buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
} 