import Image from "next/image";
import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(705) 957-1333";
const TEL = "tel:+17059571333";
const SMS = "sms:+17059571333";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Windover%20Outdoor%20Services&query_place_id=ChIJxTvWjdIcimYROD7SgsXuAeg";

const services = [
  { icon: "mower", name: "Grass Cutting", text: "Weekly mowing that keeps your lawn even and tidy all season, including steep and hilly lots that other crews skip. Same day each week, clippings cleaned off walks and driveways.", featured: true },
  { icon: "leaf", name: "Spring Cleanups", text: "Get the yard ready for the season: winter debris raked out, beds cleared, sticks and leaves hauled away, so the lawn can green up properly." },
  { icon: "scissors", name: "Hedge Trimming", text: "Hedges and shrubs shaped and trimmed back as part of a cleanup or on their own. Clean lines, and the trimmings go with us when we leave." },
  { icon: "sprout", name: "Overgrown Yard & Weed Clearing", text: "Backyard taken over by heavy weeds or brush? Zack quotes it fast at a fair price and clears it down to a usable yard, often ahead of schedule." },
  { icon: "tree", name: "Fallen Tree & Limb Removal", text: "When a big section of tree comes down, Zack cuts it up, hauls it out and leaves the yard cleaner than before the storm." },
];

const reviews = [
  { name: "Steve M.", job: "Overgrown backyard", text: "Zack got back to me quickly and quoted a backyard overrun with huge weeds at a reasonable price. He finished in a day and a half, half a day ahead of schedule." },
  { name: "Peter F.", job: "Fallen tree removal", text: "A large part of a tree came down. Zack removed it quickly, priced it reasonably and the cleanup afterwards was exceptional." },
  { name: "Janet C.", job: "Weekly grass cutting", text: "He recently started mowing our very hilly property and keeps it looking great every single week." },
  { name: "Danielle H.", job: "Spring cleanup & hedges", text: "Came out for a spring cleanup and hedge trimming and did a wonderful job." },
  { name: "Nasha H.", job: "Lawn care", text: "Excellent, hard-working, honest and professional. On time and communicates well." },
  { name: "Christopher N.", job: "Lawn care", text: "I've known Zack since we were kids and he has always been into property maintenance. Top-notch work." },
];

const steps = [
  { t: "Call or text Zack", d: `Tell him what the yard needs at ${PHONE}. A photo by text helps for cleanups and fallen trees.` },
  { t: "Get a quick, fair quote", d: "Zack looks at the job and gives you a clear price. Customers say the quotes come fast and land at a reasonable number." },
  { t: "The work gets done", d: "Mowing on a regular weekly day, or a cleanup scheduled at a time that suits you. Jobs often wrap up ahead of schedule." },
  { t: "Cleaned up before he leaves", d: "Clippings, branches and debris are cleared and hauled away. You get a yard you can use, not a pile to deal with." },
];

const faqs = [
  { q: "What areas do you serve?", a: "Windover Outdoor Services works across Northumberland County, Ontario. Call or text Zack with your address and he'll confirm your spot is on the route." },
  { q: "Can you mow a steep or hilly lawn?", a: "Yes. Hilly properties are part of the weekly route already, and customers with very sloped yards say it looks great every week." },
  { q: "Do you give free quotes?", a: "Call or text with a description or a few photos and Zack will get back to you quickly with a price. Bigger cleanups he'll usually look at in person first." },
  { q: "How fast can you get to an overgrown yard or a fallen tree?", a: "Customers mention quick responses and jobs finished ahead of schedule. Call and Zack will tell you the earliest day he can be there." },
  { q: "Do you haul away the debris?", a: "Yes. Weeds, brush, hedge trimmings and tree sections are cleaned up and removed as part of the job." },
  { q: "Who will actually do the work?", a: "Zack. Windover is owner-operated, so the person who quotes the job is the same person who shows up and does it." },
];

