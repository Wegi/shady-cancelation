import Head from 'next/head'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Newsletter() {
  /*TODO Add name, message and maybe captcha*/
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Suggest Shady Cancelation</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Had a bad experience canceling a service? Submit your experience
        (preferrably with screenshots or examples) and we will add it to the
        list.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Spencer Sharp - Software designer, founder, and amateur astronaut
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            If its easy to buy, it should be easy to cancel!
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Ever had to call a real person to cancel a subscription you made
            online? Such practice is unacceptable, but works because you don't
            know beforehand, when you subscribe. We end this information
            asymmetry. Check if the service you want to subscribe to is on this
            list beforehand, and safe yourself the hassle.
          </p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto">
          <Newsletter />
        </div>
      </Container>
    </>
  )
}
