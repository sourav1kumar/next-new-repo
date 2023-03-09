import HookComp from "./components/HookComp"
import SimpleHtml from "./components/SimpleHtml"

export default function Home() {
  return (
    <>
      hello
      <SimpleHtml />
      <HookComp />
    </>
  )
}

export {SimpleHtml, HookComp}
