"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "./dropdown-menu";

type DropProps = {
    label?: string;
    className?: string;
    variant?: "default" | "outline" | "ghost" | "link" | "dua";
    items: string[];
    onSelect?: (value: string) => void;
};

export function Drop({
    label = "Pilih",
    className,
    variant = "default",
    items,
    onSelect,
}: DropProps) {
    const [selectedItem, setSelectedItem] = useState(label);

    const handleSelect = (item: string) => {
        setSelectedItem(item);
        if (onSelect) {
            onSelect(item);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={variant} className={`${className} flex items-center gap-2`}>
                    {selectedItem}
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
                {items.map((item, index) => (
                    <DropdownMenuCheckboxItem
                        key={index}
                        checked={selectedItem === item}
                        onCheckedChange={() => handleSelect(item)}
                    >
                        {item}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
