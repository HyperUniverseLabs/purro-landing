import React from "react";
const Footer = () => {
  const socials = [
    {
      name: "Twitter",
      href: "https://x.com/HyperBabyAI",
      icon: "https://cdn.prod.website-files.com/6606e04a4d77039f6a24a3b6/6606e04a4d77039f6a24a408_Twitter%20(X).svg",
    },
  ];

  return (
    <div className=" bg-black">
      <div className="container-small flex flex-col space-y-6 p-6">
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <a href="/" className="shrink-0 text-white">
            HyperBabyAI
          </a>

          <div className="flex space-x-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-400">
          <div>© HyperBabyAI 2025, All Rights Reserved.</div>
          <a
            href="https://www.hyperuniverse.fun/"
            target="_blank"
            className="hover:underline transition-colors text-right"
          >
            Developed by HyperUniverse
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
