import { useState } from 'react'

const brand = "Greenridge Landscaping"
const initial = "G"
const hero = {
  "eyebrow": "Landscaping & Design",
  "headline": "A yard your neighbors will notice",
  "subheadline": "Design, installation, and maintenance for lawns and gardens that thrive year-round.",
  "ctaPrimary": "Request a Free Estimate",
  "ctaShort": "Get a Quote"
}
const features = [
  {
    "title": "Custom Design",
    "desc": "A landscape plan built around how you use your yard.",
    "icon": "star"
  },
  {
    "title": "Seasonal Maintenance",
    "desc": "Ongoing care so it stays looking its best.",
    "icon": "shield"
  },
  {
    "title": "Licensed & Insured",
    "desc": "Experienced crews you can trust on your property.",
    "icon": "zap"
  }
]
const steps = [
  {
    "title": "Get a Quote",
    "desc": "It only takes a minute to get started, with no complicated setup."
  },
  {
    "title": "Tell us what you need",
    "desc": "Share your goals and Greenridge Landscaping tailors everything around them."
  },
  {
    "title": "Enjoy the results",
    "desc": "Free on-site consultation, no obligation."
  }
]
const testimonials = [
  {
    "name": "James Okafor",
    "place": "Chicago, IL",
    "quote": "You can tell the team behind Greenridge Landscaping really cares. The experience felt personal, not transactional."
  },
  {
    "name": "Lucas Weber",
    "place": "Denver, CO",
    "quote": "Greenridge Landscaping made the whole process feel effortless. Clear communication from start to finish."
  },
  {
    "name": "Maya Patel",
    "place": "Austin, TX",
    "quote": "We compared a few options before choosing Greenridge Landscaping. It was easily the best decision we made this year."
  }
]
const faqs = [
  {
    "q": "What is Greenridge Landscaping?",
    "a": "Design, installation, and maintenance for lawns and gardens that thrive year-round."
  },
  {
    "q": "How do I get started?",
    "a": "Select \"Request a Free Estimate\" and we'll guide you through every next step."
  },
  {
    "q": "What makes Greenridge Landscaping different?",
    "a": "A landscape plan built around how you use your yard. Ongoing care so it stays looking its best. Experienced crews you can trust on your property."
  },
  {
    "q": "How can I reach the team?",
    "a": "Leave your email below and we typically reply within one business day."
  }
]
const cta = {
  "headline": "Ready to transform your yard?",
  "sub": "Free on-site consultation, no obligation."
}

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
]

const cx = (...classes) => classes.filter(Boolean).join(' ')
const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700'

const iconPaths = {
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
}

function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  )
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-rose-700">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>}
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className={cx('flex items-center gap-2.5 rounded-lg', focusRing)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-rose-700 font-heading text-base font-semibold text-white">
            {initial}
          </span>
          <span className="font-heading text-lg font-semibold text-slate-900">{brand}</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cx('rounded text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900', focusRing)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className={cx(
            'inline-flex min-h-[44px] items-center rounded-lg bg-rose-700 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-rose-800',
            focusRing,
          )}
        >
          {hero.ctaShort}
        </a>
      </nav>
    </header>
  )
}

function HeroVisual() {
  const [first] = features
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div
        className="grid aspect-square place-items-center rounded-3xl border border-rose-100 bg-rose-50"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(15 23 42 / 0.08) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="grid h-32 w-32 place-items-center rounded-3xl bg-rose-700 font-heading text-6xl font-semibold text-white shadow-xl shadow-rose-900/20">
          {initial}
        </div>
      </div>
      <div className="absolute left-4 top-8 max-w-[15rem] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:-left-6">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-rose-50 text-rose-700">
            <Icon name={first.icon} />
          </span>
          <p className="font-semibold text-slate-900">{first.title}</p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{first.desc}</p>
      </div>
      <div className="absolute bottom-8 right-4 max-w-[15rem] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:-right-6">
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <Icon name="check" className="h-4 w-4 text-rose-700" />
          {brand}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{cta.sub}</p>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-800">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{hero.subheadline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cta"
              className={cx(
                'inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-rose-700 px-6 font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-rose-800',
                focusRing,
              )}
            >
              {hero.ctaPrimary}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className={cx(
                'inline-flex min-h-[48px] items-center rounded-lg border border-slate-300 px-6 font-semibold text-slate-800 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50',
                focusRing,
              )}
            >
              How it works
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
            {features.map((feature) => (
              <li key={feature.title} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-rose-700" />
                {feature.title}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-slate-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Features"
          title={'Why choose ' + brand}
          intro="Thoughtful details that make a real difference, from the first conversation onward."
        />
        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition-colors duration-200 hover:border-rose-300"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-rose-50 text-rose-700">
                <Icon name={feature.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-heading text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{feature.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="How it works" title="Get started in three simple steps" />
        <ol className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-rose-700 font-heading text-lg font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-6 font-heading text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-slate-600">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Testimonials" title="Loved by the people we work with" />
        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8">
                <blockquote className="flex-1 leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-100 font-semibold text-rose-800" aria-hidden="true">
                    {t.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900">{t.name}</span>
                    <span className="block text-sm text-slate-500">{t.place}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-slate-100 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-xl border border-slate-200 bg-white px-6 py-5 open:border-rose-200">
              <summary
                className={cx(
                  'flex cursor-pointer list-none items-center justify-between gap-4 rounded font-semibold text-slate-900 [&::-webkit-details-marker]:hidden',
                  focusRing,
                )}
              >
                {item.q}
                <Icon name="chevron" className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="cta" className="scroll-mt-20 px-6 pb-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-rose-700 px-8 py-16 text-center text-white sm:px-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{cta.headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-rose-100">{cta.sub}</p>
        {submitted ? (
          <p role="status" className="mx-auto mt-10 max-w-md rounded-lg bg-white/10 px-6 py-4 font-medium">
            Thanks! We&apos;ll be in touch at {email} shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md text-left">
            <label htmlFor="email" className="block text-sm font-medium text-rose-50">
              Email address
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="min-h-[48px] w-full rounded-lg border-0 px-4 text-slate-900 placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              />
              <button
                type="submit"
                className="inline-flex min-h-[48px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 font-semibold text-rose-800 transition-colors duration-200 hover:bg-rose-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {hero.ctaPrimary}
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-heading text-lg font-semibold text-slate-900">{brand}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{hero.subheadline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={cx('rounded text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900', focusRing)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="border-t border-slate-100 py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} {brand}. All rights reserved.
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
