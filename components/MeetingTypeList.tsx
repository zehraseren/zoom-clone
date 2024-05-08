"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isJoiningMeeting" | "isScheduleMeeting" | "isInstantMeeting" | "undefined"
  >();
  const createMeeting = () => {};

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        className="bg-orange-1"
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        className="bg-blue-1"
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeCard
        className="bg-purple-1"
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        className="bg-yellow-1"
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => router.push("/recordings")}
      />
      <MeetingModal
        className="text-center"
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        buttonText="Join Meeting"
      />
    </section>
  );
};

export default MeetingTypeList;