const gallery = [
  { src: "/images/p2.jpg", alt: "Freshly striped backyard lawn with a fence and patio" },
  { src: "/images/p5.jpg", alt: "Front lawn being mowed in front of a brick bungalow" },
  { src: "/images/p6.jpg", alt: "Windover trailer loaded with a ride-on mower and equipment" },
  { src: "/images/p1.jpg", alt: "Large open yard after a cleanup with trees along the edge" },
  { src: "/images/p13.jpg", alt: "Pile of cleared brush and weeds from an overgrown yard" },
  { src: "/images/p12.jpg", alt: "Brush cleared from along an old wooden fence line" },
  { src: "/images/p4.jpg", alt: "Trailer loaded with yard debris for hauling away" },
  { src: "/images/p7.jpg", alt: "Windover truck and trailer parked at a job" },
  { src: "/images/p10.jpg", alt: "Fallen tree limbs across a lawn waiting for removal" },
  { src: "/images/p3.jpg", alt: "Windover Outdoor Services lawn sign with Zack's phone number" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Windover Outdoor Services",
  telephone: "+1-705-957-1333",
  areaServed: "Northumberland County, Ontario",
  image: "/images/p9.jpg",
  founder: { "@type": "Person", name: "Zack" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "9" },
  hasMap: MAPS,
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-semibold text-cta">{children}</p>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand-deep text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-6 py-2">
          <span className="inline-flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Serving Northumberland County, ON</span>
          <span className="inline-flex items-center gap-2"><Icon name="user" className="h-4 w-4" /> Owner-operated by Zack</span>
          <span className="ml-auto inline-flex items-center gap-2"><Icon name="text" className="h-4 w-4" /> Texts welcome, photos help</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-6 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Windover Outdoor Services, back to top">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-leaf"><Icon name="tree" className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-extrabold text-brand-deep">Windover</span>
              <span className="block text-xs font-semibold text-muted">Outdoor Services</span>
            </span>
          </a>
          <nav aria-label="Main" className="ml-auto hidden items-center gap-7 text-[15px] font-semibold lg:flex">
            <a href="#services" className="hover:text-cta">Services</a>
            <a href="#reviews" className="hover:text-cta">Reviews</a>
            <a href="#about" className="hover:text-cta">About Zack</a>
            <a href="#work" className="hover:text-cta">Our Work</a>
            <a href="#faq" className="hover:text-cta">FAQ</a>
          </nav>
          <a href={TEL} className="ml-auto hidden font-heading text-lg font-bold text-brand-deep md:inline lg:ml-0">{PHONE}</a>
          <a href={TEL} className="btn btn-cta hidden md:inline-flex"><Icon name="phone" className="ph h-5 w-5" /> Call for a Quote</a>
          <a href={TEL} className="btn btn-cta ml-auto !min-h-11 !px-3 md:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="ph h-5 w-5" /></a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto grid min-h-[calc(100dvh-110px)] max-w-[1200px] items-center gap-10 px-5 py-12 md:px-6 md:py-16 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-tint px-3 py-1.5 text-sm font-semibold text-brand"><Icon name="pin" className="h-4 w-4" /> Northumberland County, Ontario</p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold text-brand-deep">Lawn Care &amp; Yard Cleanups in Northumberland County</h1>
              <p className="mt-5 max-w-[34rem] text-lg text-muted md:text-xl">Weekly grass cutting, spring cleanups, hedges, overgrown yards and fallen trees, handled by Zack himself. A local who answers the phone, gives you a fair price and works hard until the job is done.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="ph h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-ghost text-lg"><Icon name="text" className="h-5 w-5" /> Text Zack</a>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-semibold text-ink hover:text-cta">
                <Stars className="h-5 w-5" /> <span>5.0 from 9 Google reviews</span><span className="text-line">|</span><span>Owner-operated</span><span className="text-line">|</span><span>Quick, fair quotes</span>
              </a>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-[0_30px_60px_-30px_oklch(0.3_0.05_50/.55)]">
                <Image src="/images/p9.jpg" alt="Freshly cut, striped boulevard lawn along a residential street" fill priority sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
              </div>
              <figure className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-line bg-white p-5 shadow-xl sm:left-auto sm:right-[-12px] sm:w-[320px]">
                <Stars className="h-4 w-4" />
                <blockquote className="mt-2 text-[15px] leading-snug">&ldquo;Quoted a backyard overrun with huge weeds at a reasonable price and finished half a day ahead of schedule.&rdquo;</blockquote>
                <figcaption className="mt-2 text-sm font-semibold text-muted">Steve M. · Overgrown backyard</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section aria-label="Why customers trust Windover" className="bg-brand text-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { i: "thumb", t: "5.0 on Google", s: "All 9 reviews are five stars" },
              { i: "user", t: "Owner on every job", s: "Zack quotes it and does it" },
              { i: "bolt", t: "Quick to respond", s: "Fast quotes, early finishes" },
              { i: "trash", t: "Full cleanup", s: "Debris hauled away" },
            ].map((x) => (
              <li key={x.t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12 text-leaf"><Icon name={x.i} /></span>
                <span><span className="block font-heading font-bold">{x.t}</span><span className="block text-sm text-white/80">{x.s}</span></span>
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <Eyebrow>What Windover does</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Lawn and yard services, start to finish</h2>
              <p className="mt-4 text-muted">From the first cut in spring to the storm that drops a tree on your lawn, one call to Zack covers it. Every job ends with the mess cleaned up.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift flex flex-col rounded-2xl border bg-white p-7 ${s.featured ? "border-cta ring-1 ring-cta/30" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-tint text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-cta/10 px-3 py-1 text-xs font-bold text-cta">Most booked</span>}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-brand-deep">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[17px] text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-cta hover:gap-2.5 transition-[gap]">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
              <article className="reveal flex flex-col justify-between rounded-2xl bg-brand-deep p-7 text-white">
                <div>
                  <h3 className="text-xl font-bold">Not sure what you need?</h3>
                  <p className="mt-2 text-[17px] text-white/80">Send Zack a couple of photos of the yard. He&rsquo;ll tell you what it needs and what it costs.</p>
                </div>
                <a href={SMS} className="btn btn-cta mt-6 self-start"><Icon name="text" className="h-5 w-5" /> Text photos</a>
              </article>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <Eyebrow>Customer reviews</Eyebrow>
                <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Rated 5.0 from 9 Google reviews</h2>
                <p className="mt-4 text-muted">Nearly every review mentions Zack by name: his work ethic, his honesty and how well he communicates.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl border border-line bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-heading font-bold text-white" aria-hidden="true">{r.name[0]}</span>
                    <figcaption className="leading-tight"><span className="block font-bold">{r.name}</span><span className="block text-sm text-muted">{r.job}</span></figcaption>
                    <span className="ml-auto"><Stars className="h-4 w-4" /></span>
                  </div>
                  <blockquote className="mt-4 flex-1 text-[17px]">&ldquo;{r.text}&rdquo;</blockquote>
                  <p className="mt-4 text-xs font-semibold text-muted">Google review</p>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="reveal relative mx-auto w-full max-w-[420px]">
              <div className="relative aspect-[2/3] overflow-hidden rounded-[20px]">
                <Image src="/images/p8.jpg" alt="Zack, owner of Windover Outdoor Services, standing by his truck and trailer" fill sizes="420px" className="object-cover" />
              </div>
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border-4 border-bg bg-white p-1 shadow-lg md:-right-8">
                <Image src="/images/p11.png" alt="Windover Outdoor Services logo" width={112} height={112} className="h-full w-full object-contain" />
              </div>
            </div>
            <div className="reveal">
              <Eyebrow>About Windover</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Hi, I&rsquo;m Zack. I&rsquo;ll be the one cutting your grass.</h2>
              <div className="mt-5 space-y-4 text-[17px] text-muted">
                <p>Windover Outdoor Services is a local lawn care and property maintenance business in Northumberland County. Zack launched it around 2024 after years of doing this kind of work. One customer who has known him since childhood says he has always been into property maintenance.</p>
                <p>It&rsquo;s owner-operated, so there&rsquo;s no call centre and no rotating crew. You talk to Zack, Zack quotes the job, and Zack shows up with the truck and trailer to do it. Customers keep using the same words for him: hard-working, honest, on time.</p>
                <p>Whether it&rsquo;s a hilly lawn every week or a backyard nobody has touched in years, the goal is the same: a fair price, a job done properly and a yard left cleaner than he found it.</p>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { i: "clock", t: "On time, every time", s: "Customers call out his punctuality" },
                  { i: "chat", t: "Easy to reach", s: "Quick replies and clear updates" },
                  { i: "tag", t: "Reasonable prices", s: "Fair quotes, no surprises" },
                  { i: "check", t: "Ahead of schedule", s: "Jobs often finish early" },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3 rounded-xl bg-tint p-4">
                    <span className="mt-0.5 text-cta"><Icon name={d.i} /></span>
                    <span><span className="block font-bold text-ink">{d.t}</span><span className="block text-sm text-muted">{d.s}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Four simple steps to a yard you can enjoy</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.t} className="reveal rounded-2xl bg-white p-7">
                  <span className="font-heading text-5xl font-extrabold text-leaf [-webkit-text-stroke:1.5px_var(--color-cta)]">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold text-brand-deep">{s.t}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <Eyebrow>Our work</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Real yards around Northumberland County</h2>
              <p className="mt-4 text-muted">Every photo here is from a Windover job. No stock pictures.</p>
            </div>
            <div className="reveal mt-10 grid gap-5 md:grid-cols-2">
              {[{ src: "/images/p15.jpg", label: "Before", alt: "Large tree section fallen across a backyard" }, { src: "/images/p14.jpg", label: "After", alt: "The same backyard cleared after the fallen tree was removed" }].map((b) => (
                <figure key={b.label} className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image src={b.src} alt={b.alt} fill sizes="(min-width:768px) 590px, 100vw" className="object-cover" />
                  <figcaption className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-deep shadow">{b.label}: fallen tree removal</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-5">
              {gallery.map((g) => (
                <div key={g.src} className="reveal relative aspect-square overflow-hidden rounded-xl bg-tint">
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 230px, 50vw" className="object-cover transition-transform duration-500 hover:scale-[1.04]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <Eyebrow>Service area</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Proudly serving Northumberland County</h2>
              <p className="mt-4 text-muted">Windover is based in Northumberland County, Ontario and works on homes across the county. Not sure if you&rsquo;re on the route? Call or text your address and Zack will let you know right away.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Northumberland County", "Weekly mowing routes", "Spring & fall cleanups", "Storm and tree cleanups"].map((c) => (
                  <li key={c} className="rounded-full border border-line bg-white px-4 py-2 text-[15px] font-semibold">{c}</li>
                ))}
              </ul>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="ph h-5 w-5" /> Check my address</a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of Northumberland County, Ontario" src="https://maps.google.com/maps?q=Northumberland%20County%2C%20Ontario&z=9&output=embed" className="h-[360px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-[2.6rem]">Questions people ask before they call</h2>
              <p className="mt-4 text-muted">Got one that isn&rsquo;t here? Zack is happy to answer it.</p>
              <a href={TEL} className="mt-6 inline-flex items-center gap-2 font-bold text-cta">Call {PHONE} <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="reveal divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold text-brand-deep">
                    {f.q}
                    <span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-tint text-cta"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 pr-10 text-[17px] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Get a quote" className="px-5 pb-16 md:px-6 md:pb-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-8 overflow-hidden rounded-[24px] bg-brand p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-14">
            <div>
              <h2 className="text-3xl font-extrabold md:text-[2.6rem]">Ready for a yard you don&rsquo;t have to worry about?</h2>
              <p className="mt-4 max-w-xl text-lg text-white/85">Call or text Zack at {PHONE} for a quick, fair quote on mowing, cleanups, hedges or that tree that came down.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a href={TEL} className="btn btn-cta w-full text-lg md:w-auto"><Icon name="phone" className="ph h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn w-full border-[1.5px] border-white/40 text-lg hover:border-white md:w-auto"><Icon name="text" className="h-5 w-5" /> Text Zack</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-tint pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/p11.png" alt="" width={56} height={56} className="h-14 w-14 rounded-full bg-white object-contain" />
              <span className="font-heading text-xl font-extrabold text-brand-deep">Windover Outdoor Services</span>
            </div>
            <p className="mt-4 max-w-sm text-[16px] text-muted">Lawn care and property maintenance in Northumberland County, Ontario. Owner-operated by Zack.</p>
            <a href={TEL} className="mt-4 inline-flex items-center gap-2 font-heading text-lg font-bold text-brand-deep"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
          </div>
          <div>
            <h3 className="text-sm font-bold text-ink">Services</h3>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">{services.map((s) => <li key={s.name}><a href="#services" className="hover:text-cta">{s.name}</a></li>)}</ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-ink">Contact</h3>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              <li><a href={TEL} className="hover:text-cta">Call {PHONE}</a></li>
              <li><a href={SMS} className="hover:text-cta">Text {PHONE}</a></li>
              <li>Northumberland County, ON</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-cta">Find us on Google</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-[1200px] px-5 py-5 text-sm text-muted md:px-6">&copy; {new Date().getFullYear()} Windover Outdoor Services. Northumberland County, Ontario.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
