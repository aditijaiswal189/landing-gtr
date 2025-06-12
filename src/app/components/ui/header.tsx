import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* overall flex: column on xs, row on sm+ */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 py-4">
          {/* logo + title */}
          <div className="flex flex-row sm:flex-row items-center gap-3 text-center sm:text-left">
            <img
              src="/1000009700.png"
              alt="GTR Worldwide Logo"
              className="h-12 sm:h-16 w-auto"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600 leading-tight">
                GTR WORLDWIDE
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Immigration • Recruitment • Settlement
              </p>
            </div>
          </div>

          {/* contact info */}
          <div className="flex flex-row sm:flex-row items-center gap-12 sm:gap-6 text-gray-600">
            <Link
              href="tel:+918810686447"
              className="flex items-center space-x-1 hover:text-red-600"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm sm:text-base">+91 88106 86447</span>
            </Link>
            <Link
              href="mailto:admin@gtrworldwide.in"
              className="flex items-center space-x-1 hover:text-red-600"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm sm:text-base">
                admin@gtrworldwide.in
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
