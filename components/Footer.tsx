import Link from "next/link";
import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-gray-800 my-5 bg-base">
      {/* footer container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-y-10 md:gap-y-0 md:gap-x-12 px-6 py-10">
        {/* 左側 Logo */}
        <div className="w-full md:w-[300px] text-center md:text-left">
          <h1 className="text-2xl font-light leading-relaxed">
            AWS Educate Cloud <br />
            Ambassador Website
          </h1>
        </div>
        {/* 右側連結 */}
        <div className="flex flex-wrap justify-center md:justify-between gap-10">
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="min-w-[160px] text-center md:text-left"
            >
              {!("sections" in section) && (
                <h3 className="mb-3 text-2xl">{section.title}</h3>
              )}
              {"sections" in section ? (
                <div className="flex flex-col gap-6">
                  {section.sections?.map((sub) => (
                    <div key={sub.title}>
                      <h3 className="mb-2 text-2xl">{sub.title}</h3>
                      <div className="flex flex-col gap-1 text-gray-500">
                        {sub.links.map((item) => (
                          <Link
                            key={item.title}
                            href={item.url}
                            className="hover:text-gray-600"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // ✅ 一般單一欄位
                <div className="flex flex-col gap-1 text-gray-500">
                  {section.links.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="hover:text-gray-600"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* 最下排版權 & 隱私連結 */}
      <div className="w-full max-w-[80%] md:max-w-7xl mx-auto border-t border-gray-500 flex flex-col md:flex-row justify-between items-center text-base text-gray-500 gap-4 px-6 py-6">
        <p className="text-center">
          © 2025 AWS Educate Cloud Ambassador Website. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-gray-600">
            Privacy
          </Link>
          <Link href="#" className="hover:text-gray-600">
            Terms of policy
          </Link>
          <Link href="#" className="hover:text-gray-600">
            Cookie policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
