"use client";

import SimpleLineChartDataCard from "@/app/ui/dashboard/simple-line-chart-data-card";
import { getRequest } from "@/lib/api";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    getRequest("/dashboard/api/dashboard");
  }, []);
  const data = [
    {
      name: "2024/03/01",
      count: 9,
    },
    {
      name: "2024/04/01",
      count: 15,
    },
    {
      name: "2024/05/01",
      count: 2,
    },
    {
      name: "2024/06/01",
      count: 30,
    },
    {
      name: "2024/06/02",
      count: 5,
    },
    {
      name: "2024/06/03",
      count: 10,
    },
  ];

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-2 grid-cols-2">
        <div>
          <SimpleLineChartDataCard title="Board Items" data={data} />
        </div>
        <div>
          <SimpleLineChartDataCard title="Likes" data={data} />
        </div>
        <div>
          <SimpleLineChartDataCard title="Comments" data={data} />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"></div>
    </main>
  );
}
