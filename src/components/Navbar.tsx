import { Moon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Navbar = () => {
    return (
        <nav className='p-4 flex items-center justify-between'>
            {/* LEFT */}
            Collapse button
            {/* RIGHT */}
            <div className='flex items-center gap-4'>
                <Link href="/">Dashboard</Link>
                <Moon />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    )
}
