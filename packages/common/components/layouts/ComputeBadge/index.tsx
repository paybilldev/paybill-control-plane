import { Badge, cn } from 'ui'

interface ComputeBadgeProps extends React.ComponentProps<typeof Badge> {
  infraComputeSize:
    | 'pico'
    | 'nano'
    | 'micro'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | '2xlarge'
    | '4xlarge'
    | '8xlarge'
    | '12xlarge'
    | '16xlarge'
    | '24xlarge'
    | '24xlarge_optimized_memory'
    | '24xlarge_optimized_cpu'
    | '24xlarge_high_memory'
    | '48xlarge'
    | '48xlarge_optimized_memory'
    | '48xlarge_optimized_cpu'
    | '48xlarge_high_memory'
    | '>16XL'
    | undefined
}

export function ComputeBadge({ infraComputeSize, className, ...props }: ComputeBadgeProps) {
  const smallCompute =
    infraComputeSize?.toLocaleLowerCase() === 'micro' ||
    infraComputeSize?.toLocaleLowerCase() === 'nano'

  return (
    <Badge
      className={cn(
        'rounded-md text-center flex justify-center font-mono uppercase',
        'group-data-[state=open]:bg-opacity-20 group-data-[state=open]:ring-2 group-data-[state=open]:ring-opacity-20',
        'transition-all',
        smallCompute
          ? 'group-data-[state=open]:ring-foreground-muted bg-opacity-50 group-data-[state=open]:bg-opacity-75'
          : 'group-data-[state=open]:ring-brand',

        className
      )}
      variant={!infraComputeSize ? 'default' : smallCompute ? 'default' : 'brand'}
      {...props}
    >
      {infraComputeSize}
    </Badge>
  )
}
