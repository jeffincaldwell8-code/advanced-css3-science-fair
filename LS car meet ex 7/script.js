const cars = [
  { brand: "Porsche", model: "911 Carrera S", year: 2020, price: 17400000, displayPrice: "₹1.74 Cr", km: "18,200 km", fuel: "Petrol", transmission: "Automatic", location: "Bengaluru, KA", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85", description: "A beautifully kept 911 with a full service history, sport chrono package and the unmistakable flat-six soundtrack." },
  { brand: "BMW", model: "X5 xDrive30d", year: 2022, price: 9200000, displayPrice: "₹92 Lakh", km: "24,500 km", fuel: "Diesel", transmission: "Automatic", location: "New Delhi, DL", image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1000&q=85", description: "A refined long-distance companion with a panoramic roof, premium interior and complete BMW service records." },
  { brand: "Mercedes-Benz", model: "C-Class C 300", year: 2021, price: 5800000, displayPrice: "₹58 Lakh", km: "21,000 km", fuel: "Petrol", transmission: "Automatic", location: "Pune, MH", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85", description: "A sporty, comfortable C-Class finished with a panoramic sunroof, ambient lighting and verified ownership." },
  { brand: "Jeep", model: "Wrangler Rubicon", year: 2021, price: 6500000, displayPrice: "₹65 Lakh", km: "31,800 km", fuel: "Petrol", transmission: "Automatic", location: "Mumbai, MH", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85", description: "Ready for the trails with its legendary 4x4 system, removable roof panels and a clean, documented history." },
  { brand: "Audi", model: "Q7 Technology", year: 2020, price: 7200000, displayPrice: "₹72 Lakh", km: "36,400 km", fuel: "Diesel", transmission: "Automatic", location: "Hyderabad, TS", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85", description: "Three-row comfort with quattro confidence, a premium sound system and a careful single-owner history." },
  { brand: "Volkswagen", model: "Polo GT TSI", year: 2022, price: 1150000, displayPrice: "₹11.5 Lakh", km: "16,700 km", fuel: "Petrol", transmission: "Automatic", location: "Chennai, TN", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=85", description: "A punchy, city-friendly GT with a responsive DSG gearbox, tidy cabin and low kilometres." }
];

const cafes = [
  { name: "Pitstop Social", location: "Bandra West, Mumbai", hours: "08:00 AM – 11:00 PM", image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85", tag: "COMMUNITY FAVOURITE", description: "A warm neighbourhood hangout with proper espresso, a weekend cars-and-coffee meet and plenty of stories to swap.", details: "Best for: Sunday morning meets · Try: The house cold brew · Parking: Street parking nearby" },
  { name: "The Throttle House", location: "Indiranagar, Bengaluru", hours: "09:00 AM – 10:30 PM", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85", tag: "GARAGE VIBES", description: "Industrial edges, good playlists and a community table made for spirited conversations after a drive.", details: "Best for: Post-drive brunch · Try: The all-day breakfast · Parking: Dedicated two-wheeler and car bays" },
  { name: "Apex Coffee Works", location: "Koregaon Park, Pune", hours: "08:30 AM – 09:30 PM", image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85", tag: "COFFEE FIRST", description: "Small-batch coffee, a relaxed courtyard and a rotating wall of local automotive photography.", details: "Best for: A quiet coffee stop · Try: The single-origin pour-over · Parking: On-site courtyard parking" },
  { name: "Redline Café", location: "Jubilee Hills, Hyderabad", hours: "10:00 AM – 11:30 PM", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85", tag: "LATE NIGHT SPOT", description: "A lively late-night pit stop with comfort food, neon accents and plenty of room for the whole crew.", details: "Best for: Evening drives · Try: The signature smash burger · Parking: Valet available on weekends" }
];

const events = [
  { name: "Midnight Motors Social", category: "CAR MEET", date: "Saturday, 21 November 2026", dateShort: "21", month: "NOV", time: "07:00 PM", location: "Bandra Reclamation, Mumbai", fee: 499, feeLabel: "₹499", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85", description: "An after-dark gathering for good machines, street food and people who never want the drive to end.", dateISO: "2026-11-21" },
  { name: "Highway to the Himalayas", category: "WEEKEND DRIVE", date: "Wednesday, 25 November 2026", dateShort: "25", month: "NOV", time: "06:30 AM", location: "Manali, Himachal Pradesh", fee: 1299, feeLabel: "₹1,299", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85", description: "A guided mountain convoy with scenic stops, a pre-drive briefing and support vehicles along the route.", dateISO: "2026-11-25" },
  { name: "Red Dirt Trail Run", category: "OFF-ROAD ADVENTURE", date: "Sunday, 06 December 2026", dateShort: "06", month: "DEC", time: "07:00 AM", location: "Nandi Hills Trails, Karnataka", fee: 1800, feeLabel: "₹1,800", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85", description: "Get your tyres dirty on a guided beginner-friendly trail. Bring your 4x4 and a sense of adventure.", dateISO: "2026-12-06" },
  { name: "Icons of the Road", category: "AUTOMOTIVE EXHIBITION", date: "Sunday, 13 December 2026", dateShort: "13", month: "DEC", time: "10:00 AM", location: "Jio World Convention Centre, Mumbai", fee: 799, feeLabel: "₹799", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85", description: "A day celebrating design, engineering and the stories behind India's most loved enthusiast cars.", dateISO: "2026-12-13" }
];

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

function renderCars() {
  const listing = document.querySelector("#car-listings");
  if (!listing) return;

  const brandFilter = document.querySelector("#brand-filter");
  const fuelFilter = document.querySelector("#fuel-filter");
  [...new Set(cars.map((car) => car.brand))].sort().forEach((brand) => brandFilter.add(new Option(brand, brand)));
  [...new Set(cars.map((car) => car.fuel))].sort().forEach((fuel) => fuelFilter.add(new Option(fuel, fuel)));

  const search = document.querySelector("#car-search");
  const priceFilter = document.querySelector("#price-filter");
  const count = document.querySelector("#car-count");
  const empty = document.querySelector("#car-empty");

  function updateListings() {
    const query = search.value.trim().toLowerCase();
    const maxPrice = Number(priceFilter.value) || Infinity;
    const filteredCars = cars.filter((car) => {
      const matchesName = `${car.brand} ${car.model}`.toLowerCase().includes(query);
      return matchesName && (!brandFilter.value || car.brand === brandFilter.value)
        && (!fuelFilter.value || car.fuel === fuelFilter.value) && car.price <= maxPrice;
    });

    count.textContent = filteredCars.length;
    empty.hidden = filteredCars.length > 0;
    listing.innerHTML = filteredCars.map((car) => `
      <article class="listing-card" id="car-${escapeHTML(car.model.toLowerCase().replace(/[^a-z0-9]+/g, "-"))}">
        <a class="card-image" href="#car-${escapeHTML(car.model.toLowerCase().replace(/[^a-z0-9]+/g, "-"))}" aria-label="View ${escapeHTML(car.brand)} ${escapeHTML(car.model)}">
          <img src="${escapeHTML(car.image)}" alt="${escapeHTML(car.year + " " + car.brand + " " + car.model)}" loading="lazy">
          <span class="image-tag image-tag-muted">${escapeHTML(car.year)} · VERIFIED LISTING</span>
        </a>
        <div class="card-body">
          <div class="card-topline"><span>${escapeHTML(car.year)} · ${escapeHTML(car.fuel.toUpperCase())} · ${escapeHTML(car.transmission.toUpperCase())}</span><span class="card-arrow">↗</span></div>
          <h3>${escapeHTML(car.brand)} ${escapeHTML(car.model)}</h3>
          <div class="card-meta"><span>${escapeHTML(car.location)}</span><strong>${escapeHTML(car.displayPrice)}</strong></div>
          <div class="listing-specs"><span>${escapeHTML(car.km)}</span><span>${escapeHTML(car.fuel)}</span><span>${escapeHTML(car.transmission)}</span></div>
          <div class="listing-bottom"><strong>${escapeHTML(car.displayPrice)}</strong><div class="listing-actions"><button class="small-button" type="button" data-details-toggle aria-expanded="false">View details</button><button class="small-button primary" type="button" data-booking-type="car" data-booking-name="${escapeHTML(car.brand + " " + car.model)}">Book now</button></div></div>
          <div class="inline-details" hidden>${escapeHTML(car.description)}</div>
        </div>
      </article>`).join("");
  }

  [search, brandFilter, fuelFilter, priceFilter].forEach((control) => control.addEventListener("input", updateListings));
  document.querySelector("#clear-filters").addEventListener("click", () => {
    search.value = "";
    brandFilter.value = "";
    fuelFilter.value = "";
    priceFilter.value = "";
    updateListings();
  });
  updateListings();
}

function renderCafes() {
  const listing = document.querySelector("#cafe-listings");
  if (!listing) return;
  listing.innerHTML = cafes.map((cafe) => `
    <article class="cafe-card">
      <div class="cafe-card-image"><img src="${escapeHTML(cafe.image)}" alt="${escapeHTML(cafe.name)} café" loading="lazy"><span class="image-tag">${escapeHTML(cafe.tag)}</span></div>
      <div class="cafe-card-body">
        <div class="card-topline"><span>${escapeHTML(cafe.location.toUpperCase())}</span><span class="card-arrow">↗</span></div>
        <h2>${escapeHTML(cafe.name)}</h2>
        <p class="cafe-description">${escapeHTML(cafe.description)}</p>
        <div class="cafe-hours"><span>◷</span> ${escapeHTML(cafe.hours)}</div>
        <button class="small-button" type="button" data-details-toggle aria-expanded="false">View details</button>
        <div class="inline-details" hidden>${escapeHTML(cafe.details)}</div>
      </div>
    </article>`).join("");
}

function renderEvents() {
  const listing = document.querySelector("#event-listings");
  if (!listing) return;
  listing.innerHTML = events.map((event) => `
    <article class="event-card">
      <div class="event-card-image"><img src="${escapeHTML(event.image)}" alt="${escapeHTML(event.name)}" loading="lazy"><span class="event-date"><b>${escapeHTML(event.dateShort)}</b> ${escapeHTML(event.month)}</span></div>
      <div class="event-card-copy">
        <p class="eyebrow">${escapeHTML(event.category)} <span>·</span> LS COMMUNITY</p>
        <h2>${escapeHTML(event.name)}</h2>
        <p>${escapeHTML(event.description)}</p>
        <div class="event-facts"><span><b>◷</b> ${escapeHTML(event.date)} · ${escapeHTML(event.time)}</span><span><b>⌖</b> ${escapeHTML(event.location)}</span><span><b>↗</b> ${escapeHTML(event.feeLabel)} entry</span></div>
      </div>
      <button class="button button-red" type="button" data-booking-type="event" data-booking-name="${escapeHTML(event.name)}" data-booking-date="${escapeHTML(event.dateISO)}">Register now <span>↗</span></button>
    </article>`).join("");
}

function initializeBooking() {
  const dialog = document.querySelector(".booking-dialog");
  if (!dialog) return;
  const form = dialog.querySelector(".booking-form");
  const status = form.querySelector(".form-message");
  const dateInput = form.elements.date;
  dateInput.min = new Date().toISOString().slice(0, 10);

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-booking-type]");
    if (!button) return;
    const item = button.dataset.bookingName;
    dialog.querySelector("[data-selected-item]").textContent = item;
    form.elements.item.value = item;
    form.elements.type.value = button.dataset.bookingType;
    dateInput.value = button.dataset.bookingDate || "";
    status.textContent = "";
    status.classList.remove("error");
    dialog.showModal();
  });

  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const booking = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      phone: form.elements.phone.value.trim(),
      item: form.elements.item.value,
      type: form.elements.type.value,
      date: form.elements.date.value,
      createdAt: new Date().toISOString()
    };

    try {
      const saved = JSON.parse(localStorage.getItem("lsCarMeetBookings") || "[]");
      if (!Array.isArray(saved)) throw new Error("Saved booking data is not a list.");
      saved.push(booking);
      localStorage.setItem("lsCarMeetBookings", JSON.stringify(saved));
      status.textContent = `You're all set, ${booking.name}! Your ${booking.type} booking for ${booking.item} is confirmed.`;
      status.classList.remove("error");
      form.reset();
      dateInput.min = new Date().toISOString().slice(0, 10);
    } catch (error) {
      console.error("Could not save your booking.", error);
      status.textContent = "We couldn't save your booking in this browser. Please check storage settings and try again.";
      status.classList.add("error");
    }
  });
}

function initializeContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const status = form.querySelector(".form-message");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const message = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      topic: form.elements.topic.value,
      message: form.elements.message.value.trim(),
      createdAt: new Date().toISOString()
    };
    try {
      const saved = JSON.parse(localStorage.getItem("lsCarMeetMessages") || "[]");
      if (!Array.isArray(saved)) throw new Error("Saved contact data is not a list.");
      saved.push(message);
      localStorage.setItem("lsCarMeetMessages", JSON.stringify(saved));
      status.textContent = "Thanks! Your message is saved in this demo. Our team will be in touch.";
      status.classList.remove("error");
      form.reset();
    } catch (error) {
      console.error("Could not save your message.", error);
      status.textContent = "We couldn't save your message in this browser. Please check storage settings and try again.";
      status.classList.add("error");
    }
  });
}

function initializePage() {
  renderCars();
  renderCafes();
  renderEvents();
  initializeBooking();
  initializeContactForm();

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-details-toggle]");
    if (!button) return;
    const details = button.closest("article").querySelector(".inline-details");
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.textContent = expanded ? "View details" : "Hide details";
    details.hidden = expanded;
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("open", !expanded);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("open");
    }
  });
}

document.addEventListener("DOMContentLoaded", initializePage);
