import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  variant?: Variant
  children: ReactNode
  className?: string
  as?: 'button' | 'a' | 'link'
  href?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  target?: string
  rel?: string
}

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'inline-flex items-center justify-center px-5 py-2.5 font-body text-sm text-hps-smoke hover:text-hps-ink transition-colors duration-200 cursor-pointer',
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  as = 'button',
  href,
  external,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const cls = `${variantClasses[variant]} ${className}`.trim()

  if (as === 'link' && href) {
    return <Link to={href} className={cls}>{children}</Link>
  }

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
