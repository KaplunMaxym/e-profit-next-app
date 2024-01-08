import { Inter, Geologica } from 'next/font/google'

export const inter = Inter({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--inter-font'
})

export const geologica = Geologica({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--geologica-font'
})