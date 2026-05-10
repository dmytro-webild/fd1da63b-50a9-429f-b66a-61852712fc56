"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "How it works",          id: "#about"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Extension",          id: "#extension"},
        {
          name: "Pricing",          id: "#pricing"},
      ]}
      brandName="JobScraper.ai"
      button={{
        text: "Start free",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="JobScraper.ai"
      description="Your AI Career OS. Upload your resume once. Our AI finds matching jobs, tailors every application, and auto-applies — while you focus on interviews."
      buttons={[
        {
          text: "Start free",          href: "#contact"},
        {
          text: "Watch demo",          href: "#about"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/a-clean-modern-professional-dashboard-ui-1778414411675-222d7d70.jpg"
      imageAlt="JobScraper AI Dashboard"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="From resume to offer in three steps"
      description="Set up once. JobScraper.ai handles discovery, tailoring, applying and tracking — automatically. Upload your resume, let the AI find and tailor the perfect roles, then sit back while we auto-apply."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/a-high-quality-3d-render-of-a-resume-bei-1778414420545-eee900ef.png"
      imageAlt="Resume analysis process"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Resume Intelligence",          tags: [
            "AI",            "ATS-Safe"],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/a-sleek-chrome-extension-ui-overlaying-a-1778414428656-94cd5b46.png"},
        {
          id: "f2",          title: "Smart Job Matching",          tags: [
            "Filtered",            "Ranked"],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/a-sleek-chrome-extension-ui-overlaying-a-1778414482298-37e74c86.png"},
        {
          id: "f3",          title: "Human-Like AutoPilot",          tags: [
            "Automated",            "Verified"],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/a-sleek-chrome-extension-ui-overlaying-a-1778414490679-28a9a3bc.png"},
      ]}
      title="Everything you need to land the offer"
      description="Nine systems working in unison so you can apply to 100–300 quality jobs a week."
    />
  </div>

  <div id="extension" data-section="extension">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "LinkedIn",        "Indeed",        "Workday",        "Greenhouse",        "Lever",        "ZipRecruiter",        "Glassdoor"]}
      title="Works wherever you apply"
      description="Install our Chrome extension to get live match scores, autofill, and AI-tailored applications across LinkedIn, Workday, Lever, Greenhouse, and more."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "free",          badge: "Free",          price: "$0/mo",          subtitle: "For exploring the magic",          features: [
            "10 applications/month",            "Resume analysis",            "ATS scoring"],
          buttons: [
            {
              text: "Start free",              href: "#contact"},
          ],
        },
        {
          id: "pro",          badge: "Pro",          price: "$19/mo",          subtitle: "For active hunters",          features: [
            "AI resume tailoring",            "Unlimited tracking",            "Cover letter generator"],
          buttons: [
            {
              text: "Go Pro",              href: "#contact"},
          ],
        },
        {
          id: "autopilot",          badge: "Most Popular",          price: "$49/mo",          subtitle: "Hands-off hiring",          features: [
            "Full AI auto-apply",            "Smart matching engine",            "Safe Apply Mode"],
          buttons: [
            {
              text: "Activate AutoPilot",              href: "#contact"},
          ],
        },
      ]}
      title="Pick your hiring speed"
      description="Cancel anytime. Money-back if you don't get an interview in 30 days."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Maya Chen",          handle: "@mayachen",          testimonial: "I landed 4 interviews in my first week. The tailored resumes felt like I'd written them.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/professional-headshot-of-a-female-softwa-1778414439343-0280d611.png"},
        {
          id: "2",          name: "David Okafor",          handle: "@davidokafor",          testimonial: "AutoPilot ran in the background while I focused on interview prep. The ATS score gave me confidence.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/professional-headshot-of-a-male-product--1778414448485-ac6c38f0.png"},
        {
          id: "3",          name: "Sarah Jenkins",          handle: "@sarahj",          testimonial: "The easiest way to apply for jobs. It saved me hours of soul-crushing form filling.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/professional-headshot-of-a-female-market-1778414456586-68b97a1b.png"},
        {
          id: "4",          name: "Tom Baker",          handle: "@tombaker",          testimonial: "Finally, a tool that actually understands my career goals and matches them to real roles.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/professional-headshot-of-a-male-software-1778414465878-98676a1a.png"},
        {
          id: "5",          name: "Elena Rodriguez",          handle: "@elena_rod",          testimonial: "The match score is incredibly accurate. It stopped me from applying to fake roles.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CTp9HlzPTLvEO9qiPPl1ht7pQh/professional-headshot-of-a-female-projec-1778414473767-bb78f800.png"},
      ]}
      showRating={true}
      title="Real offers. Real results."
      description="Join 80,000+ job seekers who let JobScraper.ai do the heavy lifting."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "How does AutoPilot work?",          content: "Our AI uses vision-based detection to fill out job applications exactly as a human would, ensuring accuracy and safety."},
        {
          id: "faq2",          title: "Is it ATS-safe?",          content: "Yes. Every application is optimized for ATS readability and tailored to specific job descriptions."},
        {
          id: "faq3",          title: "Can I cancel anytime?",          content: "Absolutely. You can cancel your subscription at any time directly from your dashboard."},
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      text="Stop applying. Start interviewing. Let JobScraper.ai do the heavy lifting."
      buttons={[
        {
          text: "Start free - No card needed",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Product",          items: [
            {
              label: "Features",              href: "#features"},
            {
              label: "Pricing",              href: "#pricing"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2026 JobScraper.ai"
      bottomRightText="Apply smarter. Get hired faster."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}