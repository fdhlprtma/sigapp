import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import type { ReactNode } from "react"

type PopUpProps = {
    open: boolean
    setOpen: (val: boolean) => void
    title?: ReactNode
    description?: string
    children?: ReactNode
    footer?: ReactNode
}

export function PopUp({
    open,
    setOpen,
    title = "",
    description = "",
    children,
    footer
}: PopUpProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 mt-2">
                    {children}
                </div>

                <DialogFooter>
                    {footer ? (
                        footer
                    ) : (
                        <DialogClose asChild>
                            <Button variant="outline">Tutup</Button>
                        </DialogClose>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
