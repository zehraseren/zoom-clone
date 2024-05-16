"use client";

import Image from "next/image";
import { avatarImages } from "@/contants";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingCardProps {
  icon: string;
  title: string;
  date: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  handleClick: () => void;
  link: string;
  buttonText?: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();
  return (
    <section className="flex flex-col justify-between min-h-[258px] w-full rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} width={28} height={28} alt="upcoming" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="flex w-full max-sm:hidden relative">
          {avatarImages.map((img, index) => (
            <Image
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
              src={img}
              key={index}
              width={40}
              height={40}
              alt="attendees"
            />
          ))}
          <div className="flex-center left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4 absolute">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button className="rounded bg-blue-1 px-6" onClick={handleClick}>
              {buttonIcon1 && (
                <Image src={buttonIcon1} width={20} height={20} alt="feature" />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              className="bg-dark-4 px-6"
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link copied",
                });
              }}
            >
              <Image
                src="/icons/copy.svg"
                width={20}
                height={20}
                alt="feature"
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
