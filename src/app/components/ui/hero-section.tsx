import { Award, Globe, Users } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Gateway to
            <span className=" ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Global Opportunities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert immigration services helping you achieve your dreams of
            living, working, and studying abroad. With years of experience and
            thousands of successful cases, we are your trusted partner in
            immigration.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="text-gray-700 font-semibold">
                50,000+ Happy Clients
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-green-600" />
              <span className="text-gray-700 font-semibold">
                98% Success Rate
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-purple-600" />
              <span className="text-gray-700 font-semibold">15+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
