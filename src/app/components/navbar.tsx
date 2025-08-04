export default function Navbar() {
  return(
    <>
    <div className="bg-[#D9D9D9]/[0.4] dark:bg-[#3F3D3D]/[0.4] backdrop-blur-2xl flex flex-row px-28 py-9 items-center justify-between">

      <div className="font-primary font-semibold text-dark dark:text-light text-3xl">
        Key Success Patners
      </div>

      <div className="flex flex-row font-Primary text-dark dark:text-light text-2xl">

        <ul className="font-primary flex flex-row gap-7 text-xl">
          <li>
            About Us
          </li>
          <li>
            Services
          </li>
          <li>
            Jobs
          </li>
          <li>
            Contact Us
          </li>
        </ul>

      </div>

    </div>
    </>
  )
}