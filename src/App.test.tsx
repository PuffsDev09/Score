import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('muestra el título y la descripción de SCORE', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'SCORE' })).toBeInTheDocument()
    expect(screen.getByText('Crea rúbricas y evalúa competencias')).toBeInTheDocument()
  })
})
