import React from "react";
import NewsCard from "./NewsCard";

const LatestEvents = () => {
  // Demo data
  const newsData = [
    {
      imageSrc: "/sample1.jpg",
      title: "2025 雲端學生：生成式 AI 應用黑客松競賽",
      description:
        "集結政府機關及多元產業的企業命題，提供數據及演算法，舉辦 AI 應用競賽。",
      ctaText: "Learn more",
      ctaHref: "#",
      secondaryCtaText: "Apply now",
      secondaryCtaHref: "#",
    },
    {
      title: "我是標題文字",
      description: "我是說明文字",
      ctaText: "Learn more",
      ctaHref: "#",
    },
    {
      title: "我是標題文字",
      description: "我是說明文字",
      ctaText: "Learn more",
      ctaHref: "#",
    },
  ];

  return (
    <section className="px-6 sm:px-16 py-20 bg-base h-[500px] md:h-[600px] lg:h-[700px]">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Latest News</h2>

      <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-6">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </section>
  );
};

export default LatestEvents;
