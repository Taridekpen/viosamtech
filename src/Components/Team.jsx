import { Link } from "react-router-dom";
import { teamMembers } from "../data/team";
import TeamAvatar from "./TeamAvatar";

const Team = () => {
  return (
    <section className="scroll-mt-24 bg-gray-100 py-16" id="team">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Meet Our Staff
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          A group of passionate individuals dedicated to making a difference.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.slug}
              className="flex h-full flex-col rounded-xl bg-white p-6 text-center shadow-lg"
            >
              <TeamAvatar member={member} />
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-blue-600">
                {member.role}
              </p>
              <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                {member.summary}
              </p>
              <Link
                to={`/team/${member.slug}`}
                className="mt-5 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
