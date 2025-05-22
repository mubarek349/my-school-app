"use client";
import React, { useState } from "react";
import Select from "react-select";
import useAction from "@/hooks/useAction";
import {
  assignPackage,
  // getStudent,
  getStudSubject,
  // setPackage,
} from "@/actions/admin/packageassign";
import { useParams, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function StudentAssignmentForm() {
  const { coursesPackageId } = useParams<{ coursesPackageId: string }>();
  // const [students] = useAction(getStudent, [true, () => {}], coursesPackageId);
  const [subjects] = useAction(getStudSubject, [true, () => {}]);
  const router = useRouter();
  const [, addPackage, loading] = useAction(assignPackage, [, () => {}]);

  const [selectedSubject, setSelectedSubject] = useState<
    { value: string; label: string }[]
  >([]);
  // const [selectedStudents, setSelectedStudents] = useState<
  //   { value: number; label: string }[]
  // >([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subjectId = selectedSubject.map((s) => s.label);
    console.log(subjectId);
    (async () => {
      try {
        await addPackage(coursesPackageId, subjectId);
        toast.success("student assign successfully");
        router.refresh();
      } catch {
        toast.error("student fail");
        console.error("error");
      }
    })();
  };
  console.log("sucess");
  toast.success("students assigned successfully");

  const studentOptions =
    Array.isArray(subjects) && subjects.length > 0
      ? subjects.map((subject) => ({
          value: subject.subject,
          label: subject.subject,
        }))
      : [];

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label>Select Subject:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {Array.isArray(subjects) && subjects.length > 0 ? (
            subjects.map(({ subject }) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))
          ) : (
            <option disabled>No subjects found</option>
          )}
        </select>
      </div> */}
      <div style={{ margin: "1rem 0" }}>
        <label>Select Student&apos;s Subject to be assigned:</label>
        <Select
          closeMenuOnSelect={false}
          isMulti
          name="subjects"
          options={studentOptions}
          value={selectedSubject}
          onChange={(selected) =>
            setSelectedSubject(selected as { value: string; label: string }[])
          }
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? <Loader2 className="animate-spin mr-2" /> : null}
        Assign
      </Button>
    </form>
  );
}

export default StudentAssignmentForm;
