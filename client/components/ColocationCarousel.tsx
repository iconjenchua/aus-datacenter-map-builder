import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Clock, Server } from "lucide-react";

interface DataCenter {
  id: string;
  companyName: string;
  location: string;
  logo: React.ReactNode;
  logoBackground: string;
  tags: {
    type: {
      label: string;
      color: string;
      bgColor: string;
    };
    capacity: {
      label: string;
      color: string;
      bgColor: string;
    };
  };
  features: {
    power: string;
    cooling: string[];
    systems: string[];
  };
}

const TelstraLogo = () => (
  <img
    src="telstra-logo.png"
    alt="Telstra"
    className="w-[332px] h-[104px] object-contain"
  />
);

const NextDCLogo = () => (
  <img
    src="next-dc-logo.png"
    alt="NEXTDC"
    className="w-[190px] h-[152px] object-contain"
  />
);

const DigitalRealtyLogo = () => (
  <img
    src="digital-realty-logo.png"
    alt="Digital Realty"
    className="w-[340px] h-[72px] object-contain"
  />
);

const datacenters: DataCenter[] = [
  {
    id: "telstra-deakin-1",
    companyName: "Telstra",
    location: "Deakin",
    logo: <TelstraLogo />,
    logoBackground: "bg-dark-text/[0.02]",
    tags: {
      type: {
        label: "Enclave",
        color: "#611EFE",
        bgColor: "rgba(97, 30, 254, 0.04)",
      },
      capacity: {
        label: "0.1–5MW",
        color: "#39CA5B",
        bgColor: "rgba(57, 202, 91, 0.04)",
      },
    },
    features: {
      power: "10 kW/rack",
      cooling: ["Immersion", "Liquid DTC"],
      systems: ["Cooling N+1", "UPS 2N", "Fuel 72h"],
    },
  },
  {
    id: "nextdc-sydney-s3",
    companyName: "NEXTDC",
    location: "Sydney 3 (S3)",
    logo: <NextDCLogo />,
    logoBackground: "bg-dark-text/[0.02]",
    tags: {
      type: {
        label: "Facility",
        color: "#D11EFE",
        bgColor: "rgba(209, 30, 254, 0.04)",
      },
      capacity: {
        label: "2.5–20MW",
        color: "#FEB31E",
        bgColor: "rgba(254, 179, 30, 0.04)",
      },
    },
    features: {
      power: "10 kW/rack",
      cooling: [],
      systems: ["Cooling N+1", "UPS 2N"],
    },
  },
  {
    id: "digital-realty-syd10",
    companyName: "Digital Realty",
    location: "SYD10",
    logo: <DigitalRealtyLogo />,
    logoBackground: "bg-dark-text/[0.02]",
    tags: {
      type: {
        label: "Enclave",
        color: "#611EFE",
        bgColor: "rgba(97, 30, 254, 0.04)",
      },
      capacity: {
        label: "20–100MW",
        color: "#FE4F1E",
        bgColor: "rgba(254, 79, 30, 0.04)",
      },
    },
    features: {
      power: "10 kW/rack",
      cooling: ["Liquid DTC", "Immersion"],
      systems: ["Cooling N+1"],
    },
  },
  {
    id: "telstra-deakin-2",
    companyName: "Telstra",
    location: "Deakin",
    logo: <TelstraLogo />,
    logoBackground: "bg-dark-text/[0.02]",
    tags: {
      type: {
        label: "Enclave",
        color: "#611EFE",
        bgColor: "rgba(97, 30, 254, 0.04)",
      },
      capacity: {
        label: "0.1–5MW",
        color: "#39CA5B",
        bgColor: "rgba(57, 202, 91, 0.04)",
      },
    },
    features: {
      power: "10 kW/rack",
      cooling: ["Immersion", "Liquid DTC"],
      systems: ["Cooling N+1", "UPS 2N", "Fuel 72h"],
    },
  },
];

