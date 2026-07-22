import type { ReactNode, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  children: ReactNode
  href?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants = {
  primary: 'bg-green-500 hover:bg-green-600 text-navy-900',
  secondary: 'bg-yellow-400 hover:bg-yellow-500 text-navy-900',
  outline: 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-navy-900',
}

export default function Button({ variant = 'primary', children, href, onClick, className = '', type = 'button', disabled = false }: ButtonProps) {
  const base = `inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-300 font-montserrat ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link to={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {children}
    </button>
  )
}
