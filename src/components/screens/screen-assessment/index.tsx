import { FormEvent, ReactNode, useState } from 'react';

import { useVmScreen } from '../../../stores/vm-screen';
import { leadText } from '../../../config/lead-text';
import { submitLead } from '../../../apis/lead';
import { getAttribution } from '../../../utils/attribution';
import { track } from '../../../utils/analytics';
import { trackAdLead } from '../../../utils/consent';
import LayoutStandard from '../../layouts/layout-standard';
import SafeArea from '../../_commons/safe-area';
import Seo from '../../_commons/seo';
import Turnstile from '../../_commons/turnstile';

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];

const inputClass =
  'w-full box-border px-4 py-3 rounded-lg border border-sep-gray bg-white text-base text-gray-dark focus:outline-none focus:border-sep-green-light';

const Field = (props: { label: string; hint?: string; children: ReactNode }) => (
  <label className="flex flex-col justify-start items-stretch gap-y-1">
    <span className="text-sm font-medium text-gray-content">{props.label}</span>
    {props.children}
    {props.hint && <span className="text-xs text-secondary">{props.hint}</span>}
  </label>
);

const ScreenAssessment = () => {
  const { locale = 'th' } = useVmScreen();
  const t = leadText[locale];

  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const form = new FormData(event.currentTarget);

    const phone = String(form.get('phone') ?? '').trim();
    const lineId = String(form.get('line_id') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    if (!phone && !lineId && !email) {
      setError(t.errorContact);
      return;
    }
    if (form.get('consent_pdpa') !== 'true') {
      setError(t.errorConsent);
      return;
    }
    const file = form.get('bill');
    if (file instanceof File && file.size > 0) {
      if (!FILE_TYPES.includes(file.type) || file.size > MAX_FILE_BYTES) {
        setError(t.errorFile);
        return;
      }
    } else {
      form.delete('bill');
    }

    form.set('locale', locale);
    Object.entries(getAttribution()).forEach(([key, value]) => {
      if (value) form.set(key, value);
    });

    setSending(true);
    try {
      await submitLead(form);
      trackAdLead();
      track('generate_lead', {
        form: 'free_assessment',
        has_bill: file instanceof File && file.size > 0,
      });
      setDone(true);
      window.scrollTo({ top: 0 });
    } catch (e) {
      console.log('>>error<< submit_lead', e);
      setError(t.errorGeneric);
    } finally {
      setSending(false);
    }
  };

  return (
    <LayoutStandard>
      <Seo
        locale={locale}
        title={t.seoTitle}
        description={t.seoDescription}
        path="free-assessment"
      />
      <div className="py-10 lg:py-20 flex flex-col justify-start items-stretch">
        <SafeArea>
          <div className="mx-auto w-full max-w-[760px] flex flex-col justify-start items-stretch gap-y-8">
            <div className="flex flex-col justify-start items-stretch gap-y-4">
              <h1 className="text-3hxl lg:text-4hxl font-medium text-title-dark">
                {t.title}
              </h1>
              <p className="text-lg text-gray-excerpt">{t.intro}</p>
              <ol className="mt-2 gap-y-2 flex flex-col justify-start items-stretch">
                {t.steps.map((step, index) => (
                  <li key={step} className="flex flex-row items-center gap-x-3">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-green-tag text-white text-sm flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-base text-gray-content">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {done ? (
              <div
                role="status"
                className="p-8 rounded-2xl bg-green-a10 border border-sep-green-light flex flex-col gap-y-2"
              >
                <h2 className="text-2xl font-medium text-sep-green">
                  {t.successTitle}
                </h2>
                <p className="text-base text-gray-content">{t.successBody}</p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="p-6 lg:p-10 rounded-2xl bg-pale border border-sep-smoke flex flex-col justify-start items-stretch gap-y-5"
              >
                {/* Honeypot: hidden from people, filled by simple bots. */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <Field label={`${t.name} *`}>
                  <input
                    className={inputClass}
                    name="name"
                    required
                    maxLength={200}
                    autoComplete="name"
                  />
                </Field>
                <Field label={`${t.company} *`}>
                  <input
                    className={inputClass}
                    name="company"
                    required
                    maxLength={200}
                    autoComplete="organization"
                  />
                </Field>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  <Field label={t.phone}>
                    <input
                      className={inputClass}
                      name="phone"
                      type="tel"
                      maxLength={40}
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label={t.lineId}>
                    <input className={inputClass} name="line_id" maxLength={80} />
                  </Field>
                  <Field label={t.email}>
                    <input
                      className={inputClass}
                      name="email"
                      type="email"
                      maxLength={200}
                      autoComplete="email"
                    />
                  </Field>
                </div>
                <p className="-mt-3 text-xs text-secondary">{t.contactHint}</p>
                <Field label={t.bill}>
                  <select className={inputClass} name="monthly_bill_band" defaultValue="">
                    <option value="">{t.choose}</option>
                    {t.billOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label={t.province}>
                  <input className={inputClass} name="province" maxLength={100} />
                </Field>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <Field label={t.ownership}>
                    <select
                      className={inputClass}
                      name="building_ownership"
                      defaultValue=""
                    >
                      <option value="">{t.choose}</option>
                      {t.ownershipOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label={t.pattern}>
                    <select
                      className={inputClass}
                      name="operating_pattern"
                      defaultValue=""
                    >
                      <option value="">{t.choose}</option>
                      {t.patternOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label={t.file} hint={t.fileHint}>
                  <input
                    className={inputClass}
                    name="bill"
                    type="file"
                    accept="application/pdf,image/jpeg,image/png"
                  />
                </Field>
                <Field label={t.notes}>
                  <textarea
                    className={inputClass}
                    name="notes"
                    rows={3}
                    maxLength={2000}
                  />
                </Field>
                <label className="flex flex-row items-start gap-x-3">
                  <input
                    className="mt-1 w-5 h-5 shrink-0"
                    type="checkbox"
                    name="consent_pdpa"
                    value="true"
                    required
                  />
                  <span className="text-sm text-gray-content">{t.consent}</span>
                </label>
                {error && (
                  <p role="alert" className="text-sm text-red-600">
                    {error}
                  </p>
                )}
                <Turnstile />
                <button
                  type="submit"
                  disabled={sending}
                  className="px-6 py-4 rounded-lg bg-cta-primary text-white text-lg font-medium disabled:opacity-60"
                >
                  {sending ? t.sending : t.submit}
                </button>
              </form>
            )}
          </div>
        </SafeArea>
      </div>
    </LayoutStandard>
  );
};

export default ScreenAssessment;
