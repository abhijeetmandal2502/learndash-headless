import { useState } from "react"
import { CSSTabs } from "../../components/Testing/Css"
import { useTabs } from "../../components/Testing/UseTabs"
import { Circle, Square, Triangle } from "../../components/Testing/Shapes"

export default function App() {
    const [hookProps] = useState({
        tabs: [
            {
                label: "Circle",
                children: <Circle />,
                id: "Circle"
            },
            {
                label: "Triangle",
                children: <Triangle />,
                id: "Triangle"
            },
            {
                label: "Square",
                children: <Square />,
                id: "Square"
            }
        ],
        initialTabId: "Triangle"
    })
    const css = useTabs(hookProps)
    return (
        <div className="w-full flex  items-center justify-center">
            <div className="max-w-6xl flex">
                <CSSTabs {...css.tabProps} />
                <div className="py-9 flex flex-col items-center">
                    {css.selectedTab.children}
                </div>
            </div>
        </div>
    )
}
