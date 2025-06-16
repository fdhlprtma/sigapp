"use client";

import type { ReactNode } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";

export type Column<T> = {
    key: keyof T;
    label: string;
    render?: (value: T[keyof T], row: T) => ReactNode;
};

type LeaderboardTableProps<T> = {
    caption?: string;
    columns: Column<T>[];
    data: T[];
    showFooter?: boolean;
    footerLabel?: string;
    footerTotal?: string;
};

export function LeaderboardTable<T>({
    caption = "",
    columns,
    data,
    showFooter = false,
    footerLabel = "",
    footerTotal = "",
}: LeaderboardTableProps<T>) {
    return (
        <Table>
            <TableCaption>{caption}</TableCaption>
            <TableHeader>
                <TableRow>
                    {columns.map((col) => (
                        <TableHead key={String(col.key)}>{col.label}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((row, i) => (
                    <TableRow key={i}>
                        {columns.map((col) => (
                            <TableCell key={String(col.key)}>
                                {col.render
                                    ? col.render(row[col.key], row)
                                    : String(row[col.key])}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
            {showFooter && (
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={columns.length - 1}>
                            {footerLabel}
                        </TableCell>
                        <TableCell className="text-right">{footerTotal}</TableCell>
                    </TableRow>
                </TableFooter>
            )}
        </Table>
    );
}
