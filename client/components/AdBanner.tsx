export default function AdBanner() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-6 sm:py-8">
      <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white shadow-[0_1px_1px_0_rgba(9,13,20,0.06),-4px_-4px_8px_0_rgba(255,255,255,0.40),8px_8px_24px_0_rgba(9,13,20,0.06)] backdrop-blur-[54px] overflow-hidden">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-start justify-center gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 lg:p-12 min-h-[240px] sm:min-h-[280px]">
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-full">
            {/* Headline */}
            <h2 className="text-dark-text font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[64px] tracking-[-0.07em]">
              Save{" "}
              <span className="bg-[#FAFE1E] px-1 sm:px-2 rounded-sm">50%</span>{" "}
              on colocation
            </h2>
            
            {/* Subtitle */}
            <p className="text-dark-text/[0.68] text-sm sm:text-base leading-5 sm:leading-6 max-w-full">
              100Gbps connectivity, half off.
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center justify-center gap-2 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-2xl sm:rounded-[20px] bg-brand-blue hover:bg-brand-blue/90 transition-colors self-start">
            <span className="text-white text-center text-sm sm:text-base font-medium leading-5 tracking-[-0.01em] whitespace-nowrap">
              Get connected
            </span>
          </button>
        </div>

        {/* Flexential Logo - Full height on desktop, hidden on mobile */}
        <div className="absolute right-0 top-0 bottom-0 w-auto hidden lg:flex items-center justify-end pr-8">
          <img
            src="flexential-logo.png"
            alt="Flexential"
            className="h-full max-h-[280px] w-auto object-contain object-right"
          />
        </div>

        {/* Flexential Logo - Smaller on tablet */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 md:w-40 hidden md:block lg:hidden">
          <img
            src="flexential-logo.png"
            alt="Flexential"
            className="w-full h-auto object-contain opacity-70"
          />
        </div>
      </div>
    </div>
  );
}
