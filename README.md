# Ocebots Next Website (V2?)

## Depencies and running a dev server

- On first run, install next, if you don't already have it installed
```bash
npm install next 
```
- To run the dev server, run this command
```bash
npm run dev
```

## Routing Structure
- Couple more things to note, we still need to finish the pages, I've done the What is First page, but all the other robot stuff still needs to be done
```
app/
├── page.tsx                    # Home page (/)
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles
├── about/
│   └── page.tsx               # About page (/about)
├── donate/
│   └── page.tsx               # Donate page (/donate)
├── contact/
│   └── page.tsx               # Contact page (/contact)
├── first/
│   └── page.tsx               # What is FIRST? page (/first) ✅ COMPLETED
├── robots/
│   └── page.tsx               # Robots overview (/robots)
├── bbots2025/
│   └── page.tsx               # Bunnybots 2025 (/bbots2025)
├── frc2025/
│   └── page.tsx               # FRC 2025 - Reefscape (/frc2025)
├── frc2024/
│   └── page.tsx               # FRC 2024 - Crescendo (/frc2024)
├── frc2023/
│   └── page.tsx               # FRC 2023 - Charged Up (/frc2023)
└── outreach/
    └── page.tsx               # Outreach page (/outreach)
```