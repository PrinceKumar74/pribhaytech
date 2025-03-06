
"use client";
import "./style.css";
import StarRateIcon from "@mui/icons-material/StarRate"; // Full star
import StarHalfIcon from "@mui/icons-material/StarHalf"; // Half star
import StarOutlineIcon from "@mui/icons-material/StarOutline"; // Empty star
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type {EmblaCarouselType} from "embla-carousel";
import { useState, useRef, useEffect } from "react";
const testimonials = [
  {
    rating: 4.5,
    name: "Elise",
    role: "Mobile App Developer",
    image: "/images/person2.jpg",
    text: "Having been through a number of digital marketing agencies I was sceptical about employing another, but I have to say Pribhaytech are a breath of fresh air. Within 3 months we saw a complete turnaround in our website performance and new enquiries went from strength-to-strength. These guys really life and breath digital and think outside the box. Would highly recommend.",
  },
  {
    rating: 5,
    name: "Sebastian",
    role: "UI/UX Designer",
    image: "/images/person3.jpg",
    text: "PribhayTech have built and developed our social media platforms from scratch and we now have excellent brand awareness online. Website visitors increase month by month due to our social media campaigns and SEO/PPC development. They are extremely knowledgeably in digital marketing and enthusiastic and have become an extended part of our marketing team.",
  },
  {
    rating: 5,
    name: "Sahid",
    role: "Business Manager",
    image: "/images/maleImg.png",
    text: "What can I say... an agency with a difference. There is nothing they don&apos;t know about websites and marketing and a joy to work with. I know nothing about the tech side of things and everything is explained in plain English and I am always up to speed with the state of play with all my campaigns which means I can concentrate on the other parts of the businesses. The social media channels are performing like never before and the re-marketing campaigns are now indispensable and account for 25% of our sales. It&apos;s hard to imagine my business without Paul and his team on board.",
  },
  {
    rating: 4,
    name: "Maria",
    role: "Web Developer",
    image: "/images/femaleImg.png",
    text: "I&apos;ve been using Media Waypoint for just over one year and I&apos;m very happy with the results which have far exceeded my expectation and surpassed anything that has been done before. Our social media has grown by 300% and enquiries from the website have doubled and the quality appears to be good. The only downside is that they don&apos;t design and build websites from scratch, which is a drawback and would make their offering stronger, apart from this they are faultless and a great agency to work with.",
  },
  {
    rating: 5,
    name: "John",
    role: "Content Writer",
    image: "/images/person1.jpg",
    text: "Excellent, working with web designer express was great. Thanks to their knowledge and determination our website looks great and functions really good. I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction.",
  },
  {
    rating: 4.5,
    name: "Elliot Giannini ",
    role: "Full Stack Developer",
    image: "/images/maleImg.png",
    text: "We have now had the pleasure of working with PribhayTech on a number of projects - from updating our website, to overhauling our stationary and designing websites and brochures for our latest developments., willing to work together to create a fantastic finished product. Everything looks sleek and modern and really helps us to take our business to the next level. We have been receiving a lot of compliments on our new look and the latest marketing materials and would not hesitate to recommend the team at Pribhaytech to any of our friends or colleagues.",
  },
  {
    rating: 5,
    name: "Mark Morris",
    role: "Mobile App Developer",
    image: "/images/maleImg.png",
    text: "We are really impressed with the amazing website. I really want to say big thanks to you Ronnen and to all the staff that they were part of our journey. Such a great company to work with and highly recommended to everyone… Thank you so much Ronnen again and again.",
  },
  {
    rating: 5,
    name: "Mike Howel",
    role: "UI/UX Designer",
    image: "/images/maleImg.png",
    text: "I have to say that the result of all this work is the wonderful feedback & first impressions about our site, from a massive number of new clients coming off our recent marketing campaign, so thank you Pribhaytech!",
  },
  {
    rating: 4.5,
    name: "Sanjay Chauhan",
    role: "Web Developer",
    image: "/images/maleImg.png",
    text: "Hiring Pribhaytech to build my website was absolutely the right decision. I felt absolutely taken care of all the way through from my initial conversations with them right through to delivery of the website and beyond. I&apos;m thrilled with every aspect of the website – from design to functionality. They are in my view that magical combination of efficient, talented, cost-conscious and personalised service.",
  },
];

const CarouselComponent = () => {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType |null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate functionality
  useEffect(() => {
    if (!emblaApi) return;
    const startAutoRotate = () => {
      intervalRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
    };
    startAutoRotate();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [emblaApi]);

  // Pause on hover
  const handleHover = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume on hover leave
  const handleHoverLeave = () => {
    if (!intervalRef.current && emblaApi) {
      intervalRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
    }
  };

  return (
    <div
      className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 xl:px-12"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Success Stories
        </h2>
        <div className="flex justify-center">
          <p className="mt-4 text-lg sm:w-[70%] text-gray-600 text-center">
          Discover how we&apos;ve helped businesses grow through innovative and Creative solutions and tailored strategies that deliver real and measurable results.
          </p>
        </div>
        <Carousel
          setApi={setEmblaApi}
          opts={{ loop: true }}
          className="mt-10 w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({
  name,
  role,
  image,
  text,
  rating,
}: {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Splitting words to check length
  const words = text.split(" ");
  const shouldTruncate = words.length > 40 ;
  const truncatedText = shouldTruncate
    ? words.slice(0, 40).join(" ") + "..."
    : text;

  // Generate stars based on the rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating - fullStars >= 0.3 && rating - fullStars < 0.8; // Check for half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarRateIcon key={`full-${i}`} className="text-sky-500" />);
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(<StarHalfIcon key="half" className="text-sky-500" />);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarOutlineIcon key={`empty-${i}`} className="text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full mx-2 testimonial-container flex flex-col justify-between">
      <div>
        {/* Star Rating */}
        <div className="flex items-center mb-4">{renderStars()}</div>

        {/* Text Content */}
        <div className="">
          <div
            className={`testimonial-text ${
              isExpanded ? "expanded" : ""
            } text-gray-700 text-lg`}
          >
            {isExpanded ? text : truncatedText}
            {shouldTruncate && (
              <button
                className="hover:cursor-pointer font-bold hover:text-sky-400 "
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="flex items-center my-4">
        <div className="h-14 w-14 relative">
          <Image
            className="rounded-full border-4 border-sky-400"
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
