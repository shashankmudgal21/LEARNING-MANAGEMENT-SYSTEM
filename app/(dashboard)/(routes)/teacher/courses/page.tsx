import { Button } from "@/components/ui/button"
import Link from "next/link"

const Courses = () => {
  return (
    <div>
      <div className="p-6">
        <Link href = "/teacher/create">
        <Button> New Course</Button>
        </Link>
      </div>
    </div>
  )
}

export default Courses
