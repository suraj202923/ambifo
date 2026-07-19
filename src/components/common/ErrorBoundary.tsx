import { Component, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white font-lato">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold text-navy-900 font-montserrat mb-4">Something went wrong</h1>
            <p className="text-gray-500 mb-8">An unexpected error occurred. Please try again.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-montserrat"
              onClick={() => this.setState({ hasError: false })}
            >
              Back to Home
            </Link>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
