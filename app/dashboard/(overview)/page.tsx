"use client";

import SimpleLineChartDataCard from "@/app/ui/dashboard/simple-line-chart-data-card";
import { getRequest } from "@/lib/api";
import { useEffect, useState } from "react";
import { DataInterface } from "./_interfaces/DataInterface";

export default function Page() {
  const [boardItemsData, setBoardItemsData] = useState([] as DataInterface[]);
  const [likesData, setLikesData] = useState([] as DataInterface[]);
  const [commentsData, setCommentsData] = useState([] as DataInterface[]);
  const [activeUsersData, setActiveUsersData] = useState([] as DataInterface[]);
  useEffect(() => {
    (async () => {
      const data = await getRequest("/dashboard/api/dashboard");
      setBoardItemsData(data.board_items);
      setLikesData(data.likes);
      setCommentsData(data.board_item_comments);
      setActiveUsersData(data.active_users);
    })();
  }, []);

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-2 grid-cols-2">
        <div>
          <SimpleLineChartDataCard
            title="投稿"
            data={boardItemsData}
            linkHref="/dashboard/board-items"
          />
        </div>
        <div>
          <SimpleLineChartDataCard
            title="いいね"
            data={likesData}
            linkHref="/dashboard/likes"
          />
        </div>
        <div>
          <SimpleLineChartDataCard
            title="コメント"
            data={commentsData}
            linkHref="/dashboard/comments"
          />
        </div>
        <div>
          <SimpleLineChartDataCard
            title="アクティブユーザー"
            data={activeUsersData}
            linkHref="/dashboard/active-users"
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"></div>
    </main>
  );
}
