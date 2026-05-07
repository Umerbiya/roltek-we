import { TeamHero } from "@/components/team/TeamHero";
import { ExpertiseBanner } from "@/components/team/ExpertiseBanner";
import { LeadershipProfiles } from "@/components/team/LeadershipProfiles";
import { TeamCTA } from "@/components/team/TeamCTA";

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <ExpertiseBanner />
      <LeadershipProfiles />
      <TeamCTA />
    </>
  );
}

