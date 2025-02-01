import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Angaye Seimokumo J.",
    role: "Director, Programmer",
    image: "https://img.freepik.com/premium-vector/handsome-black-man-with-beard-glasses_1149118-59.jpg?w=740",
    description: "Visionary leader driving the team to success."
  },
  {
    name: "Oruene Azibato",
    role: "Instructor and Research Fellow",
    image: "https://img.freepik.com/premium-vector/portrait-young-african-man-full-face_276162-169.jpg?w=740",
    description: "Tech enthusiast building innovative solutions."
  },
  {
    name: "Dr. Desmond (Rowland) Eteh (Ph.D)",
    role: "Data Scientist/GIS analyst",
    image: "https://img.freepik.com/premium-vector/smiling-handsome-black-man-with-beard_1149118-203.jpg?w=740",
    description: "Ensuring every detail aligns with our vision."
  },
  {
    name: "Timi Bob",
    role: "Instructor",
    image: "https://img.freepik.com/premium-vector/handsome-young-black-man-casual-clothes_1149118-76.jpg?w=740",
    description: "Creating stunning visuals for our projects."
  },
  {
    name: "Dekpen Tari",
    role: "Senior Developer",
    image: "https://img.freepik.com/premium-vector/man-with-beard-blue-hoodie_1262159-26.jpg?w=740",
    description: "Spreading the word about our mission."
  },
  {
    name: "Misongo Favour",
    role: "Senior Developer",
    image: "https://img.freepik.com/premium-vector/portrait-handsome-male-office-worker_481311-2.jpg?w=740",
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
