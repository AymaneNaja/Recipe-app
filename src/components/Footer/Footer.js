import Contacts from "./Contacts"
import Credits from "./Credits"

const Footer = () => {
  return (
    <div className="w-full 
    flex gap-2 bg-black py-4 justify-center mt-20  text-white ">
        <Credits/>
        <Contacts/>
    </div>
  )
}

export default Footer