import Logo from "./logo"
import SidebarRoutes from "./sidebar-route"



const Sidebar = () => {
  return (
    <div className="h-full flex flex-col border-r shadow-sm overflow-y-auto">
      <div className="p-6">
        <Logo></Logo>
      </div>
      <div className = "flex flex-col">
        <SidebarRoutes/>
      </div>
    </div>
  )
}

export default Sidebar
