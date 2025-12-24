import React from 'react'
import styleHandler from '../../lib/theme/styleHandler'
import { cn } from '../../lib/utils'

export default function InputIconContainer({
  icon,
  className,
  size,
}: {
  icon: React.ReactNode
  className?: string
  size: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
}) {
  const __styles = styleHandler('inputIconContainer')
  return <div className={cn(__styles.base, __styles.size[size], className)}>{icon}</div>
}
