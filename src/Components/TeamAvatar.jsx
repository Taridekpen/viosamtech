import { useState } from "react";
import { PLACEHOLDER_IMAGES, memberInitials } from "../data/team";

const sizes = {
  sm: "h-36 w-36 text-2xl",
  lg: "h-48 w-48 text-4xl",
};

const TeamAvatar = ({ member, size = "sm" }) => {
  const [failed, setFailed] = useState(false);
  const showInitials = failed || PLACEHOLDER_IMAGES.has(member.image);
  const sizeClass = sizes[size] ?? sizes.sm;

  return (
    <div
      className={`mx-auto overflow-hidden rounded-full bg-blue-600 text-white shadow-md ring-4 ring-white ${sizeClass}`}
    >
      {showInitials ? (
        <span className="flex h-full w-full items-center justify-center font-semibold">
          {memberInitials(member.name)}
        </span>
      ) : (
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

export default TeamAvatar;
