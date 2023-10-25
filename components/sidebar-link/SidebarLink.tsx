import { cn } from '@/lib/utils'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import React from 'react'

type SidebarLinkProps = {
  href: string;
  Icon: LucideIcon;
  label: string;
  color?: string;
  pathname: string;
}

const SidebarLink = ({
  href,
  Icon,
  label,
  color,
  pathname,
}: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
        pathname === href ? 'text-white bg-white/10' : 'text-zinc-400'
      )}
    >
      <div className='flex items-center flex-1'>
        <Icon className={cn('h-5 w-5 mr-3', color)} />
        {label}
      </div>
    </Link>
  )
}

export default SidebarLink