"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      className="my-4 text-xl bg-neutral-600"
      onClick={() => router.back()}
    >
      <MoveLeft />
      Back
    </Button>
  );
}
