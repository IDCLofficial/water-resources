import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "OCTOBER 20, 2025",
    location: "OWERRI, IMO STATE",
    title: "Mining Stakeholders Forum",
    description: "A forum bringing together miners, regulators, and community leaders to discuss best practices, compliance, and sustainable mining in Imo State. Includes panel discussions, Q&A, and networking opportunities.",
    img: "/images/monsm-news1.jpg",
    details: `This event will feature keynote addresses from top government officials, technical sessions on mining regulations, and interactive workshops on sustainable mining practices. Attendees will have the opportunity to network with industry leaders and participate in breakout sessions focused on community engagement and environmental stewardship.`,
    dateString: "2025-10-20T09:00:00"
  },
  {
    date: "OCTOBER 21, 2025",
    location: "INDUSTRIAL PARK, OWERRI",
    title: "Industrial Parks Launch",
    description: "Official launch event for new industrial parks across Imo State, featuring site tours, investor presentations, and government policy briefings.",
    img: "/images/building.png",
    details: `The launch will include guided tours of the new industrial parks, presentations from potential investors, and policy briefings from ministry officials. The event aims to showcase the state’s commitment to industrial growth and attract new business ventures to Imo State.`,
    dateString: "2025-10-21T10:00:00"
  },
  {
    date: "OCTOBER 22, 2025",
    location: "IMO STATE REVENUE HOUSE",
    title: "Revenue Digitization Workshop",
    description: "A hands-on workshop focused on the implementation of digital revenue collection systems in the mining and industrial sectors, in partnership with the Imo State Internal Revenue Service (IIRS).",
    img: "/images/monsm-news2.webp",
    details: `Participants will learn about the latest digital tools for revenue collection, attend live demonstrations, and engage in Q&A sessions with experts from the IIRS. The workshop will also cover best practices for transparency and accountability in revenue management.`,
    dateString: "2025-10-22T11:00:00"
  },
  {
    date: "OCTOBER 23, 2025",
    location: "IMO STATE ENVIRONMENTAL AGENCY",
    title: "Environmental Compliance Day",
    description: "A day dedicated to promoting environmental best practices in mining and industry, with training sessions on compliance, remediation, and monitoring.",
    img: "/images/stock6.jpg",
    details: `The event will feature training sessions on environmental compliance, case studies on remediation projects, and panel discussions on the future of sustainable industry in Imo State. Environmental experts and government officials will be available for consultations.`,
    dateString: "2025-10-23T12:00:00"
  },
  {
    date: "OCTOBER 24, 2025",
    location: "OWERRI, IMO STATE",
    title: "Women in Mining & Industry Summit",
    description: "A summit celebrating and empowering women in the mining and industrial sectors, featuring keynote speakers, mentorship sessions, and networking.",
    img: "/images/heroImage.png",
    details: `This summit will bring together women leaders from across the mining and industrial sectors for keynote speeches, mentorship sessions, and networking opportunities. The event will highlight the achievements of women in the industry and provide resources for career development.`,
    dateString: "2025-10-24T13:00:00"
  },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function EventsListSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Upcoming Events</h2>
      <div className="flex flex-col gap-8">
        {events.map((event, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0">
            <div className="w-full md:w-64 h-40 relative rounded overflow-hidden flex-shrink-0">
              <Image src={event.img} alt={event.title} fill className="object-cover" />
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-xs mb-1">
                  <span>{event.date}</span>
                  <span className="hidden md:inline">|</span>
                  <span>{event.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{event.description}</p>
              </div>
              <div className="flex justify-end md:justify-center">
                <Link href={`/events/${slugify(event.title)}`} className="border border-green-600 text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-50 transition">More Information</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 