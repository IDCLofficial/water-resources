'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/components/LoadingProvider'

export const useNavigationLoader = () => {
  const { setIsLoading } = useLoading()
  const router = useRouter()

  useEffect(() => {
    // Override the default push method to show loader
    const originalPush = router.push
    const originalReplace = router.replace
    const originalBack = router.back
    const originalForward = router.forward

    router.push = (...args) => {
      setIsLoading(true)
      return originalPush.apply(router, args)
    }

    router.replace = (...args) => {
      setIsLoading(true)
      return originalReplace.apply(router, args)
    }

    router.back = () => {
      setIsLoading(true)
      return originalBack.apply(router)
    }

    router.forward = () => {
      setIsLoading(true)
      return originalForward.apply(router)
    }

    // Cleanup function to restore original methods
    return () => {
      router.push = originalPush
      router.replace = originalReplace
      router.back = originalBack
      router.forward = originalForward
    }
  }, [router, setIsLoading])

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setIsLoading(true)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [setIsLoading])
}
