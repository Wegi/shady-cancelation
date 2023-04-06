import { forwardRef } from 'react'
import clsx from 'clsx'

interface ContainerOuterProps extends ContainerProps {}

const OuterContainer = forwardRef<HTMLDivElement, ContainerOuterProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  }
)

interface ContainerInnerProps extends ContainerProps {}

const InnerContainer = forwardRef<HTMLDivElement, ContainerInnerProps>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    )
  }
)

interface ContainerProps {
  children: React.ReactNode
  props?: React.HTMLAttributes<HTMLDivElement>
  className?: string
}

interface ContainerComponent
  extends React.ForwardRefExoticComponent<
    ContainerProps & React.RefAttributes<HTMLDivElement>
  > {
  Outer: React.ForwardRefExoticComponent<
    ContainerOuterProps & React.RefAttributes<HTMLDivElement>
  >
  Inner: React.ForwardRefExoticComponent<
    ContainerInnerProps & React.RefAttributes<HTMLDivElement>
  >
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ children, ...props }, ref) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    )
  }
) as ContainerComponent

Container.Outer = OuterContainer
Container.Inner = InnerContainer
