"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

const { isSubmitting, isValid } = form.formState;
const lang="en";
const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    const response = await axios.post("/api/coursesPackages", values);
    router.push(`/${lang}/admin/coursesPackages/${response.data.id}`);
    toast.success("Course Package created successfully");
  } catch {
    toast.error("something went wrong");
  }
};

return (
  <div className="">
    <Link
      href={`/${lang}/admin/coursesPackages`}
      className="flex items-center text-sm hover:opacity-75 transition mb-6"
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      Back to CoursesPackages
    </Link>
    <div>
      <h1 className="text-2xl">Name of your Course Package</h1>
      <p>
        What would you like to name your course package? Don&apos;t worry, you
        can change this later.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Package Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g. 'Programming Languages'"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  What courses will you teach in this course package?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  </div>
);

};
export default CreatePage;
// This page is protected by the middleware, so it will only be accessible to authenticated users.
