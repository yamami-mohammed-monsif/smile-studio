"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Lock } from "lucide-react";
import { submitConsultation, track, validateConsultation, type ConsultationRequest, type FieldErrors } from "@/lib/consultation";

const empty: ConsultationRequest = { name: "", email: "", phone: "" };
const fields = [
  { key: "name", label: "Full name", type: "text", autoComplete: "name" },
  { key: "email", label: "Email address", type: "email", autoComplete: "email" },
  { key: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
] as const;

function FieldError({ error, id }: { error: string | undefined; id: string }) {
  const [displayed, setDisplayed] = useState(error);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (error) setDisplayed(error);
  }, [error]);
  if (!displayed) return null;
  return (
    <p
      id={id}
      className="field-error mt-1.5 text-sm text-destructive"
      data-leaving={!error}
      aria-hidden={!error}
      onAnimationEnd={() => { if (!error) setDisplayed(undefined); }}
    >
      {error ?? displayed}
    </p>
  );
}

export function ConsultationForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const started = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validateConsultation(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      track("form_validation_error", { fields: Object.keys(errs).join(",") });
      const first = Object.keys(errs)[0];
      if (first) (e.currentTarget.elements.namedItem(first) as HTMLInputElement | null)?.focus();
      return;
    }
    setStatus("loading");
    try {
      await submitConsultation(values);
      track("form_submit_success");
      setStatus("success");
      setTimeout(() => successRef.current?.focus(), 50);
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setValues(empty);
    setErrors({});
    setStatus("idle");
    started.current = false;
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="form-success rounded-2xl bg-card p-8 text-center text-card-foreground outline-none sm:p-10"
      >
        <CheckCircle2 className="mx-auto size-12 text-sage-deep" aria-hidden />
        <h3 className="mt-5 text-3xl">Thank you, {values.name.split(" ")[0]}.</h3>
        <p className="mt-3 text-muted-foreground">Your consultation request has been received. The clinic will be in touch to arrange a suitable time.</p>
        <p className="mt-4 text-xs text-muted-foreground">Demo only — no data was sent.</p>
        <button onClick={reset} className="mt-6 text-sm font-semibold underline underline-offset-4 hover:text-sage-deep focus-visible:outline-2 focus-visible:outline-ring">Submit another request</button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-2xl bg-card p-6 text-card-foreground sm:p-8" aria-describedby="privacy-note">
      <div className="space-y-5">
        {fields.map((f) => {
          const err = errors[f.key];
          return (
            <div key={f.key}>
              <label htmlFor={f.key} className="block text-sm font-semibold">{f.label} <span className="text-accent" aria-hidden>*</span></label>
              <input
                id={f.key}
                name={f.key}
                type={f.type}
                autoComplete={f.autoComplete}
                required
                value={values[f.key]}
                aria-invalid={!!err}
                aria-describedby={err ? `${f.key}-error` : undefined}
                onFocus={() => { if (!started.current) { started.current = true; track("form_start"); } }}
                onChange={(e) => {
                  setValues({ ...values, [f.key]: e.target.value });
                  if (err) setErrors({ ...errors, [f.key]: undefined });
                }}
                className="mt-2 block h-12 w-full rounded-lg border border-input bg-background px-4 text-base transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-ring/20 aria-[invalid=true]:border-destructive"
              />
              <FieldError error={err} id={`${f.key}-error`} />
            </div>
          );
        })}
      </div>
      {status === "error" && <p role="alert" className="mt-4 text-sm text-destructive">Something went wrong. Please try again.</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 disabled:translate-y-0 disabled:opacity-80"
      >
        {status === "loading" ? (<><Loader2 className="size-4 animate-spin" aria-hidden /> Sending request…</>) : "Request My Free Consultation Now"}
      </button>
      <p id="privacy-note" className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden />
        <span>Your details are only used to respond to your enquiry. See our <a href="#" className="underline underline-offset-2 hover:text-foreground">privacy policy</a> [placeholder].</span>
      </p>
    </form>
  );
}
