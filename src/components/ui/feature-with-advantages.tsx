import { Check } from "lucide-react";

function Feature() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32 bg-deep-void">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex gap-6 md:gap-8 flex-col items-start">
          <p className="font-body text-xs font-medium tracking-[0.2em] text-platinum/60 uppercase mb-6 md:mb-8">
            Why Choose Velricon
          </p>
          <div className="flex gap-4 md:gap-6 flex-col">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl tracking-tighter lg:max-w-2xl font-accent font-light text-white">
              Why choose Velricon
            </h2>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed text-slate font-body font-light">
              Enterprise-level expertise, delivered with the flexibility and focus that growing businesses need.
            </p>
          </div>
          <div className="flex gap-8 md:gap-10 pt-8 md:pt-12 flex-col w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-5 h-5 mt-0.5 text-strategy-blue flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <p className="font-body font-light text-base text-white">Big-4 trained expertise</p>
                  <p className="text-slate text-sm font-body font-light leading-relaxed">
                    Enterprise-level financial leadership with deep practical experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-5 h-5 mt-0.5 text-strategy-blue flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <p className="font-body font-light text-base text-white">Deep Cyprus market knowledge</p>
                  <p className="text-slate text-sm font-body font-light leading-relaxed">
                    Understanding of local banking, funding, and business ecosystems.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-5 h-5 mt-0.5 text-strategy-blue flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <p className="font-body font-light text-base text-white">Strategic, not transactional</p>
                  <p className="text-slate text-sm font-body font-light leading-relaxed">
                    We guide decisions, not just process numbers.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-5 h-5 mt-0.5 text-strategy-blue flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <p className="font-body font-light text-base text-white">Proportional delivery</p>
                  <p className="text-slate text-sm font-body font-light leading-relaxed">
                    CFO-level expertise without the full-time overhead.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-5 h-5 mt-0.5 text-strategy-blue flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <p className="font-body font-light text-base text-white">Tailored solutions</p>
                  <p className="text-slate text-sm font-body font-light leading-relaxed">
                    Services designed for your stage, not a one-size-fits-all approach.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Check className="w-5 h-5 mt-0.5 text-strategy-blue flex-shrink-0" />
                <div className="flex flex-col gap-2">
                  <p className="font-body font-light text-base text-white">Proven track record</p>
                  <p className="text-slate text-sm font-body font-light leading-relaxed">
                    Trusted by startups and SMEs to navigate funding and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
