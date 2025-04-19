import React from "react";
import { NewsCardProps } from "../types";
import Link from "next/link";

const NewsCard = ({
  imageSrc,
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: NewsCardProps) => {
  return (
    <div className="min-w-[280px] max-w-[300px] border-[3px] border-newsBorder rounded-xl shadow-md hover:shadow-xl p-4 w-full">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}
      {/* Header and description */}
      <div>
        <h3 className="text-newsText text-sm font-semibold mb-2">{title}</h3>
        <p className="text-newsText text-sm mb-4">{description}</p>
      </div>
      {/* Learn more link and Apply now link */}
      <div className="flex justify-between items-center gap-2 mt-auto">
        {/* Learn more button */}
        <Link
          href={ctaHref}
          className="text-sm text-newsText hover:text-blue-600 underline"
        >
          {ctaText}
        </Link>
        {/* Apply now button */}
        {secondaryCtaText && secondaryCtaHref && (
          <Link
            href={secondaryCtaHref}
            className="text-sm px-3 py-1 bg-newsButton text-white rounded hover:bg-slate-600 transition"
          >
            {secondaryCtaText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
