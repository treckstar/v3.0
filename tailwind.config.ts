import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        serif: ['Poppins', ...defaultTheme.fontFamily.serif],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        recursive: ['Recursive',...defaultTheme.fontFamily.sans],
        display: ['Recursive', ...defaultTheme.fontFamily.sans],
      }
    }
  }
}
