// ============================================================
//  SITE CONFIGURATION  –  edit this file to customise
// ============================================================

const CONFIG = {

  // ── Spreadsheet ──────────────────────────────────────────
  // Published-CSV URL for the Players sheet
  SHEET_CSV_URL:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjbEs3mSxa9Perd0YhV2yAmo6VBaFrgH6D5FJ20un6oeQxWRWchba1-LgZcY-J03y5e5S_WttjOwiQ/pub?output=csv",

  // ── Site branding ─────────────────────────────────────────
  SITE_NAME:    "PvP Tiers",
  SITE_TAGLINE: "The official Minecraft PvP tier list",
  FAVICON:      "icons/logo.png",   // optional – leave blank to skip

  // ── Game modes (must match sheet column keys exactly) ─────
  //    icon: path relative to index.html  (place PNGs in icons/)
  GAME_MODES: [
    { key: "Mace",              label: "Mace",              icon: "icons/mace.png"              },
    { key: "Sword",             label: "Sword",             icon: "icons/sword.png"             },
    { key: "Axe",               label: "Axe",               icon: "icons/axe.png"               },
    { key: "UHC",               label: "UHC",               icon: "icons/uhc.png"               },
    { key: "Pot",               label: "Pot",               icon: "icons/pot.png"               },
    { key: "NethPot",           label: "Neth Pot",          icon: "icons/nethpot.png"           },
    { key: "SMP",               label: "SMP",               icon: "icons/smp.png"               },
    { key: "Crystal",           label: "Crystal",           icon: "icons/crystal.png"           },
    { key: "Diamond Spear",     label: "Diamond Spear",     icon: "icons/diamondspear.png"      },
    { key: "Ultra Diamond SMP", label: "Ultra Diamond SMP", icon: "icons/ultradiamondSMP.png"   },
    { key: "Jumpfight",         label: "Jumpfight",         icon: "icons/jumpfight.png"         },
  ],

  // ── Tier display order & colours ─────────────────────────
  TIERS: [
    { name: "HT1",      color: "#FF4444", glow: "#FF444455" },
    { name: "T1",       color: "#FF7700", glow: "#FF770044" },
    { name: "T2",       color: "#FFD700", glow: "#FFD70033" },
    { name: "T3",       color: "#44CC44", glow: "#44CC4433" },
    { name: "T4",       color: "#4488FF", glow: "#4488FF33" },
    { name: "T5",       color: "#AA66FF", glow: "#AA66FF33" },
    { name: "Untested", color: "#666666", glow: "#66666622" },
  ],

  // ── Regions ───────────────────────────────────────────────
  REGIONS: ["All", "NA", "EU", "AS", "SA", "OC", "AF"],
};
