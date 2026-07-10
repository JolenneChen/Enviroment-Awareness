import Hero from "@/components/Hero"
import Project from "@/components/project"
import Impact from "@/components/impact"
import Join from "@/components/Join"
export default function Page() {

  return (
    <div>
      <Hero/>
      <div className="m-10"></div>
      <Project/>
      <Impact/>
      <Join/>
    </div>
  )
}
