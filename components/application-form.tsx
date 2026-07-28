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
    <section id="apply" className="grain bg-charcoal py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              dark
              eyebrow="08 — Get Started"
              title="Your next shift starts with one form."
              description={"Hiring instead? Use the same form and select \"Employer\" as your role - our team will reach out within one business day."}
              className="max-w-md"
            />
          </Reveal>

          <Reveal className="lg:col-span-7">
            <form
              className="grid gap-5 sm:grid-cols-2"
              aria-live="polite"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="sm:col-span-2">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-white/50" htmlFor={nameId}>
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
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-white/50" htmlFor={phoneId}>
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
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-white/50" htmlFor={emailId}>
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
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-white/50" htmlFor={cityId}>
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
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-white/50" htmlFor={industryId}>
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
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-white/50" htmlFor={experienceId}>
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
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-white/50" htmlFor={uploadId}>
                  Upload CV
                </label>
                <div className="flex items-center justify-between rounded-xl border border-dashed border-white/25 px-5 py-6 text-sm text-white/50">
                  <span>PDF or DOCX, up to 10MB</span>
                  <input id={uploadId} type="file" className="max-w-[200px] text-xs text-white/70 file:mr-3 file:rounded-full file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-white" />
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center justify-between pt-4">
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
