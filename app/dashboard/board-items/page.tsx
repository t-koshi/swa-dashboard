"use client";

import SimpleLineChartDataCard from "@/app/ui/dashboard/simple-line-chart-data-card";
import { getRequest } from "@/lib/api";
import { useEffect, useState } from "react";
import { DataInterface } from "../(overview)/_interfaces/DataInterface";

export default function Page() {
  const [boardItemsData, setBoardItemsData] = useState([] as DataInterface[]);
  const [likesData, setLikesData] = useState([] as DataInterface[]);
  const [commentsData, setCommentsData] = useState([] as DataInterface[]);
  useEffect(() => {
    (async () => {
      const data = await getRequest("/dashboard/api/dashboard");
      setBoardItemsData(data.board_items);
      setLikesData(data.likes);
      setCommentsData(data.board_item_comments);
    })();
  }, []);

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Board Items</h1>
      <div className="grid gap-2 grid-cols-2">
        <div>
          <SimpleLineChartDataCard title="Board Items" data={boardItemsData} />
        </div>
        <div>
          <SimpleLineChartDataCard title="Likes" data={likesData} />
        </div>
        <div>
          <SimpleLineChartDataCard title="Comments" data={commentsData} />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"></div>
    </main>
  );
}
