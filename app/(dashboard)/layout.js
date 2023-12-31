// import Header from "@/components/Header"
import LeftSidebar from "@/components/LeftSidebar"
import NotificationSideBar from "@/components/NotificationSideBar"
import Header from "@/components/Header"
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
    <>
      <div className="drawer lg:drawer-open">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* HEADER */ }
          <Header></Header>

          <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200">
            {/* <Suspense fallback={
            <div className="w-full h-screen text-gray-300 dark:text-gray-200 bg-base-100">
              Loading...
            </div>
          }> */}
            { children }
            {/* </Suspense> */ }
            <div className="h-16"></div>
          </main>
        </div>
        <LeftSidebar></LeftSidebar>
      </div>

      <NotificationSideBar></NotificationSideBar>

    </>
  )
}