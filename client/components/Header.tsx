import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="w-full">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <svg 
            className="w-[38px] h-[44px]" 
            viewBox="0 0 38 44" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M18.8706 44L0 33.2213L6.73913 29.2407L18.863 36.1658L31.1676 29.1059L19.1076 21.9845L19.1418 14.109L38.2152 25.3716V32.901L18.8706 44Z" 
              fill="url(#paint0_linear)"
            />
            <path 
              d="M19.3446 0L38.2152 10.7787L31.476 14.7593L19.3522 7.8342L7.04755 14.8941L19.1076 22.0155L19.0733 29.8909L0 18.6284V11.099L19.3446 0Z" 
              fill="url(#paint1_linear)"
            />
            <defs>
              <linearGradient 
                id="paint0_linear" 
                x1="11.6359" 
                y1="28.8923" 
                x2="23.4033" 
                y2="17.3701" 
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD438"/>
                <stop offset="1" stopColor="#E7AD00"/>
              </linearGradient>
              <linearGradient 
                id="paint1_linear" 
                x1="20.9517" 
                y1="6.33819" 
                x2="19.2356" 
                y2="28.1568" 
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD438"/>
                <stop offset="1" stopColor="#E7AD00"/>
              </linearGradient>
            </defs>
          </svg>
        </Link>

        <nav className="flex items-center gap-6 md:gap-8 lg:gap-12">
          <Link 
            to="/" 
            className={`text-sm font-normal transition-colors ${
              isActive("/") 
                ? "text-brand-blue" 
                : "text-dark-text/[0.68] hover:text-dark-text"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/directory" 
            className={`text-sm font-normal transition-colors ${
              isActive("/directory") 
                ? "text-brand-blue" 
                : "text-dark-text/[0.68] hover:text-dark-text"
            }`}
          >
            Directory
          </Link>
          <Link 
            to="/insights" 
            className={`text-sm font-normal transition-colors ${
              isActive("/insights") 
                ? "text-brand-blue" 
                : "text-dark-text/[0.68] hover:text-dark-text"
            }`}
          >
            Insights
          </Link>
        </nav>
      </div>
    </header>
  );
}
