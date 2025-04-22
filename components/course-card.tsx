import Link from "next/link"
import { Clock, Users } from "lucide-react"
import CourseImage from "./course-image"

interface CourseCardProps {
  title: string
  description: string
  image: string
  level: string
  duration: string
}

export default function CourseCard({ title, description, image, level, duration }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <CourseImage title={title} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-purple mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users size={16} className="text-green" />
            <span>{level}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock size={16} className="text-green" />
            <span>{duration}</span>
          </div>
        </div>

        <Link
          href="#contact"
          className="inline-block w-full text-center bg-green-light text-purple px-4 py-2 rounded-md hover:bg-green-light/80 transition-colors"
        >
          Saiba Mais
        </Link>
      </div>
    </div>
  )
}
