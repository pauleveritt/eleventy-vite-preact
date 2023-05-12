import h from "../ghtml";

type HeadingProps = {
  title: string;
};

function Heading({ title }: HeadingProps) {
  return <h1 id="target">Hello {title}</h1>;
}

type IndexViewProps = {
  title: string;
};

export function IndexView(this: any, { title }: IndexViewProps) {
  const x = <Heading title={title} />;
  x.bind(this);
  return x;
}

export const render = IndexView;
