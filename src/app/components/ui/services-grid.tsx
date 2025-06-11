import { Award, Globe, Users } from "lucide-react";

export const ServicesGrid: React.FC = () => {
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

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="h-8 w-8 text-blue-600" />,
              title: "Immigration Services",
              description:
                "Complete visa processing and documentation support for all major immigration programs.",
            },
            {
              icon: <Users className="h-8 w-8 text-green-600" />,
              title: "Recruitment Solutions",
              description:
                "Connect with global employers and find opportunities that match your skills and experience.",
            },
            {
              icon: <Award className="h-8 w-8 text-purple-600" />,
              title: "Settlement Support",
              description:
                "Comprehensive assistance to help you settle and thrive in your new country.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
