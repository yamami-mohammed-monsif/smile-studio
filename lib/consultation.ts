/**
 * Consultation request logic.
 *
 * SIMULATED: submitConsultation() does NOT send data anywhere. It waits briefly
 * and resolves. Replace its body with a real API/CRM call later — the form UI
 * only depends on this function's signature.
 */
export type ConsultationRequest = {
  name: string;
  email: string;
  phone: string;
};
export type FieldErrors = Partial<Record<keyof ConsultationRequest, string>>;

export function validateConsultation(v: ConsultationRequest): FieldErrors {
  const e: FieldErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid email address, e.g. name@example.com.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15)
    e.phone = "Please enter a valid phone number.";
  return e;
}

export async function submitConsultation(
  _req: ConsultationRequest,
): Promise<{ ok: true }> {
  await new Promise((r) => setTimeout(r, 1200));
  return { ok: true };
}

/**
 * Analytics stub. Never pass personal information here.
 * Events: cta_click, form_start, form_validation_error, form_submit_success, faq_open.
 * Candidate experiments (hypotheses only, no proven impact):
 *  1. Clarity-focused hero headline vs. outcome-led headline.
 *  2. Three-field form vs. name + one preferred contact method.
 */
export function track(event: string, props?: Record<string, string>) {
  if (process.env.NODE_ENV === "development")
    console.debug("[track]", event, props ?? {});
}
