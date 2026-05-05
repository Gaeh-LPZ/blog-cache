'use client';

import Link from "next/link";
import { space_grotesk } from "./fonts";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Header() {
    const routes = [
        { name: 'isr', href : '/isr'},
        { name: 'ssr', href: '/ssr'},
        { name: 'ssg', href: '/ssg'}
    ];

    const path = usePathname();

    return (
        <header className="flex flex-row justify-between p-4 items-center border-b-2 border-red-600">
            <div className="flex flex-row gap-4 items-center">
                <h1 className={`${space_grotesk.className} font-bold text-3xl italic text-red-600`}>BLOG</h1>
                <nav className="flex flex-row gap-1.5">
                    {routes.map((route, index) => (
                        <Link 
                        key={index} 
                        href={route.href}
                        className={clsx(
                            'text-base',
                            {
                                'text-red-600 underline' : path === route.href
                            },
                        )}>
                            {route.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex flex-row gap-4">
                <svg width={24} height={24} className="text-red-600"><use xlinkHref="/search.svg"></use></svg>
                <svg width={24} height={24} className="text-red-600"><use xlinkHref="/user.svg"></use></svg>
            </div>
        </header>
    );
}