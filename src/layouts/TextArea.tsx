import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type textAreaLabel = {
    id: string
    forlabel: string
    label: string
    placeholder: string
}

export function TextareaLabel({ id, label, placeholder, forlabel }: textAreaLabel) {
    return (
        <div className="grid w-full gap-3">
            <Label htmlFor={forlabel}>{label}</Label>
            <Textarea placeholder={placeholder} id={id} />
        </div>
    )
}
