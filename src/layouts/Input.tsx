import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

type InputLabelProps = {
    label: string
    labelFor: string
    type: string
    id: string
    placeholder: string
    className?: string
    classname?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function InputLabel({ label, labelFor, type, id, placeholder, className, classname, onChange }: InputLabelProps) {
    return (
        <div className={`${classname} grid items-center gap-3`}>
            <Label htmlFor={labelFor}>{label}</Label>
            <Input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`${className} `}
                onChange={onChange}
            />
        </div>
    )
}
