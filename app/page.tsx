"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Home,
  MapPin,
  MessageCircle,
  Shield,
} from "lucide-react";
import { useState } from "react";

// Swiper imports
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LandingPage() {
  // Swiper instances
  const [gallerySwiper, setGallerySwiper] = useState<SwiperType | null>(null);
  const [interiorSwiper, setInteriorSwiper] = useState<SwiperType | null>(null);

  // Image gallery data
  const galleryImages = [
    {
      src: "/slide-1.jpg",
      alt: "Luxury beachfront villa",
      title: "Beachfront Villa",
    },
    {
      src: "/slide-2.jpg",
      alt: "Resort-style amenities",
      title: "Resort Amenities",
    },
    {
      src: "/slide-3.jpg",
      alt: "Premium interior design",
      title: "Premium Interiors",
    },
  ];

  // Interior images data
  const interiorImages = [
    {
      src: "/luxury-apartment-interior.png",
      alt: "Elegant living spaces",
      title: "Living Room",
    },
    {
      src: "/building-amenities-pool.png",
      alt: "Premium pool area",
      title: "Pool Area",
    },
    {
      src: "/creative-classroom-learning.png",
      alt: "Designer kitchen",
      title: "Kitchen",
    },
    {
      src: "/tropical-palm-resort.png",
      alt: "Master bedroom suite",
      title: "Master Suite",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-primary-200 z-50 shadow-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="font-display font-bold text-xl text-secondary-600">
                Paradise Estates
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#gallery"
                className="text-sm font-medium text-secondary-600 hover:text-accent-500 transition-colors duration-200"
              >
                Gallery
              </a>
              <a
                href="#benefits"
                className="text-sm font-medium text-secondary-600 hover:text-accent-500 transition-colors duration-200"
              >
                Benefits
              </a>
              <a
                href="#properties"
                className="text-sm font-medium text-secondary-600 hover:text-accent-500 transition-colors duration-200"
              >
                Properties
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-secondary-600 hover:text-accent-500 transition-colors duration-200"
              >
                Contact
              </a>
              {/* <div className="flex items-center space-x-4 text-sm text-secondary-500">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>+66 123 456 789</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>info@paradise-estates.com</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1 - Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-image.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="animate-fade-in">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-12 leading-tight tracking-tight">
                KOH PHANGAN
                <br />
                <span className="text-accent-300">
                  Welcome to luxury tropical paradise
                </span>
              </h1>
              <Button
                size="lg"
                className="bg-accent-500 hover:bg-accent-600 text-white font-medium px-12 py-6 text-xl rounded-lg shadow-luxury hover:shadow-luxury-hover transition-all duration-300"
              >
                Explore Properties
              </Button>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            size="lg"
            className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-luxury hover:shadow-luxury-hover transition-all duration-300 px-6 py-4"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            <span className="font-medium">WhatsApp</span>
          </Button>
        </div>
      </section>

      {/* Section 1.7 - Interactive Aerial View */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/chaloklum-bay-aerial.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </div>

        {/* Interactive Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex items-center">
          <div className="w-full">
            {/* Main Title */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/90 text-secondary-700 border-white/50 px-4 py-2 text-sm font-medium">
                Prime Location
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Chaloklum Fisherman Village
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Discover the heart of Koh Phangan's most desirable beachfront
                location
              </p>
            </div>

            {/* Interactive Points */}
            <div className="relative w-full max-w-6xl mx-auto">
              {/* Point 1 - Beach Area */}
              <div className="absolute top-[60%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-6 h-6 bg-accent-500 rounded-full border-4 border-white shadow-luxury animate-pulse group-hover:animate-none group-hover:scale-125 transition-all duration-300"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-luxury min-w-[280px]">
                    <h4 className="font-display font-bold text-lg text-secondary-700 mb-2">
                      Pristine Beach Access
                    </h4>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      Direct access to crystal-clear waters and white sand
                      beaches, perfect for swimming and water sports year-round.
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 2 - Village Center */}
              <div className="absolute top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-6 h-6 bg-accent-500 rounded-full border-4 border-white shadow-luxury animate-pulse group-hover:animate-none group-hover:scale-125 transition-all duration-300"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-luxury min-w-[280px]">
                    <h4 className="font-display font-bold text-lg text-secondary-700 mb-2">
                      Village Center
                    </h4>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      Heart of Chaloklum with authentic restaurants, local
                      markets, and traditional fisherman culture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 3 - Property Location */}
              <div className="absolute top-[45%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white shadow-luxury animate-pulse group-hover:animate-none group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-luxury min-w-[300px]">
                    <h4 className="font-display font-bold text-lg text-accent-600 mb-2">
                      🏠 Your Investment Property
                    </h4>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      Prime beachfront location with 11 exclusive units. Perfect
                      positioning for maximum rental yield and capital
                      appreciation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 4 - Jungle/Nature */}
              <div className="absolute top-[25%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-luxury animate-pulse group-hover:animate-none group-hover:scale-125 transition-all duration-300"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-luxury min-w-[280px]">
                    <h4 className="font-display font-bold text-lg text-secondary-700 mb-2">
                      Tropical Nature
                    </h4>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      Lush tropical jungle and hiking trails, offering perfect
                      balance between beach life and nature exploration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 5 - Marina/Pier */}
              <div className="absolute top-[55%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-luxury animate-pulse group-hover:animate-none group-hover:scale-125 transition-all duration-300"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-luxury min-w-[280px]">
                    <h4 className="font-display font-bold text-lg text-secondary-700 mb-2">
                      Marina & Pier
                    </h4>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      Local fishing pier and boat services for island hopping to
                      Koh Samui, Koh Tao, and mainland Thailand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile-friendly legend */}
              <div className="md:hidden mt-16 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-luxury">
                <h3 className="font-display font-bold text-xl text-secondary-700 mb-4">
                  Location Highlights
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-accent-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-secondary-700">
                        Pristine Beach Access
                      </h4>
                      <p className="text-sm text-secondary-600">
                        Crystal-clear waters and white sand beaches
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-accent-600">
                        Your Investment Property
                      </h4>
                      <p className="text-sm text-secondary-600">
                        11 exclusive beachfront units
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-accent-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-secondary-700">
                        Village Center
                      </h4>
                      <p className="text-sm text-secondary-600">
                        Restaurants, markets, and local culture
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-secondary-700">
                        Tropical Nature
                      </h4>
                      <p className="text-sm text-secondary-600">
                        Jungle trails and natural beauty
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-secondary-700">
                        Marina & Pier
                      </h4>
                      <p className="text-sm text-secondary-600">
                        Boat services and island connections
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <Button
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-4 rounded-lg shadow-luxury hover:shadow-luxury-hover transition-all duration-300"
          >
            Explore This Location
          </Button>
        </div>
      </section>

      {/* Section 2 - Image Gallery Carousel */}
      <section
        id="gallery"
        className="py-24 bg-gradient-to-b from-primary-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent-100 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
              Investment Opportunity
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-700">
              Live the Dream and Grow Your Wealth
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto leading-relaxed">
              Exclusive opportunity to acquire 11 beachfront units in the prime
              heart of Chaloklum Fisherman Village, one of Koh Phangan's most
              desirable locations. Surrounded by stunning beaches, restaurants,
              shops, and attractions, this property offers a proven profit
              history with an impressive estimated 13-18% ROI — combining
              lifestyle appeal with solid investment returns.
            </p>
          </div>
        </div>
        {/* Property Video */}
        <div className="relative mb-12">
          <div className="overflow-hidden shadow-luxury">
            <video
              className="w-full h-auto max-h-[600px] object-cover"
              controls
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section 3 - Program Benefits */}
      <section
        id="benefits"
        className="py-24 bg-gradient-to-br from-accent-50 to-accent-100"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-white/80 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
              Investment Excellence
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-700">
              A worthy investment in your future.
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              An investment opportunity with a low entry threshold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-10 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-secondary-700">
                Maximize Returns in Paradise
              </h3>
              <div className="text-secondary-600 leading-relaxed space-y-4">
                <p>
                  Secure a rare beachfront investment with the potential to
                  recoup your capital in as little as 7 years, delivering an
                  exceptional 13–18% ROI.
                </p>
                <p>Unmatched year-round demand and steady rental income.</p>
                <p>
                  Turnkey professional management ensures effortless ownership
                  and hassle-free maintenance.
                </p>
                <p>
                  Prime beachfront position in a thriving, well-developed area —
                  a magnet for both holidaymakers and long-term tenants seeking
                  the best of Koh Phangan.
                </p>
              </div>
            </Card>

            <Card className="text-center p-10 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-secondary-700">
                Pre-Construction Investment Opportunity
              </h3>
              <div className="text-secondary-600 leading-relaxed space-y-4">
                <p>
                  Enter at the initial stage of construction and position
                  yourself to sell at up to 40% higher value upon completion.
                </p>
                <p>
                  Proven capital growth — property values in Thailand continue
                  to rise steadily year after year.
                </p>
                <p>
                  Full freehold ownership, giving you complete control and
                  long-term security.
                </p>
                <p>
                  Located in one of Southeast Asia's strongest markets —
                  Thailand ranks among the top three most developed economies in
                  the region, alongside Singapore and Malaysia.
                </p>
              </div>
            </Card>

            <Card className="text-center p-10 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-secondary-700">
                Koh Phangan – The Ideal Destination for Modern, Happy Living
              </h3>
              <div className="text-secondary-600 leading-relaxed space-y-4">
                <p>
                  In recent years, Koh Phangan has evolved into a vibrant blend
                  of foreign tourists, long-term visitors, and expats who choose
                  to stay for 6–12 months or relocate permanently. This unique
                  mix keeps the island in high demand year-round.
                </p>
                <p>
                  Warm, crystal-clear seas and inviting beaches all year long
                </p>
                <p>Tropical climate with endless summer days</p>
                <p>
                  Pristine natural beauty — mountains, jungles, rivers, and
                  waterfalls
                </p>
                <p>
                  Excellent ecology with clean air, fresh produce, and a true
                  sense of safety
                </p>
              </div>
            </Card>
          </div>
          <div className="relative mt-12 mb-6 -mx-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                prevEl: ".gallery-prev",
                nextEl: ".gallery-next",
              }}
              pagination={{
                el: ".gallery-pagination",
                clickable: true,
                bulletClass: "swiper-pagination-bullet gallery-bullet",
                bulletActiveClass:
                  "swiper-pagination-bullet-active gallery-bullet-active",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={setGallerySwiper}
              className="gallery-swiper rounded-2xl shadow-luxury overflow-visible"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Card className="overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-display font-bold text-lg">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <Button
              size="icon"
              variant="outline"
              className="gallery-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white border-primary-200 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-secondary-600" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="gallery-next absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white border-primary-200 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 text-secondary-600" />
            </Button>
          </div>
          <div className="gallery-pagination flex items-center justify-center space-x-3 mb-8"></div>
          {/* Custom Pagination */}
        </div>
      </section>

      {/* Section 4 - Mixed Content */}
      {/* Property details section featuring specifications and interior image carousel */}
      <section id="properties" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Property Specifications
      {/* Grid layout for property details and interior images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8 animate-slide-in">
              <div>
                <Badge className="mb-4 bg-primary-100 text-secondary-700 border-primary-200 px-4 py-2 text-sm font-medium">
                  Property Details
                </Badge>
                <h3 className="font-display text-3xl font-bold mb-6 text-secondary-700">
                  Premium Specifications
                </h3>
              </div>
              {/* Property specifications list with living areas */}
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-primary-200">
                  <span className="font-medium text-secondary-600">
                    Total Living Area
                  </span>
                  <span className="font-bold text-xl text-secondary-700">
                    97.05 M²
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-primary-200">
                  <span className="font-medium text-secondary-600">
                    Terrace Area
                  </span>
                  <span className="font-bold text-xl text-secondary-700">
                    24.95 M²
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-primary-200">
                  <span className="font-medium text-secondary-600">
                    Floor Area
                  </span>
                  <span className="font-bold text-xl text-secondary-700">
                    77.75 M²
                  </span>
                </div>
              </div>
              {/* Call-to-action button for floor plans */}
              <Button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-4 rounded-lg shadow-luxury hover:shadow-luxury-hover transition-all duration-300">
                View Detailed Floor Plans
              </Button>
            </div>

            {/* Interior images carousel with fade effect */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <Swiper
                  modules={[Navigation, EffectFade]}
                  effect="fade"
                  navigation={{
                    prevEl: ".interior-prev",
                    nextEl: ".interior-next",
                  }}
                  onSwiper={setInteriorSwiper}
                  className="interior-swiper h-96"
                >
                  {interiorImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        {/* Image title overlay */}
                        <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                          {image.title}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Navigation buttons for interior carousel */}
              <Button
                size="icon"
                variant="outline"
                className="interior-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white border-primary-200 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-secondary-600" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="interior-next absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white border-primary-200 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-secondary-600" />
              </Button>

              {/* Thumbnail navigation for quick image selection */}
              <div className="flex space-x-3 mt-6 justify-center">
                {interiorImages.map((image, index) => (
                  <button
                    key={index}
                    className="w-20 h-16 rounded-lg overflow-hidden border-2 border-primary-200 hover:border-accent-300 transition-all duration-200"
                    onClick={() => interiorSwiper?.slideTo(index)}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.5 - Lifestyle Sections */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-6">
          {/* Cafés, Bars, and Restaurants */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="/tropical-palm-resort.png"
                  alt="Cafés, bars, and restaurants"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-accent-100 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
                  Dining & Nightlife
                </Badge>
                <h3 className="font-display text-3xl font-bold mb-6 text-secondary-700">
                  A Vast Number of Cafés, Bars, and Restaurants
                </h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  Koh Phangan offers an impressive variety of dining and
                  nightlife experiences to suit every taste and mood. From
                  charming beachfront cafés serving fresh coffee and healthy
                  breakfasts, to vibrant bars with live music and sunset views,
                  the island is full of inviting spots to relax and socialize.
                  Visitors and residents alike enjoy an array of international
                  cuisines, local Thai delicacies, and fresh seafood, ensuring
                  there's always something new to discover. Whether you're
                  looking for a laid-back lunch by the sea, a romantic dinner,
                  or a lively evening out, Koh Phangan's diverse food and drink
                  scene delivers year-round appeal.
                </p>
              </div>
            </div>
          </div>

          {/* Endless Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <Badge className="mb-4 bg-accent-100 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
                  Wellness & Sports
                </Badge>
                <h3 className="font-display text-3xl font-bold mb-6 text-secondary-700">
                  Endless Activities for Every Lifestyle
                </h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  Koh Phangan is more than just beautiful beaches — it's a hub
                  for wellness, sports, and adventure. The island offers
                  world-class yoga studios, Muay Thai training camps, tennis
                  courts, fully equipped gyms, and rejuvenating spas with ice
                  baths for ultimate recovery. For those who love the ocean, a
                  wide range of water sports awaits, from snorkeling and diving
                  to paddleboarding and kayaking. Whether you seek active
                  living, relaxation, or a mix of both, Koh Phangan's diverse
                  activities ensure there's always something exciting to enjoy
                  all year round.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="/building-amenities-pool.png"
                  alt="Activities and wellness"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="/luxury-apartment-interior.png"
                  alt="Modern infrastructure"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-accent-100 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
                  Modern Living
                </Badge>
                <h3 className="font-display text-3xl font-bold mb-6 text-secondary-700">
                  Fully Developed Infrastructure
                </h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  Koh Phangan offers all the essentials for comfortable
                  year-round living. The island is home to modern hospitals and
                  private clinics providing quality medical care, international
                  and local schools for families, and a variety of supermarkets
                  and fresh markets for everyday shopping. Whether you're here
                  short-term or planning to settle down, the well-developed
                  infrastructure ensures convenience, safety, and a high
                  standard of living in a tropical paradise.
                </p>
              </div>
            </div>
          </div>

          {/* Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <Badge className="mb-4 bg-accent-100 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
                  Entertainment & Culture
                </Badge>
                <h3 className="font-display text-3xl font-bold mb-6 text-secondary-700">
                  Vibrant Year-Round Events
                </h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  Koh Phangan is alive with activities and entertainment
                  throughout the year. The island hosts a wide range of events,
                  from lively parties, concerts, and festivals to inspiring
                  business meetings, workshops, and networking gatherings.
                  Families can also enjoy a variety of children's activities and
                  community events, making the island a welcoming destination
                  for all ages. This dynamic mix of leisure, culture, and
                  professional opportunities ensures there's always something
                  exciting happening on Koh Phangan.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="/creative-classroom-learning.png"
                  alt="Events and entertainment"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Transport */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="/tropical-palm-resort.png"
                  alt="Transport infrastructure"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-accent-100 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
                  Connectivity
                </Badge>
                <h3 className="font-display text-3xl font-bold mb-6 text-secondary-700">
                  Convenient Transport Infrastructure
                </h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  Getting around Koh Phangan is simple and hassle-free thanks to
                  its well-established transport network. Taxis and local
                  transport services are readily available, while car and
                  motorbike rentals offer the freedom to explore at your own
                  pace. The island is also connected to the mainland and nearby
                  islands through regular ferry services, making travel to and
                  from Koh Samui, Koh Tao, and the Thai mainland easy and
                  convenient. Whether for daily commuting or island-hopping
                  adventures, Koh Phangan's transport options ensure smooth and
                  accessible travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Safe Experience */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-primary-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-accent-100 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
              Trust & Security
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-700">
              WE PROVIDE A <span className="text-accent-600">SAFE AND</span>
              <br />
              <span className="text-secondary-500">EFFORTLESS EXPERIENCE</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Your investment security is our top priority. We maintain the
              highest standards of legal compliance and professional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 shadow-luxury">
                1
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-secondary-700">
                Legal Excellence
              </h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                We maintain strict documentation standards and full compliance
                with Thai legislation, ensuring complete transparency through
                comprehensive contracts and supporting legal documents.
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 shadow-luxury">
                2
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-secondary-700">
                Project & Permitting Documentation
              </h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                We hold all required permits and approvals, fully compliant with
                the regulations and standards set by Thai authorities. This
                ensures the project is legally secure, transparent, and ready
                for smooth development without delays — giving investors
                complete confidence in their investment.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 shadow-luxury">
                3
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-secondary-700">
                Ownership Rights
              </h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                All our properties are sold with full freehold ownership,
                granting buyers complete and unconditional rights. This ensures
                long-term security, full control over the asset, and the freedom
                to manage, sell, or lease the property without restrictions.
              </p>
            </div>
          </div>

          {/* Second row of columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {/* Column 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 shadow-luxury">
                4
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-secondary-700">
                Impeccable Maintenance
              </h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                Our properties are kept in top condition through regular
                cleaning, routine technical inspections, and ongoing pool and
                garden care. Every detail is professionally maintained to ensure
                lasting quality, comfort, and appeal for both residents and
                guests.
              </p>
            </div>

            {/* Column 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 shadow-luxury">
                5
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-secondary-700">
                Financial Transparency
              </h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                We provide clear monthly reports and maintain open, convenient
                communication with property owners. This ensures you're always
                informed about your investment's performance and can make
                confident, data-backed decisions.
              </p>
            </div>

            {/* Column 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 shadow-luxury">
                6
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-secondary-700">
                End-to-End Rental Operations
              </h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                We take care of every aspect of rental operations, from handling
                tenant requests and coordinating with service providers to
                managing guest check-ins and check-outs and arranging cleaning
                services. Our team is always available, ensuring smooth
                communication and a seamless experience for both owners and
                guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-secondary-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="font-display font-bold text-2xl">
                  Paradise Estates
                </div>
              </div>
              <p className="text-primary-200 leading-relaxed mb-6 max-w-md">
                Your gateway to luxury tropical real estate investment.
                Experience the perfect blend of modern sophistication and
                natural beauty in Thailand's most exclusive locations.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary-300 text-primary-200 hover:bg-primary-100 hover:text-secondary-700"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary-300 text-primary-200 hover:bg-primary-100 hover:text-secondary-700"
                >
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6">
                Contact Info
              </h4>
              <div className="space-y-4 text-primary-200">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-400" />
                  <span>+66 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-400" />
                  <span>info@paradise-estates.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent-400 mt-1" />
                  <span>
                    123 Paradise Boulevard
                    <br />
                    Phuket, Thailand 83000
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6">
                Quick Links
              </h4>
              <div className="space-y-3 text-primary-200">
                <a
                  href="#gallery"
                  className="block hover:text-accent-300 transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#benefits"
                  className="block hover:text-accent-300 transition-colors"
                >
                  Benefits
                </a>
                <a
                  href="#properties"
                  className="block hover:text-accent-300 transition-colors"
                >
                  Properties
                </a>
                <a
                  href="#contact"
                  className="block hover:text-accent-300 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-600 mt-12 pt-8 text-center text-primary-300">
            <p>
              &copy; 2024 Paradise Estates. All rights reserved. | Privacy
              Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer> */}

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .gallery-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #d4c4b0 !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: all 0.2s ease !important;
        }

        .gallery-bullet-active {
          background: #d4b5a0 !important;
          transform: scale(1.25) !important;
        }

        .gallery-swiper .swiper-slide {
          height: auto !important;
        }

        .interior-swiper .swiper-slide {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
      `}</style>
    </div>
  );
}
