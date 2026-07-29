"use client";

import { ChangeEvent, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const industryOptions = ["Delivery & Logistics", "Restaurants & Hospitality", "Construction"] as const;

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  industry: string;
  experience: string;
  fileName: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  industry: industryOptions[0],
  experience: "",
  fileName: "",
};

export function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const cityId = useId();
  const industryId = useId();
  const experienceId = useId();
  const uploadId = useId();

  const updateField = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  return (
    <section id="apply" data-section="true" data-journey="apply" className="grain relative overflow-hidden bg-charcoal py-36 lg:py-52">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-16 top-14 h-72 w-72 rounded-full bg-emerald-bright/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-18 lg:grid-cols-12">
          <Reveal variant="text" className="apply-copy lg:col-span-4 lg:pt-10">
            <SectionHeading
              dark
              eyebrow="08 — Get Started"
              title="Your next shift starts with one form."
              description={"Hiring instead? Use the same form and select \"Employer\" as your role - our team will reach out within one business day."}
              className="max-w-md"
            />
          </Reveal>

          <Reveal variant="card" className="apply-form lg:col-span-8 lg:ml-8">
            <form
              className="grid gap-6 rounded-2xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm sm:grid-cols-2 lg:p-8"
              aria-live="polite"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="sm:col-span-2">
                <label className="mb-2 block font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/58" htmlFor={nameId}>
                  Full name
                </label>
                <input
                  id={nameId}
                  required
                  type="text"
                  value={form.name}
                  onChange={updateField("name")}
                  className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-emerald-bright"
                  placeholder="Jordan Alvarez"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/58" htmlFor={phoneId}>
                  Phone
                </label>
                <input
                  id={phoneId}
                  required
                  type="tel"
                  value={form.phone}
                  onChange={updateField("phone")}
                  className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-emerald-bright"
                  placeholder="+1 555 000 1234"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/58" htmlFor={emailId}>
                  Email
                </label>
                <input
                  id={emailId}
                  required
                  type="email"
                  value={form.email}
                  onChange={updateField("email")}
                  className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-emerald-bright"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/58" htmlFor={cityId}>
                  City
                </label>
                <input
                  id={cityId}
                  required
                  type="text"
                  value={form.city}
                  onChange={updateField("city")}
                  className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-emerald-bright"
                  placeholder="Chicago, IL"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/58" htmlFor={industryId}>
                  Industry
                </label>
                <select
                  id={industryId}
                  value={form.industry}
                  onChange={updateField("industry")}
                  className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none transition-colors focus:border-emerald-bright [&>option]:text-black"
                >
                  {industryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/58" htmlFor={experienceId}>
                  Experience
                </label>
                <textarea
                  id={experienceId}
                  rows={2}
                  value={form.experience}
                  onChange={updateField("experience")}
                  className="w-full resize-none border-b border-white/25 bg-transparent py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-emerald-bright"
                  placeholder="A quick line or two about your background"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/58" htmlFor={uploadId}>
                  Upload CV
                </label>
                <div className="flex items-center justify-between rounded-xl border border-dashed border-white/25 px-5 py-6 text-sm text-white/50">
                  <span>PDF or DOCX, up to 10MB</span>
                  <input id={uploadId} type="file" className="max-w-[200px] text-xs text-white/70 file:mr-3 file:rounded-full file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-white" />
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center justify-between pt-5">
                <p className={`text-sm font-mono ${submitted ? "text-emerald-bright" : "text-transparent"}`}>Application received - we'll be in touch.</p>
                <Button type="submit" size="lg" className="ml-auto bg-emerald-bright text-charcoal hover:bg-white hover:text-charcoal">
                  Submit Application →
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
