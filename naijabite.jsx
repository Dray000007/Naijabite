import { useState, useEffect, useRef } from "react";

// ─── HERO SLIDES ─────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1763048443535-1243379234e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFtYWxhfGVufDB8fDB8fHww",
    title: "Taste of Home,",
    highlight: "Delivered.",
    sub: "Authentic Nigerian & African food — straight to your UK doorstep.",
    cta: "Shop Now",
    ctaPage: "shop",
  },
  {
    img: "https://images.unsplash.com/photo-1567360425618-1594206637d2?w=1600&q=80",
    title: "Fresh Egusi,",
    highlight: "Real Flavour.",
    sub: "Premium African ingredients sourced and verified for quality.",
    cta: "Browse Ingredients",
    ctaPage: "shop",
  },
  {
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=1600&q=80",
    title: "Find African Stores",
    highlight: "Near You.",
    sub: "Use our smart map to locate the nearest African market in your city.",
    cta: "Find Stores",
    ctaPage: "stores",
  },
  {
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80",
    title: "Party Jollof.",
    highlight: "Every Time.",
    sub: "From garri to suya spice — everything you need is one click away.",
    cta: "Order Now",
    ctaPage: "shop",
  },
];

// ─── PRODUCTS WITH IMAGES ─────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1, name: "Semovita (2kg)", price: 6.99, category: "grains",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    badge: "Bestseller", description: "Premium semolina flour for swallow dishes", origin: "Nigeria", rating: 4.8, reviews: 234,
  },
  {
    id: 2, name: "Eba / Garri (1kg)", price: 3.49, category: "grains",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80",
    badge: null, description: "Coarse cassava flour, white or yellow", origin: "Nigeria", rating: 4.7, reviews: 189,
  },
  {
    id: 3, name: "Egusi (Melon Seeds) 500g", price: 7.99, category: "spices",
    img: "https://images.unsplash.com/photo-1567360425618-1594206637d2?w=400&q=80",
    badge: "Hot", description: "Ground melon seeds — essential for soup", origin: "Nigeria", rating: 4.9, reviews: 312,
  },
  {
    id: 4, name: "Uziza Leaves (Dried)", price: 4.49, category: "vegetables",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    badge: null, description: "Aromatic leaves for pepper soup", origin: "Nigeria", rating: 4.6, reviews: 98,
  },
  {
    id: 5, name: "Stockfish (Eja Osan)", price: 12.99, category: "proteins",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
    badge: "Popular", description: "Dried and fermented Norwegian cod", origin: "Norway/Nigeria", rating: 4.8, reviews: 176,
  },
  {
    id: 6, name: "Crayfish (Ground) 200g", price: 5.49, category: "spices",
    img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",
    badge: null, description: "Finely ground dried crayfish", origin: "Nigeria", rating: 4.7, reviews: 201,
  },
  {
    id: 7, name: "Palm Oil (1 Litre)", price: 8.99, category: "sauces",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
    badge: "Organic", description: "Pure unrefined red palm oil", origin: "Ghana", rating: 4.9, reviews: 287,
  },
  {
    id: 8, name: "Ogbono (Wild Mango Seeds)", price: 9.49, category: "spices",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
    badge: null, description: "Soup thickener with rich earthy taste", origin: "Nigeria", rating: 4.8, reviews: 143,
  },
  {
    id: 9, name: "Chin Chin (500g)", price: 4.99, category: "snacks",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
    badge: "Snack", description: "Crispy fried Nigerian pastry snack", origin: "Nigeria", rating: 4.6, reviews: 267,
  },
  {
    id: 10, name: "Nigerian Jollof Rice Mix", price: 3.99, category: "grains",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80",
    badge: "New", description: "Authentic party jollof seasoning mix", origin: "Nigeria", rating: 4.7, reviews: 88,
  },
  {
    id: 11, name: "Suya Spice (Yaji) 100g", price: 3.49, category: "spices",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
    badge: null, description: "Classic suya/kebab spice blend", origin: "Nigeria", rating: 4.9, reviews: 321,
  },
  {
    id: 12, name: "Malt Drink (Malta Guinness)", price: 1.99, category: "snacks",
    img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&q=80",
    badge: null, description: "Rich non-alcoholic malt beverage", origin: "Nigeria", rating: 4.5, reviews: 156,
  },
  {
    id: 13, name: "Ofe Akwu (Banga Soup) Mix", price: 5.99, category: "sauces",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80",
    badge: "New", description: "Palm nut soup base — ready to cook", origin: "Nigeria", rating: 4.8, reviews: 112,
  },
  {
    id: 14, name: "Smoked Catfish (Whole)", price: 11.49, category: "proteins",
    img: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&q=80",
    badge: null, description: "Smoky, flavourful dried catfish", origin: "Nigeria", rating: 4.7, reviews: 134,
  },
  {
    id: 15, name: "Puff Puff Mix 500g", price: 3.29, category: "snacks",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
    badge: "Popular", description: "Quick-mix dough for fried puff puff", origin: "Nigeria", rating: 4.6, reviews: 209,
  },
  {
    id: 16, name: "Iru (Locust Beans) 100g", price: 4.29, category: "spices",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
    badge: null, description: "Fermented locust beans for soups", origin: "Nigeria", rating: 4.5, reviews: 167,
  },
];

