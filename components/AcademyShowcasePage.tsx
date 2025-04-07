
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const academies = [
  {
    name: "미래코딩아카데미",
    location: "서울 강남구",
    description: "미래코딩아카데미는 Roblox, 파이썬, AI 기초 등 다양한 실무형 수업을 제공합니다.",
    image: "/images/mirae.jpg",
    phone: "010-1234-5678",
    website: "https://miraecoding.com",
    date: "5월 20일 개강"
  },
  {
    name: "코드플래닛",
    location: "부산 해운대구",
    description: "아이부터 청소년까지, 스크래치와 웹 개발 중심의 창의융합 코딩 교육",
    image: "/images/planet.jpg",
    phone: "051-555-1234",
    website: "https://codeplanet.kr",
    date: "6월 초 개강 예정"
  }
];

export default function AcademyShowcasePage() {
  const [query, setQuery] = useState("");

  const filtered = academies.filter(
    (a) => a.name.includes(query) || a.location.includes(query)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🎓 우리 동네 코딩학원 안내</h1>
      <div className="flex justify-center mb-8">
        <Input
          placeholder="지역 또는 학원명을 검색하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-xl p-3 text-base rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((academy, idx) => (
          <Card key={idx} className="overflow-hidden shadow-xl hover:shadow-2xl transition rounded-2xl">
            <img
              src={academy.image}
              alt={academy.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold mb-1">{academy.name}</h2>
              <p className="text-sm text-gray-500 mb-2">📍 {academy.location}</p>
              <p className="text-sm text-gray-600 mb-2">📅 {academy.date}</p>
              <p className="text-sm mb-3">{academy.description}</p>
              <p className="text-sm">☎ {academy.phone}</p>
              <Button
                className="mt-4 w-full"
                onClick={() => window.open(academy.website, "_blank")}
              >
                홈페이지 바로가기
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
