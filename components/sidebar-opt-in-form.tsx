"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export function SidebarLyricsForm() {
  const [lyrics, setLyrics] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加验证逻辑，确保歌词符合 rabbit-lyrics 格式
    // 例如检查是否包含时间戳 [mm:ss.xx]
    console.log("Submitted lyrics:", lyrics);
  };

  return (
    <Card className="shadow-none">
      <form onSubmit={handleSubmit}>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-sm">Submit Lyrics</CardTitle>
          <CardDescription>
            Please enter lyrics in rabbit-lyrics format (e.g., [00:00.00] Lyrics
            here)
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <textarea
            className="w-full min-h-[200px] p-2 border rounded"
            placeholder="[00:00.00] Enter your lyrics here..."
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
            size="sm"
          >
            Submit Lyrics
          </Button>
        </CardContent>
      </form>
    </Card>
  );
}