const CATEGORIES = [
  { id: "all", label: "All", emoji: "🌍" },
  { id: "grains", label: "Grains & Flour", emoji: "🌾" },
  { id: "spices", label: "Spices & Seasonings", emoji: "🌶️" },
  { id: "proteins", label: "Proteins", emoji: "🥩" },
  { id: "vegetables", label: "Vegetables", emoji: "🥬" },
  { id: "snacks", label: "Snacks & Drinks", emoji: "🍪" },
  { id: "sauces", label: "Sauces & Pastes", emoji: "🫙" },
];

const NEARBY_STORES = [
  { id: 1, name: "Naija Market Peckham", address: "72 Rye Lane, Peckham, London SE15", distance: "0.4 mi", open: true, rating: 4.6 },
  { id: 2, name: "African Food Hub Brixton", address: "15 Atlantic Road, Brixton, London SW9", distance: "1.2 mi", open: true, rating: 4.8 },
  { id: 3, name: "West African Spices & More", address: "33 Coldharbour Lane, London SE5", distance: "1.8 mi", open: false, rating: 4.4 },
  { id: 4, name: "Eko Food Store", address: "118 Lewisham High Street, London SE13", distance: "3.1 mi", open: true, rating: 4.7 },
];

const TESTIMONIALS = [
  { name: "Adaeze O.", city: "Manchester", text: "Finally found proper egusi and stockfish without travelling hours! NaijaBite is a lifesaver.", avatar: "AO" },
  { name: "Seun B.", city: "London", text: "The store locator is amazing. Found an African market 5 mins from my flat I never knew existed!", avatar: "SB" },
  { name: "Chioma K.", city: "Birmingham", text: "Quality is authentic — tastes exactly like home. My kids love the chin chin.", avatar: "CK" },
];

const badgeColor = (b) => ({ Bestseller: "#1e7e34", Hot: "#e05c1a", Popular: "#1a6e8a", New: "#b8930a", Organic: "#2d7a3a", Snack: "#7a3a8a" }[b] || "#1e7e34");

// ─── ICON ─────────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 20 }) => {
  const icons = {
    cart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
    search: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    mapPin: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    star: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    plus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    minus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    trash: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>,
    x: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    menu: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    chevronLeft: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>,
    chevronRight: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>,
    truck: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    globe: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    locate: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>,
  };
  return icons[name] || null;
};

