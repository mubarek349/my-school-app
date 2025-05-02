"use client"

import { Button } from "@/components/ui/button";
import { LogOut} from "lucide-react";
import Link from "next/link";
import { usePathname,useRouter} from "next/navigation";

export const NavbarRoutes= () => {

  const pathname= usePathname();
  const router= useRouter();

  const isTeacherPage=pathname?.startsWith("/teacher");
  const isPlayerPage=pathname?.includes("/chapter");

  const onClick=()=>{
    router.push("/");
 }
  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Button onClick={onClick}>
          <LogOut className="w-4 h-4 mr-2"/>
          <span className="text-sm">Exit</span>
        </Button>
        
      ):(
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )
      }
    </div>
  );
}
