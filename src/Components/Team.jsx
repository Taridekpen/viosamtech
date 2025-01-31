import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Angaye Seimokumo J.",
    role: "Director, Programmer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    description: "Visionary leader driving the team to success."
  },
  {
    name: "Oruene Azibato",
    role: "Instructor and Research Fellow",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80",
    description: "Tech enthusiast building innovative solutions."
  },
  {
    name: "Roland Desmond",
    role: "Data Scientist/GIS analyst",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495c7?auto=format&fit=crop&q=80",
    description: "Ensuring every detail aligns with our vision."
  },
  {
    name: "Timi Bob",
    role: "Instructor",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80",
    description: "Creating stunning visuals for our projects."
  },
  {
    name: "Dekpen Tari",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    description: "Spreading the word about our mission."
  },
  {
    name: "Misongo Favour",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    description: "Spreading the word about our mission."
  }
];

const Team = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Meet Our Instructors</h2>
        <p className="mt-4 text-lg text-gray-700">A group of passionate individuals dedicated to making a difference.</p>
      </div>
      <div className="relative mt-10 max-w-7xl mx-auto px-6">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-md" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-4 scroll-smooth">
          {teamMembers.map((member, index) => (
            <div key={index} className="min-w-[300px] bg-white shadow-lg rounded-xl overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-500 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                View More
              </button>
            </div>
            
          ))}
        </div>
        
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-md" onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Team;
