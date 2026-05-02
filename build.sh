mkdir -p app components lib
cp FishingHub.tsx components/FishingHub.tsx
cp data.ts lib/data.ts
cp globals.css app/globals.css
cp layout.tsx app/layout.tsx
printf 'import { LandingPage } from "@/components/FishingHub"; export default function Page(){ return <LandingPage />; }' > app/page.tsx
next build
