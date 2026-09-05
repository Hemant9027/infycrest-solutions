export const contactInquiries = { collection: "contact_inquiries" } as const;
export const reservationRequests = { collection: "reservation_requests" } as const;
export type ContactInquiry = Record<string, unknown>;
export type ReservationRequest = Record<string, unknown>;
