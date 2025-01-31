import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "Web Design & Development Course for Beginners",
    instructor: "N/A",
    duration: "1.49 Hrs",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470",
    description: "This course introduces students to the fundamental concepts of web design and development."
  },
  {
    title: "Advanced Web Development Techniques",
    instructor: "N/A",
    duration: "2.5 Hrs",
    image: "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=1470",
    description: "Dive deeper into web development with advanced techniques."
  },
  {
    title: "UI/UX Design Fundamentals",
    instructor: "N/A",
    duration: "2 Hrs",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1472",
    description: "Learn the essentials of User experience and User interface design."
  },
  {
    title: "Mobile App Development with Flutter",
    instructor: "N/A",
    duration: "3 Hrs",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1470",
    description: "Explore mobile application development using Flutter."
  },
  {
    title: "Introduction  to SQL and Database Management",
    instructor: "N/A",
    duration: "1.5 Hrs",
    image: "https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?q=80&w=1398",
    description: "Learn the basics of SQL and how to manage databases effectively."
  },
  {
    title: "Algorithms Design with Visual Basic .Net",
    instructor: "N/A",
    duration: "1.49 Hrs",
    image: "https://images.unsplash.com/photo-1642952469120-eed4b65104be?q=80&w=1470",
    description: "This course focuses on designing algorithms using Visual Basic .Net."
  },
  {
    title: "Python Programming for Application Development",
    instructor: "N/A",
    duration: "2 Hrs",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469",
    description: "Discover application development using Python."
  },
  {
    title: "Introduction to Robotics",
    instructor: "N/A",
    duration: "2.5 Hrs",
    image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=1470",
    description: "This course introduces the fundamental concepts of robotics and embedded systems."
  },
  {
    title: "Embedded Systems Programming",
    instructor: "N/A",
    duration: "2 Hrs",
    image: "https://images.unsplash.com/photo-1551703616-e5a729ff0185?q=80&w=1473",
    description: "This course covers programming embedded systems using C and C++."
  },
  {
    title: "Geospatial Analysis and Remote Sensing",
    instructor: "N/A",
    duration: "2 Hrs",
    image: "https://plus.unsplash.com/premium_photo-1712489841639-417b916594b5?q=80&w=1632",
    description: "This course teaches how to transform spatial data into actionable insights using GIS and remote sensing technologies."
  },

];

const Courses = () => {
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
        <h2 className="text-4xl font-bold text-gray-900">Our Courses</h2>
        <p className="mt-4 text-lg text-gray-700">Explore a variety of courses to boost your skills.</p>
      </div>
      <div className="relative mt-10 max-w-7xl mx-auto px-6">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-md" onClick={() => scroll("left")}> <ChevronLeft size={24} /> </button>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-4 scroll-smooth">
          {courses.map((course, index) => (
            <div key={index} className="min-w-[300px] bg-white shadow-lg rounded-xl overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="text-blue-500 font-medium">Instructor: {course.instructor}</p>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <p className="text-gray-500 text-sm mt-1">Duration: {course.duration}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-md" onClick={() => scroll("right")}> <ChevronRight size={24} /> </button>
      </div>
    </div>
  );
};

export default Courses;
