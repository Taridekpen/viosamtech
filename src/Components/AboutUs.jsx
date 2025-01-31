
const AboutUs = () => {
  return (
    <div className="py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 max-w-5xl mx-auto text-xl text-gray-500">
          Golden Viosam Nig. Ltd is a trailblazing ICT development and training hub, dedicated to shaping the future of innovation and technology in Nigeria and beyond. We are passionate about empowering individuals with the skills and knowledge needed to thrive in a rapidly evolving digital world.
With a commitment to excellence, creativity, and inclusivity, we strive to bridge the digital divide by transforming learners into creators, problem-solvers, and leaders. Through dynamic training programs and cutting-edge technologies, Golden Viosam Nig. Ltd is paving the way for a tech-savvy generation ready to tackle tomorrow’s challenges.

          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-target h-8 w-8 text-blue-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
            <p className="mt-2 text-gray-500">
            To empower the youth of Nigeria with the essential skills in coding, electronics, and innovation, fostering a culture of creativity, critical thinking, and lifelong learning that drives technological and societal progress.
            </p>
          </div>
          {/* <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users h-8 w-8 text-blue-600"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Our Team</h3>
            <p className="mt-2 text-gray-500">
              A diverse group of data scientists, environmental engineers, and
              technology enthusiasts.
            </p>
          </div> */}
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award h-8 w-8 text-blue-600"
              >
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Our Vision</h3>
            <p className="mt-2 text-gray-500">
            To become the leading catalyst for ICT transformation in Nigeria, nurturing a generation of innovators who will shape the future of technology, close the digital divide, and contribute to a sustainable and prosperous society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
