"use client"

const ThemeSwitcher = () =>{
    return(
        <div className="theme-switcher hidden flex items-center justify-between border-t border-b border-gray-300 px-4 py-2 min-h-[70px]">
        <div className="text-sm font-medium hidden xl:block">Theme</div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-[3.75rem] h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-400 dark:peer-focus:ring-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['\263E'] peer-checked:after:content-['\2600'] after:text-center after:absolute after:top-[2px] after:start-[2px] after:bg-green-100 after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-800"></div>
        </label>
      </div>
    )
}

export default ThemeSwitcher