interface IServicePageAbout {
  title: string;
  description: string;
}

export const ServicePageAbout = ({ title, description }: IServicePageAbout) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
};
