import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageComponent,
});

function PageComponent() {
  return <div className="bg-gray-700 px-4 py-2 text-white">hello</div>;
}
