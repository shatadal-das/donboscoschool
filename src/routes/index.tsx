import Message from "@/components/message";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageComponent,
});

function PageComponent() {
  
  return (
    <div className="text-[10vw] grid gap-12">
      <h1 className="font-accent text-xs text-white bg-blue-600">
        Don Bosco H.S. School, Kokrajhar
      </h1>
      <p className="font-primary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
        incidunt, nostrum et quae quaerat iusto eligendi tenetur vel deserunt
        consectetur soluta quibusdam reprehenderit totam consequuntur porro
        repudiandae amet eum! Iusto eligendi autem labore, soluta vero suscipit
        quidem dignissimos amet quis laborum ad, fugiat porro, nulla consectetur
        voluptatibus exercitationem saepe! Voluptate?
      </p>
      <Message />
    </div>
  );
}
