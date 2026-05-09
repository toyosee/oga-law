// import { MailPlus } from "lucide-react";

export default function SubscribeSection() {
  const email = "info@ogalaw.ng";
  const subject = encodeURIComponent("Inquiry");
  const body = encodeURIComponent("Hello, I would like to make an inquiry regarding your services.");
  const footer = encodeURIComponent("\n\nBest regards,\nYour Name");

  const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}${footer}`;

  return (
    <p className="text-gray-500 text-sm mt-2">
      Have a question or need more details?
      <a href={mailtoHref} className="text-ogalaw-green hover:underline">
              <strong>{" "}Send Inquiry</strong>
      </a>
      {/* <a href={mailtoHref} className="inline-block ml-1">
        <MailPlus className="w-4 h-4 text-ogalaw-green" />
      </a> */}
    </p>
  );
}
