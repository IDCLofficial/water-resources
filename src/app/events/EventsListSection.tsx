import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "OCTOBER 29, 2025",
    location: "OGUTA WATER DAM SITE",
    title: "Oguta Water Dam Commissioning Ceremony",
    description: "Official commissioning of the Oguta Water Dam project to boost water supply for domestic, agricultural, and industrial use in Imo State.",
    img: "/images/dam.jpeg",
    details: `Led by the Honourable Commissioner alongside international partners and community leaders, this landmark ceremony marked the completion of infrastructure that will provide clean water to thousands of residents. The event included technical presentations, community engagement sessions, and future water management planning.`,
    dateString: "2025-10-29T09:00:00",
  },
  {
    date: "JUNE 15, 2025",
    location: "GOVERNMENT HOUSE, OWERRI",
    title: "Water Quality Management Stakeholders Meeting",
    description: "Engagement with water experts, community leaders, and ministry officials to discuss strategies for improving water quality and supply across Imo State.",
    img: "/images/waterteam.png",
    details: `The Permanent Secretary led the meeting, discussing water infrastructure upgrades, quality testing protocols, and collaboration with international partners. Participants agreed on implementing regular water quality monitoring and community education programs.`,
    dateString: "2025-06-15T10:00:00",
  },
  {
    date: "MAY 27, 2025",
    location: "RURAL COMMUNITIES ACROSS IMO STATE",
    title: "Rural Water Access Initiative Launch",
    description: "A comprehensive initiative to expand clean water access to underserved rural communities through borehole construction and community water management.",
    img: "/images/water1.png",
    details: `Commissioner and water experts launched the initiative themed "Water for All." The ministry began construction of boreholes in rural areas and held training sessions on community water management and conservation practices.`,
    dateString: "2025-05-27T14:00:00",
  },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const now = new Date();
const upcomingEvents = events.filter(e => new Date(e.dateString) >= now);
const pastEvents = events.filter(e => new Date(e.dateString) < now);

export default function EventsListSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Upcoming Events Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        <div className="flex flex-col gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <div key={event.title + event.dateString} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0">
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
      ) : (
        <div className="text-gray-400 italic mb-16">No upcoming events at this time.</div>
      )}
      {/* Past Events Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Past Events</h2>
      {pastEvents.length > 0 ? (
        <div className="flex flex-col gap-8">
          {pastEvents.map((event) => (
            <div key={event.title + event.dateString} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0 opacity-70">
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
      ) : (
        <div className="text-gray-400 italic">No past events yet.</div>
      )}
    </section>
  );
} 