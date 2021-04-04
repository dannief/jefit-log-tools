// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

export default function DebugObserver() {
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    console.debug('The following atoms were modified:')
    const debug = async () => {
      for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
        const value = await snapshot.getPromise(node)
        console.debug(node.key, value)
      }
    }

    debug()
  }, [snapshot])

  return null
}
