const AboutUs = () => {
  return (
    <div className="py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 max-w-5xl mx-auto text-lg text-gray-500">
            We are a pioneering ICT development and training hub, specializing in software development, data science, automation, embedded systems, and robotics. Our mission is to bridge the digital divide by transforming learners into industry leaders through dynamic training programs and cutting-edge technologies.
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

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold">Founder & Leadership</h3>
          <div className="mt-6 flex flex-col items-center">
            <img src="/images/Angaye Seimokumo.jpg" alt="Angaye Seimokumo Jay" className="w-32 h-32 rounded-full shadow-md" />
            <p className="mt-4 text-lg font-medium">Angaye Seimokumo Jay – Founder & CEO</p>
            <p className="mt-2 text-gray-500 max-w-3xl">
              A visionary technologist, educator, and advocate for digital transformation. With expertise in software development, data science, and embedded systems, he has led Golden Viosam Nig. Ltd to the forefront of innovation in Nigeria.
            </p>
            <p className="mt-2 text-gray-500 max-w-3xl">
              As a sought-after speaker and mentor, Angaye has spoken at various technology conferences and academic institutions, inspiring the next generation of programmers, engineers, and innovators.
            </p>
            <p className="mt-2 text-gray-500 max-w-3xl">
              His work focuses on software automation, artificial intelligence, and educational technology, ensuring that Golden Viosam remains at the forefront of ICT development.
            </p>
          </div>
        </div>
        <div className="mt-20 text-center">
          <div className="mt-6 flex flex-col items-center">
          
            <p className="mt-4 text-lg font-medium">Angaye Seimokumo Junior Biography
            </p>
            <p className="mt-2 text-gray-500 max-w-3xl">
            Angaye Seimokumo Junior is a visionary leader, engineer, and technology expert with a passion for digital transformation, software development, and innovation. As the founder and CEO of Golden Viosam Nigeria Limited, a pioneering digital technology firm specializing in software development, data integration, and robotics, he brings over a decade of experience in the tech industry. His extensive background in engineering, education, and public speaking has positioned him as a driving force in technological advancements in Nigeria and beyond. 

            </p>
            <p className="mt-2 text-gray-500 max-w-3xl">
            Seimokumo holds a Master’s degree in Oil and Gas Management Technology from Coventry University, UK, equipping him with a deep understanding of data-driven solutions in resource management and engineering processes. Prior to that, he earned a Bachelor’s degree in Civil Engineering from Niger Delta University, where he honed his skills in structural analysis, project management, and problem-solving.  

            </p>
            <p className="mt-2 text-gray-500 max-w-3xl">
            His professional journey spans multiple industries, reflecting a strong foundation in engineering, education, and IT development. He has worked as a Computer Hardware/Software Maintenance Engineer at Total Elf Oil Company Nigeria, a Site Engineer at Terra Associates Construction Company, and a Computer Science Educator and Head of Department at Greater Height Secondary School. His commitment to empowering young engineers led him to serve as Publicity Secretary of the Nigerian Society of Young Engineers (Bayelsa Chapter), where he has played a key role in promoting engineering excellence.  

            </p>
          </div>
        </div>


        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold">Technology Solutions & Services</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {["Software Development", "Data Integration & Automation", "Data Analysis & Insights", "Training & Robotics"].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-lg font-semibold">{service}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold">Company Achievements</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Training thousands of students and professionals", "Developing groundbreaking software solutions", "Automating data-driven systems", "Hosting tech seminars and conferences"].map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-500">✅ {achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold">Our Products</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {["AccountIn – A comprehensive accounting solution", "Animal Encyclopedia – A digital resource for animal research", "Health Metrics Poultry – Smart health tracking for poultry farming", "DigiBayelsa – A digital transformation initiative"].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-500">📌 {product}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
