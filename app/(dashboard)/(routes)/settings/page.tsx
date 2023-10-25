import React from 'react'
import { Heading } from '@/components/heading/Heading'
import { checkSubscription } from '@/lib/subscription'
import { Settings } from 'lucide-react'
import SubscriptionBtn from '@/components/subscription-button/SubscriptionBtn'

type Props = {}

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading 
        title='Settings'
        description='Manage account settings.'
        iconColor='text-gray-700'
        bgColor='bg-gray-700/10'
        Icon={Settings}
      />
      <div className='px-4 lg:px-8 space-y-4'>
        <div className='text-muted-foreground text-sm'>
          {isPro ? 'You are currently on a pro plan.' : 'You are currently on a free plan.'}
        </div>
        <SubscriptionBtn isPro={isPro} />
      </div>
    </div>
  )
}

export default SettingsPage