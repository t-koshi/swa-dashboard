"use client";

import SimpleLineChartDataCard from "@/app/ui/dashboard/simple-line-chart-data-card";
import { getRequest } from "@/lib/api";
import { FormEventHandler, useEffect, useState } from "react";
import { DataInterface } from "../(overview)/_interfaces/DataInterface";
import InputDate from "@/app/components/input-date";
import SubmitButton from "@/app/components/submit-button";
import { format, startOfToday, sub } from "date-fns";

export default function Page() {
  const [fromDate, setFromDate] = useState(
    sub(new Date(), { months: 3 }) as Date | null,
  );
  const [toDate, setToDate] = useState(startOfToday() as Date | null);
  const [likesData, setLikesData] = useState([] as DataInterface[]);

  const fetchLikesData = async () => {
    let params = { from: "", to: "" };
    if (!!fromDate) {
      params.from = format(fromDate, "yyyy-MM-dd");
    }
    if (!!toDate) {
      params.to = format(toDate, "yyyy-MM-dd");
    }
    const data = await getRequest("/dashboard/api/dashboard/likes", params);
    setLikesData(data);
  };

  useEffect(() => {
    fetchLikesData();
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchLikesData();
  };

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Likes</h1>
      <form className="w-full max-w-lg mb-4" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              From
            </label>
            <InputDate
              selectedDate={fromDate}
              onChange={(date) => {
                setFromDate(date);
              }}
            />
          </div>
          <div className="px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              To
            </label>
            <InputDate
              selectedDate={toDate}
              onChange={(date) => {
                setToDate(date);
              }}
            />
          </div>
        </div>
        <SubmitButton>Search</SubmitButton>
      </form>
      <div>
        <SimpleLineChartDataCard title="Likes" data={likesData} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"></div>
    </main>
  );
}
