// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormField,
//   FormMessage,
//   FormControl,
//   FormItem,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import { cn } from "@/lib/utils";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { coursePackage, wpos_wpdatatable_23 } from "@prisma/client";
// import axios from "axios";
// import { Pencil } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { z } from "zod";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "../ui/select";

// interface studentsSelectionFormProps {
//   initialData: wpos_wpdatatable_23;
//   coursesPackageId: string;
//   students: wpos_wpdatatable_23;
// }

// const formSchema = z.object({
//   assignment: z.string().min(1, { message: "assignment is required" }),
// });

// export const StudentSelectionForm = ({
//   initialData,
//   coursesPackageId,
//   students,
// }: studentsSelectionFormProps) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const router = useRouter();

//   const toggleEdit = () => setIsEditing((prev) => !prev);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: { assignment: initialData?.subject || "" }, // Ensure default values
//   });

//   const { isSubmitting, isValid } = form.formState;

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       await axios.patch(
//         `/api/coursesPackages/${coursesPackageId}/students/${students.wdt_ID}`,
//         values
//       );
//       toast.success("students assignment Updated");
//       toggleEdit();
//       router.refresh();
//     } catch (error) {
//       console.error("Update Error:", error);
//       toast.error("Something went wrong.");
//     }
//   };


// //   const options = [
// //     { id: "react", label: "React" },
// //     { id: "nextjs", label: "Next.js" },
// //     { id: "tailwind", label: "TailwindCSS" },
// //   ];
  
//   export default function MultiSelect() {
//     const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
//     const handleSelection = (value: string) => {
//       setSelectedItems((prev) =>
//         prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
//       );
//     };

//   return (
//     <div className="mt-6 border bg-slate-100 rounded-md p-4">
//       <div className="font-medium flex items-center justify-between">
//         studentss Assignment
//         <Button onClick={toggleEdit} variant="ghost">
//           {isEditing ? (
//             "Cancel"
//           ) : (
//             <>
//               <Pencil className="w-4 h-4 mr-2" /> Edit Assignment
//             </>
//           )}
//         </Button>
//       </div>

//       {!isEditing && (
//         <p
//           className={cn(
//             "text-sm mt-2",
//             !initialData.subject && "text-slate-500 italic"
//           )}
//         >
//           {initialData.subject || "No assignment"}
//         </p>
//       )}

//       {isEditing && (
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="space-y-4 mt-4"
//           >
//             <FormField
//               control={form.control}
//               name="assignment"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Select multiple-value={selectedItems}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select options" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {options.map((option) => (
//                           <SelectItem
//                             key={option.id}
//                             value={option.id}
//                             onClick={() => handleSelection(option.id)}
//                           >
//                             {option.label}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <div className="flex items-center gap-x-2">
//               <Button type="submit" disabled={!isValid || isSubmitting}>
//                 Save
//               </Button>
//             </div>
//           </form>
//         </Form>
//       )}
//     </div>
//   );
// };



// // "use client";

// // import { useState } from "react";
// // import {
// //   Select,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectContent,
// //   SelectValue,
// // } from "@/components/ui/select";

// // const options = [
// //   { id: "react", label: "React" },
// //   { id: "nextjs", label: "Next.js" },
// //   { id: "tailwind", label: "TailwindCSS" },
// // ];

// // export default function MultiSelect() {
// //   const [selectedItems, setSelectedItems] = useState<string[]>([]);

// //   const handleSelection = (value: string) => {
// //     setSelectedItems((prev) =>
// //       prev.includes(value)
// //         ? prev.filter((item) => item !== value)
// //         : [...prev, value]
// //     );
// //   };

// //   return (
// //     <Select multiple value={selectedItems}>
// //       <SelectTrigger>
// //         <SelectValue placeholder="Select options" />
// //       </SelectTrigger>
// //       <SelectContent>
// //         {options.map((option) => (
// //           <SelectItem
// //             key={option.id}
// //             value={option.id}
// //             onClick={() => handleSelection(option.id)}
// //           >
// //             {option.label}
// //           </SelectItem>
// //         ))}
// //       </SelectContent>
// //     </Select>
// //   );
// }
