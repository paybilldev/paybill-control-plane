const config = require('ui/tailwind.config')

module.exports = config({
  content: [
    './_blog/*.mdx',
    './components/**/*.tsx',
    './data/**/*.tsx',
    './lib/mdx/mdxComponents.tsx',
    './pages/**/*.{tsx,mdx}',
    './../../packages/ui/src/**/*.{tsx,ts,js}',
    './../../packages/common/components/**/*.{tsx,ts,js}',
  ],
  plugins: [require('@tailwindcss/container-queries')],
  theme: {
    extend: {
      fontSize: {
        grid: '13px',
      },
      colors: {
        /*  typography */
        'typography-body': {
          light: 'hsl(var(--foreground-light))',
          dark: 'hsl(var(--foreground-light))',
        },
        'typography-body-secondary': {
          light: 'hsl(var(--foreground-lighter))',
          dark: 'hsl(var(--foreground-lighter))',
        },
        'typography-body-strong': {
          light: 'hsl(var(--foreground-default))',
          dark: 'hsl(var(--foreground-default))',
        },
        'typography-body-faded': {
          light: 'hsl(var(--foreground-muted))',
          dark: 'hsl(var(--foreground-muted))',
        },

        /* Tables */
        'table-body': {
          light: 'hsl(var(--background-default))',
          dark: 'hsl(var(--background-default))',
        },
        'table-header': {
          light: 'hsl(var(--background-surface-100))',
          dark: 'hsl(var(--background-surface-100))',
        },
        'table-footer': {
          light: 'hsl(var(--background-surface-100))',
          dark: 'hsl(var(--background-surface-100))',
        },
        'table-border': {
          light: 'hsl(var(--border-default))',
          dark: 'hsl(var(--border-default))',
        },

        /* Panels */
        'panel-body': {
          light: 'hsl(var(--background-surface-100))',
          dark: 'hsl(var(--background-surface-100))',
        },
        'panel-header': {
          light: 'hsl(var(--background-surface-100))',
          dark: 'hsl(var(--background-surface-100))',
        },
        'panel-footer': {
          light: 'hsl(var(--background-surface-100))',
          dark: 'hsl(var(--background-surface-100))',
        },
        'panel-border': {
          light: 'hsl(var(--border-default))',
          dark: 'hsl(var(--border-default))',
        },
        'panel-border-interior': {
          light: 'hsl(var(--border-muted))',
          dark: 'hsl(var(--border-muted))',
        },
        'panel-border-hover': {
          light: 'hsl(var(--border-muted))',
          dark: 'hsl(var(--border-muted))',
        },
      },
      keyframes: {
        shimmer: {
          '0%': {
            'background-position': '-1000px 0',
          },
          '100%': {
            'background-position': '1000px 0',
          },
        },
        sway: {
          '0%, 100%': {
            transform: 'rotate(-10deg) scale(1.5) translateY(4rem)',
          },
          '50%': {
            transform: 'rotate(10deg) scale(1.5) translateY(2rem)',
          },
        },
        'flash-code': {
          '0%': { backgroundColor: 'rgba(63, 207, 142, 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
        slideIn: {
          '0%': { transform: 'translate3d(0,-100%,0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
        spinner: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'pulse-radar': {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '50%': { opacity: 0.8 },
          '100%': { transform: 'scale(100%)', opacity: 0 },
        },
      },
      animation: {
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
        spinner: 'spinner 1s both infinite',
        marquee: 'marquee 35s linear infinite',
        sway: 'sway 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee-vertical': 'marquee-vertical 180s linear infinite both',
        'pulse-radar': 'pulse-radar 3s linear infinite',
        'slide-in': 'slideIn 250ms ease-in both',
      },
      transitionDelay: {
        1200: '1200ms',
        1500: '1500ms',
      },
    },
  },
})
