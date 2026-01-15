import { MoveDownLeft, MoveUpRight } from "lucide-react";

function Stats() {
  return (
    <div className="w-full py-20 lg:py-40 bg-deep-void">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <p className="font-body text-xs font-medium tracking-[0.2em] text-platinum/60 uppercase mb-6 md:mb-8">
              Achievements
            </p>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-accent font-light text-white text-left">
                Trusted by growing businesses
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-slate text-left">
                Our track record speaks to our commitment to delivering strategic financial leadership that drives real results.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
              <div className="flex gap-0 flex-col justify-between p-6 border border-surface-border rounded-md">
                <MoveUpRight className="w-4 h-4 mb-10 text-strategy-blue" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-accent font-light text-white flex flex-row gap-4 items-end">
                  50+
                  <span className="text-slate text-sm tracking-normal">
                    Active
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-slate max-w-xl text-left">
                  Trusted clients
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-surface-border rounded-md">
                <MoveUpRight className="w-4 h-4 mb-10 text-strategy-blue" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-accent font-light text-white flex flex-row gap-4 items-end">
                  €50M+
                  <span className="text-slate text-sm tracking-normal">
                    Raised
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-slate max-w-xl text-left">
                  Funding secured for clients
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-surface-border rounded-md">
                <MoveUpRight className="w-4 h-4 mb-10 text-strategy-blue" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-accent font-light text-white flex flex-row gap-4 items-end">
                  100+
                  <span className="text-slate text-sm tracking-normal">
                    Completed
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-slate max-w-xl text-left">
                  Financial projects delivered
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-surface-border rounded-md">
                <MoveUpRight className="w-4 h-4 mb-10 text-strategy-blue" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-accent font-light text-white flex flex-row gap-4 items-end">
                  10+
                  <span className="text-slate text-sm tracking-normal">
                    Years
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-slate max-w-xl text-left">
                  Combined experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stats };
