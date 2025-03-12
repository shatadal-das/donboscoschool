import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: PageComponent,
})

function PageComponent() {
  return (
    <div>Home</div>
  )
}
