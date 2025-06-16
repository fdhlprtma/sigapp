import type { ReactNode } from "react"

type badgeProps = {
    children: ReactNode
    className: string
}

function Badge({ children, className }: badgeProps) {
    return (
        <>
            <span className={`${className} end-0 top-3 px-5 pb-0.5 font-semibold text-center rounded-ss-2xl`}>{children}</span >
        </>
    )
}

export default Badge