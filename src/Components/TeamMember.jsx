import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getTeamMember } from "../data/team";
import TeamAvatar from "./TeamAvatar";

const TeamMember = () => {
  const { slug } = useParams();
  const member = getTeamMember(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!member) {
    return (
      <section className="min-h-screen bg-gray-50 px-4 pb-16 pt-32">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Team member not found
          </h1>
          <p className="mt-3 text-gray-600">
            That profile is not on our team page.
          </p>
          <Link
            to="/#team"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Back to team
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-10 text-center shadow-md sm:px-10">
        <TeamAvatar member={member} size="lg" />
        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          {member.name}
        </h1>
        <p className="mt-2 font-medium text-blue-600">{member.role}</p>
        <p className="mt-6 text-left text-base leading-relaxed text-gray-700">
          {member.bio}
        </p>
        <Link
          to="/#team"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Back to team
        </Link>
      </div>
    </section>
  );
};

export default TeamMember;
