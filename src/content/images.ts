// Image slots. src is a public URL; "" means the slot is empty.
export type ImageSlot = { src: string; alt: string; label: string };

const img = (file: string) => "/images/" + encodeURIComponent(file).replace(/%2F/g, "/");

export const images = {
  logo: {
    src: img("ET-LOGO-1__logo.webp"),
    alt: "Explicit Land & Tree Service logo with a tree and an orange skid steer",
    label: "Explicit Land & Tree Service logo (red and orange, for light backgrounds)",
  },
  logo_light: {
    src: img("Logo-pdf__logo-light.webp"),
    alt: "Explicit Land & Tree Service logo",
    label: "Explicit Land & Tree Service logo, white version for the dark header and footer",
  },
  hero: {
    src: img("IMG_4086__hero.webp"),
    alt: "Red spider lift raising a worker in its bucket into the trees beside a house",
    label: "crew at work with a lift beside a home",
  },
  hero_mobile: {
    src: img("IMG_4086__hero-mobile.webp"),
    alt: "Red spider lift raising a worker in its bucket into the trees beside a house",
    label: "the same hero scene, cropped tall for phones",
  },
  owner: {
    src: img("sadf-copy__owner.webp"),
    alt: "Tyler Wilkie in a safety helmet and company T-shirt",
    label: "Tyler Wilkie, owner",
  },
  family: { src: "", alt: "", label: "the Explicit crew" },
  signature: {
    src: img("89__signature.webp"),
    alt: "Work trucks, dump trailer, tracked loader and excavator parked on a lawn by the woods",
    label: "our equipment fleet",
  },
  about_work: {
    src: img("43__about-work.webp"),
    alt: "Two crew members in helmets cutting a large downed tree trunk into sections",
    label: "crew cutting downed trees",
  },
  service_1: {
    src: img("IMG_4126__service-1.webp"),
    alt: "Crew member in a helmet and ear protection cutting a notch into a large tree with a chainsaw",
    label: "tree removal",
  },
  service_2: {
    src: img("55__service-2.webp"),
    alt: "Tracked loader on freshly cleared ground behind a house",
    label: "land and lot clearing",
  },
  service_3: {
    src: img("49__service-3.webp"),
    alt: "Uprooted pine tree fallen against a brick house and fence",
    label: "storm damage, tree down on a property",
  },
  service_4: {
    src: img("106__service-4.webp"),
    alt: "Tracked loader with a forestry mulching head clearing undergrowth between pines",
    label: "forestry mulching",
  },
  gallery_1: { src: img("IMG_4207__gallery-1.webp"), alt: "Crane boom reaching over a house toward the trees", label: "crane-assisted removal" },
  gallery_2: { src: img("53__gallery-2.webp"), alt: "Climber high on a tree trunk as a cut section falls", label: "climbing removal" },
  gallery_3: { src: img("42__gallery-3.webp"), alt: "Worker in a lift bucket next to a dead tree", label: "lift-assisted removal" },
  gallery_4: {
    src: img("IMG_7196__gallery-4.webp"),
    alt: "Excavator and crane hook at a brick house at night, lit by work lights",
    label: "storm cleanup at night",
  },
  gallery_5: { src: img("41__gallery-5.webp"), alt: "Tracked loader with a grapple carrying logs on a driveway", label: "log removal" },
  gallery_6: {
    src: img("113__gallery-6.webp"),
    alt: "Crew member in a helmet cutting a large tree trunk with a chainsaw",
    label: "tree felling",
  },
  badge_1: { src: "", alt: "", label: "(unused)" },
  badge_2: { src: "", alt: "", label: "(unused)" },
  badge_3: { src: "", alt: "", label: "(unused)" },
} satisfies Record<string, ImageSlot>;

export type SlotKey = keyof typeof images;

export function hasImage(slot: SlotKey): boolean {
  return !!images[slot].src;
}
