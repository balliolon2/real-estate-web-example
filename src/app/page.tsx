"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Building2, Car, Dumbbell, MapPin, ShieldCheck, TreePine, Wifi, Globe } from "lucide-react";

// Translations Dictionary
const t = {
  en: {
    nav: {
      highlights: "Highlights",
      facilities: "Facilities",
      floorplans: "Floor Plans",
      register: "Register Now"
    },
    hero: {
      tagline: "The Pinnacle of Urban Living",
      title1: "Elevate Your",
      title2: "Lifestyle",
      desc: "Discover a new standard of luxury at Grand Avenue. Where architectural brilliance meets unparalleled comfort in the heart of the city.",
      btnExplore: "Explore Residences",
      btnGallery: "View Gallery"
    },
    highlights: {
      title1: "Project",
      title2: "Highlights",
      items: [
        { title: "100m to Metro", desc: "Direct connected station" },
        { title: "500+ Parking Slots", desc: "Automated parking system" },
        { title: "Freehold", desc: "Premium ownership" },
        { title: "AI Security", desc: "State-of-the-art systems" },
      ]
    },
    facilities: {
      tagline: "World-Class Amenities",
      title1: "Beyond",
      title2: "Expectations",
      desc: "Indulge in a curated collection of lifestyle amenities designed to elevate your everyday experience. From our sky lounge with panoramic city views to our state-of-the-art wellness center.",
      items: [
        "Oasis Garden & Running Track",
        "Panoramic Fitness Center",
        "Co-working Space & Library"
      ]
    },
    floorplans: {
      title1: "Floor",
      title2: "Plans",
      tabs: {
        bed1: "1 Bedroom",
        bed2: "2 Bedroom",
        penthouse: "Penthouse"
      },
      bed1: {
        title: "1 Bedroom Suite",
        size: "35.00 - 45.00 Sq.m.",
        desc: "Perfectly proportioned for modern urban living, featuring an open-plan layout, floor-to-ceiling windows, and a private balcony overlooking the city skyline.",
        btn: "Download Layout"
      },
      bed2: {
        title: "2 Bedroom Executive",
        size: "65.00 - 85.00 Sq.m.",
        desc: "Spacious corner units designed for families or professionals desiring extra space. Features a master suite with walk-in closet and a gourmet kitchen setup.",
        btn: "Download Layout"
      },
      penthouse: {
        title: "The Penthouse",
        size: "150.00 - 220.00 Sq.m.",
        desc: "The crown jewel of Grand Avenue. Unrivaled 360-degree views, private plunge pool, private elevator access, and the absolute pinnacle of material finishes.",
        btn: "Download Layout"
      }
    },
    form: {
      title1: "Register Your",
      title2: "Interest",
      desc: "Sign up today for exclusive pre-sale access and special privileges.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      unitType: "Interested Unit Type",
      unitSelect: "Select a unit type...",
      submit: "Submit Registration"
    },
    footer: {
      copyright: "© 2026 Grand Avenue Residences. All rights reserved.",
      disclaimer: "Images are for illustration purposes only and may differ from actual design."
    }
  },
  th: {
    nav: {
      highlights: "จุดเด่น",
      facilities: "สิ่งอำนวยความสะดวก",
      floorplans: "แบบห้อง",
      register: "ลงทะเบียน"
    },
    hero: {
      tagline: "ที่สุดแห่งการใช้ชีวิตใจกลางเมือง",
      title1: "ยกระดับ",
      title2: "ไลฟ์สไตล์ของคุณ",
      desc: "ค้นพบมาตรฐานใหม่แห่งความหรูหราที่ Grand Avenue ที่ซึ่งสถาปัตยกรรมอันชาญฉลาดผสมผสานกับความสะดวกสบายเหนือระดับใจกลางเมือง",
      btnExplore: "ชมโครงการ",
      btnGallery: "แกลเลอรี"
    },
    highlights: {
      title1: "จุดเด่น",
      title2: "โครงการ",
      items: [
        { title: "100 เมตร จากรถไฟฟ้า", desc: "ทางเชื่อมต่อสถานีโดยตรง" },
        { title: "ที่จอดรถรองรับมากกว่า 500 คัน", desc: "ระบบจอดรถอัตโนมัติ" },
        { title: "Freehold", desc: "กรรมสิทธิ์สมบูรณ์" },
        { title: "มีระบบ AI คอยช่วยดูแลความปลอดภัย", desc: "เทคโนโลยีล้ำสมัย" },
      ]
    },
    facilities: {
      tagline: "สิ่งอำนวยความสะดวกระดับโลก",
      title1: "เหนือกว่า",
      title2: "ทุกความคาดหมาย",
      desc: "ดื่มด่ำกับสิ่งอำนวยความสะดวกที่คัดสรรมาเพื่อยกระดับประสบการณ์ในทุกวันของคุณ ตั้งแต่ Sky Lounge พร้อมวิวเมืองแบบพาโนรามา ไปจนถึงศูนย์สุขภาพที่ทันสมัย",
      items: [
        "สวนโอเอซิสและลู่วิ่ง",
        "ฟิตเนสวิวพาโนรามา",
        "โคเวิร์กกิ้งสเปซและห้องสมุด"
      ]
    },
    floorplans: {
      title1: "แปลน",
      title2: "ห้อง",
      tabs: {
        bed1: "1 ห้องนอน",
        bed2: "2 ห้องนอน",
        penthouse: "เพนต์เฮาส์"
      },
      bed1: {
        title: "1 Bedroom Suite",
        size: "35.00 - 45.00 ตร.ม.",
        desc: "ออกแบบมาอย่างลงตัวสำหรับการใช้ชีวิตคนเมืองสมัยใหม่ โดดเด่นด้วยเลย์เอาต์แบบเปิดโล่ง หน้าต่างสูงจากพื้นจรดเพดาน และระเบียงส่วนตัวที่มองเห็นเส้นขอบฟ้าของเมือง",
        btn: "ดาวน์โหลดแปลน"
      },
      bed2: {
        title: "2 Bedroom Executive",
        size: "65.00 - 85.00 ตร.ม.",
        desc: "ห้องหัวมุมที่กว้างขวาง ออกแบบมาสำหรับครอบครัวหรือผู้ที่ต้องการพื้นที่กว้างขวางเป็นพิเศษ มาพร้อมห้องมาสเตอร์สวีท ตู้เสื้อผ้าแบบวอล์กอิน และชุดครัวสไตล์กูร์เมต์",
        btn: "ดาวน์โหลดแปลน"
      },
      penthouse: {
        title: "The Penthouse",
        size: "150.00 - 220.00 ตร.ม.",
        desc: "อัญมณีล้ำค่าแห่ง Grand Avenue วิว 360 องศาที่ไม่มีใครเทียบได้ สระน้ำส่วนตัว ลิฟต์ส่วนตัว และที่สุดแห่งการตกแต่งด้วยวัสดุระดับพรีเมียม",
        btn: "ดาวน์โหลดแปลน"
      }
    },
    form: {
      title1: "ลงทะเบียน",
      title2: "รับสิทธิพิเศษ",
      desc: "ลงทะเบียนวันนี้เพื่อรับสิทธิ์เข้าจองก่อนใครและสิทธิพิเศษอื่นๆ",
      firstName: "ชื่อ",
      lastName: "นามสกุล",
      email: "อีเมล",
      phone: "เบอร์โทรศัพท์",
      unitType: "รูปแบบห้องที่สนใจ",
      unitSelect: "เลือกรูปแบบห้อง...",
      submit: "ส่งข้อมูลลงทะเบียน"
    },
    footer: {
      copyright: "© 2026 Grand Avenue Residences สงวนลิขสิทธิ์",
      disclaimer: "รูปภาพใช้เพื่อการโฆษณาเท่านั้น และอาจแตกต่างจากแบบจริง"
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "th">("th");
  const d = t[lang];
  const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const highlightIcons = [MapPin, Car, Building2, ShieldCheck];
  const facilityIcons = [TreePine, Dumbbell, Wifi];

  const facilityImages = [
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-light tracking-widest text-amber-500">
            GRAND <span className="font-bold text-white">AVENUE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-slate-300">
            <a href="#highlights" className="hover:text-amber-500 transition-colors">{d.nav.highlights}</a>
            <a href="#facilities" className="hover:text-amber-500 transition-colors">{d.nav.facilities}</a>
            <a href="#floorplans" className="hover:text-amber-500 transition-colors">{d.nav.floorplans}</a>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-slate-300 hover:text-amber-500 hover:bg-transparent tracking-widest h-8 px-3 rounded-md">
                <Globe className="w-4 h-4 mr-2" />
                {lang === "en" ? "EN" : "TH"}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-slate-900 border-white/10 text-slate-300">
                <DropdownMenuItem onClick={() => setLang("en")} className="focus:bg-slate-800 focus:text-amber-500 cursor-pointer">
                  English (EN)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("th")} className="focus:bg-slate-800 focus:text-amber-500 cursor-pointer">
                  ภาษาไทย (TH)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button render={<a href="#register" />} nativeButton={false} className="hidden md:flex bg-amber-500 text-slate-950 hover:bg-amber-400 rounded-full px-8 uppercase tracking-widest text-xs">
              {d.nav.register}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2850&q=80"
            alt="Luxury Condo Exterior"
            fill
            className="object-cover opacity-40 scale-105 animate-out zoom-in duration-[20s]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <AnimatedSection animation="fade-in" delay={200}>
            <span className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">{d.hero.tagline}</span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              {d.hero.title1} <br />
              <span className="font-serif italic font-medium text-amber-500">{d.hero.title2}</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl text-slate-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              {d.hero.desc}
            </p>
          </AnimatedSection>
          <AnimatedSection animation="zoom-in" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button render={<a href="#floorplans" />} nativeButton={false} className="bg-amber-500 text-slate-950 hover:bg-amber-400 h-14 px-10 text-sm uppercase tracking-widest rounded-full">
                {d.hero.btnExplore}
              </Button>
              <Button render={<a href="#facilities" />} nativeButton={false} variant="outline" className="h-14 px-10 text-sm uppercase tracking-widest rounded-full border-white/20 hover:bg-white/5 hover:text-white bg-transparent">
                {d.hero.btnGallery}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Highlights */}
      <section id="highlights" className="py-24 bg-slate-950 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">{d.highlights.title1} <span className="font-serif italic text-amber-500">{d.highlights.title2}</span></h2>
              <div className="w-12 h-0.5 bg-amber-500 mx-auto" />
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {d.highlights.items.map((item, i) => {
              const Icon = highlightIcons[i];
              return (
                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                  <div className="text-center p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-colors group h-full">
                    <Icon className="w-8 h-8 mx-auto mb-4 text-amber-500 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div>
                <span className="text-amber-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">{d.facilities.tagline}</span>
                <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">{d.facilities.title1} <br /><span className="font-serif italic text-amber-500">{d.facilities.title2}</span></h2>
                <p className="text-slate-300 mb-8 leading-relaxed font-light">
                  {d.facilities.desc}
                </p>
                
                <ul className="space-y-4">
                  {d.facilities.items.map((text, i) => {
                    const Icon = facilityIcons[i];
                    return (
                      <AnimatedSection key={i} animation="fade-up" delay={i * 200}>
                        <li className="flex items-center gap-4 text-slate-200 border-b border-white/5 pb-4">
                          <Icon className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
                          <span>{text}</span>
                        </li>
                      </AnimatedSection>
                    );
                  })}
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left" delay={300}>
              <Carousel 
                plugins={[autoplayPlugin.current]}
                opts={{ loop: true }}
                className="w-full relative aspect-[4/5]"
              >
                <CarouselContent className="h-full -ml-0">
                  {facilityImages.map((src, index) => (
                    <CarouselItem key={index} className="pl-0 h-full">
                      <div className="relative h-full w-full group overflow-hidden rounded-2xl">
                        <Image 
                          src={src}
                          alt={`Facility ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none rounded-xl" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Floor Plans (Tabs) */}
      <section id="floorplans" className="py-24 bg-slate-950 relative">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">{d.floorplans.title1} <span className="font-serif italic text-amber-500">{d.floorplans.title2}</span></h2>
              <div className="w-12 h-0.5 bg-amber-500 mx-auto" />
            </div>
          </AnimatedSection>

          <Tabs defaultValue="1bed" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-slate-900 border border-white/10 p-1 mb-12 rounded-xl">
              <TabsTrigger value="1bed" className="uppercase tracking-wider text-sm rounded-lg py-3 text-slate-300 hover:text-amber-500 data-active:bg-amber-500 data-active:text-slate-950 data-active:shadow-none">{d.floorplans.tabs.bed1}</TabsTrigger>
              <TabsTrigger value="2bed" className="uppercase tracking-wider text-sm rounded-lg py-3 text-slate-300 hover:text-amber-500 data-active:bg-amber-500 data-active:text-slate-950 data-active:shadow-none">{d.floorplans.tabs.bed2}</TabsTrigger>
              <TabsTrigger value="penthouse" className="uppercase tracking-wider text-sm rounded-lg py-3 text-slate-300 hover:text-amber-500 data-active:bg-amber-500 data-active:text-slate-950 data-active:shadow-none">{d.floorplans.tabs.penthouse}</TabsTrigger>
            </TabsList>
            
            {/* 1 Bedroom */}
            <TabsContent value="1bed" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-900/50 p-8 rounded-2xl border border-white/5">
                <div className="relative aspect-square bg-slate-900 flex items-center justify-center p-8 rounded-xl overflow-hidden border border-white/5">
                  <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" alt="1 Bed Plan" fill className="object-cover opacity-80" />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">{d.floorplans.bed1.title}</h3>
                  <p className="text-amber-500 text-lg mb-6">{d.floorplans.bed1.size}</p>
                  <p className="text-slate-400 font-light mb-8 leading-relaxed">
                    {d.floorplans.bed1.desc}
                  </p>
                  <Button className="bg-white text-slate-950 hover:bg-slate-200 rounded-lg px-8 uppercase tracking-widest text-xs">
                    {d.floorplans.bed1.btn}
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* 2 Bedroom */}
            <TabsContent value="2bed" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-900/50 p-8 rounded-2xl border border-white/5">
                <div className="relative aspect-square bg-slate-900 flex items-center justify-center p-8 rounded-xl overflow-hidden border border-white/5">
                  <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="2 Bed Plan" fill className="object-cover opacity-80" />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">{d.floorplans.bed2.title}</h3>
                  <p className="text-amber-500 text-lg mb-6">{d.floorplans.bed2.size}</p>
                  <p className="text-slate-400 font-light mb-8 leading-relaxed">
                    {d.floorplans.bed2.desc}
                  </p>
                  <Button className="bg-white text-slate-950 hover:bg-slate-200 rounded-lg px-8 uppercase tracking-widest text-xs">
                    {d.floorplans.bed2.btn}
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Penthouse */}
            <TabsContent value="penthouse" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-900/50 p-8 rounded-2xl border border-white/5">
                <div className="relative aspect-square bg-slate-900 flex items-center justify-center p-8 rounded-xl overflow-hidden border border-white/5">
                  <Image src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" alt="Penthouse Plan" fill className="object-cover opacity-80" />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">{d.floorplans.penthouse.title}</h3>
                  <p className="text-amber-500 text-lg mb-6">{d.floorplans.penthouse.size}</p>
                  <p className="text-slate-400 font-light mb-8 leading-relaxed">
                    {d.floorplans.penthouse.desc}
                  </p>
                  <Button className="bg-white text-slate-950 hover:bg-slate-200 rounded-lg px-8 uppercase tracking-widest text-xs">
                    {d.floorplans.penthouse.btn}
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="register" className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <AnimatedSection animation="zoom-in">
            <div className="bg-slate-950 border border-white/10 p-10 md:p-14 shadow-2xl rounded-2xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-light mb-4">{d.form.title1} <span className="font-serif italic text-amber-500">{d.form.title2}</span></h2>
                <p className="text-slate-400 font-light text-sm">{d.form.desc}</p>
              </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="8e6d2fc0-30d1-4d90-b7e1-ecc05075c934" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-xs uppercase tracking-widest text-slate-400">{d.form.firstName}</Label>
                  <Input id="firstName" name="first_name" required className="bg-slate-900 border-white/10 rounded-none h-12 focus-visible:ring-amber-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-xs uppercase tracking-widest text-slate-400">{d.form.lastName}</Label>
                  <Input id="lastName" name="last_name" required className="bg-slate-900 border-white/10 rounded-none h-12 focus-visible:ring-amber-500" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest text-slate-400">{d.form.email}</Label>
                  <Input id="email" name="email" type="email" required className="bg-slate-900 border-white/10 rounded-none h-12 focus-visible:ring-amber-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-slate-400">{d.form.phone}</Label>
                  <Input id="phone" name="phone" type="tel" required className="bg-slate-900 border-white/10 rounded-none h-12 focus-visible:ring-amber-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="unitType" className="text-xs uppercase tracking-widest text-slate-400">{d.form.unitType}</Label>
                <select id="unitType" name="unit_type" className="w-full bg-slate-900 border border-white/10 rounded-none h-12 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-300">
                  <option value="">{d.form.unitSelect}</option>
                  <option value="1 Bedroom">1 Bedroom Suite</option>
                  <option value="2 Bedroom">2 Bedroom Executive</option>
                  <option value="Penthouse">The Penthouse</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-amber-500 text-slate-950 hover:bg-amber-400 h-14 uppercase tracking-widest text-sm rounded-lg mt-8">
                {d.form.submit}
              </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-white/5 text-center px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-2xl font-light tracking-widest text-amber-500 mb-6">
            GRAND <span className="font-bold text-white">AVENUE</span>
          </div>
          <p className="text-slate-500 text-sm font-light mb-2">{d.footer.copyright}</p>
          <p className="text-slate-600 text-xs font-light">{d.footer.disclaimer}</p>
        </AnimatedSection>
      </footer>
    </div>
  );
}
