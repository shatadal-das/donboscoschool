import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: PageComponent,
})

function PageComponent() {
  return (
    <div>
      <div className="relative after:absolute after:inset-0 after:[background-image:linear-gradient(73.86deg,#000000_0%,rgba(0,0,0,0)_61.87%)]">
        <img
          src="/hero-img.jpg"
          alt=""
          className="aspect-[60/23] w-full object-cover"
        />
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        maxime perferendis mollitia reprehenderit ratione totam soluta quasi,
        voluptate dolorum quam. Optio distinctio at omnis consectetur
        voluptatibus possimus officia quod totam!
      </p>
    </div>
  )
}
