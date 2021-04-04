// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useRecoilCallback } from 'recoil'

export default function DebugButton() {
  const onClick = useRecoilCallback(
    ({ snapshot }) => async () => {
      console.debug('Atom values:')
      for (const node of snapshot.getNodes_UNSTABLE()) {
        const value = await snapshot.getPromise(node)
        console.debug(node.key, value)
      }
    },
    []
  )

  return <button onClick={onClick}>Dump State</button>
}
