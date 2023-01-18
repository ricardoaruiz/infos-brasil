import { useEffect, useRef } from 'react'
import cx from 'classnames'
import type { ComponentProps } from 'react'

import { Form } from '@remix-run/react'

type SimpleSearchFormPrpos = ComponentProps<typeof Form> & {
  searchValue?: string | null
  searchFieldName: string
  searchFieldMaxLength?: number
  searchButtonLabel?: string
}

export const SimpleSearchForm = ({
  searchFieldName,
  searchValue,
  searchFieldMaxLength,
  placeholder,
  searchButtonLabel = 'Buscar',
  className,
  method = 'post',
  ...props
}: SimpleSearchFormPrpos) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = searchValue || ''
  }, [searchValue])

  return (
    <Form method={method} className={cx('flex', className)} {...props}>
      <input
        type="text"
        name={searchFieldName}
        placeholder={placeholder}
        maxLength={searchFieldMaxLength}
        ref={inputRef}
        className={cx(
          `
            flex-1
            px-2
            py-3
            outline-none
            rounded-l

            peer
            border-l-2
            border-t-2
            border-b-2
            border-red-400

            focus:border-l-2
            focus:border-t-2
            focus:border-b-2
            focus:border-l-red-600
            focus:border-t-red-600
            focus:border-b-red-600
        `
        )}
      />

      <button
        type="submit"
        className="
        self-stretch
        font-bold
        text-white
        rounded-r
        px-4
        py-2

        bg-red-400
        hover:bg-red-500
        active:bg-red-600

        border-l-0
        border-r-2
        border-t-2
        border-b-2
        border-red-400

        peer-focus:border-l-0
        peer-focus:border-r-2
        peer-focus:border-t-2
        peer-focus:border-b-2
        peer-focus:border-r-red-600
        peer-focus:border-t-red-600
        peer-focus:border-b-red-600
      "
      >
        {searchButtonLabel}
      </button>
    </Form>
  )
}
