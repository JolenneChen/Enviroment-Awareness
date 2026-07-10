import Comhero from "@/components/comhero"
import Local from "@/components/local"
import Localized from "@/components/Localized"
import Stories from "@/components/Stories"
import Upcoming from "@/components/upcoming"


export default function Page() {
  return (
    <div>
        <Comhero/>
        <Local/>
        <Upcoming/>
        <Stories/>
        <Localized/>
    </div>
  )
}