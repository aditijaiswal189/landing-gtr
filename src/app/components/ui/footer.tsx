import { FormInput, Mail, Phone } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-red-300  to-orange-300 text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/1000009700.png"
                alt="GTR Worldwide"
                className="h-12 w-auto"
              />
              <div>
                <h4 className="text-xl font-bold">GTR WORLDWIDE</h4>
                <p className="text-sm text-black">Your Immigration Partner</p>
              </div>
            </div>
            <p className="text-black">
              Trusted immigration services helping thousands achieve their
              dreams of global mobility.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Contact Info</h5>
            <div className="space-y-2 text-black">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-88106-86447</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>admin@gtrworldwide.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <FormInput className="h-4 w-4" />
                <Link href="#form">
                  <button>Fill Our Form</button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Services</h5>
            <ul className="space-y-2 text-black">
              <li>Immigration Consulting</li>
              <li>Visa Processing</li>
              <li>Document Preparation</li>
              {/* <li>Settlement Services</li> */}
            </ul>
          </div>
        </div>
        <div className="border-t border-black mt-8 pt-8 text-center text-black">
          <p>&copy; 2024 GTR Worldwide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
