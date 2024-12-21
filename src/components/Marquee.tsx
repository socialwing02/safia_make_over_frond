type Props = {
  animateClassName?: string;
  images: string[];
};

export default function Marquee({ animateClassName, images }: Props) {
  return (
    <section className={animateClassName}>
      <div className="marquee">
        <ul className="marqueeContent">
          {images.map((image) => (
            <div key={image} className="marqueeItem">
              <img src={image} alt={image} loading="lazy" />
            </div>
          ))}
        </ul>

        <ul className="marqueeContent">
          {images.map((image) => (
            <div key={image} className="marqueeItem">
              <img src={image} alt={image} loading="lazy" />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
