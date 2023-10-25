'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Zap } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

type SubscriptionBtnProps = {
  isPro: boolean;
}

const SubscriptionBtn = ({ isPro=false }: SubscriptionBtnProps) => {
  const [loading, setLoading] = useState(false)

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');
      
      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button disabled={loading} variant={isPro ? 'default' : 'premium'} onClick={onClick}>
      {isPro ? 'Manage subscription' : 'Upgrade'}
      {!isPro && <Zap className='w-4 h-4 ml-2 fill-white' />}
    </Button>
  )
}

export default SubscriptionBtn