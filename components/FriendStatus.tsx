"use client";

import { useEffect, useState } from "react";

export function FriendStatus({ userId }: { userId: string }) {
  const [isFriend, setIsFriend] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkFriend() {
      const res = await fetch("/api/check-friend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      setIsFriend(data.isFriend);
    }
    if (userId) checkFriend();
  }, [userId]);

  if (isFriend === null) return <div>確認中...</div>;
  return (
    <div>
      {isFriend ? "✅ 友だち追加済み" : "❌ まだ友だち追加していません"}
    </div>
  );
}
