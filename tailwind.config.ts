import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Sans', ...defaultTheme.fontFamily.serif],
        sans: ['Poppins', 'Poppins fallback', ...defaultTheme.fontFamily.sans],
        recursive: ['Recursive', 'Recursive fallback', ...defaultTheme.fontFamily.sans],
        display: ['Recursive', 'Recursive fallback', ...defaultTheme.fontFamily.sans],
      }
    }
  }
}
