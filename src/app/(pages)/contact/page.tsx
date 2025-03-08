"use client";
import GlobarHero from "@/components/GlobarHero";
import Navbar from "@/components/Nabar";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Navbar activeLink="Contact" />
      <div className="pt-20 w-full flex-col flex items-center justify-center bg-black py-2">
        <GlobarHero
          BreadcrumbName="contact"
          pageName="Contact"
          HeaderDescription="Hello, I'm <strong>Ernest Iradukunda</strong>, a dedicated and
          passionate software developer with expertise in front-end and back-end
          development. I specialize in building user-focused, seamless
          applications that combine creativity and functionality."
        />

        {/* Contact Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="col-span-1 space-y-4">
              {/* Location Card */}
              <div className="bg-zinc-900 p-6 rounded-lg" data-aos="fade-up">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-zinc-800 p-3 rounded-full">
                    <MapPin className="text-green-500 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                </div>
                <p className="text-gray-400">Kigali, Rwanda</p>
              </div>

              {/* Email Card */}
              <div
                className="bg-zinc-900 p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-zinc-800 p-3 rounded-full">
                    <Mail className="text-green-500 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                </div>
                <p className="text-gray-400">tchamianest@gmail.com</p>
              </div>

              {/* Phone Card */}
              <div
                className="bg-zinc-900 p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-zinc-800 p-3 rounded-full">
                    <Phone className="text-green-500 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Call</h3>
                </div>
                <p className="text-gray-400">+250 789 696 745</p>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="col-span-1 lg:col-span-2 bg-zinc-900 p-6 sm:p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full bg-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
