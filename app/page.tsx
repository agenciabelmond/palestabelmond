import { UrgencyBar } from "@/components/landing/urgency-bar"
import { Hero } from "@/components/landing/hero"
import { PainSection } from "@/components/landing/pain-section"
import { VideoSection } from "@/components/landing/video"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { AudienceSection } from "@/components/landing/audience-section"
import { FinalCta } from "@/components/landing/final-cta"
import { WhatsappFloat } from "@/components/landing/whatsapp-float"
import { SiteFooter } from "@/components/landing/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <UrgencyBar />
      <Hero />
      <VideoSection/>
      <PainSection />
      
      <BenefitsSection />
      <AudienceSection />
      <FinalCta />
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}
