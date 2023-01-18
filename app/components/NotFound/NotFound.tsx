import { Form, Links, Meta, Scripts, useCatch } from '@remix-run/react'

import notFoundImage from '../../assets/images/not-found.webp'

export const NotFound = () => {
  const caught = useCatch()

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <img src={notFoundImage} alt="no data found" />

          <h2 className="text-4xl mt-10 mb-10 text-slate-500">
            {caught.status} {caught.statusText}
          </h2>

          <Form action="/">
            <button
              className="
              bg-red-300
              px-4
              py-2
              rounded
              text-white
              font-bold

              hover:bg-red-400
              active:bg-red-500
            "
            >
              Voltar para home
            </button>
          </Form>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
