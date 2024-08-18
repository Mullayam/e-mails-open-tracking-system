import type { FC } from 'hono/jsx'
import { PropsWithChildren } from 'hono/jsx'
import { ThemeContext, themes } from './app/context/theme-context';


const RootLayout: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  return (
    <html>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
     
      <body>
        <ThemeContext.Provider value={themes.dark}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  )
}

export default RootLayout