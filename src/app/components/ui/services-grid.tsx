import { Award, Globe, Users } from "lucide-react";

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-red-500" />,
      title: "Immigration Services",
      description:
        "Complete visa processing and documentation support for all major immigration programs.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Recruitment Solutions",
      description:
        "Connect with global employers and find opportunities that match your skills and experience.",
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Settlement Support",
      description:
        "Comprehensive assistance to help you settle and thrive in your new country.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h3>
          <p className="text-lg text-gray-600">
            Comprehensive immigration solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl bg-gradient-to-r from-red-500 to-orange-500 p-0.5 hover:scale-105 transform transition"
            >
              <div className="h-full flex flex-col bg-white rounded-lg p-6 shadow-lg">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                {/* optional link slot */}
                {/* <Link
                  href="/"
                  className="mt-4 inline-block text-red-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn More →
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
