// "use client";
// import React from "react";
// import MenuTitle from "./menu-title";
// import Link from "next/link";
// import MenuItems from "./menu-items";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
// import { cn } from "@/lib/utils";
// import useAction from "@/hooks/useAction";
// import { pathProgressData } from "@/actions/student/progress";
// // import { pathProgress } from "@/actions/student/progress";
// import { useParams } from "next/navigation";

// export default function MainMenu({ className }: { className?: string }) {
//   const params = useParams();
//   const chatId = String(params.chatId);
//   const [progressData, refresh, isLoading] = useAction(
//     pathProgressData,
//     [true, (response) => console.log(response)],
//     chatId
//   );
//   return (
//     <nav
//       className={cn(
//         " bg-muted h-full overflow-auto py-2 px-4 flex flex-col gap-4",
//         className
//       )}
//     >
//       <header className=" hidden md:block border-b dark:border-b-black border-b-zinc-200">
//         <MenuTitle />
//       </header>
//       <ul className="py-4 grow">
//         <MenuItems href={`/en/${chatId}/dashboard`}>Dashboard</MenuItems>
//         <MenuItems
//           href={`/en/${chatId}/${progressData?.chapter.course.id}/${progressData?.chapter.id}`}
//         >
//           courses
//         </MenuItems>
//       </ul>
//       <footer className="flex items-center gap-2">
//         <Avatar>
//           <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
//             TP
//           </AvatarFallback>
//         </Avatar>
//         <Link href="/" className="hover:underLine">
//           Logout
//         </Link>
//         <LightDarkToggle className="ml-auto" />
//       </footer>
//     </nav>
//   );
// }
