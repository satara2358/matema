import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ClerkLoading, ClerkLoaded, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'


import React from 'react'
import { SidebarItem } from './sidebar-item'

type Props = {
  className?: string
}

export const Sidebar = ({className}: Props) => {
  return (
    <div className={cn(
      'flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
      className,
    )}>
      <Link href='/learn'>
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/poseRobot.png"
            alt="Logo Inicial"
            width="70"
            height="70"
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Mage-MATICAS
          </h1>
        </div>
        </Link>
        <div className='flex flex-col gap-y-2 flex-1'>
          <SidebarItem 
            label='Suma' 
            href='/learn'
            iconSrc='/suma.png'
          />
          <SidebarItem 
            label='Suma' 
            href='/resta'
            iconSrc='/suma.png'
          />
          <SidebarItem 
            label='Suma' 
            href='/mult'
            iconSrc='/suma.png'
          />
          <SidebarItem 
            label='Suma' 
            href='/div'
            iconSrc='/suma.png'
          />
        </div>
        <div className='p-4'>
          <ClerkLoading>
            <Loader className='h-5 w-5 text-muted-foreground animate-spin'/>
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSignOutUrl='/'/>
          </ClerkLoaded>
        </div>
    </div>
  )
}
