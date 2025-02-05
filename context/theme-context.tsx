"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import useSound from "use-sound"

type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

type ThemeContextProviderProp = {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({ children }: ThemeContextProviderProp) => {

  //const [theme, setTheme] = useState("light")
  // 修改这里：初始化时尝试从 localStorage 获取主题设置，否则默认为 'light'
  const [theme, setTheme] = useState(() => {
    // 确保在服务器端渲染时不访问 window 对象
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem("theme");
      return savedTheme || 'light'; // 如果没有保存的主题，则默认为 'light'
    }
    return 'light'; // 默认值，在服务器端渲染时使用
  });

  const [playLight] = useSound("/light-on.mp3", { volume: 0.5 })
  const [playDark] = useSound("/light-off.mp3", { volume: 0.5 })

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      playDark()
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      playLight()
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }
  }

  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem("theme")
  //   if (localTheme) {
  //     setTheme(localTheme)
  //     if (localTheme === "dark") {
  //       document.documentElement.classList.add("dark")
  //     } else {
  //       document.documentElement.classList.remove("dark")
  //     }
  //   } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark")
  //     document.documentElement.classList.add("dark")
  //   }
  // }, [theme])
  // 修改这里：移除对 theme 的依赖，改为仅在组件挂载时执行一次初始化逻辑
  useEffect(() => {
    if (typeof window !== 'undefined') { // 确保这段代码只在客户端运行
      const localTheme = window.localStorage.getItem("theme");
      if (localTheme) {
        setTheme(localTheme)
        if (localTheme === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else {
        // 强制使用 light 主题，不考虑系统偏好
        setTheme("light")
        document.documentElement.classList.remove("dark")
      }
    }
  }, []) // 仅在组件挂载时执行一次

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }
  return context
}

export default ThemeContextProvider
