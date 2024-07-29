import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-10 bg-slate-400">
   <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    </main>
  );
}
