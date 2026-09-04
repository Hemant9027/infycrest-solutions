export const EMAIL = "jones@bmbahamas.com";
export const LOCATION = "Nassau, New Providence, Bahamas";
export const INN_NAME = "Hibiscus Inn Guest House";

export function mailto(subject: string, body?: string): string {
  const q = [`subject=${encodeURIComponent(subject)}`];
  if (body) q.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${EMAIL}?${q.join("&")}`;
}

/** "Check Availability" — a pre-written email enquiry the guest can edit and send. */
export const AVAILABILITY_MAILTO = mailto(
  "Checking availability at Hibiscus Inn",
  [
    "Hello,",
    "",
    "We would love to stay at Hibiscus Inn. Could you let us know what you have available?",
    "",
    "Arrival date: ",
    "Departure date: ",
    "Number of guests: ",
    "Anything else we should know: ",
    "",
    "Thank you!",
  ].join("\n"),
);

/** "Contact Us" — a simple hello. */
export const CONTACT_MAILTO = mailto("A question for Hibiscus Inn");
