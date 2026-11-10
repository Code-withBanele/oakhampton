import {
  type CSSProperties,
  FormEvent,
  ReactNode,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const photos = [
  {
    src: "/assets/oakhampton-property.jpg",
    label: "Oakhampton exterior",
    alt: "Oakhampton Accommodation house and garden in Berea, East London",
  },
  {
    src: "https://images.unsplash.com/photo-1720206811770-3ebd20e43445?auto=format&fit=crop&w=1800&q=86",
    label: "Garden terrace",
    alt: "Relaxed garden terrace with outdoor seating",
  },
  {
    src: "/assets/single-room.jpg",
    label: "Single room",
    alt: "Oakhampton single room with twin beds, seating and a hospitality tray",
  },
  {
    src: "/assets/double-room.jpg",
    label: "Double bedroom",
    alt: "Oakhampton double bedroom with crisp linen and red accents",
  },
  {
    src: "https://images.unsplash.com/photo-1771830916705-ab69d12196af?auto=format&fit=crop&w=1800&q=86",
    label: "Courtyard",
    alt: "Peaceful planted courtyard with wooden seating",
  },
  {
    src: "https://images.unsplash.com/photo-1780662805447-36c9c1a6641e?auto=format&fit=crop&w=1800&q=86",
    label: "Interior spaces",
    alt: "Warm guesthouse interior with natural light and comfortable seating",
  },
];

const galleryPhotos = [
  {
    src: "/assets/gallery/beach-rainbow.jpg",
    label: "Rainbow at the coast",
    alt: "A rainbow over a nearby East London beach after rainfall",
  },
  {
    src: "/assets/gallery/moonrise-beach.jpg",
    label: "Moonrise over the lagoon",
    alt: "The moon rising over a peaceful nearby beach and lagoon",
  },
  {
    src: "/assets/gallery/birdlife-and-beach.jpg",
    label: "Birdlife by the beach",
    alt: "Two birds resting above a nearby East London beach",
  },
  {
    src: "/assets/gallery/poolside-courtyard.jpg",
    label: "Poolside courtyard",
    alt: "Oakhampton poolside courtyard surrounded by tropical plants",
  },
  {
    src: "/assets/gallery/garden-pool.jpg",
    label: "Garden pool",
    alt: "Oakhampton swimming pool set within the lush garden",
  },
  {
    src: "/assets/gallery/braai-area.jpg",
    label: "Braai area",
    alt: "Covered guest braai and outdoor seating area at Oakhampton",
  },
  {
    src: "/assets/gallery/guest-kitchen.jpg",
    label: "Guest kitchen",
    alt: "Bright guest kitchen and dining table at Oakhampton",
  },
];

type IconName =
  | "arrow"
  | "calendar"
  | "car"
  | "check"
  | "chevron"
  | "close"
  | "expand"
  | "mail"
  | "map"
  | "menu"
  | "phone"
  | "tv"
  | "wifi";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    calendar: (
      <>
        <path d="M7 3v3M17 3v3M4 9h16" />
        <rect x="4" y="5" width="16" height="16" rx="2" />
      </>
    ),
    car: (
      <>
        <path d="m5 17-1 3M19 17l1 3M3 12l2-6h14l2 6" />
        <path d="M5 12h14a2 2 0 0 1 2 2v3H3v-3a2 2 0 0 1 2-2Z" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    expand: (
      <>
        <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 8h16M4 16h16" />,
    phone: (
      <path d="M7 3H4a2 2 0 0 0-2 2c0 9.4 7.6 17 17 17a2 2 0 0 0 2-2v-3l-4-1-2 2c-4-1.5-7.5-5-9-9l2-2-1-4Z" />
    ),
    tv: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="m8 2 4 4 4-4" />
      </>
    ),
    wifi: (
      <>
        <path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
        <path d="M12 20h.01" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Loading Oakhampton Accommodation">
      <div className="preloader-inner">
        <img src="/assets/oakhampton-logo.png" alt="" />
        <span>Welcome to Oakhampton</span>
        <i>
          <b />
        </i>
      </div>
    </div>
  );
}

function Header({ onEnquire }: { onEnquire: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <button className="wordmark" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src="/assets/oakhampton-logo.png" alt="Oakhampton Bed and Breakfast" />
      </button>
      <nav className="topnav" aria-label="Primary navigation">
        <button onClick={() => scrollToId("#welcome")}>About</button>
        <button onClick={() => scrollToId("#rooms")}>Rooms</button>
        <button onClick={() => scrollToId("#location")}>Find us</button>
        <button className="nav-cta" onClick={onEnquire}>
          Plan your stay <Icon name="arrow" size={16} />
        </button>
      </nav>
      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      <div className={`mobile-nav ${open ? "is-open" : ""}`}>
        {[
          ["About", "#welcome"],
          ["Rooms & rates", "#rooms"],
          ["Plan your stay", "#enquire"],
          ["Find us", "#location"],
          ["Contact", "#contact"],
        ].map(([label, id], index) => (
          <button
            key={id}
            style={{ "--menu-order": index } as CSSProperties}
            onClick={() => {
              setOpen(false);
              if (id === "#enquire") onEnquire();
              else scrollToId(id);
            }}
          >
            {label}
            <Icon name="arrow" />
          </button>
        ))}
      </div>
    </header>
  );
}

function PhotoButton({
  index,
  className,
  children,
  onOpen,
}: {
  index: number;
  className: string;
  children?: ReactNode;
  onOpen: (index: number) => void;
}) {
  const photo = photos[index];
  return (
    <button
      className={`photo-tile ${className}`}
      onClick={() => onOpen(index)}
      aria-label={`Expand ${photo.label} photograph`}
    >
      <img src={photo.src} alt={photo.alt} />
      <span className="photo-label">{photo.label}</span>
      <span className="expand-icon">
        <Icon name="expand" size={17} />
      </span>
      {children}
    </button>
  );
}

function HeroBento({
  onOpen,
  onEnquire,
}: {
  onOpen: (index: number) => void;
  onEnquire: () => void;
}) {
  return (
    <section className="hero-bento" aria-labelledby="hero-title">
      <div className="hero-copy bento-tile" data-reveal>
        <span className="kicker">Independent bed &amp; breakfast</span>
        <h1 id="hero-title">
          Stay a little.
          <br />
          <em>Feel at home.</em>
        </h1>
        <p>Warm hospitality and easy comfort in the heart of Berea, East London.</p>
        <button className="text-action" onClick={() => scrollToId("#rooms")}>
          Discover your stay <Icon name="arrow" />
        </button>
        <span className="hand-note">Come in, exhale.</span>
      </div>
      <PhotoButton index={0} className="hero-photo" onOpen={onOpen} />
      <button className="plan-tile bento-tile" onClick={onEnquire} data-reveal>
        <Icon name="calendar" size={30} />
        <span>Planning your next stay?</span>
        <small>Choose your dates and tell us which room feels right.</small>
        <i>
          Explore accommodation <Icon name="arrow" size={18} />
        </i>
      </button>
      <button
        className="location-tile bento-tile"
        onClick={() => scrollToId("#location")}
        data-reveal
      >
        <Icon name="map" size={27} />
        <span>Berea, East London</span>
        <strong>A comfortable base in the heart of the city.</strong>
        <small>8 Oakhampton Road · Get directions</small>
      </button>
    </section>
  );
}

function Lightbox({
  items,
  active,
  onClose,
  onChange,
}: {
  items: typeof photos;
  active: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const touchStart = useRef(0);
  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((active + 1) % items.length);
      if (event.key === "ArrowLeft") onChange((active - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", keydown);
    };
  }, [active, items.length, onChange, onClose]);
  if (active === null) return null;
  const move = (direction: number) => onChange((active + direction + items.length) % items.length);
  const touchEnd = (event: TouchEvent) => {
    const distance = touchStart.current - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1);
  };
  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Property photo gallery"
      onTouchStart={(event) => (touchStart.current = event.touches[0].clientX)}
      onTouchEnd={touchEnd}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close gallery">
        <Icon name="close" size={25} />
      </button>
      <button
        className="lightbox-arrow lightbox-prev"
        onClick={() => move(-1)}
        aria-label="Previous photo"
      >
        <Icon name="chevron" />
      </button>
      <figure>
        <img src={items[active].src} alt={items[active].alt} />
        <figcaption>
          <span>
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          {items[active].label}
        </figcaption>
      </figure>
      <button
        className="lightbox-arrow lightbox-next"
        onClick={() => move(1)}
        aria-label="Next photo"
      >
        <Icon name="chevron" />
      </button>
    </div>
  );
}

