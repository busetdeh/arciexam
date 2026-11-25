import { PortalFeatures } from "@/components/portal/PortalFeatures";
import { PortalFooter } from "@/components/portal/PortalFooter";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { PortalHero } from "@/components/portal/PortalHero";
import { PortalRoleShowcase } from "@/components/portal/PortalRoleShowcase";
import { PortalSecurityAndPricing } from "@/components/portal/PortalSecurityAndPricing";

export default function PortalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <PortalHeader />
      <main className="flex-1">
        <PortalHero />
        <PortalFeatures />
        <PortalRoleShowcase />
        <PortalSecurityAndPricing />
      </main>
      <PortalFooter />
    </div>
  );
}
