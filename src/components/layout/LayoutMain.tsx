import { Outlet } from 'react-router'
import { ToolAppBar } from './ToolAppBar'
import { ToolBottomBar } from './ToolBottomBar'
export const LayoutMain = () => {
  return (
    <div className="h-full w-full">
      <ToolAppBar />
      <main className="flex-1 h-full w-full max-w-5xl mx-auto py-10 px-4 md:px-0">
        <Outlet />
      </main>
      <ToolBottomBar />
    </div>
  )
}