const amenities: { icon: IconName; text: string }[] = [
  { icon: "check", text: "Full cooked breakfast" },
  { icon: "wifi", text: "Free WIFI" },
  { icon: "tv", text: "DSTV" },
  { icon: "car", text: "Gated off-street parking" },
];

function Welcome({ onOpen }: { onOpen: (index: number) => void }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);
  const select = (index: number) =>
    setActive((index + galleryPhotos.length) % galleryPhotos.length);
  const handleTouchEnd = (event: TouchEvent) => {
    const distance = touchStart.current - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 45) select(active + (distance > 0 ? 1 : -1));
  };
  return (
    <section className="welcome-section page-shell" id="welcome">
      <div className="welcome-intro">
        <div className="welcome-heading" data-reveal>
          <span className="section-number">01</span>
          <h2>
            A little space <em>to unwind.</em>
          </h2>
        </div>
        <div className="welcome-copy" data-reveal>
          <p>
            Welcome to Oakhampton Accommodation. Discover comfortable bed and breakfast
            accommodation in Berea, East London, with warm hospitality and the essentials for a
            relaxing stay.
          </p>
          <p className="welcome-caption">
            A quiet corner, a good breakfast, and time to settle in.
          </p>
        </div>
      </div>
      <div
        className="property-gallery"
        data-reveal
        onTouchStart={(event) => (touchStart.current = event.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="property-gallery-track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {galleryPhotos.map((photo, index) => (
            <button
              key={photo.label}
              className="property-slide"
              onClick={() => onOpen(index)}
              aria-label={`Expand ${photo.label} photograph`}
              aria-hidden={index !== active}
            >
              <img src={photo.src} alt={photo.alt} loading={index < 2 ? "eager" : "lazy"} />
              <span>
                <small>
                  {String(index + 1).padStart(2, "0")} / {galleryPhotos.length}
                </small>
                {photo.label}
              </span>
              <i>
                <Icon name="expand" size={18} />
              </i>
            </button>
          ))}
        </div>
        <div className="property-gallery-arrows">
          <button onClick={() => select(active - 1)} aria-label="Previous photograph">
            <Icon name="chevron" />
          </button>
          <button onClick={() => select(active + 1)} aria-label="Next photograph">
            <Icon name="chevron" />
          </button>
        </div>
      </div>
      <div className="property-gallery-pagination" aria-label="Choose property photograph">
        {galleryPhotos.map((photo, index) => (
          <button
            key={photo.label}
            className={active === index ? "active" : ""}
            onClick={() => select(index)}
            aria-label={`Show ${photo.label}`}
          />
        ))}
      </div>
    </section>
  );
}

