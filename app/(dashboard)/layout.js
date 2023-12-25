// import Header from "@/components/Header"
import LeftSidebar from "@/components/LeftSidebar"
// import RightSidebar from "@/components/RightSideBar"

export default function DashboardLayout ({ children }) {
  return (
    // <div className='grid grid-cols-12 gap-0'>

    //   {/* HEADER */ }
    //   <Header></Header>
    //   {/* LEFT SIDEBAR */ }
    //   <LeftSidebar></LeftSidebar>
    //   {/* CONTENT */ }
    //   <main className='col-span-12 md:col-span-6 top-16 min-h-screen'>
    //     { children }
    //   </main>

    //   {/* RIGHT SIDEBAR */ }
    //   <RightSidebar></RightSidebar>
    // </div>
    <div className="drawer lg:drawer-open">
      <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <LeftSidebar></LeftSidebar>
      {children}
    </div>
  )
}