"use client";
import React, { useState } from "react";
import Select from "react-select";
import useAction from "@/hooks/useAction";
import {
  getStudent,
  // getStudSubject,
  setPackage,
} from "@/actions/admin/packageassign";
import { useParams } from "next/navigation";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function StudentAssignmentForm() {
  const { coursesPackageId } = useParams<{ coursesPackageId: string }>();
  const [students] = useAction(getStudent, [true, () => {}], coursesPackageId);
  // const [subjects] = useAction(getStudSubject, [true, () => {}]);
  const [, addPackage, loading] = useAction(setPackage, [, () => {}]);

  // const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedStudents, setSelectedStudents] = useState<
    { value: number; label: string }[]
  >([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const studentIds = selectedStudents.map((s) => Number(s.value));
    console.log(studentIds);
    (async () => {
      await addPackage(coursesPackageId, studentIds);
      toast.success("student assign successfully");
    })();
  };

  const studentOptions =
    Array.isArray(students) && students.length > 0
      ? students.map((student) => ({
          value: student.wdt_ID,
          label: student.name,
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
        <label>Select Students:</label>
        <Select
          isMulti
          name="students"
          options={studentOptions}
          value={selectedStudents}
          onChange={(selected) =>
            setSelectedStudents(selected as { value: number; label: string }[])
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
