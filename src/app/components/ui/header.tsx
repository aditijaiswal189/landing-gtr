import { Mail, Phone } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-6">
            <img
              src="/1000009700.png"
              alt="GTR Worldwide Logo"
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                GTR WORLDWIDE
              </h1>
              <p className="text-base text-gray-600">
                Immigration • Recruitment • Settlement
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91-88106-86447</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>admin@gtrworldwide.in</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
