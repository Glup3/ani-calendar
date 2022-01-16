import { FunctionComponent, useEffect, useState } from 'react'

export const ClientOnly: FunctionComponent<{}> = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <div {...delegated}>{children}</div>
}
