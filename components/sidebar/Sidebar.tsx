'use client'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import SidebarLink from '../sidebar-link/SidebarLink'

import { 
  Code,
  ImageIcon, 
  LayoutDashboard, 
  MessageSquare, 
  Music, 
  Settings, 
  VideoIcon
} from 'lucide-react'
import FreeCounter from '../free-counter/FreeCounter'
import useMounted from '@/hooks/useMounted'

const montserrat = Montserrat({ 
  weight: '600', 
  subsets: ['latin']
});

export const routes = [
  {
    label: 'Dashboard',
    Icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10',
    generative: false,
  },
  {
    label: 'Conversation',
    Icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    generative: true,
  },
  {
    label: 'Image Generation',
    Icon: ImageIcon,
    href: '/image',
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    generative: true,
  },
  {
    label: 'Video Generation',
    Icon: VideoIcon,
    href: '/video',
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
    generative: true,
  },
  {
    label: 'Music Generation',
    Icon: Music,
    href: '/music',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    generative: true,
  },
  {
    label: 'Code Generation',
    Icon: Code,
    href: '/code',
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    generative: true,
  },
  {
    label: 'Settings',
    Icon: Settings,
    href: '/settings',
    color: 'text-gray-700',
    bgColor: 'bg-gray-700/10',
    generative: false,
  },
];

type SidebarProps = {
  apiLimitCount: number;
  isPro: boolean;
}

const Sidebar = ({ apiLimitCount=0, isPro=false }: SidebarProps) => {
  const pathname = usePathname();
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            <Image 
              fill
              alt='logo'
              src='/logo.png'
            />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map(route => (
            <SidebarLink 
              {...route}
              key={route.href}
              pathname={pathname}
            />
          ))}
        </div>
      </div>
      <FreeCounter 
        apiLimitCount={apiLimitCount}
        isPro={isPro}
      />
    </div>
  )
}

export default Sidebar