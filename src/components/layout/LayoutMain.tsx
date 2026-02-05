import { Outlet } from 'react-router'
import { ToolAppBar } from './ToolAppBar'
import { ToolBottomBar } from './ToolBottomBar'
export const LayoutMain = () => {
  return (
    <div className="h-full w-full">
      <ToolAppBar />
      <main className="flex-1 min-h-screen h-full w-full max-w-5xl mx-auto pt-10 pb-12 md:pb-10 px-6 md:px-0">
        <Outlet />
      </main>
      <ToolBottomBar />
    </div>
  )
}