const FeatureBadge = ({
  icon,
  label
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center justify-center gap-1 px-1.5 sm:px-2 py-2 bg-dark-text/[0.04] rounded-xl flex-1 min-w-0">
    {icon}
    <span className="text-xs text-dark-text/[0.68] font-normal leading-4 truncate">
      {label}
    </span>
  </div>
);

const DataCenterCard = ({ datacenter }: { datacenter: DataCenter }) => (
  <Card className="w-80 sm:w-96 bg-white rounded-3xl shadow-[0_1px_1px_0_rgba(9,13,20,0.06),-4px_-4px_8px_0_rgba(255,255,255,0.40),8px_8px_24px_0_rgba(9,13,20,0.06)] backdrop-blur-[54px] border-0 overflow-hidden">
    {/* Logo Section */}
    <div className={`flex w-80 sm:w-96 h-[168px] px-4 sm:px-[26px] py-8 justify-center items-center ${datacenter.logoBackground}`}>
      {datacenter.logo}
    </div>

    {/* Content Section */}
    <div className="flex flex-col items-center gap-4 p-6 pb-6">
      {/* Header with company name and tags */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start items-center w-full gap-3 sm:gap-0">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <h3 className="text-lg sm:text-xl font-bold text-dark-text leading-6 tracking-[-0.07em] text-center sm:text-left">
            {datacenter.companyName}
          </h3>
          <p className="text-sm text-dark-text/[0.68] font-normal leading-5 text-center sm:text-left">
            {datacenter.location}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Badge
            className="px-2 py-2 rounded-xl text-xs font-medium leading-4"
            style={{
              color: datacenter.tags.type.color,
              backgroundColor: datacenter.tags.type.bgColor,
            }}
            variant="secondary"
          >
            {datacenter.tags.type.label}
          </Badge>
          <Badge
            className="px-2 py-2 rounded-xl text-xs font-medium leading-4"
            style={{
              color: datacenter.tags.capacity.color,
              backgroundColor: datacenter.tags.capacity.bgColor,
            }}
            variant="secondary"
          >
            {datacenter.tags.capacity.label}
          </Badge>
        </div>
      </div>

      {/* Features Grid */}
      <div className="flex flex-col gap-2 w-full">
        {/* First row */}
        <div className="flex items-center gap-1 sm:gap-2 w-full">
          <FeatureBadge
            icon={<Zap className="w-4 h-4 text-dark-text/[0.68]" />}
            label={datacenter.features.power}
          />
          {datacenter.features.cooling.map((cooling) => (
            <FeatureBadge
              key={cooling}
              icon={<Server className="w-4 h-4 text-dark-text/[0.68]" />}
              label={cooling}
            />
          ))}
        </div>

        {/* Second row */}
        <div className="flex items-center gap-1 sm:gap-2 w-full flex-wrap">
          {datacenter.features.systems.map((system) => (
            <FeatureBadge
              key={system}
              icon={
                system.includes("Cooling") ? (
                  <Shield className="w-4 h-4 text-dark-text/[0.68]" />
                ) : system.includes("UPS") ? (
                  <Shield className="w-4 h-4 text-dark-text/[0.68]" />
                ) : (
                  <Clock className="w-4 h-4 text-dark-text/[0.68]" />
                )
              }
              label={system}
            />
          ))}
        </div>
      </div>
    </div>
  </Card>
);

export default function ColocationCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-6 sm:py-8">
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-8">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4">
          <h2 className="text-dark-text text-center font-bold text-2xl sm:text-3xl lg:text-[32px] leading-8 sm:leading-9 lg:leading-10 tracking-[-0.07em] px-4">
            AI-Ready Colocation Shortlist (AU)
          </h2>
          <p className="text-dark-text/[0.68] text-center text-sm font-normal leading-5 max-w-[520px] px-4">
            Curated selection of data centres optimized for AI workloads with
            advanced cooling and high-density capabilities
          </p>
        </div>

        {/* Carousel Section */}
        <div className="w-full flex flex-col items-center gap-4 sm:gap-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4 sm:-ml-6 cursor-grab active:cursor-grabbing">
              {datacenters.map((datacenter) => (
                <CarouselItem key={datacenter.id} className="pl-4 sm:pl-6 basis-auto">
                  <DataCenterCard datacenter={datacenter} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Page Dots */}
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index + 1 === current
                    ? "bg-dark-text"
                    : "bg-dark-text/[0.2] hover:bg-dark-text/[0.4]"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
