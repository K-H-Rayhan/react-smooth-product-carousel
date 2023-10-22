import React, { useRef } from "react";
import './Carousel.css';

export function Productcarousel({ children, title = "Product" }: {
  children: React.ReactNode,
  title: string,
}) {
  const elements = React.Children.map(children, (child) => child) || [];
  const [leftDisable, setLeftDisable] = React.useState(true);
  const [rightDisable, setRightDisable] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    containerRef.current?.scrollBy({
      // @ts-ignore
      left: -ref.current?.clientWidth,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    containerRef.current?.scrollBy({
      left: ref.current?.clientWidth,
      behavior: "smooth",
    });
  };

  const scrolling = (e: React.UIEvent<HTMLDivElement>) => {
    const rightend =
      e.currentTarget.scrollWidth - e.currentTarget.scrollLeft - 30 < e.currentTarget.clientWidth;
    if (rightend) {
      setRightDisable(true);
    } else {
      setRightDisable(false);
    }
    const leftend = e.currentTarget.scrollLeft === 0;
    if (leftend) {
      setLeftDisable(true);
    } else {
      setLeftDisable(false);
    }
  };

  return (
    <div className={"productCarouselContainer"}>
      <div role="heading" aria-label="2" className={"carouselHeading"}>
        <div style={{
          fontWeight: 500,
          fontSize: "24px",
        }}>
          {title}
        </div>
        <div style={{
          display: "flex",
          gap: "8px",
        }}>
          <button
            aria-label="Previous Slide"
            disabled={leftDisable}
            onClick={prevSlide}
            className={`${"carouselButton"} ${leftDisable ? "disabled" : ''}`}
          >
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
          </button>
          <button
            aria-label="Next Slide"
            disabled={rightDisable}
            onClick={nextSlide}
            className={`${"carouselButton"} ${rightDisable ? "disabled" : ''}`}
          >
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
          </button>
        </div>
      </div>

      <div
        onScroll={scrolling}
        className={`${"productCarousel"} `}
        ref={containerRef}
        tabIndex={0} // Make the container focusable
      >
        {elements?.map((item: any, index: number) => (
          <div
            {...(index === 0 ? { ref: ref } : {})}
            key={index}
            className={"productItem"}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
