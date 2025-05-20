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
import { ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;
  const lang = "en";
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/coursesPackages", values);
      setSuccess(true);
      toast.success("Course Package created successfully");
      setTimeout(() => {
        router.push(`/${lang}/admin/coursesPackages/${response.data.id}`);
      }, 1200);
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <dvi>
      <Link
        href={`/${lang}/admin/coursesPackages`}
        className="flex items-center text-sm hover:opacity-75 transition mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Course Packages
      </Link>
      <div className="max-w-2xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <div className="w-full bg-white/90 rounded-xl shadow-xl p-8 border border-gray-100 animate-fade-in">
          {success ? (
            <div className="flex flex-col items-center justify-center py-12 transition-all">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4 animate-bounce-in" />
              <h2 className="text-2xl font-bold mb-2 text-green-700">
                Success!
              </h2>
              <p className="text-muted-foreground mb-2 text-center">
                Your course package has been created.
              </p>
              <span className="text-xs text-gray-400">Redirecting...</span>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2 text-blue-900">
                Name your Course Package
              </h1>
              <p className="mb-6 text-gray-600">
                What would you like to name your course package? Don&apos;t
                worry, you can change this later.
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 mt-4"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">
                          Course Package Title
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isSubmitting}
                            placeholder="e.g. 'Programming Languages'"
                            {...field}
                            className="focus:ring-2 focus:ring-blue-400 transition"
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
                    <Link href={`/${lang}/admin/coursesPackages`}>
                      <Button type="button" variant="ghost">
                        Cancel
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      disabled={!isValid || isSubmitting}
                      className="flex items-center gap-2"
                    >
                      {isSubmitting && (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      )}
                      Continue
                    </Button>
                  </div>
                </form>
              </Form>
            </>
          )}
        </div>
      </div>
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounce-in {
          animation: bounceIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          70% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default CreatePage;
// This page is protected by the middleware, so it will only be accessible to authenticated users.
