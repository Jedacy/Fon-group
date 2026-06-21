import { useCallback, useEffect, useRef, useState } from "react";
import { CircleArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import cardOne from "../../assets/optimized/Home/card 1.webp";
import cardTwo from "../../assets/optimized/Home/card 2.webp";
import cardThree from "../../assets/optimized/Home/card 3.webp";
import SectionContainer from "../shared/SectionContainer";

const whoCards = [
  {
    image: cardOne,
    alt: "FON Group packaged products",
  },
  {
    image: cardTwo,
    alt: "Fontissue product campaign",
  },
  {
    image: cardThree,
    alt: "FONSTAT print production",
  },
];

const initialDeckOrder = whoCards.map((_, index) => index);

const deckSlots = [
  {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    zIndex: 30,
    boxShadow: "0 26px 70px rgba(15, 23, 42, 0.22)",
  },
  {
    x: 48,
    y: -34,
    rotate: 6,
    scale: 0.92,
    opacity: 0.9,
    zIndex: 20,
    boxShadow: "0 20px 48px rgba(15, 23, 42, 0.14)",
  },
  {
    x: -48,
    y: 40,
    rotate: -7,
    scale: 0.86,
    opacity: 0.8,
    zIndex: 10,
    boxShadow: "0 16px 36px rgba(15, 23, 42, 0.1)",
  },
];

const motionEase = [0.16, 1, 0.3, 1] as const;

function CardDeck() {
  const [deckOrder, setDeckOrder] = useState(initialDeckOrder);
  const [promotedCard, setPromotedCard] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const deckOrderRef = useRef(initialDeckOrder);
  const animationTimerRef = useRef<number | undefined>(undefined);
  const prefersReducedMotion = useReducedMotion();

  const settleAnimation = useCallback(() => {
    if (animationTimerRef.current) {
      window.clearTimeout(animationTimerRef.current);
    }

    if (prefersReducedMotion) {
      setPromotedCard(null);
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    animationTimerRef.current = window.setTimeout(() => {
      setPromotedCard(null);
      setIsAnimating(false);
      animationTimerRef.current = undefined;
    }, 920);
  }, [prefersReducedMotion]);

  const animateToOrder = useCallback((nextOrder: number[], cardToPromote: number) => {
    if (animationTimerRef.current) {
      return;
    }

    deckOrderRef.current = nextOrder;
    setPromotedCard(cardToPromote);
    setDeckOrder(nextOrder);
    settleAnimation();
  }, [settleAnimation]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      if (animationTimerRef.current) {
        return;
      }

      const [frontCard, middleCard, backCard] = deckOrderRef.current;
      animateToOrder([middleCard, backCard, frontCard], middleCard);
    }, 3500);

    return () => {
      window.clearInterval(timer);

      if (animationTimerRef.current) {
        window.clearTimeout(animationTimerRef.current);
      }
    };
  }, [prefersReducedMotion, animateToOrder]);

  const bringCardToFront = (cardIndex: number) => {
    if (animationTimerRef.current) {
      return;
    }

    if (deckOrderRef.current[0] === cardIndex) {
      return;
    }

    animateToOrder([cardIndex, ...deckOrderRef.current.filter((index) => index !== cardIndex)], cardIndex);
  };

  return (
    <div
      className={`relative mx-auto h-82.5 w-full max-w-[320px] overflow-visible sm:h-97.5 sm:max-w-90 lg:h-105 lg:max-w-95 ${
        isAnimating ? "pointer-events-none" : ""
      }`}
    >
      {deckOrder.map((cardIndex, slotIndex) => {
        const card = whoCards[cardIndex];
        const slot = deckSlots[slotIndex];
        const isFront = slotIndex === 0;
        const isPromoted = promotedCard === cardIndex;
        const hoverMotion = isFront
          ? {
              y: slot.y - 8,
              rotate: slot.rotate + 1,
              skewY: -1,
              scale: slot.scale * 1.025,
              boxShadow: "0 34px 82px rgba(15, 23, 42, 0.3)",
              transition: { delay: 0.07, duration: 0.38, ease: motionEase },
            }
          : {
              x: slot.x + (slot.x > 0 ? 8 : -8),
              y: slot.y + (slot.y > 0 ? 4 : -4),
              rotate: slot.rotate + (slot.rotate > 0 ? 1.5 : -1.5),
              scale: slot.scale + 0.018,
              boxShadow: "0 26px 58px rgba(15, 23, 42, 0.18)",
              transition: { delay: 0.07, duration: 0.34, ease: motionEase },
            };

        return (
          <motion.button
            type="button"
            key={card.alt}
            onClick={() => bringCardToFront(cardIndex)}
            aria-label={`Show ${card.alt} card`}
            animate={{
              x: slot.x,
              y: slot.y,
              rotate: slot.rotate,
              scale: slot.scale,
              opacity: slot.opacity,
              boxShadow: isPromoted ? "0 34px 82px rgba(15, 23, 42, 0.32)" : slot.boxShadow,
            }}
            initial={false}
            style={{ zIndex: isPromoted ? 40 : slot.zIndex }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 0.88,
                    ease: motionEase,
                    opacity: { duration: 0.42 },
                  }
            }
            whileFocus={prefersReducedMotion ? undefined : hoverMotion}
            whileHover={prefersReducedMotion ? undefined : hoverMotion}
            className="group/card absolute inset-0 cursor-pointer transform-gpu overflow-hidden rounded-2xl border-0 bg-slate-100 p-0 text-left ring-1 ring-slate-200 [will-change:transform,opacity,box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003246] focus-visible:ring-offset-4"
          >
            <img
              src={card.image}
              alt={card.alt}
              decoding="async"
              loading="lazy"
              className={`h-full w-full object-cover transition-transform delay-75 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.035] group-focus-visible/card:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none ${
                isPromoted ? "scale-[1.02]" : ""
              }`}
            />
          </motion.button>
        );
      })}
    </div>
  );
}

function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="bg-white py-24 sm:py-28">
      <SectionContainer className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="font-section-label text-xs font-bold uppercase tracking-[0.35em] text-slate-500">Who we are</p>
          <h2 className="font-heading mt-4 max-w-xl text-4xl font-semibold leading-tigh text-[#08063d] sm:text-5xl">
            Creating Values for our customers
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-6 text-slate-500">
            THE FON GROUP is an indigenous Ghanaian owned Paper Converting and Trading group with 30 years of
            experience in the paper industry.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500">
            Our mission to be the example of a pioneering manufacturing group in Africa that demystifies the falsehood
            of Manufacturing being pioneered only by the people of the West.
          </p>
          <a
            href="/who-we-are"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#002f43] px-7 py-4 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#06465f]"
          >
            Read More
            <CircleArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        </div>

        <div className="relative mx-auto w-full overflow-visible py-8 lg:py-0">
          <CardDeck />
        </div>
      </SectionContainer>
    </section>
  );
}

export default WhoWeAreSection;