// ─── HERO SLIDESHOW ───────────────────────────────────────────────────────────
function HeroSlideshow({ onNav }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(((idx % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
      setFading(false);
    }, 450);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % HERO_SLIDES.length);
        setFading(false);
      }, 450);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <div style={{ position: "relative", height: "clamp(500px, 72vh, 780px)", overflow: "hidden" }}>
      {/* Slide images — all stacked, transition with opacity */}
      {HERO_SLIDES.map((s, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0, zIndex: 1,
          backgroundImage: `url(${s.img})`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: i === current ? 1 : 0,
          transition: "opacity 0.9s ease",
        }} />
      ))}

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(105deg, rgba(4,24,4,0.92) 0%, rgba(4,24,4,0.70) 50%, rgba(4,24,4,0.20) 100%)",
      }} />

      {/* Bottom accent line */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg, #1e7e34 0%, #f4c430 100%)", zIndex: 5 }} />

      {/* Text content */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 clamp(24px, 9vw, 130px)",
        opacity: fading ? 0 : 1,
        transform: fading ? "translateY(12px)" : "translateY(0)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
      }}>
        {/* Tag */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(244,196,48,0.13)", border: "1px solid rgba(244,196,48,0.35)", borderRadius: 30, padding: "6px 18px", width: "fit-content", marginBottom: 22 }}>
          <span style={{ fontSize: 13, color: "#f4c430", fontWeight: 600, letterSpacing: 0.4 }}>🌍 Authentic African Food · UK Delivery</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: "clamp(34px, 5.8vw, 72px)", fontWeight: 900, color: "#fff", lineHeight: 1.08, marginBottom: 0, maxWidth: 680, letterSpacing: "-1px" }}>
          {slide.title}
        </h1>
        <h1 style={{ fontSize: "clamp(34px, 5.8vw, 72px)", fontWeight: 900, color: "#f4c430", lineHeight: 1.08, marginBottom: 18, maxWidth: 680, letterSpacing: "-1px" }}>
          {slide.highlight}
        </h1>
        <p style={{ fontSize: "clamp(15px, 1.9vw, 19px)", color: "rgba(255,255,255,0.80)", maxWidth: 480, lineHeight: 1.7, margin: "0 0 36px" }}>
          {slide.sub}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button onClick={() => onNav(slide.ctaPage)}
            style={{ background: "#f4c430", color: "#1a1a1a", border: "none", borderRadius: 12, padding: "14px 34px", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 6px 28px rgba(244,196,48,0.42)", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(244,196,48,0.55)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 6px 28px rgba(244,196,48,0.42)"; }}>
            {slide.cta} →
          </button>
          <button onClick={() => onNav("stores")}
            style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "2px solid rgba(255,255,255,0.38)", borderRadius: 12, padding: "14px 28px", fontSize: 16, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(8px)", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.16)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
            📍 Find Stores
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 32, marginTop: 50, flexWrap: "wrap" }}>
          {[["500+", "Products"], ["4.8★", "Rating"], ["Next-Day", "Delivery"], ["UK-Wide", "Coverage"]].map(([v, l]) => (
            <div key={l}>
              <div style={{ fontSize: "clamp(18px, 2.4vw, 26px)", fontWeight: 900, color: "#f4c430" }}>{v}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.58)", fontWeight: 500, letterSpacing: 0.5, textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      {[["chevronLeft", -1, "left", 20], ["chevronRight", 1, "right", 20]].map(([icon, dir, side, pos]) => (
        <button key={icon} onClick={() => goTo(current + dir)}
          style={{ position: "absolute", [side]: pos, top: "50%", transform: "translateY(-50%)", zIndex: 4, background: "rgba(0,0,0,0.28)", border: "1.5px solid rgba(255,255,255,0.22)", borderRadius: "50%", width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", backdropFilter: "blur(6px)", transition: "background 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(244,196,48,0.35)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.28)"}>
          <Icon name={icon} size={20} />
        </button>
      ))}

      {/* Dot indicators */}
      <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", zIndex: 4, display: "flex", gap: 8, alignItems: "center" }}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            style={{ width: i === current ? 30 : 8, height: 8, borderRadius: 4, background: i === current ? "#f4c430" : "rgba(255,255,255,0.38)", border: "none", cursor: "pointer", transition: "all 0.35s", padding: 0 }} />
        ))}
      </div>
    </div>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product, addToCart, wishlist, toggleWishlist }) {
  const [imgErr, setImgErr] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isWished = wishlist.includes(product.id);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1.5px solid #e8f5e9", transition: "transform 0.25s, box-shadow 0.25s", position: "relative", transform: hovered ? "translateY(-5px)" : "translateY(0)", boxShadow: hovered ? "0 22px 48px rgba(30,126,52,0.14)" : "0 2px 8px rgba(0,0,0,0.04)" }}>

      {/* Image */}
      <div style={{ height: 200, position: "relative", overflow: "hidden", background: "#f1f8e9" }}>
        {!imgErr ? (
          <img
            src={product.img}
            alt={product.name}
            onError={() => setImgErr(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", transform: hovered ? "scale(1.07)" : "scale(1)" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, background: "linear-gradient(135deg,#e8f5e9,#f1f8e9)" }}>🍲</div>
        )}
        {/* Badge */}
        {product.badge && (
          <span style={{ position: "absolute", top: 12, left: 12, background: badgeColor(product.badge), color: "#fff", borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 700, letterSpacing: 0.4, boxShadow: "0 2px 8px rgba(0,0,0,0.18)" }}>
            {product.badge}
          </span>
        )}
        {/* Wishlist btn */}
        <button
          onClick={() => toggleWishlist(product.id)}
          style={{ position: "absolute", top: 10, right: 10, background: "rgba(255,255,255,0.92)", border: "none", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.14)", transition: "transform 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill={isWished ? "#e53935" : "none"} stroke={isWished ? "#e53935" : "#bbb"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 18px 18px" }}>
        <div style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 4, fontWeight: 600 }}>{product.origin}</div>
        <div style={{ fontWeight: 700, fontSize: 16, color: "#1a2e1a", marginBottom: 5, lineHeight: 1.3 }}>{product.name}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 9 }}>
          {[1,2,3,4,5].map(i => (
            <svg key={i} width={12} height={12} viewBox="0 0 24 24" fill={i <= Math.round(product.rating) ? "#f4c430" : "#e8e8e8"}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          ))}
          <span style={{ fontSize: 12, color: "#999" }}>{product.rating} ({product.reviews})</span>
        </div>
        <div style={{ color: "#888", fontSize: 13, marginBottom: 16, lineHeight: 1.55 }}>{product.description}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 22, fontWeight: 900, color: "#1e7e34" }}>£{product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            style={{ background: "linear-gradient(135deg,#1e7e34,#28a745)", color: "#fff", border: "none", borderRadius: 10, padding: "9px 18px", cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", gap: 6, fontSize: 14, transition: "opacity 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}>
            <Icon name="plus" size={14} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function NaijaBite() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [toastMsg, setToastMsg] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderDone, setOrderDone] = useState(false);

  const showToast = (msg) => { setToastMsg(msg); setTimeout(() => setToastMsg(null), 2600); };
  const nav = (p) => { setPage(p); setMobileMenuOpen(false); window.scrollTo(0, 0); };

  const addToCart = (product) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`✅ ${product.name} added to cart!`);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, d) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + d) } : i));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const toggleWishlist = (id) => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const locateUser = () => {
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => { setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setLocationLoading(false); showToast("📍 Location found!"); },
        () => { setLocationLoading(false); setUserLocation({ lat: 51.5074, lng: -0.1278 }); showToast("📍 Using London as default"); }
      );
    } else { setLocationLoading(false); setUserLocation({ lat: 51.5074, lng: -0.1278 }); }
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const mc = selectedCategory === "all" || p.category === selectedCategory;
    const ms = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return mc && ms;
  });

  // ── HOME ─────────────────────────────────────────────────────────────────
  const renderHome = () => (
    <>
      <HeroSlideshow onNav={nav} />

      {/* Why NaijaBite */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 900, color: "#1a2e1a", marginBottom: 8 }}>Why NaijaBite?</h2>
          <p style={{ color: "#777", fontSize: 15 }}>We make it easy to bring Africa to your kitchen, wherever you are.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {[
            { icon: "truck", title: "Fast UK Delivery", text: "Next-day and scheduled delivery options across the whole of the UK." },
            { icon: "shield", title: "Quality Guaranteed", text: "All products are sourced, verified, and quality-checked by our team." },
            { icon: "mapPin", title: "Store Locator", text: "Find the nearest African food store with our smart map feature." },
            { icon: "globe", title: "Community First", text: "Built by Nigerians, for Africans abroad. We understand the craving." },
          ].map(({ icon, title, text }) => (
            <div key={title} style={{ background: "#fff", borderRadius: 18, padding: "28px 24px", border: "1.5px solid #e8f5e9", textAlign: "center", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(30,126,52,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg,#e8f5e9,#c8e6c9)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#1e7e34" }}>
                <Icon name={icon} size={24} />
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{title}</div>
              <p style={{ color: "#777", fontSize: 14, lineHeight: 1.65 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div style={{ background: "#f1f8e9", padding: "60px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 900, color: "#1a2e1a", marginBottom: 4 }}>Featured Products</h2>
              <p style={{ color: "#777", fontSize: 14 }}>Community favourites you'll love</p>
            </div>
            <button onClick={() => nav("shop")} style={{ background: "#1e7e34", color: "#fff", border: "none", borderRadius: 10, padding: "10px 22px", fontWeight: 700, cursor: "pointer", fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}>
              View All <Icon name="chevronRight" size={16} />
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {PRODUCTS.filter(p => p.badge).slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 900, color: "#1a2e1a", marginBottom: 8 }}>What the Community Says</h2>
          <p style={{ color: "#777", fontSize: 14 }}>Real reviews from Africans across the UK</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {TESTIMONIALS.map(t => (
            <div key={t.name} style={{ background: "#fff", borderRadius: 20, padding: 28, border: "1.5px solid #e8f5e9" }}>
              <div style={{ color: "#f4c430", fontSize: 20, marginBottom: 12 }}>★★★★★</div>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#1e7e34,#f4c430)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 14 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                  <div style={{ color: "#999", fontSize: 13 }}>{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg,#1e7e34,#0d5c1a)", padding: "64px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: "clamp(24px,4vw,42px)", fontWeight: 900, marginBottom: 14 }}>
          Ready to taste <span style={{ color: "#f4c430" }}>home?</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 17, marginBottom: 32 }}>Free delivery on your first order over £35</p>
        <button onClick={() => nav("shop")} style={{ background: "#f4c430", color: "#1a1a1a", border: "none", borderRadius: 12, padding: "16px 44px", fontSize: 18, fontWeight: 900, cursor: "pointer", boxShadow: "0 6px 28px rgba(244,196,48,0.45)" }}>
          Start Shopping →
        </button>
      </div>
    </>
  );

  // ── SHOP ─────────────────────────────────────────────────────────────────
  const renderShop = () => (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px" }}>
      <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 900, color: "#1a2e1a", marginBottom: 6 }}>🛒 Shop African Foodstuffs</h2>
      <p style={{ color: "#777", fontSize: 15, marginBottom: 32 }}>Authentic Nigerian & African ingredients delivered to your door</p>

      <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: "2px solid #e8f5e9", borderRadius: 14, padding: "12px 18px", marginBottom: 28, maxWidth: 500, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
        <Icon name="search" size={20} />
        <input
          style={{ border: "none", outline: "none", fontSize: 16, flex: 1, background: "transparent", fontFamily: "inherit" }}
          placeholder="Search egusi, garri, palm oil..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)} />
        {searchQuery && <button onClick={() => setSearchQuery("")} style={{ background: "none", border: "none", cursor: "pointer", color: "#bbb" }}><Icon name="x" size={16} /></button>}
      </div>

      <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4, marginBottom: 32, scrollbarWidth: "none" }}>
        {CATEGORIES.map(cat => (
          <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
            style={{ padding: "10px 18px", borderRadius: 24, border: selectedCategory === cat.id ? "none" : "1.5px solid #e0e0e0", background: selectedCategory === cat.id ? "#1e7e34" : "#fff", color: selectedCategory === cat.id ? "#fff" : "#555", fontWeight: selectedCategory === cat.id ? 700 : 500, cursor: "pointer", whiteSpace: "nowrap", fontSize: 14, display: "flex", alignItems: "center", gap: 6, transition: "all 0.2s", flexShrink: 0 }}>
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#bbb" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#888" }}>No products found</div>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: 20, color: "#aaa", fontSize: 14 }}>{filteredProducts.length} products</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />
            ))}
          </div>
        </>
      )}
    </div>
  );

  // ── STORES ───────────────────────────────────────────────────────────────
  const renderStores = () => (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 20px" }}>
      <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 900, color: "#1a2e1a", marginBottom: 8 }}>📍 Find African Stores Near You</h2>
      <p style={{ color: "#777", marginBottom: 32, fontSize: 15 }}>Locate the nearest African food store using your current location</p>
      <div style={{ background: "linear-gradient(135deg,#e8f5e9,#f1f8e9)", borderRadius: 20, height: 340, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px dashed #a5d6a7", marginBottom: 32, gap: 16, textAlign: "center", padding: 24 }}>
        <div style={{ fontSize: 52 }}>🗺️</div>
        <div style={{ fontWeight: 700, fontSize: 22 }}>Store Locator Map</div>
        {userLocation ? (
          <div style={{ background: "#e8f5e9", borderRadius: 12, padding: "10px 24px", color: "#1e7e34", fontWeight: 700 }}>✅ Location active — showing stores near you</div>
        ) : (
          <p style={{ color: "#777", maxWidth: 400, lineHeight: 1.65, margin: 0, fontSize: 14 }}>
            Enable location to find African stores near you.<br />
            <span style={{ color: "#bbb", fontSize: 12 }}>Integrates with Google Maps / Leaflet in production</span>
          </p>
        )}
        <button onClick={locateUser} disabled={locationLoading}
          style={{ background: "#1e7e34", color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <Icon name="locate" size={18} />{locationLoading ? "Locating..." : userLocation ? "Update Location" : "Use My Location"}
        </button>
      </div>
      <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 20 }}>Nearby African Stores</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
        {NEARBY_STORES.map(s => (
          <div key={s.id} style={{ background: "#fff", borderRadius: 16, padding: 20, border: "1.5px solid #e8f5e9", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{s.name}</div>
                <div style={{ color: "#999", fontSize: 13, display: "flex", alignItems: "center", gap: 4 }}><Icon name="mapPin" size={13} />{s.address}</div>
              </div>
              <span style={{ display: "inline-block", borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 700, background: s.open ? "#e8f5e9" : "#fce8e8", color: s.open ? "#1e7e34" : "#c62828", flexShrink: 0 }}>{s.open ? "Open" : "Closed"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#f4c430" }}><Icon name="star" size={14} /><span style={{ color: "#555", fontWeight: 600, fontSize: 14 }}>{s.rating}</span></div>
              <span style={{ background: "#e8f5e9", color: "#1e7e34", borderRadius: 20, padding: "4px 12px", fontSize: 13, fontWeight: 700 }}>{s.distance}</span>
            </div>
            <button onClick={() => showToast(`🗺️ Opening directions to ${s.name}`)}
              style={{ width: "100%", marginTop: 14, background: "#f1f8e9", color: "#1e7e34", border: "1.5px solid #c8e6c9", borderRadius: 10, padding: 10, fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
              Get Directions
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  const renderAbout = () => (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px" }}>
      <div style={{ maxWidth: 780 }}>
        <h2 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 900, color: "#1a2e1a", marginBottom: 20 }}>About NaijaBite</h2>
        <div style={{ background: "linear-gradient(135deg,#e8f5e9,#f1f8e9)", borderRadius: 20, padding: 28, marginBottom: 36, borderLeft: "4px solid #1e7e34" }}>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "#333", margin: 0 }}>NaijaBite is an innovative online marketplace connecting the African diaspora in the UK with authentic Nigerian foodstuffs, fresh ingredients, and beloved flavours from home.</p>
        </div>
        <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 18 }}>Our Value Proposition</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))", gap: 12, marginBottom: 36 }}>
          {["Convenience","Cultural Connection","Quality & Authenticity","Variety","Community","Accessibility"].map(v => (
            <div key={v} style={{ background: "#fff", border: "1.5px solid #e8f5e9", borderRadius: 12, padding: "13px 15px", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#1e7e34" }}><Icon name="check" size={15} /></span>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{v}</span>
            </div>
          ))}
        </div>
        <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 14 }}>Revenue Streams</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(185px, 1fr))", gap: 12, marginBottom: 36 }}>
          {["Sales commission on orders","Vendor subscription fees","Delivery charges","Advertising partnerships"].map(r => (
            <div key={r} style={{ background: "#1e7e34", color: "#fff", borderRadius: 12, padding: "14px 18px", fontSize: 14, fontWeight: 600 }}>{r}</div>
          ))}
        </div>
        <div style={{ background: "#0d1f0d", color: "#aaa", borderRadius: 20, padding: 28 }}>
          <div style={{ color: "#f4c430", fontWeight: 800, fontSize: 18, marginBottom: 8 }}>🚀 Our Vision</div>
          <p style={{ lineHeight: 1.8, margin: 0 }}>Starting in the UK, NaijaBite plans to expand to other countries with large African diaspora populations — bringing the taste of Nigeria and Africa to every corner of the globe.</p>
        </div>
      </div>
    </div>
  );

  // ── CHECKOUT ─────────────────────────────────────────────────────────────
  const renderCheckout = () => (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 24, padding: 36, maxWidth: 480, width: "100%", maxHeight: "90vh", overflowY: "auto" }}>
        {orderDone ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
            <h2 style={{ fontWeight: 900, fontSize: 28, color: "#1e7e34", marginBottom: 12 }}>Order Placed!</h2>
            <p style={{ color: "#666", fontSize: 16, marginBottom: 32 }}>Your authentic Nigerian food is on its way!</p>
            <button style={{ background: "linear-gradient(135deg,#1e7e34,#28a745)", color: "#fff", border: "none", borderRadius: 12, padding: "14px 32px", fontSize: 16, fontWeight: 800, cursor: "pointer", width: "100%" }}
              onClick={() => { setOrderDone(false); setCheckoutOpen(false); setCart([]); nav("home"); }}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h2 style={{ fontWeight: 900, fontSize: 22 }}>Checkout</h2>
              <button onClick={() => setCheckoutOpen(false)} style={{ background: "#f5f5f5", border: "none", borderRadius: 8, padding: 8, cursor: "pointer" }}><Icon name="x" /></button>
            </div>
            {["Full Name","Address Line 1","City","Postcode","Phone Number"].map(f => (
              <input key={f} placeholder={f} style={{ width: "100%", border: "1.5px solid #e0e0e0", borderRadius: 10, padding: "12px 14px", marginBottom: 10, fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
            ))}
            <div style={{ borderTop: "1.5px solid #f0f0f0", paddingTop: 18, marginTop: 8, marginBottom: 18 }}>
              {cart.map(i => (
                <div key={i.id} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: 14, color: "#666" }}>
                  <span>{i.name} × {i.qty}</span><span>£{(i.price * i.qty).toFixed(2)}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, fontSize: 18, marginTop: 12, color: "#1e7e34" }}>
                <span>Total</span><span>£{cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <button onClick={() => setOrderDone(true)}
              style={{ width: "100%", background: "linear-gradient(135deg,#1e7e34,#28a745)", color: "#fff", border: "none", borderRadius: 12, padding: 16, fontSize: 16, fontWeight: 800, cursor: "pointer" }}>
              💳 Place Order — £{cartTotal.toFixed(2)}
            </button>
          </>
        )}
      </div>
    </div>
  );

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#f9fdf9", color: "#1a2e1a", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background:#c8e6c9;border-radius:3px}@media(min-width:700px){.dnav{display:flex!important}}`}</style>

      {/* Promo Strip */}
      <div style={{ background: "#f4c430", color: "#1a1a1a", textAlign: "center", padding: "9px 20px", fontSize: 13, fontWeight: 700 }}>
        🇳🇬 FREE UK delivery on orders over £35 — Authentic African food delivered fast! 🌍
      </div>

      {/* Navbar */}
      <nav style={{ background: "#fff", borderBottom: "2px solid #e8f5e9", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 16px rgba(34,100,34,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
          <div onClick={() => nav("home")} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <img src="/naijabite logo.jpg" alt="Naijabite logo" style={{ width: 56, height: 56, borderRadius: 12, objectFit: "contain", background: "transparent", display: "block" }} />
            <span style={{ fontSize: 24, fontWeight: 900, color: "#1e7e34" }}>Naija<span style={{ color: "#f4c430" }}>Bite</span></span>
          </div>
          <div className="dnav" style={{ display: "none", gap: 4, alignItems: "center" }}>
            {[["home","Home"],["shop","Shop"],["stores","Find Stores"],["about","About"]].map(([id,label]) => (
              <button key={id} onClick={() => nav(id)} style={{ padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontWeight: page===id ? 700 : 500, fontSize: 15, color: page===id ? "#1e7e34" : "#444", background: page===id ? "#e8f5e9" : "transparent", border: "none", transition: "all 0.2s" }}>
                {label}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button onClick={() => setCartOpen(true)} style={{ position: "relative", background: "#1e7e34", color: "#fff", border: "none", borderRadius: 10, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontWeight: 700, fontSize: 15 }}>
              <Icon name="cart" size={18} /> Cart
              {cartCount > 0 && <span style={{ position: "absolute", top: -7, right: -7, background: "#f4c430", color: "#1a1a1a", borderRadius: "50%", width: 21, height: 21, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900 }}>{cartCount}</span>}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: "none", border: "1.5px solid #e0e0e0", borderRadius: 8, padding: 8, cursor: "pointer" }}>
              <Icon name={mobileMenuOpen ? "x" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div onClick={() => setMobileMenuOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 98 }} />
          <div style={{ position: "fixed", top: 113, left: 0, right: 0, background: "#fff", zIndex: 99, padding: 16, borderBottom: "2px solid #e8f5e9", display: "flex", flexDirection: "column", gap: 4 }}>
            {[["home","Home"],["shop","Shop"],["stores","Find Stores"],["about","About"]].map(([id,label]) => (
              <button key={id} onClick={() => nav(id)} style={{ padding: "12px 16px", borderRadius: 8, cursor: "pointer", fontWeight: page===id ? 700 : 500, fontSize: 16, color: page===id ? "#1e7e34" : "#333", background: page===id ? "#e8f5e9" : "transparent", border: "none", textAlign: "left" }}>
                {label}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Pages */}
      <main>
        {page === "home" && renderHome()}
        {page === "shop" && renderShop()}
        {page === "stores" && renderStores()}
        {page === "about" && renderAbout()}
      </main>

      {/* Footer */}
      <footer style={{ background: "#0d1f0d", color: "#aaa", padding: "48px 20px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#1e7e34,#28a745)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                  <img src="/naijabite logo.jpg" alt="Naijabite" style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: 8, background: "transparent", display: "block" }} />
                </div>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 20 }}>Naija<span style={{ color: "#f4c430" }}>Bite</span></span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#555" }}>Authentic African food delivered to your door. Connecting the diaspora with home.</p>
            </div>
            {[["Shop",["Grains & Flour","Spices","Proteins","Vegetables","Snacks"],"shop"],["Company",["About Us","Find Stores","Contact Us","Partner With Us"],"about"]].map(([title, links, target]) => (
              <div key={title}>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 14 }}>{title}</div>
                {links.map(l => <span key={l} onClick={() => nav(target)} style={{ display: "block", color: "#666", fontSize: 14, marginBottom: 8, cursor: "pointer" }}>{l}</span>)}
              </div>
            ))}
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Follow Us</div>
              {["Instagram","TikTok","Facebook","X (Twitter)"].map(l => <span key={l} style={{ display: "block", color: "#666", fontSize: 14, marginBottom: 8 }}>@naijabiteuk — {l}</span>)}
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1e3a1e", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, fontSize: 13 }}>
            <span>© 2025 NaijaBite Ltd. All rights reserved.</span>
            <span style={{ color: "#f4c430" }}>🌍 Currently serving the UK — Expanding Soon</span>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {cartOpen && <div onClick={() => setCartOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 150 }} />}
      <div style={{ position: "fixed", right: 0, top: 0, height: "100vh", width: "min(420px,100vw)", background: "#fff", boxShadow: "-4px 0 40px rgba(0,0,0,0.12)", zIndex: 200, display: "flex", flexDirection: "column", transform: cartOpen ? "translateX(0)" : "translateX(100%)", transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1.5px solid #e8f5e9", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f9fdf9" }}>
          <span style={{ fontWeight: 800, fontSize: 20 }}>🛒 Cart {cartCount > 0 && <span style={{ color: "#1e7e34" }}>({cartCount})</span>}</span>
          <button onClick={() => setCartOpen(false)} style={{ background: "#f5f5f5", border: "none", borderRadius: 8, padding: 8, cursor: "pointer" }}><Icon name="x" /></button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#bbb" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#888", marginBottom: 8 }}>Your cart is empty</div>
              <button onClick={() => { setCartOpen(false); nav("shop"); }} style={{ background: "#1e7e34", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 700, cursor: "pointer", marginTop: 12 }}>Browse Products</button>
            </div>
          ) : cart.map(item => (
            <div key={item.id} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: "1px solid #f5f5f5", alignItems: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, overflow: "hidden", flexShrink: 0, background: "#f1f8e9" }}>
                <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{item.name}</div>
                <div style={{ color: "#1e7e34", fontWeight: 700, fontSize: 14 }}>£{(item.price * item.qty).toFixed(2)}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                  <button onClick={() => updateQty(item.id, -1)} style={{ background: "#e8f5e9", border: "none", borderRadius: 6, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#1e7e34" }}><Icon name="minus" size={13} /></button>
                  <span style={{ fontWeight: 700, minWidth: 24, textAlign: "center" }}>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} style={{ background: "#e8f5e9", border: "none", borderRadius: 6, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#1e7e34" }}><Icon name="plus" size={13} /></button>
                  <button onClick={() => removeFromCart(item.id)} style={{ background: "#fce8e8", border: "none", borderRadius: 6, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#c62828", marginLeft: "auto" }}><Icon name="trash" size={13} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div style={{ padding: 24, borderTop: "1.5px solid #e8f5e9", background: "#f9fdf9" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 14, color: "#999" }}><span>Subtotal</span><span>£{cartTotal.toFixed(2)}</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: cartTotal < 35 ? 6 : 16, fontSize: 14, color: "#999" }}>
              <span>Delivery</span><span style={{ color: "#1e7e34" }}>{cartTotal >= 35 ? "FREE 🎉" : "£3.99"}</span>
            </div>
            {cartTotal < 35 && <div style={{ fontSize: 12, color: "#e5820a", marginBottom: 14 }}>Add £{(35 - cartTotal).toFixed(2)} more for free delivery!</div>}
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, fontSize: 18, marginBottom: 16, color: "#1e7e34" }}>
              <span>Total</span><span>£{(cartTotal + (cartTotal >= 35 ? 0 : 3.99)).toFixed(2)}</span>
            </div>
            <button onClick={() => { setCartOpen(false); setCheckoutOpen(true); }}
              style={{ width: "100%", background: "linear-gradient(135deg,#1e7e34,#28a745)", color: "#fff", border: "none", borderRadius: 12, padding: 16, fontSize: 16, fontWeight: 800, cursor: "pointer" }}>
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      {checkoutOpen && renderCheckout()}

      {/* Toast */}
      {toastMsg && (
        <div style={{ position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)", background: "#1a2e1a", color: "#fff", borderRadius: 12, padding: "13px 26px", fontSize: 14, fontWeight: 600, zIndex: 999, boxShadow: "0 8px 30px rgba(0,0,0,0.25)", whiteSpace: "nowrap" }}>
          {toastMsg}
        </div>
      )}
    </div>
  );
}
