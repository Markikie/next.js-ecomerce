import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mt-20">
      <p className="">Hello contact page</p>
      <Button variant="outline" asChild>
        <Link href="/">Go to home page</Link>
      </Button>
    </main>
  );
}
