import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mt-20">
      <p className="">Hello contact page</p>
      <Separator />
      <Button variant="outline" asChild className="mt-4">
        <Link href="/">Go to home page</Link>
      </Button>
    </main>
  );
}
