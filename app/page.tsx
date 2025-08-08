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
      src: "/images/examples/specialized-sustainability-analyzer-original.png",
      alt: "Luxury beachfront villa",
      title: "Beachfront Villa",
    },
    {
      src: "/luxury-apartment-interior.png",
      alt: "Premium interior design",
      title: "Premium Interiors",
    },
    {
      src: "/building-amenities-pool.png",
      alt: "Resort-style amenities",
      title: "Resort Amenities",
    },
    {
      src: "/tropical-palm-resort.png",
      alt: "Tropical paradise living",
      title: "Paradise Living",
    },
    {
      src: "/creative-classroom-learning.png",
      alt: "Modern lifestyle spaces",
      title: "Modern Spaces",
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
            backgroundImage: `url('/tropical-palm-resort.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="animate-fade-in">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-12 leading-tight tracking-tight">
                LUXURY TROPICAL
                <br />
                <span className="text-accent-300">PARADISE</span>
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

      {/* Section 2 - Image Gallery Carousel */}
      <section
        id="gallery"
        className="py-24 bg-gradient-to-b from-primary-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent-100 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
              Premium Collection
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-700">
              Our Exclusive Gallery
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto leading-relaxed">
              Explore our stunning collection of luxury tropical properties,
              each designed to offer the perfect blend of modern sophistication
              and natural beauty
            </p>
          </div>

          <div className="relative mb-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
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
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
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

          {/* Custom Pagination */}
          <div className="gallery-pagination flex items-center justify-center space-x-3 mb-8"></div>
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
              Premium Benefits
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experience unparalleled luxury and investment security with our
              comprehensive benefit package
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-10 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-secondary-700">
                Outstanding Service Quality
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Experience exceptional service quality that exceeds expectations
                with our dedicated team of professionals and comprehensive
                support throughout your investment journey.
              </p>
            </Card>

            <Card className="text-center p-10 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-secondary-700">
                Full Investment Protection
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Your investment is fully protected with comprehensive insurance
                coverage, legal guarantees, and our proven track record of
                delivering exceptional returns.
              </p>
            </Card>

            <Card className="text-center p-10 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-secondary-700">
                Luxury Lifestyle Program
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Immerse yourself in the ultimate tropical lifestyle with our
                exclusive amenities, wellness programs, and concierge services
                designed for discerning residents.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4 - Mixed Content */}
      <section id="properties" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Property Specifications */}
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
              <Button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-4 rounded-lg shadow-luxury hover:shadow-luxury-hover transition-all duration-300">
                View Detailed Floor Plans
              </Button>
            </div>

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
                        <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                          {image.title}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Custom Navigation Buttons */}
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

              {/* Thumbnail Navigation */}
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

          {/* Lifestyle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-12 rounded-2xl">
              <Badge className="mb-6 bg-accent-100 text-accent-700 border-accent-200 px-4 py-2 text-sm font-medium">
                Luxury Lifestyle
              </Badge>
              <h3 className="font-display text-3xl font-bold mb-6 text-secondary-700">
                Tropical Paradise Living
              </h3>
              <p className="text-secondary-600 mb-8 leading-relaxed text-lg">
                Experience the ultimate in tropical luxury living with our
                thoughtfully designed spaces that seamlessly blend indoor and
                outdoor living, creating your perfect sanctuary in paradise.
              </p>
              <Button className="bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-4 rounded-lg shadow-luxury hover:shadow-luxury-hover transition-all duration-300">
                Discover More
              </Button>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="/creative-classroom-learning.png"
                  alt="Luxury tropical lifestyle"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
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
                Investment Security
              </h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                With four active development projects and partnerships with
                experienced investors, we provide robust financial backing and
                proven expertise in luxury tropical real estate.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 shadow-luxury">
                3
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-secondary-700">
                Complete Documentation
              </h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                All necessary permits and documentation are secured in full
                compliance with Thai regulatory standards, ensuring seamless
                ownership transfer and legal protection.
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