function RoomShowcase({
  room,
  price,
  photoIndex,
  number,
  reverse,
  onOpen,
  onEnquire,
}: {
  room: string;
  price: string;
  photoIndex: number;
  number: string;
  reverse?: boolean;
  onOpen: (index: number) => void;
  onEnquire: (room: "single" | "double") => void;
}) {
  return (
    <article className={`room-showcase ${reverse ? "reverse" : ""}`} data-reveal>
      <PhotoButton index={photoIndex} className="room-photo" onOpen={onOpen} />
      <div className="room-details">
        <div className="room-topline">
          <span>{number}</span>
          <span>Oakhampton rooms</span>
        </div>
        <h3>{room}</h3>
        <div className="room-price">
          <strong>{price}</strong>
          <span>per night</span>
        </div>
        <ul>
          {amenities.map((item) => (
            <li key={item.text}>
              <Icon name={item.icon} size={17} />
              {item.text}
            </li>
          ))}
        </ul>
        <button
          className="pill-action"
          onClick={() => onEnquire(room === "Single Room" ? "single" : "double")}
        >
          Check availability <Icon name="arrow" size={18} />
        </button>
      </div>
    </article>
  );
}

function Accommodation({
  onOpen,
  onEnquire,
}: {
  onOpen: (index: number) => void;
  onEnquire: (room: "single" | "double") => void;
}) {
  return (
    <section className="rooms-section" id="rooms">
      <div className="rooms-intro page-shell" data-reveal>
        <span className="section-number">02</span>
        <div>
          <span className="kicker">Sleep well</span>
          <h2>
            Two simple ways
            <br />
            <em>to feel at home.</em>
          </h2>
        </div>
        <p>Comfortable rooms, thoughtful essentials and breakfast to start the day.</p>
      </div>
      <div className="rooms-list page-shell">
        <RoomShowcase
          room="Single Room"
          price="R 800.00"
          photoIndex={2}
          number="01"
          onOpen={onOpen}
          onEnquire={onEnquire}
        />
        <RoomShowcase
          room="Double Bedroom"
          price="R 1100.00"
          photoIndex={3}
          number="02"
          reverse
          onOpen={onOpen}
          onEnquire={onEnquire}
        />
      </div>
    </section>
  );
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function sameDay(a: Date | null, b: Date) {
  return !!a && a.getTime() === b.getTime();
}

function formatDate(date: Date | null) {
  return date
    ? date.toLocaleDateString("en-ZA", { day: "2-digit", month: "short", year: "numeric" })
    : "Select date";
}

function Calendar({
  checkIn,
  checkOut,
  onSelect,
}: {
  checkIn: Date | null;
  checkOut: Date | null;
  onSelect: (date: Date) => void;
}) {
  const today = startOfDay(new Date());
  const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const firstWeekday = (month.getDay() + 6) % 7;
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array<null>(firstWeekday).fill(null),
    ...Array.from(
      { length: days },
      (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1),
    ),
  ];
  const canGoBack =
    month.getFullYear() > today.getFullYear() ||
    (month.getFullYear() === today.getFullYear() && month.getMonth() > today.getMonth());
  return (
    <div className="calendar-popover">
      <div className="calendar-head">
        <button
          type="button"
          disabled={!canGoBack}
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
          aria-label="Previous month"
        >
          <Icon name="chevron" />
        </button>
        <strong>
          {monthNames[month.getMonth()]} {month.getFullYear()}
        </strong>
        <button
          type="button"
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
          aria-label="Next month"
        >
          <Icon name="chevron" />
        </button>
      </div>
      <div className="calendar-grid">
        {weekdays.map((day) => (
          <span className="weekday" key={day}>
            {day}
          </span>
        ))}
        {cells.map((date, index) =>
          date ? (
            <button
              key={date.toISOString()}
              type="button"
              disabled={date < today}
              className={[
                sameDay(checkIn, date) || sameDay(checkOut, date) ? "selected" : "",
                checkIn && checkOut && date > checkIn && date < checkOut ? "in-range" : "",
              ].join(" ")}
              onClick={() => onSelect(date)}
            >
              {date.getDate()}
            </button>
          ) : (
            <span key={`empty-${index}`} />
          ),
        )}
      </div>
      <p>
        <i />
        Sample calendar only — dates do not indicate live availability.
      </p>
    </div>
  );
}

