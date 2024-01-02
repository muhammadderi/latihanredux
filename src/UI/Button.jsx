import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
export default function Button({ children, disabled, to, type }) {
  // const className =
  //   'focus-outline-none inline-block rounded-full bg-yellow-500 px-3 py-3 font-semibold uppercase tracking-wide text-stone-800 duration-300 ease-in-out hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4'

  const base =
    'focus-outline-none inline-block rounded-full bg-yellow-500  font-semibold uppercase tracking-wide text-stone-800 duration-300 ease-in-out hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'border-2 border-stone-300 px-4  md:px-6 md:py-2 text-sm inline-block rounded-full bg-transparent  font-semibold uppercase tracking-wide text-stone-800 duration-300 ease-in-out hover:bg-stone-400 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'
  }

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    )

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}
