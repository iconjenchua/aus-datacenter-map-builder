import { ChevronDown, Download } from "lucide-react";
import { useState } from "react";

interface Facility {
  provider: string;
  site: string;
  level: "Enclave" | "Facility";
  band: string;
  suburb: string;
  city: string;
  state: string;
  postcode: string;
  asxTicker: string;
}

const FACILITIES_DATA: Facility[] = [
  {
    provider: "DCI Data Centers",
    site: "SYD-01",
    level: "Enclave",
    band: "20–100MW",
    suburb: "Eastern Creek",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
  {
    provider: "Canberra Data Centres (CDC)",
    site: "SY7",
    level: "Enclave",
    band: "0.1–5MW",
    suburb: "Sydney CBD (Haymarket)",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
  {
    provider: "Macquarie Technology Group",
    site: "SY7",
    level: "Facility",
    band: "2.5–20MW",
    suburb: "Sydney CBD (Haymarket)",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
  {
    provider: "DCI Data Centers",
    site: "SYD-01",
    level: "Enclave",
    band: "20–100MW",
    suburb: "Eastern Creek",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
  {
    provider: "Canberra Data Centres (CDC)",
    site: "SY7",
    level: "Enclave",
    band: "0.1–5MW",
    suburb: "Sydney CBD (Haymarket)",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
  {
    provider: "Macquarie Technology Group",
    site: "SY7",
    level: "Facility",
    band: "2.5–20MW",
    suburb: "Sydney CBD (Haymarket)",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
  {
    provider: "DCI Data Centers",
    site: "SYD-01",
    level: "Enclave",
    band: "20–100MW",
    suburb: "Eastern Creek",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
  {
    provider: "Canberra Data Centres (CDC)",
    site: "SY7",
    level: "Enclave",
    band: "0.1–5MW",
    suburb: "Sydney CBD (Haymarket)",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
  {
    provider: "Macquarie Technology Group",
    site: "SY7",
    level: "Facility",
    band: "2.5–20MW",
    suburb: "Sydney CBD (Haymarket)",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
  {
    provider: "DCI Data Centers",
    site: "SYD-01",
    level: "Enclave",
    band: "20–100MW",
    suburb: "Eastern Creek",
    city: "Sydney",
    state: "NSW",
    postcode: "2766",
    asxTicker: "-",
  },
];

const getBandColor = (band: string) => {
  if (band.includes("20–100")) return { bg: "bg-band-orange/[0.04]", text: "text-band-orange" };
  if (band.includes("0.1–5")) return { bg: "bg-band-green/[0.04]", text: "text-band-green" };
  if (band.includes("2.5–20")) return { bg: "bg-band-yellow/[0.04]", text: "text-band-yellow" };
  return { bg: "bg-gray-100", text: "text-gray-600" };
};

const getLevelColor = (level: string) => {
  if (level === "Enclave") return { bg: "bg-enclave-purple/[0.04]", text: "text-enclave-purple" };
  if (level === "Facility") return { bg: "bg-facility-magenta/[0.04]", text: "text-facility-magenta" };
  return { bg: "bg-gray-100", text: "text-gray-600" };
};

export default function DataTable() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-[1200px] mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-dark-text font-bold text-2xl md:text-[32px] md:leading-[40px] tracking-[-0.07em]">
          Certified Strategic Facilities Directory
        </h1>
        <p className="text-dark-text/[0.68] text-sm leading-5">
          Filter and search through certified strategic data centre facilities and enclaves
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 w-full">
        <div className="flex items-center gap-2 flex-1 px-4 py-4 rounded-2xl border border-brand-blue bg-brand-blue/[0.06]">
          <svg className="w-5 h-5 flex-shrink-0 fill-brand-blue" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.16699 7.16663C2.16699 4.40913 4.40949 2.16663 7.16699 2.16663C9.92449 2.16663 12.167 4.40913 12.167 7.16663C12.167 9.92413 9.92449 12.1666 7.16699 12.1666C4.40949 12.1666 2.16699 9.92413 2.16699 7.16663ZM15.2558 14.0775L12.4267 11.2475C13.3042 10.1192 13.8333 8.705 13.8333 7.16667C13.8333 3.49083 10.8425 0.5 7.16667 0.5C3.49083 0.5 0.5 3.49083 0.5 7.16667C0.5 10.8425 3.49083 13.8333 7.16667 13.8333C8.705 13.8333 10.1192 13.3042 11.2475 12.4267L14.0775 15.2558C14.24 15.4183 14.4533 15.5 14.6667 15.5C14.88 15.5 15.0933 15.4183 15.2558 15.2558C15.5817 14.93 15.5817 14.4033 15.2558 14.0775Z"/>
          </svg>
          <input
            type="text"
            placeholder="Provider, site, suburb, postcode..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-brand-blue placeholder:text-brand-blue text-sm leading-5 outline-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-4">
          <FilterDropdown label="Level" />
          <FilterDropdown label="Band (MW)" />
          <FilterDropdown label="State" />
          
          <button className="flex items-center justify-center gap-2 px-6 md:px-12 py-4 rounded-2xl bg-white shadow-[0_1px_1px_0_rgba(9,13,20,0.06),-4px_-4px_8px_0_rgba(255,255,255,0.40),8px_8px_24px_0_rgba(9,13,20,0.06)] hover:shadow-[0_2px_2px_0_rgba(9,13,20,0.08),-4px_-4px_8px_0_rgba(255,255,255,0.40),8px_8px_28px_0_rgba(9,13,20,0.08)] transition-shadow whitespace-nowrap">
            <Download className="w-5 h-5 text-brand-blue" />
            <span className="text-brand-blue text-sm font-medium leading-5 tracking-[-0.01em]">Export CSV</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4 w-full rounded-3xl bg-white p-4 shadow-[0_1px_1px_0_rgba(9,13,20,0.06),-4px_-4px_8px_0_rgba(255,255,255,0.40),8px_8px_24px_0_rgba(9,13,20,0.06)]">
          <div className="hidden lg:grid grid-cols-[1fr_0.5fr_0.7fr_0.8fr_1.2fr_0.6fr_0.5fr_0.7fr_0.6fr] gap-4 px-4">
            <TableHeader label="Provider" />
            <TableHeader label="Site" />
            <TableHeader label="Level" />
            <TableHeader label="Band (MW)" />
            <TableHeader label="Suburb" />
            <TableHeader label="City" />
            <TableHeader label="State" />
            <TableHeader label="Postcode" />
            <div className="text-dark-text/60 text-xs leading-4">ASX Ticker</div>
          </div>

          <div className="flex flex-col gap-1">
            {FACILITIES_DATA.map((facility, idx) => (
              <FacilityRow key={idx} facility={facility} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center justify-between gap-2 px-4 py-4 rounded-2xl bg-dark-text/[0.06] hover:bg-dark-text/[0.08] transition-colors min-w-[140px]">
      <span className="text-dark-text/60 text-sm leading-5">{label}</span>
      <ChevronDown className="w-5 h-5 text-dark-text/60" />
    </button>
  );
}

function TableHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-dark-text/60 text-xs leading-4">{label}</span>
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.137 2.74164C10.4064 2.47119 10.7055 2.24699 11.0876 2.18611C11.169 2.17314 11.2511 2.16663 11.3334 2.16663C11.4156 2.16663 11.4977 2.17314 11.5791 2.18611C11.9612 2.24699 12.2603 2.47119 12.5297 2.74164C12.7922 3.00518 13.0855 3.37512 13.441 3.82344L14.3918 5.02265C14.5634 5.23903 14.527 5.55352 14.3107 5.72508C14.0943 5.89665 13.7798 5.86032 13.6082 5.64394L12.6763 4.46863C12.3042 3.99928 12.0485 3.67794 11.8334 3.45964L11.8334 12C11.8334 12.2761 11.6095 12.5 11.3334 12.5C11.0572 12.5 10.8334 12.2761 10.8334 12L10.8334 3.45964C10.6182 3.67794 10.3625 3.99928 9.99037 4.46863L9.05847 5.64394C8.88691 5.86032 8.57242 5.89665 8.35604 5.72508C8.13966 5.55352 8.10333 5.23903 8.2749 5.02265L9.22574 3.82343C9.58119 3.37512 9.8745 3.00518 10.137 2.74164Z" fill="#242739" fillOpacity="0.6"/>
        <path d="M5.16669 3.33329C5.16669 3.05715 4.94283 2.83329 4.66669 2.83329C4.39054 2.83329 4.16669 3.05715 4.16669 3.33329L4.16669 11.8736C3.95158 11.6553 3.69585 11.334 3.32371 10.8646L2.39181 9.68931C2.22024 9.47293 1.90575 9.4366 1.68937 9.60817C1.47299 9.77974 1.43667 10.0942 1.60823 10.3106L2.55907 11.5098C2.91452 11.9581 3.20783 12.3281 3.47036 12.5916C3.73977 12.8621 4.03879 13.0863 4.42091 13.1471C4.50231 13.1601 4.58443 13.1666 4.66669 13.1666C4.74894 13.1666 4.83106 13.1601 4.91247 13.1471C5.29458 13.0863 5.5936 12.8621 5.86301 12.5916C6.12554 12.3281 6.41885 11.9581 6.77431 11.5098L7.72514 10.3106C7.89671 10.0942 7.86038 9.77974 7.644 9.60817C7.42762 9.4366 7.11313 9.47293 6.94156 9.68931L6.00967 10.8646C5.63752 11.334 5.38179 11.6553 5.16669 11.8736L5.16669 3.33329Z" fill="#242739" fillOpacity="0.6"/>
      </svg>
    </div>
  );
}

function FacilityRow({ facility }: { facility: Facility }) {
  const bandColors = getBandColor(facility.band);
  const levelColors = getLevelColor(facility.level);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr_0.7fr_0.8fr_1.2fr_0.6fr_0.5fr_0.7fr_0.6fr] gap-2 lg:gap-4 p-4 rounded-2xl bg-dark-text/[0.02] hover:bg-dark-text/[0.04] transition-colors">
      <div className="flex items-center lg:block">
        <span className="lg:hidden text-dark-text/60 text-xs mr-2 min-w-[80px]">Provider:</span>
        <a href="#" className="text-brand-blue text-xs leading-4 hover:underline">{facility.provider}</a>
      </div>
      
      <div className="flex items-center lg:block">
        <span className="lg:hidden text-dark-text/60 text-xs mr-2 min-w-[80px]">Site:</span>
        <span className="text-dark-text text-xs leading-4">{facility.site}</span>
      </div>
      
      <div className="flex items-center lg:block">
        <span className="lg:hidden text-dark-text/60 text-xs mr-2 min-w-[80px]">Level:</span>
        <span className={`inline-flex px-2 py-2 rounded-xl ${levelColors.bg} ${levelColors.text} text-xs font-medium leading-4`}>
          {facility.level}
        </span>
      </div>
      
      <div className="flex items-center lg:block">
        <span className="lg:hidden text-dark-text/60 text-xs mr-2 min-w-[80px]">Band (MW):</span>
        <span className={`inline-flex px-2 py-2 rounded-xl ${bandColors.bg} ${bandColors.text} text-xs font-medium leading-4`}>
          {facility.band}
        </span>
      </div>
      
      <div className="flex items-center lg:block">
        <span className="lg:hidden text-dark-text/60 text-xs mr-2 min-w-[80px]">Suburb:</span>
        <span className="text-dark-text text-xs leading-4">{facility.suburb}</span>
      </div>
      
      <div className="flex items-center lg:block">
        <span className="lg:hidden text-dark-text/60 text-xs mr-2 min-w-[80px]">City:</span>
        <span className="text-dark-text text-xs leading-4">{facility.city}</span>
      </div>
      
      <div className="flex items-center lg:block">
        <span className="lg:hidden text-dark-text/60 text-xs mr-2 min-w-[80px]">State:</span>
        <span className="text-dark-text text-xs leading-4">{facility.state}</span>
      </div>
      
      <div className="flex items-center lg:block">
        <span className="lg:hidden text-dark-text/60 text-xs mr-2 min-w-[80px]">Postcode:</span>
        <span className="text-dark-text text-xs leading-4">{facility.postcode}</span>
      </div>
      
      <div className="flex items-center lg:block">
        <span className="lg:hidden text-dark-text/60 text-xs mr-2 min-w-[80px]">ASX Ticker:</span>
        <span className="text-dark-text text-xs leading-4">{facility.asxTicker}</span>
      </div>
    </div>
  );
}