type BookingDetails = { name: string; email: string; phone: string; message: string };

function EnquiryModal({
  open,
  initialRoom,
  onClose,
}: {
  open: boolean;
  initialRoom: "single" | "double" | null;
  onClose: () => void;
}) {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [room, setRoom] = useState<"single" | "double" | null>(null);
  const [details, setDetails] = useState<BookingDetails>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    setRoom(initialRoom);
    setSubmitted(false);
    setError("");
    setCheckIn(null);
    setCheckOut(null);
    setCalendarOpen(false);
    setDetails({ name: "", email: "", phone: "", message: "" });
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [initialRoom, onClose, open]);

  if (!open) return null;

  const chooseDate = (date: Date) => {
    setError("");
    if (!checkIn || checkOut || date <= checkIn) {
      setCheckIn(date);
      setCheckOut(null);
    } else {
      setCheckOut(date);
      setTimeout(() => setCalendarOpen(false), 180);
    }
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!checkIn || !checkOut) return setError("Please select check-in and check-out dates.");
    if (!room) return setError("Please select a room preference.");
    if (!details.name.trim()) return setError("Please enter your full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
      return setError("Please enter a valid email address.");
    setError("");
    setSubmitted(true);
  };

  return (
    <div
      className="enquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="enquiry-dialog">
        <button className="enquiry-close" onClick={onClose} aria-label="Close enquiry">
          <Icon name="close" size={23} />
        </button>
        {submitted ? (
          <div className="confirmation">
            <span className="success-mark">
              <Icon name="check" size={32} />
            </span>
            <span className="kicker">Enquiry received</span>
            <h3>Thank you, {details.name.split(" ")[0]}.</h3>
            <p>
              This is not a confirmed booking. Oakhampton will contact you to discuss availability
              for your preferred dates.
            </p>
            <button className="primary-action" type="button" onClick={onClose}>
              Close enquiry
            </button>
          </div>
        ) : (
          <form className="compact-enquiry" onSubmit={submit} noValidate>
            <span className="kicker">No booking pressure</span>
            <h2 id="enquiry-title">
              Enquire about
              <br />
              <em>your stay.</em>
            </h2>
            <p className="enquiry-note">
              Tell us your preferred dates. We’ll contact you to discuss availability.
            </p>
            <div className="date-selectors">
              <button type="button" onClick={() => setCalendarOpen(!calendarOpen)}>
                <span>Check-in</span>
                <strong>{formatDate(checkIn)}</strong>
                <Icon name="calendar" size={18} />
              </button>
              <span className="date-arrow">
                <Icon name="arrow" size={18} />
              </span>
              <button type="button" onClick={() => setCalendarOpen(!calendarOpen)}>
                <span>Check-out</span>
                <strong>{formatDate(checkOut)}</strong>
                <Icon name="calendar" size={18} />
              </button>
            </div>
            {calendarOpen && (
              <Calendar checkIn={checkIn} checkOut={checkOut} onSelect={chooseDate} />
            )}
            <fieldset className="compact-room-options">
              <legend>Room preference *</legend>
              <button
                type="button"
                className={room === "single" ? "selected" : ""}
                onClick={() => setRoom("single")}
              >
                <span>Single Room</span>
                <strong>R 800.00</strong>
                {room === "single" && <Icon name="check" size={17} />}
              </button>
              <button
                type="button"
                className={room === "double" ? "selected" : ""}
                onClick={() => setRoom("double")}
              >
                <span>Double Bedroom</span>
                <strong>R 1100.00</strong>
                {room === "double" && <Icon name="check" size={17} />}
              </button>
            </fieldset>
            <div className="details-grid">
              <label>
                <span>Full name *</span>
                <input
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  placeholder="Your full name"
                />
              </label>
              <label>
                <span>Email address *</span>
                <input
                  type="email"
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                <span>Contact number</span>
                <input
                  type="tel"
                  value={details.phone}
                  onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                  placeholder="+27 ..."
                />
              </label>
              <label>
                <span>Optional message</span>
                <textarea
                  value={details.message}
                  onChange={(e) => setDetails({ ...details, message: e.target.value })}
                  placeholder="Tell us a little about your visit"
                  rows={3}
                />
              </label>
            </div>
            {error && <p className="form-error">{error}</p>}
            <div className="modal-submit">
              <small>Enquiry only · no payment or automatic confirmation</small>
              <button className="primary-action" type="submit">
                Send enquiry <Icon name="arrow" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Location() {
  return (
    <section className="location-section page-shell" id="location">
      <div className="location-heading" data-reveal>
        <div>
          <span className="section-number">03</span>
          <h2>
            Right here in
            <br />
            <em>East London.</em>
          </h2>
        </div>
        <div>
          <p>Find us in Berea, conveniently located at Oakhampton Road.</p>
          <a
            className="pill-action"
            href="https://www.google.com/maps/dir/?api=1&destination=8+Oakhampton+Road+Berea+East+London+5241+South+Africa"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
      <div className="location-map bento-tile" data-reveal>
        <iframe
          title="Oakhampton Accommodation location map"
          src="https://www.google.com/maps?q=8%20Oakhampton%20Road%2C%20Berea%2C%20East%20London%2C%205241%2C%20South%20Africa&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="location-details" data-reveal>
        <address>
          <Icon name="map" size={21} />
          <span>
            <small>Address</small>8 Oakhampton Road, Berea, East London, 5241
          </span>
        </address>
        <a href="mailto:emslieco@iafrica.com">
          <Icon name="mail" size={21} />
          <span>
            <small>Email</small>emslieco@iafrica.com
          </span>
        </a>
        <a href="tel:+27437269963">
          <Icon name="phone" size={21} />
          <span>
            <small>Telephone</small>043 7269963
          </span>
        </a>
      </div>
    </section>
  );
}

function Contact({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section className="contact-section page-shell" id="contact" data-reveal>
      <div>
        <span className="kicker">Questions? We’re here.</span>
        <h2>
          Come in. Make
          <br />
          <em>yourself at home.</em>
        </h2>
      </div>
      <div className="contact-actions">
        <a href="mailto:emslieco@iafrica.com">
          <Icon name="mail" />
          <span>
            <small>Email us</small>
            emslieco@iafrica.com
          </span>
          <Icon name="arrow" />
        </a>
        <a href="tel:+27437269963">
          <Icon name="phone" />
          <span>
            <small>Call us</small>
            043 7269963
          </span>
          <Icon name="arrow" />
        </a>
        <button onClick={onEnquire}>
          <Icon name="calendar" />
          <span>
            <small>Simple enquiry</small>
            Plan your stay
          </span>
          <Icon name="arrow" />
        </button>
      </div>
    </section>
  );
}

function Footer({ onEnquire }: { onEnquire: () => void }) {
  return (
    <footer className="footer">
      <div className="footer-main page-shell">
        <div>
          <strong>Oakhampton</strong>
          <p>A comfortable place to pause in Berea, East London.</p>
        </div>
        <address>
          8 Oakhampton Road
          <br />
          Berea, East London, 5241
        </address>
        <div className="footer-links">
          <button onClick={() => scrollToId("#welcome")}>About</button>
          <button onClick={() => scrollToId("#rooms")}>Rooms</button>
          <button onClick={onEnquire}>Enquire</button>
          <a href="mailto:emslieco@iafrica.com">Email</a>
          <a href="tel:+27437269963">043 7269963</a>
        </div>
      </div>
      <div className="footer-bottom page-shell">
        <span>© {new Date().getFullYear()} Oakhampton Accommodation</span>
        <em>We look forward to welcoming you.</em>
        <span>East London · South Africa</span>
        <a href="https://banele.dev" target="_blank" rel="noreferrer">
          Powered by: banele.dev
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [preloading, setPreloading] = useState(true);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [lightboxItems, setLightboxItems] = useState<typeof photos>(photos);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryRoom, setEnquiryRoom] = useState<"single" | "double" | null>(null);
  const openEnquiry = (room: "single" | "double" | null = null) => {
    setEnquiryRoom(room);
    setEnquiryOpen(true);
  };
  const openPhoto = (items: typeof photos, index: number) => {
    setLightboxItems(items);
    setLightbox(index);
  };
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setPreloading(false), reducedMotion ? 250 : 1450);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      {preloading && <Preloader />}
      <Header onEnquire={() => openEnquiry()} />
      <main>
        <HeroBento onOpen={(index) => openPhoto(photos, index)} onEnquire={() => openEnquiry()} />
        <Welcome onOpen={(index) => openPhoto(galleryPhotos, index)} />
        <Accommodation onOpen={(index) => openPhoto(photos, index)} onEnquire={openEnquiry} />
        <Location />
        <Contact onEnquire={() => openEnquiry()} />
      </main>
      <Footer onEnquire={() => openEnquiry()} />
      <Lightbox
        items={lightboxItems}
        active={lightbox}
        onClose={() => setLightbox(null)}
        onChange={setLightbox}
      />
      <EnquiryModal
        open={enquiryOpen}
        initialRoom={enquiryRoom}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
}
