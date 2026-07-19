import type { ReactNode, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  children: ReactNode
  href?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-yellow-400 hover:bg-yellow-500 text-navy-900',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
}

export default function Button({ variant = 'primary', children, href, onClick, className = '', type = 'button' }: ButtonProps) {
  const base = `inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-300 font-montserrat ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link to={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  )
}
